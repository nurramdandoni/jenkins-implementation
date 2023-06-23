pipeline {
    agent any
    
    stages {
        stage('Hello World') {
            steps {
                echo 'Hello, World!'
            }
        }
        
        stage('Docker Images') {
            steps {
                echo 'Building Docker images...'
                // Langkah-langkah untuk membangun Docker images
                sh 'docker images'
            }
        }
        
        stage('Hello Again') {
            steps {
                echo 'Hello again!'
            }
        }
    }
}
