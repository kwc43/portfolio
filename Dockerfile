#pull official base image
FROM node:16-alpine

#set working dir 
WORKDIR /home/app

#adding '/node_modules/.bin' to $PATH
ENV PATH /node_modules/.bin:$PATH

#install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --production
RUN npm install react-scripts@3.4.1 -g

#add SSH
ENV SSH_PASSWD "root:Docker!"
RUN apk update \
        && apk add dialog \
        && apk add openssh-server \
        && apk add openrc \
        && apk update \
        && echo "${SSH_PASSWD}" | chpasswd

COPY sshd_config /etc/ssh/
COPY init.sh /usr/local/bin/

RUN chmod u+x /usr/local/bin/init.sh
EXPOSE 8000 2222

#add app
COPY . ./

# CMD ["service", "ssh start", "start", "-- --port 8000"]
ENTRYPOINT [ "init.sh" ]