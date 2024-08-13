FROM node:16-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

RUN npm run build

# 軽量の Nginx イメージを使用してビルドしたファイルを提供
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

# Nginx を起動
CMD ["nginx", "-g", "daemon off;"]
