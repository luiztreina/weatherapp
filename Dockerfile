FROM node:18-alpine

# Install a simple HTTP server
RUN npm install -g http-server

# Set the working directory
WORKDIR /app

# Copy project files
COPY . /app

# Expose port
EXPOSE 2020

# Start the server
CMD ["http-server", "./", "-p", "2020"]
