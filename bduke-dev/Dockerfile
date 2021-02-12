FROM node:14.15.4 AS compile-image
WORKDIR /opt/ng
COPY package.json ./
RUN npm install
ENV PATH=".node_modules/.bin:$PATH"
COPY . ./
RUN npx ng build --prod
FROM nginx
COPY --from=compile-image /opt/ng/dist/bduke-dev /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
