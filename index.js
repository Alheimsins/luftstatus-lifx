const axios = require('axios')
const config = require('./config')

const getAreaColor = exports.getAreaColor = async (url, area) => {
  try {
    const { data } = await axios(url)
    const { color } = data.areas.find(item => item.area.toLowerCase() === area.toLowerCase())
    return color
  } catch (error) {
    console.log(error)
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
    console.log(`Light switched to ${color}`)
  } catch (error) {
    console.log(error)
  }
}

const cycle = exports.cycle = async (options = {}) => {
  const opts = Object.assign({}, config, options)

  try {
    const color = await getAreaColor(opts.serviceUrl, opts.area)
    await setColor(opts.url, opts.token, color)
  } catch (error) {
    console.log(error)
  }
}

cycle()
setInterval(() => cycle(), 1000 * 60 * config.pollIntervalMinutes)
