import { readdir, readFile } from 'fs/promises'

const fileLines = text => text.split(/\r\n|\r|\n/).length

const getFiles = async argument => {
  const { path, exclude, fileTypes } = argument

  const files = await readdir(path)
  return files
    .filter(file => !exclude.includes(file))
    .filter(file => fileTypes.some((ex) => file.endsWith(ex)))
}

const getFilesLength = async files => {
  const filePromises = files.map(filesName => readFile(filesName))
  const fileTexts = await Promise.all(filePromises)
  const lengths = fileTexts
    .map(buf => buf.toString('utf8'))
    .map(fileLines)

  return files.reduce((result, curr, index) => ({ ...result, [curr]: lengths[index] }), {})
}

const displayFilesAndLengths = lengths => {
  return Object.entries(lengths).forEach(([key, len]) => console.log(`${key} has ${len} lines of code.`))
}

export {
  getFiles,
  getFilesLength,
  displayFilesAndLengths
}
