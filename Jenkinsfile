pipeline {
    agent any
    
    stages {
        stage('Hello World') {
            steps {
                echo 'Hello, World Koding!'
            }
        }
        
        stage('Docker Images') {
            steps {
                // Menghapus image sebelumnya
                sh 'docker rmi myimage:latest'
                echo 'Menampilkan hasil images'
                sh 'docker images'
                echo 'Building Docker images...'
                // Langkah-langkah untuk membangun Docker images
                sh 'docker images'
                echo 'Proses Build'
                sh 'docker build -t myimage:latest .'
                echo 'Menampilkan hasil images'
                sh 'docker images'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Hello again!'
            }
        }
    }
}
