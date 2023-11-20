
# Use a base image with Node.js and npm
FROM node:14

# Set the working directory to the app directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Expose the port that the Nest.js application is listening on
EXPOSE 3000

# Set the command to start the application
CMD [ "npm", "run", "start:prod" ]
