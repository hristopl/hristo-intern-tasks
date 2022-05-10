const fs = require('fs')
const { readdir } = require('fs/promises')
const { readFile } = require('fs/promises')

const initArguments = { path: process.cwd(), fileTypes: ['js'], exclude: ['node_modules'] }
const [, , ...options] = process.argv

const args = options.reduce((result, curr) => {
  const [argName, val = ''] = curr.split('=')
  const valList = val.split(',')
  const key = argName.substring(2)

  return { ...result, [key]: valList }
}, initArguments)

if ('help' in args) {
  console.log(' Options:\n')
  console.log('--help  \t\tPrint command line options (this screen)')
  console.log('--fileTypes  \t\tString, comma separated file type extensions. Default: .js')
  console.log('--exclude \t\tString, comma separated file and folder names that must be excluded. Default: node_modules')
  console.log('--path \t\t\tString, path to a folder. Default: current location')

  process.exit()
}

const { path, exclude, fileTypes } = args

const fileLines = text => text.split(/\r\n|\r|\n/).length

readdir(path)
  .then(files => {
    const filteredFiles = files
      .filter((file) => !exclude.includes(file))
      .filter((file) => fileTypes.some((ex) => file.endsWith(ex)))

    const filePromises = filteredFiles.map(filesName => readFile(filesName))
    Promise.all(filePromises)
      .then(files =>
        files
          .map(buf => buf.toString('utf8'))
          .map(fileLines)
          .forEach((len, index) => console.log(len, filteredFiles[index]))
      )
  })
  .catch(err => {
    console.log(err)
  })
