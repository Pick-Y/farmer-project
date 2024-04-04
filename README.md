# Farmers Backpackers

## Development
- The application is split into a server/client architecture

### Server
Application built in Node + Express.
works as an API and also returns the static assets of the client (including the build package of the SPA).

### Client
React SPA.
For Production deployments, the bundle needs to be built in order to be served as a static asset by the Server.
For dev environment, the server can be started independently, listening on port `3000`, while the SPA can be served by Webpack Dev Server from port `3001`. This has the advantage of providing Hot Reloading (file changes automatically refresh the component on the browser).

### Running locally

Two options:
- 1: Running on the native local machine, simply with `npm run start-dev` or `yarn start-dev`
- 2: With Docker: `docker-compose up`

The SPA with Hot Reloading will be served from port `3001`, while the Server listens ojn port `3000`.

NOTE: the Server will ALSO return the build package of the SPA from port `3000`, but if the package is not built (using `npm run build` or `yarn build`), it will be outdated!!

## Functionalities

At this stage, the application:
- Allows users to register 
- Stores users information based on which category they belong to (Farmer/Backpacker)
- Allows users to login based on which category they belong to (Farmer/Backpacker)
