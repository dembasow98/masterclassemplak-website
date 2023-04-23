# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of the application files to the container
COPY . .

# Build the application
RUN npm run build

# Install serve globally to serve the application
RUN npm install -g serve

# Expose port 5000 for the server to listen on
EXPOSE 5000

# Run the server using serve
CMD ["serve", "-s", "build"]