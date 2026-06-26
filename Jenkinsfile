pipeline {

    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/USERNAME/devops-project.git'
            }
        }

        stage('Build Docker') {
            steps {
                sh 'docker build -t devops-app1 .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker rm -f devops-app1 || true
                docker run -d \
                --name devops-app1 \
                -p 3000:3000 \
                devops-app1
                '''
            }
        }
    }
}
