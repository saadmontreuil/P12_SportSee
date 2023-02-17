# Project 12 - SportSee

## Description

This repository contains a SportSee dashboard project that fetches user data from either a mock data source or a REST API endpoint, and build a user dashboard. This project is built using React and JavaScript.

## Features

- Fetching user data from an API provided by Openclassrooms.
- Displaying user data on the dashboard, including:
- - the user's main data.
- - user's activity data.
- - user's average sessions data.
- - user's performance data.
- - The possibility to display the user data either in real data, or in mock data.

## Dependencies

This project has the following dependencies:

- react (^18.2.0)
- prop-types (^15.8.1)
- react-dom (^18.2.0)
- recharts (^2.3.2)
- axios (^1.2.5)
- jsdoc (^4.0.0)
- react-router-dom (^6.7.0)
- react-scripts (5.0.1)
- iconify/react (^4.1.0)
- eslint (^8.33.0)
- HTML
- CSS
- JS
- Visual Studio Code

## Installation

### 1. Install and Launch the Back-End

- Clone the API repository from https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard
- Follow the README procedure `Project (without Docker)`
- Launch the API with `npm start` or `yarn start`
- The API is available at http://localhost:3000

#### Query Examples

- Get performance data of user with ID 12:  http://localhost:3000/user/12/performance 
- Get activity data of user with ID 18 : http://localhost:3000/user/18/activity


### 2. Install and Launch the Front-End

- Clone the project by using the following command: `git clone https://github.com/saadmontreuil/P12_SportSee.git`
- Install the project's dependencies by using the following command:`npm install` or `yarn install`
- Run the Front-End with `npm start` or `yarn start`
- Two users are available at the following URLs:
  - http://localhost:3001/profil/12
  - http://localhost:3001/profil/18
- Change the value of isMockData to false to use the API: isMockData = false;

## Documentation

- The documentation is available in the `docs` folder.
- To generate the documentation, use the following command: `npm run doc`
- The documentation is generated using JSDoc.