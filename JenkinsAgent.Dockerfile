FROM --platform=linux/amd64 jenkins/ssh-agent

RUN curl -fsSL https://get.docker.com | sh