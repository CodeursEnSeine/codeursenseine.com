# Codeurs en Seine Website

## 🚀 Quick start

1.  **Install dependencies**

    Navigate into your new site’s directory and start it up (require Node.js and npm)

    ```shell
    npm install
    ```

1.  **Copy .env.example file**

    Copy the file and update the environment variables that need to be updated

    ```shell
    cp .env.example .env
    ```

1.  **Start developing.**

    ```shell
    npm run dev
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:3000`!

## Create a new year

### Archive past year

#### Redirection

Add year-1 redirection in `public-archive/netlify.toml`.

#### Build Archive

Run the following commands with the correct year:

```shell
NEXT_PUBLIC_ARCHIVE_YEAR=2024 npm run build:archive
npm run start:archive # Serve the archive, and go to the archive-2024 folder
```

#### Tag

Tag the latest commit.

`git tag -a archive-XXXX -m "Archive XXXX"`

### Initialize the new year website

#### Clean the content

Change the `currentYear` in `src/constants/site.ts`.
Change the `src/app/2024` (year) folder name to the new year and edit the content of the pages.

#### Create Netlify redirect

Create past year redirection in `./netlify.toml`.

#### Add the past year in the Nav

Add the past year in the `src/constants/site.ts` file.

## Other tooling

### Slugifying files names

`mdx` files name are used in the urls and thus matters for SEO. This means those files names should match the content and have a format compatible with URLs.

For this reason the `_tools\slugify.ts` script will read the file content and create a filename compatible with URLs, and matching content.

From the project root you can run : 

```bash
ts-node _tools/slugify.ts
```
This will notify the necessary changes.

If you want to apply the changes please run with `--force` option.

### Update MDX types

Due to library contentlayer not being maintained, we switched to its fork contentlayer2. 

This also means that some checks are made against the files content and if missing or erroneous, some types have to be changed. To do so we have the `_tools\update_mdx_types.ts` script.

From the project root you can run : 

```bash
ts-node _tools\update_mdx_types.ts
```
This will make the necessary changes.

(Note: default dry run + force flag to save could be added like on slugify script).
