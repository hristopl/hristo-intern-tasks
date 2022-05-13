import { readdir, readFile } from 'fs/promises'

const fileLines = text => text.split(/\r\n|\r|\n/).length

const getFiles = async argument => {
  const { path, exclude, fileTypes } = argument

  const files = await readdir(path)
  return files
    .filter(file => !exclude.includes(file))
    .filter(file => fileTypes.some((ex) => file.endsWith(ex)))
}

const getFilesLength = file => {
  const filePromises = file.map(filesName => readFile(filesName))
  return Promise.all(filePromises)
    .then(files =>
      files
        .map(buf => buf.toString('utf8'))
        .map(fileLines)
        .forEach((len, index) => console.log(len, file[index]))
    ).catch(err => console.log(err))
}
// const getFileLengths = async files => {

// }

export {
  getFiles,
  getFilesLength
}
