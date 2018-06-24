[![Build Status](https://travis-ci.com/Alheimsins/luftstatus-lifx.svg?branch=master)](https://travis-ci.com/Alheimsins/luftstatus-lifx)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# luftstatus-lifx

Change the colour of your Lifx lightbulb according to air pollution status from [luftstatus.no](https://luftstatus.no/)

# Setup

Get a token from https://cloud.lifx.com/settings, then add the value to `LIGTS_API_TOKEN` [config.js](config.js).

## Find the Area

Pick your area from [this list](https://s3.eu-central-1.amazonaws.com/luftstatus/areas.json), then add the value to `AREA` in [config.json](config.json)

# Start

```
$ npm start
```

As long as it runs the script will check the status every `POLL_INTERVAL_MINUTES` (defaults to 60)

## License

[MIT](LICENSE)

![Robohash image of luftstatus-lifx](https://robots.kebabstudios.party/luftstatus-lifx.png "Robohash image of luftstatus-lifx")

