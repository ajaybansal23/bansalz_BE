FROM node:alpine

# RUN groupadd -r nodejs && useradd -m -r -g -s /bin/bash nodejs nodejs
# USER nodejs

WORKDIR /code
COPY package.json .
RUN npm install --production

COPY . .

CMD ["node", "src/app.js"]
