# Use a lightweight base image
FROM node:14-alpine

# Set working directory, copy package.json and install dependencies
WORKDIR /usr/src/opt
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Create a non-root user named 'app'
RUN adduser -D app

# Set user to 'app'
USER app

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
