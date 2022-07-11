FROM node
ENV NODE_ENV=production
WORKDIR /app
COPY ["./dist/*", "./"]
RUN npm i serve
CMD ["npx", "serve"]
