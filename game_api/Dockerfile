# The image we'll be using
FROM node:erbium

# Set the working directory to /code
WORKDIR /code

# Copy our package.json to the container
COPY package.json package.json

# Run npm install to install the dependencies listed in package.json
RUN npm install --production

# This skips the test files because we have a .dockerignore file defined
COPY *.js ./

COPY database.json database.json

COPY migrations/*.js migrations/

# Give postgres time to setup before we try to migrate.
CMD sleep 20 && npm run migratedb:pg && node app.js
