pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Menjalankan perintah Docker
                script {
                    docker.build('image_test:lates').push()
                }
            }
        }

        stage('Deploy') {
            steps {
                // Menjalankan kontainer Docker porthost:port container
                script {
                    docker.image('image_test:lates').run('-p 3000:3000 --name nama_kontainer_test')
                }
            }
        }
    }
}
