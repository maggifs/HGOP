node {
    def git = checkout scm
    stage("Clean") {
        sh "git clean -dfxq"
        sh "git stash"
    }
    stage("Setup") {
        dir("game_api") {
            sh "npm install"
        }
    }
    stage("Lint") {
        dir("game_api") {
            sh "npm run eslint"
        }
    }
    stage("Test") {
        dir("game_api") {
            sh "npm run test:unit"
            step([
                $class: 'CloverPublisher',
                cloverReportDir: 'coverage',
                cloverReportFileName: 'clover.xml',
                healthyTarget: [methodCoverage: 80, conditionalCoverage: 80, statementCoverage: 80],
                unhealthyTarget: [methodCoverage: 50, conditionalCoverage: 50, statementCoverage: 50],
                failingTarget: [methodCoverage: 0, conditionalCoverage: 0, statementCoverage: 0]
            ])
        }
    }
    stage("Build") {
        sh "./scripts/docker_build.sh ${git.GIT_COMMIT}"
        sh "./scripts/docker_push.sh ${git.GIT_COMMIT}"
    }
    stage("API Test") {
        sh "./scripts/jenkins_deploy.sh ${git.GIT_COMMIT} apitest"
        URL = sh (
            script: '\$(terraform output public_ip)',
            returnStdout: true
        ).trim()
        dir("game_api"){
            sh "API_URL=$URL:3000 npm run test:api"
        }
        dir("/var/lib/jenkins/terraform/hgop/apitest"){
            sh "terraform destroy -auto-approve -var environment=apitest || exit 1"
        }
        
    }
    stage("Capacity Test") {
        sh "./scripts/jenkins_deploy.sh ${git.GIT_COMMIT} capacitytest"
        URL = sh (
            script: '\$(terraform output public_ip)',
            returnStdout: true
        ).trim()
        dir("game_api"){
            sh "API_URL=$URL:3000 npm run test:capacity"
        }
        dir("/var/lib/jenkins/terraform/hgop/capacitytest"){
            sh "terraform destroy -auto-approve -var environment=capacitytest || exit 1"
        }
    }
    stage("Deploy") {
        sh "./scripts/jenkins_deploy.sh ${git.GIT_COMMIT} production"
    }
}