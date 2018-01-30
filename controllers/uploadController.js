const restify = require('restify')
const mkdirp = require('mkdirp')
const fs = require('fs')
const uuid = require('uuid')

// const imageOptions = {
// imageFilter(req, file, next) {
//     const isImage = file.type.startsWith('image/')
//     if (isImage) {
//       next (null, true)
//     } else {
//       next({ msg: `This filetype is not allowed!`}, false)
//     }
//   }
// }

exports.upload = async (req, res) => {
  const file = req.files.image
  const filename = file.name.split('.')
  const extension = filename[filename.length - 1]
  const isImage = file.type.startsWith('image/')
    if (isImage) {
      try {
        let upload =  await (function (err) {
          let readImage = fs.createReadStream(file.path)
          if (err) {
            console.log(err)
          }
          let new_path = `./uploads/${uuid.v4()}.${extension}`
          mkdirp('./uploads')
          let outImage = fs.createWriteStream(new_path)
          readImage.pipe(outImage)
        })()
      } catch(err) {
        throw err
      }
    } else {
      next({ msg: `This filetype is not allowed!`}, false)
    }
}
