FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY . .
RUN npm install
RUN npm run build
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source

ENV PORT 3000
EXPOSE 3000
CMD [ "npm", "start"]
