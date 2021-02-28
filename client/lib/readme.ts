const README = `
# Next.js GraphQL demo app

### Next.js App running React 17 and Apollo GraphQL. This repository has been forked from arunoda's [next-apollo-demo](https://github.com/arunoda/next-apollo-demo)


## The following changes have been made after:

- Updated libraries - React, Next, Apollo Client ,etc.
- Added support for Typescript
- Added Docker support
- Added Nodemon for the server
- Added React-helmet for document titles
- Added tests - Unit tests and E2e


## The following good practices have been obeyed

- [x] Good test coverage
- [x] Strongly typed with Typescript
- [x] Lazy loading of components with Suspense
- [x] Pretty code
- [x] Conventional commits
- [x] Accessible and good design


## Few things I would like to add in the future:

- Infinite load on scroll-end.
- Progressive load of images
- Move language texts to React-intl
- Add enviroment config support (URLs are hardcoded currently)


## How to run

Install Docker and run the following

\`\`\`
docker-compose up
\`\`\`

Alternatively, you can run \`npm install\` on both client and server folders and
\`\`\`
#Run this on the client
npm run dev

#Run this to start the server
npm start
\`\`\`

### Credits

[arunoda's original version](https://github.com/arunoda/next-apollo-demo)

Ripple loader by [Loading.io ](https://loading.io/css/)

`;

export default README;
