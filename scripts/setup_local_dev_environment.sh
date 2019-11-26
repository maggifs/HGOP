#!/bin/bash

function setup {
    #Get the starting date of the script
    startDate=`date`
    user=$USER

    #Print out the starting date of the script
    echo "Time of script start: $startDate"
    echo "=========================================="
    #Prints out Welcome *current username*! and some other stuff
    echo "Welcome $user!"
    echo "This script will setup a basic development environment"
    echo "It will install the following tools: \n* git \n* NodeJS & npm"

    #Prints out the current operating system
    echo "You're currently running on $(uname -o)"
    echo "=========================================="
    echo "Installing..."

    #updating packages
    sudo apt-get update

    #command installs git
    sudo apt-get install git

    #install curl
    sudo apt-get install curl
    #adds PPA to the system
    curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -

    # installs nodejs
    sudo apt-get install nodejs

    #Storing version of installed programs in variables
    gitVer=`git --version`
    nodeVer=`node --version`
    npmVer=`npm --version`

    #Printing out versions
    echo "=========================================="
    echo "Installation complete, printing versions:"
    echo "Git version: $gitVer"
    echo "NodeJS version: $nodeVer"
    echo "npm version: $npmVer"
    echo "=========================================="
    #Storing end date of script in a variable
    endDate=`date`
    #Printing out 
    echo "Time of script end: $endDate"
}

#Run the setup() function, and append the output in week1.log using tee 
setup | tee -a setup_linux.log