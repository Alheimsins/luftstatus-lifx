[![Build Status](https://travis-ci.com/Alheimsins/luftstatus-lifx.svg?branch=master)](https://travis-ci.com/Alheimsins/luftstatus-lifx)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# luftstatus-lifx

Change the colour of your Lifx lightbulb according to air pollution status from [luftstatus.no](https://luftstatus.no/)

# Setup

Get a token from https://cloud.lifx.com/settings, then add the value to `LIGTS_API_TOKEN` [config.js](config.js).

## Find the Area

Pick your area from [this list](https://s3.eu-central-1.amazonaws.com/luftstatus/areas.json), then add the value to `AREA` in [config.js](config.js)

# Start

```
$ npm start
```

As long as it runs the script will check the status every `POLL_INTERVAL_MINUTES` (defaults to 60)

## Use with cli

```bash
npx luftstatus-lifx -a Grenland -t <LIFX-TOKEN> -p 1
```

| Option              | Description               |
| ------------------- | ------------------------- |
| -a, --area          | area to monitor (required)|
| -t, --token         | lifx token (required)     |
| -l, --lights-api    | Lifx api url              |
| -p, --poll-interval-minutes | Poll interval     |
| -s, --service-url   | Pollution data url        |
| -v, --version       | Output the version number |
| -h, --help          | Display help              |


## License

[MIT](LICENSE)

![Robohash image of luftstatus-lifx](https://robots.kebabstudios.party/luftstatus-lifx.png "Robohash image of luftstatus-lifx")

