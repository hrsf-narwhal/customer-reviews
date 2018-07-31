# Itsy Reviews component

Reviews component of the Itsy's product page.

> Project description

## Related Projects

  - https://github.com/hrsf-narwhal/customer-reviews
  - https://github.com/hrsf-narwhal/photo-gallery
  - https://github.com/hrsf-narwhal/product-info-purchase


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
npm run react-dev
```
### Setup

 - Run MySQL

 - Seed the database by running the following from the repo:

```sh
mysql -u username -p password < schema.sql

### Generate Dummy Data

cd into /database/

```sh
node data.js

```
### Run Server

From within the root directory:

```sh
npm run start
open localhost:3002/listing/1001

