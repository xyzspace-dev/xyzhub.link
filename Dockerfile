FROM oven/bun:1.3-slim

WORKDIR /app

COPY . /app
RUN bun install
RUN bun run build

EXPOSE 3000
CMD [ "bun", "run", "start" ]