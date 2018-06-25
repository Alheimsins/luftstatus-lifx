module.exports = {
  url: 'https://api.lifx.com/v1/lights/all/state', // See https://api.developer.lifx.com/v1/docs/selectors to control selected lights
  token: 'your-token',
  serviceUrl: 'https://s3.eu-central-1.amazonaws.com/luftstatus/areas.json',
  area: 'Grenland',
  pollIntervalMinutes: 60
}
