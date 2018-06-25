const axios = require('axios')
const chalk = require('chalk')
const config = require('./config')

const logger = exports.logger = (message, state) => state ? console.log(chalk.inverse.bold(' Ɵ ') + ' ' + chalk.red(message)) : console.log(chalk.inverse.bold(' Ɵ ') + ' ' + message)

const getAreaColor = exports.getAreaColor = async (url, area) => {
  try {
    const { data } = await axios(url)
    const { color } = data.areas.find(item => item.area.toLowerCase() === area.toLowerCase())
    return color
  } catch (error) {
    logger(error.message, 'error')
  }
}

const setColor = exports.setColor = async (url, token, color) => {
  const opts = {
    method: 'put',
    url,
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: `color=#${color}`
  }
  try {
    await axios(opts)
    logger(`Light switched to ${color}`)
  } catch (error) {
    logger(error.message, 'error')
  }
}

const cycle = exports.cycle = async (options = {}) => {
  const opts = Object.assign({}, config, options)

  try {
    const color = await getAreaColor(opts.serviceUrl, opts.area)
    await setColor(opts.url, opts.token, color)
  } catch (error) {
    logger(error.message, 'error')
  }
}

if (require.main === module) {
  cycle()
  setInterval(() => cycle(), 1000 * 60 * config.pollIntervalMinutes)
}
