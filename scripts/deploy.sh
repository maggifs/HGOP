#!/bin/bash

set -euxo pipefail
# Change directory to 1 higher
cd ..

# Destroy any existing Terraform instance
terraform destroy -auto-approve

# Create a new one
terraform apply -auto-approve

# Run the initialization script on the new instance
ssh -o StrictHostKeyChecking=no -i "~/.aws/GameKeyPair.pem" ubuntu@$(terraform output public_ip) "./initialize_game_api_instance.sh"

