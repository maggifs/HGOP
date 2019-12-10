#!/bin/bash

set -euxo pipefail

GIT_COMMIT=$1
ENV=$2

./scripts/jenkins_deploy.sh $GIT_COMMIT $ENV
TEST_URL=$(cd /var/lib/jenkins/terraform/hgop/$ENV && terraform output public_ip)
cd game_api
API_URL=http://$TEST_URL:3000 npm run test:$ENV

cd /var/lib/jenkins/terraform/hgop/$ENV 
terraform destroy -auto-approve -var environment=$ENV || exit 1