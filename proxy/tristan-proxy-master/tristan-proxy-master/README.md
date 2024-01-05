# Project Name

> Hostile World

## Related Projects

  - https://github.com/hrr47-karev/Reviews-Service
  - https://github.com/hrr47-karev/description-map-rules-service
  - https://github.com/hrr47-karev/AvailabilityComponent
  - https://github.com/hrr47-karev/imageCarousel
## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> PLEASE NOTE:  this proxy server is set up so that it should be able to run locally and in production. One thing to note is that when it was used in production, I made manual routing of all API calls in my Nginx sites-available file to all the separate services. If you encounter any issues connecting the services when live on ec2, you may need to do the same using Nginx. 

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

