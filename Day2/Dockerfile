FROM "node:23-alpine3.19" 

WORKDIR /app

COPY package.json . 
#run is runing while building image
RUN npm install 

COPY . .

CMD ["npm","run","dev"]