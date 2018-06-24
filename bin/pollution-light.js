#!/usr/bin/env node

const args = require('args')
const { getAreaColor, setColor } = require('../index')

args
  .option('token', 'lifx token (required)')
  .option('area', 'area to monitor (required)', 'Grenland')
  .option('lights-api', 'Lifx api url', 'https://api.lifx.com/v1/lights/all/state')
  .option('service-url', 'Pollution data url', 'https://s3.eu-central-1.amazonaws.com/luftstatus/areas.json')
  .option('poll-interval-minutes', 'Poll interval', 60)

const flags = args.parse(process.argv)

if (!flags.token || !flags.area) {
  args.showHelp()
}

const cycle = async () => {
  try {
    const color = await getAreaColor(flags.serviceUrl, flags.area)
    await setColor(flags.lightsApi, flags.token, color)
  } catch (error) {
    console.log(error)
  }
}

setInterval(() => cycle(), 1000 * 60 * flags.pollIntervalMinutes)
