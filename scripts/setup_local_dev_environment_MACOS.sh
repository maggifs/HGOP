#Get the starting date of the script
startDate=`date`

#Checks for the current operating system
OS="`uname`"
case $OS in
  'Linux')
    OS='Linux'
    ;;
  'Darwin') 
    OS='MacOS'
    ;;
  *) ;;
esac

#Prints out Welcome *current username*! and some other stuff
echo "Welcome $USER!"
echo "This script will setup a basic development environment"
echo "It will install the following tools: \n* Homebrew \n* git \n* NodeJS & npm"

#Prints out the current operating system
echo "You're currently running on $OS"

#Print out the starting date of the script
echo "Time of script start: $startDate"

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
echo "Installation complete, printing versions:"
echo "Homebrew version: $brewVer"
echo "Git version: $gitVer"
echo "NodeJS version: $nodeVer"
echo "npm version: $npmVer"

#Storing end date of script in a variable
endDate=`date`
echo "Time of script end: $endDate"
