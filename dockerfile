FROM node:12.22.1-alpine3.10

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
RUN npm install

COPY dist/app.js .

EXPOSE 5000
CMD ["node","app.js"]