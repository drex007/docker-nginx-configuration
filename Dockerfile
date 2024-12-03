FROM node:lts-alpine 
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "server.js"]
