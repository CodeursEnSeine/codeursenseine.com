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

# Iterate over all .mdx files in the specified directory, excluding those starting with "pause" or named "pleniere.mdx"
for file in ../content/talks/*.mdx; do
  # Skip files that start with "pause" or are named "pleniere.mdx"
  filename=$(basename "$file")
  if [[ "$filename" == pause* || "$filename" == "pleniere.mdx" ]]; then
    continue
  fi

  # Extract title
  title=$(grep -m 1 "^title: " "$file" | sed 's/title: //')

  # Extract speakers list (lines indented under "speakers:")
  speakers=$(awk '/^speakers:/ {flag=1;next} /^[^[:space:]]/ {flag=0} flag {print}' "$file" | tr '\n' '-' | sed 's/-$//')

  # Slugify the title and speakers
  slug_title=$(slugify "$title")
  slug_speakers=$(slugify "$speakers")

  # Concatenate the slugified values
  new_filename="${slug_title}-${slug_speakers}.mdx"
  
  # Dry run mode (default) or rename (if --force is provided)
  if [ "$FORCE" = true ]; then
    mv "$file" "../content/talks/$new_filename"
    echo "Renamed: $file -> $new_filename"
  else
    echo "Dry run: $file -> $new_filename"
  fi
done
