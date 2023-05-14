const fs = require('fs')
const path = require('path')
const _ = require('lodash')

const makeList = () => {
  const imagesDir = path.join(__dirname, '../..', 'public', 'images')
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.svg', '.gif']

  fs.readdir(imagesDir, (err, files) => {
    if (err) console.error(err)

    const imageFiles = _.filter(files, (file) =>
      imageExtensions.includes(path.extname(file).toLowerCase())
    )

    const fileContent = `export const imagesList = ${JSON.stringify(
      imageFiles
    )};`

    fs.writeFile(
      path.join(__dirname, '../../imageList.js'),
      fileContent,
      (err) => {
        if (err) console.error(err)
        console.log('Image list created successfully!')
      }
    )
  })
}

makeList()
