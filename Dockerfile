# Stage 1
FROM node:18.12.1 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
# Stage 2
FROM nginx:stable-alpine
COPY --from=node /app/dist/ng-pipe /usr/share/nginx/html
EXPOSE 80