const restify = require('restify')
const mkdirp = require('mkdirp')
const fs = require('fs')

exports.upload = (req, res) => {
  const file = req.files.image
  const filename = file.name.split('.')
  const extension = filename[filename.length - 1]
  let upload =  (function (err) {
    let readImage = fs.createReadStream(file.path)
    if (err) {
      console.log(err)
    }
    let new_path = `./uploads/${new Date().getTime()}.${extension}`
    mkdirp('./uploads')
    let outImage = fs.createWriteStream(new_path)
    readImage.pipe(outImage)
  })()
}

exports.validateFile = async (req, res) => {

}