[![Build Status](https://travis-ci.com/Alheimsins/luftstatus-lifx.svg?branch=master)](https://travis-ci.com/Alheimsins/luftstatus-lifx)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# luftstatus-lifx

Change the colour of your Lifx lightbulb according to air pollution status from [luftstatus.no](https://luftstatus.no/)

# Setup

Get a token from https://cloud.lifx.com/settings, then add the value to `url` [config.js](config.js).

Pick your area from [this list](https://s3.eu-central-1.amazonaws.com/luftstatus/areas.json), then add the value to `area` in [config.js](config.js)

# Start

```
$ npm start
```

As long as it runs the script will check the status every `pollIntervalMinutes` (defaults to 60)

## Use with cli

Run once

```bash
npx luftstatus-lifx -a grenland -t <LIFX-TOKEN>
```

Run every 1 minute

```bash
npx luftstatus-lifx -a bergen -t <LIFX-TOKEN> -i -p 1
```

| Option              | Description               |
| ------------------- | ------------------------- |
| -a, --area          | area to monitor (required)|
| -t, --token         | lifx token (required)     |
| -u, --url           | Lifx api url              |
| -i, --interval      | Turn on poll interval     |
| -p, --poll-interval-minutes | Poll interval     |
| -v, --version       | Output the version number |
| -h, --help          | Display help              |


# Preview

![](https://media.giphy.com/media/2dcLhjkQEdOV0ZL691/giphy.gif)

## License

[MIT](LICENSE)

![Robohash image of luftstatus-lifx](https://robots.kebabstudios.party/luftstatus-lifx.png "Robohash image of luftstatus-lifx")

