# The image we'll be using
FROM node:erbium

# Set the working directory to /code
WORKDIR /code

# Copy our package.json to the container
COPY package.json package.json

# Run npm install to install the dependencies listed in package.json
RUN npm install

# Copy database.js to the container
COPY database.js database.js

# Copy app.js to the container
COPY app.js app.js

# Run our server
CMD node app.js

