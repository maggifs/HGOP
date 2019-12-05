#!/bin/bash

# Exits immediatly if a command fails
set -e

GIT_COMMIT=$1

# We need to move some files around, because of the terraform state limitations.
mkdir -p /var/lib/jenkins/terraform/hgop/production
mkdir -p /var/lib/jenkins/terraform/hgop/production/scripts
rm -f /var/lib/jenkins/terraform/hgop/production/scripts/initialize_game_api_instance.sh
cp initialize_game_api_instance.sh /var/lib/jenkins/terraform/hgop/production/scripts/initialize_game_api_instance.sh
rm -f /var/lib/jenkins/terraform/hgop/production/scripts/docker_compose_up.sh
cp docker_compose_up.sh /var/lib/jenkins/te rraform/hgop/production/scripts/docker_compose_up.sh
rm -f /var/lib/jenkins/terraform/hgop/production/docker-compose.yml
cp ../docker-compose.yml /var/lib/jenkins/terraform/hgop/production/docker-compose.yml
rm -f /var/lib/jenkins/terraform/hgop/production/*.tf
cp *.tf /var/lib/jenkins/terraform/hgop/production/

cd /var/lib/jenkins/terraform/hgop/production
terraform init -input=false # In case terraform is not initialized.
terraform destroy -input=false -auto-approve
terraform apply -input=false -auto-approve

echo "Game API running at " + $(terraform output public_ip)

ssh -o StrictHostKeyChecking=no -i "~/.aws/GameKeyPair.pem" ubuntu@$(terraform output public_ip) "./initialize_game_api_instance.sh"
ssh -o StrictHostKeyChecking=no -i "~/.aws/GameKeyPair.pem" ubuntu@$(terraform output public_ip) "./docker_compose_up.sh $GIT_COMMIT"

exit 0