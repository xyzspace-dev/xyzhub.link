FROM node:20

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json .
RUN npm install --omit=dev
RUN npm run build

ENV EMAIL_USER=contact@xyzhub.link
ENV EMAIL_PASSWORD="your_password_here"
ENV EMAIL_HOST=mail.service.xyzspace.dev
ENV EMAIL_PORT=465
ENV EMAIL_SECURE=true
ENV IGNORE_TLS=false
ENV PAGE_HOST=xyzhub.link

# Bundle app source
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start" ]