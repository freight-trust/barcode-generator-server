FROM node:12
RUN sudo apt-get update


RUN sudo npm install -g node-gyp -y -qq
RUN sudo apt-get build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev install libcairo2-dev -qq -y

# Create app directory
WORKDIR /usr/src/app


# Install app dependencies
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
