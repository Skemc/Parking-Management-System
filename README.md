[![Build Status](https://travis-ci.com/niyodusengaclement/Parking-Management-System.svg?branch=develop)](https://travis-ci.com/niyodusengaclement/Parking-Management-System) [![Coverage Status](https://coveralls.io/repos/github/Skemc/Parking-Management-System/badge.svg?branch=develop)](https://coveralls.io/github/Skemc/Parking-Management-System?branch=develop)
# Parking-Management-System
Rwanda  is highly developing in all sectors. Infrastructural development is rapidly improving which favors various companies to operate in the new and old buildings, which will have to provide parking space. Parking Management System will ensure access to free parking lots in the buildings across the city by specifying your exact destination. This will include the specific time duration to be spent in the reserved parking space rather than circulating for hours to find a free space to park in.

## Technologies Used

[node]: (https://nodejs.org)

- [Node.js](node)
- [Express.js](https://expressjs.com).
- [ESLint](https://eslint.org/).
- [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb).

## Testing Tools

- [Mocha](https://mochajs.org/).
- [Chai](https://chaijs.com).

## Database

- [PostgreSQL](https://www.postgresql.org/).

## Installations

#### Getting started

- You need to have Node and NPM installed on your computer.
- Installing [Node](node) automatically comes with npm.

To run project on Local machine
`git clone https://github.com/shaazk/Parking-Management-System.git`

#### Setup

- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm install
  ```
- Start your node server
  > run the command below
  ```shell
  $ npm start
  ```
## API ENDPOINTS

### *BASEURL : `/api/`*

### AUTHENTICATION END POINTS  : `/auth/`

HTTP METHOD | END POINT | AUTHENTICATED | DESCRIPTION
----------- |-----------|-------------- |------
POST        | `/signin` |  True         |Login admin 



### End POINTS

HTTP METHOD|    END POINT            | DESCRIPTION
-----------|-------------------------|-----------------
GET        | `/bookings`             | Get all bookings.
POST       | `/bookings`             | Post new booking.
GET        | `/bookings/:id`         | Get booking by ID.
GET        | `/parkings`             | Get all parkings.
POST       | `/parkings`             | Post new parking.
GET        | `/parkings/:id`         | Get parking by ID.


License `ISC`
## Author
Fantastic7
