const restify = require('restify')
const mkdirp = require('mkdirp')
const fs = require('fs')

exports.upload = (req, res) => {
  const file = req.files.image
  let filename = file.name
  let upload =  (function (err, file) {
    const f = req.files.image
    let readImage = fs.createReadStream(f.path)
    if (err) {
      console.log(err)
    } else {
      console.log('done')
    }
    let new_path = `./uploads/${new Date().getTime()}`
    mkdirp('./uploads')
    let outImage = fs.createWriteStream(new_path)
    readImage.pipe(outImage)
  })()
}

exports.validateFile = async (req, res) => {

}