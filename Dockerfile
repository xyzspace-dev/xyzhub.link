FROM oven/bun:1.3-slim

# Create app directory
WORKDIR /app

COPY . /app
RUN bun install
RUN bun run build

ENV EMAIL_USER=contact@xyzhub.link
ENV EMAIL_PASSWORD="your_password_here"
ENV EMAIL_HOST=mail.service.xyzspace.dev
ENV EMAIL_PORT=465
ENV EMAIL_SECURE=true
ENV IGNORE_TLS=false
ENV PAGE_HOST=xyzhub.link
ENV REDIRECT_JSON_FILE=https://raw.githubusercontent.com/xyzDataSpace/xyzHubData/refs/heads/main/redirects.json
ENV PAGES_DIRECTORY=https://raw.githubusercontent.com/xyzDataSpace/xyzHubData/refs/heads/main/pages/{page}.mdx

EXPOSE 3000
CMD [ "bun", "run", "start" ]