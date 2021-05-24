const commandeProgram = require('commander')
const pkg = require('../package.json')
const { defaultWatchEvent } = require('./constants')

/**
 * This function passes the different configuration options to the Commander program and return the program itself.
 * @returns Commander program
 */
function setupProgram() {
  commandeProgram.version(pkg.version)
  commandeProgram
    .option('-r, --root [dir]', 'root directory of your nextjs app')
    .option(
      '-s, --script [path]',
      'path to the script you want to trigger on a watcher event',
      false
    )
    .option(
      '-e, --event [name]',
      `name of event to watch, defaults to ${defaultWatchEvent}`,
      defaultWatchEvent
    )
    .option(
      '-p, --polling [name]',
      `use polling for the watcher, defaults to false`,
      false
    )
    .parse(process.argv)

  return commandeProgram
}

module.exports = { setupProgram }