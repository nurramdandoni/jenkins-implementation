pipeline {
    agent any

    stages {
        stage('Pull Project') {
            steps {
                // Menjalankan perintah Pull
                git branch: 'main', url: 'https://github.com/nurramdandoni/jenkins-implementation.git'
            }
        }
    }
}
