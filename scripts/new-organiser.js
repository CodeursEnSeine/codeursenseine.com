const fs = require("fs")

const prompt = require("prompt")
const slugify = require("slugify")

const ERROR_CODE = {
  ORGANISER_ALREADY_EXISTS: 1,
}

/**
 * On error, use this function to terminate the program
 * @param {Error} err The error to log.
 */
function onErr(err) {
  console.log(err)
  return 1
}

async function main() {
  prompt.start()

  prompt.get(["firstName", "lastName"], function (
    err,
    { firstName, lastName }
  ) {
    if (err) {
      return onErr(err)
    }

    const slug = slugify(`${firstName} ${lastName}`, {
      lower: true,
    })

    const dir = `./content/organisers/${slug}`
    const file = `${dir}/${slug}.mdx`
    const logo = `${dir}/${slug}.png`
    const data = new Uint8Array(
      Buffer.from(`---
name: ${firstName} ${lastName}
image: ${slug}.png
---
`)
    )

    if (fs.existsSync(dir)) {
      console.log(`Folder ${dir} already exists`)
      process.exit(ERROR_CODE.ORGANISER_ALREADY_EXISTS)
    }

    // Create folder
    console.log(`Creating folder ${dir}`)
    fs.mkdirSync(dir)

    // Create MDX, the file that contains data
    console.log(`Creating file ${file}`)
    fs.writeFileSync(file, data)

    // Copying default image
    console.log(
      `Copying default logo ${logo}, please update with the user avatar`
    )
    fs.copyFileSync("./templates/default.png", logo)
  })
}

main()
