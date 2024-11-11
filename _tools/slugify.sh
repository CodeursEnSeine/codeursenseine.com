#!/bin/bash

# Function to slugify a string, including handling accented French characters
slugify() {
  echo "$1" | tr '[:upper:]' '[:lower:]' | \
  sed 's/[éèêë]/e/g' | \
  sed 's/[àâä]/a/g' | \
  sed 's/[ç]/c/g' | \
  sed 's/[îï]/i/g' | \
  sed 's/[ôö]/o/g' | \
  sed 's/[ùûü]/u/g' | \
  sed 's/[ÿ]/y/g' | \
  sed 's/[^a-z0-9]/-/g' | \
  sed 's/--*/-/g' | \
  sed 's/^-//' | \
  sed 's/-$//'
}

# Check for the --force flag
FORCE=false
if [ "$1" == "--force" ]; then
  FORCE=true
fi

# Collect all .mdx files and their required metadata
declare -A files_data
while IFS= read -r -d '' file; do
  # Skip files that start with "pause" or are named "pleniere.mdx"
  filename=$(basename "$file")
  if [[ "$filename" == pause* || "$filename" == "pleniere.mdx" ]]; then
    continue
  fi

  # Extract metadata
  kind=$(grep -m 1 "^kind: " "$file" | sed 's/kind: //')
  room=$(grep -m 1 "^room: " "$file" | sed 's/room: //')
  title=$(grep -m 1 "^title: " "$file" | sed 's/title: //')
  start=$(grep -m 1 "^start: " "$file" | sed 's/start: //')
  speakers=$(awk '/^speakers:/ {flag=1;next} /^[^[:space:]]/ {flag=0} flag {print}' "$file" | tr '\n' '-' | sed 's/-$//')

  # Slugify metadata
  slug_kind=$(slugify "$kind")
  slug_room=$(slugify "$room")
  slug_title=$(slugify "$title")
  slug_speakers=$(slugify "$speakers")

  # Store metadata and original file path
  files_data["$file"]="$slug_kind|$slug_room|$slug_title|$slug_speakers|$start"
done < <(find ../content/talks -name "*.mdx" -print0)

# Group and sort files by kind and room, then by start time
declare -A grouped_files
for file in "${!files_data[@]}"; do
  IFS='|' read -r slug_kind slug_room slug_title slug_speakers start <<< "${files_data[$file]}"
  group_key="${slug_kind}-${slug_room}"
  grouped_files["$group_key"]+="$start|$slug_title|$slug_speakers|$file"$'\n'
done

for group in "${!grouped_files[@]}"; do
  counter=1
  # Sort by start time
  IFS=$'\n' sorted_files=($(echo -e "${grouped_files[$group]}" | sort))

  for file_data in "${sorted_files[@]}"; do
    IFS='|' read -r start slug_title slug_speakers file <<< "$file_data"
    new_filename="${group}-${counter}-${slug_title}-${slug_speakers}.mdx"

    if [ "$FORCE" = true ]; then
      mv "$file" "../content/talks/$new_filename"
      echo "Renamed: $(basename "$file") -> $new_filename"
    else
      echo "Dry run: $(basename "$file") -> $new_filename"
    fi
    counter=$((counter + 1))
  done
done
