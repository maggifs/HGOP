#!/bin/bash

set -euxo pipefail

GIT_COMMIT=$1
ENV=$2

./jenkins_deploy.sh $GIT_COMMIT $ENV
TEST_URL=$(cd /var/lib/jenkins/terraform/hgop/$ENV && terraform output public_ip)
cd game_api
API_URL=$TEST_URL:3000 npm run test:$ENV