# THVC Provider Directory Frontend Challenge 

To install dependencies you can run:

### `npm install`

To start the project in development mode you can run:

### `npm start`

To run the tests, run 

### `npm run test`

## Notes

### Screens

This app implements the Provider List and Provider Profile screens from the spec. 
In addition, there is an added landing page. On the landing page, users can select their preferred language and region. The "Get started" button takes the user to the Provider List, showing only providers that speak their language in their selected province. Navigating between screens, a loading-icon pops up to let users know the data is loading.  

### Localization

The app can run in both English and French, toggled via the landing page. All of the string are localized with the exception of the API-provided content. As a future improvement, the API could be amended to serve the provider profiles in several languages. 

Localization is managed by the react-localization package. 

### Accessibility

