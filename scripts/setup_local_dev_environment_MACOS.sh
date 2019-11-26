#!/bin/bash

function setup {
  #Get the starting date of the script
  startDate=`date`

  #Checks for the current operating system, if it is Darwin, I change the variable to MacOS
  OS="`uname`"
  case $OS in
    'Darwin') 
      OS='MacOS'
      ;;
    *) ;;
  esac

  #Print out the starting date of the script
  echo "Time of script start: $startDate"
  echo "=========================================="
  #Prints out Welcome *current username*! and some other stuff
  echo "Welcome $USER!"
  echo "This script will setup a basic development environment"
  echo "It will install the following tools: \n* Homebrew \n* git \n* NodeJS & npm"

  #Prints out the current operating system
  echo "You're currently running on $OS"
  echo "=========================================="
  echo "Installing..."
  #Install homebrew
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

  #Update homebrew
  brew update

  #Install git with homebrew
  brew install git

  #Install NodeJS with homebrew
  brew install node

  #Storing version of installed programs in variables
  brewVer=`brew -v`
  gitVer=`git --version`
  nodeVer=`node -v`
  npmVer=`npm -v`

  #Printing out versions
  echo "=========================================="
  echo "Installation complete, printing versions:"
  echo "Homebrew version: $brewVer"
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
setup | tee -a week1.log