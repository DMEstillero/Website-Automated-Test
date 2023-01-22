# Website Automated Test

This program contains two tests which have been been setup running asychronously using a page object model (POM) with a parent page object that other page objects inherit from. 

* The first test opens up the website, takes the user to the top 20 offers page and then opens the 6th discount within the top 20 offers list.
* The second tests opens up the website, opens the login function, uses the credentials email: test@test.com and password: testingStuff, this then triggers the user and password error messages, confirming whether the error messages displays.


## Table of contents:
1. Installation
2. Test use

## Installation
1. To use this proram, please install an IDE such as 'Visual Studio Code'
2. Download the files and store the files in a folder.
3. Open the program on your preferred IDE, open the terminal.

## Program Use
1. Once opened on your preferred IDE, open the terminal
2. Type 'yarn install' into the terminal, once installed type 'yarn run tests'
3. This should then run the two tests setup.
