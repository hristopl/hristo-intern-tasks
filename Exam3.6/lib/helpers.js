import { readdir } from 'fs/promises'

const readingDirectory = async argument => {
  const { path, exclude, fileTypes } = argument

  const files = await readdir(path)
  return files
    .filter(file => !exclude.includes(file))
    .filter(file => fileTypes.some((ex) => file.endsWith(ex)))
}

const getFileLengths = async files => {
const result = 0;
}
export {
  readingDirectory,
  getFilesLengths
}