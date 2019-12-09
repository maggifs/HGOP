#!/bin/bash

set -euxo pipefail

# Our Jenkins instance url
JENKINS_URL=54.242.184.100

# Copy credentials to Jenkins machine and move it to the correct path.
scp -o StrictHostKeyChecking=no -i "~/.aws/JenkinsAWSKeyPair.pem" ~/.aws/credentials ubuntu@${JENKINS_URL}:~/credentials
ssh -o StrictHostKeyChecking=no -i "~/.aws/JenkinsAWSKeyPair.pem" ubuntu@${JENKINS_URL} "sudo mv ~/credentials /var/lib/jenkins/.aws/credentials"
ssh -o StrictHostKeyChecking=no -i "~/.aws/JenkinsAWSKeyPair.pem" ubuntu@${JENKINS_URL} "sudo chmod a+r /var/lib/jenkins/.aws/credentials"


# This is to copy the GameKeyPair to the Jenkins machine to use with Terraform when creating our game instance.
# Might be unnecessary to do this every time we sync, but just in case, we'll leave it here
scp -o StrictHostKeyChecking=no -i "~/.aws/JenkinsAWSKeyPair.pem" ~/.aws/GameKeyPair.pem ubuntu@${JENKINS_URL}:~/
ssh -o StrictHostKeyChecking=no -i "~/.aws/JenkinsAWSKeyPair.pem" ubuntu@${JENKINS_URL} "sudo mv ~/GameKeyPair.pem /var/lib/jenkins/.aws"
ssh -o StrictHostKeyChecking=no -i "~/.aws/JenkinsAWSKeyPair.pem" ubuntu@${JENKINS_URL} "sudo chmod a+r /var/lib/jenkins/.aws/GameKeyPair.pem"