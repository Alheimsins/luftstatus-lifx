const axios = require('axios')
const config = require('./config')

const convertHexToName = hexColor => {
  switch (hexColor) {
    case '6ee86e': return 'green'
    case 'ff9900': return 'orange'
    case 'ff0000': return 'red'
    case '990099': return 'purple'
    default: return 'white'
  }
}

const getAreaColor = async (url, area) => {
  try {
    const { data } = await axios(url)
    const { color } = data.areas.find(item => item.area.toLowerCase() === area.toLowerCase())
    return convertHexToName(color)
  } catch (error) {
    console.log(error)
  }
}

const setColor = async (url, token, color) => {
  const opts = {
    method: 'put',
    url,
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: `color=${color}`
  }
  try {
    await axios(opts)
    console.log(`Light switched to ${JSON.stringify(color)}`)
  } catch (error) {
    console.log(error)
  }
}

const cycle = async () => {
  try {
    const color = await getAreaColor(config.SERVICE_URL, config.AREA)
    await setColor(config.LIGHTS_API, config.LIGTS_API_TOKEN, color)
  } catch (error) {
    console.log(error)
  }
}

setInterval(() => cycle(), 1000 * 60 * config.POLL_INTERVAL_MINUTES)
