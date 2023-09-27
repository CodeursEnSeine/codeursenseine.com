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
NEXT_PUBLIC_ARCHIVE_YEAR=2023 npm run build:archive
npm run start:archive # Serve the archive, and go to the archive-2023 folder
```

#### Tag

Tag the latest commit.

`git tag -a archive-XXXX -m "Archive XXXX"`

### Initialize the new year website

#### Clean the content

Change the `currentYear` in `src/constants/site.ts`.
Change the `src/app/2023` (year) folder name to the new year and edit the content of the pages.

#### Create Netlify redirect

Create past year redirection in `./netlify.toml`.

#### Add the past year in the Nav

Add the past year in the `src/constants/site.ts` file.
