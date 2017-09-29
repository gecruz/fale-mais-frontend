[![Standard - JavaScript StyleGuide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# Getting started

To get the Angular app running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm install -g protractor` Install Protractor ([instructions](http://www.protractortest.org/#/tutorial))
- `webdriver-manager update` to update Selenium Server instance
- `webdriver-manager start` to start up Selenium Server
- `npm start` to start the app
- `npm test` to test the app

### Deploying

* `npm install -g surge`
* `npm run build`
* `mv dist/index.html dist/200.html`
* `surge dist your-project-name.surge.sh`

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

