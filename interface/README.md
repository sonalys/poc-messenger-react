# Hipster Messenger

The purpose of this front-end is to interact with the messenger api, login and trade messages with other users.

## Project infraestructure

This project follows the [atomic design pattern](https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97)
TLDR:

- `/public` is reserved for static files
- `/src` is utilized for client-rendering scripts
  - `/app` is the entrypoint for authenticated users into the app
  - `/components` follows the atomic pattern
    - `atoms`: basic structures that are utilized as building blocks, they are stateless.
    - `molecules`: combinations of atoms to create more complex building blocks
    - `organisms`: combination of atoms and molecules, utilized to create sections of design screens
    - `templates`: merge of organisms with a specific template / layout
    - `pages`: each page is associated with a route, with many templates.

# Requirements

To run this project:

- Node v16.8.0.
- NPM v7.21.0
- Installation of packages through npm install

## Setup

The front-end doesn't require any specific environment variable. It should always be used on the base path of the url ( `/` )

To run this project, first use:

`npm install`

Then:

`npm start`

## Build

To build the project, first ensure that all the npm dependencies are installed with:

`npm install`

After that, just run:

`npm run build`

## Testing

To test the project, first ensure that all the npm dependencies are installed with:

`npm install`

After that, just run:

`npm run test`

## Deployment

To deploy this application, you need to get the generated bundle files at `/build` and serving it through an api.
