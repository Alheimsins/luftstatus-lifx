#!/usr/bin/env node

const args = require('args')
const { cycle, logger } = require('../index')

args
  .option('token', 'lifx token (required)')
  .option('area', 'area to monitor (required)')
  .option('url', 'Lifx api url', 'https://api.lifx.com/v1/lights/all/state')
  .option('service-url', 'Pollution data url', 'https://s3.eu-central-1.amazonaws.com/luftstatus/areas.json')
  .option('poll-interval-minutes', 'Poll interval', 60)
  .option('interval', 'Turn on interval', false)

const flags = args.parse(process.argv)

if (!flags.token || !flags.area) {
  args.showHelp()
}

if (flags.interval) {
  logger(`Updating every ${flags.pollIntervalMinutes} min`)
  cycle(flags)
  setInterval(() => cycle(flags), 1000 * 60 * flags.pollIntervalMinutes)
} else {
  cycle(flags)
    .then(() => process.exit(0))
    .catch(error => console.log(error))
}
