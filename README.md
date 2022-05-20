
# E-Store Backend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

 ## Table of Contents

- [Description](#overall-description)
- [Installation](#installation-instructions)
- [Instructions/How To Use](#instructions/how-to-use)
- [License](#license)
- [Contribution](#contribution-guidelines)
- [Tests](#application-tests)
- [Contact Information](#contact-information)



 ## Overall Description 

The overall idea of this project it to play around with sequelize to interface with the MySQL database instead of sending SQL Queries directly with express routes. The overall structure of the project follows MVC standards to allow easy integration with other projects or to allow this to be built upon as needed. There is a JSON file in the misc folder with pre-configured GET, POST, PUT, and DELETE requests for testing with insomnia.

 ## Installation Instructions

npm install, 

set up the SQL database and seed the tables,

run server.js

there are dev dependencies that do not auto-install but they are listed in the package.json if you would like to use them.

 ## Instructions/How To Use

there is a video in the misc folder showing the insomnia tests, how they routes work, what types of responses to expect, what requests can be sent, ect as well as another one that shows how to setup the SQL database. 

[insomnia route test video](./misc/insomnia-tests.mp4)

[server setup](./misc/server-setup.mp4)

 ## Contribution Guidelines
 If you would like to contribute to the project, feel free to do so. Some things to keep in mind:

 1. Please use structured/formatted commit messages that adhere to the following guideline: git commit -m "{the date of the commit}" -m "{detailed description of the changes}" -m "{who is making the commit}"
 for now this is just a personal preference to keep the repository nice and tidy, eventually these guidelines will be updated to reflect whatever version nomenclature i decide to use. 

 2. Do Not open a pull request on the main branch, it will be denied. period. Start a new feature branch or open a pull request to develop so your contributions can be reviewed first. 

 3. Comment your code, since I didn't write your code i might not know right away what it does. Please keep your code clean, tidy, and well commented to make integration of features more seamless. 

 4. if you'd like to be a regular contributor reach out and ask to be a collaborator, 

 5. once this application leaves the beta release environment these rules and guidelines may be subject to change.

 ## Application Tests

Presently there are no active tests with something like JEST, however, there is an insomnia JSON document located in the misc folder that has preconfigured requests that will test the functionality of all the routes currently written. 

## license
  This project is licensed under the MIT license.
  For more information about this license and what it entails visit: https://opensource.org/licenses/MIT

  note that the core of this project will remain open source, however once the beta version is complete and deployed the live version of the application may be protected under more strict licensing and may not be open source for security purposes. If you would like to build your own version of this application or host all your data locally, the base stable version of this software will remain open source and free to use as a template for any future projects you might like to build off of this platform.  

 ## Contact Information
I hope you enjoy the application, if you have any questions, comments, concerns, feedback, ect, 
please open a new issue or feel free to reach out directly, my email for this project is vincent@vtportfolio.net
Don't forget to check out some of my other projects on github while your here: https://github.com/cobalt88