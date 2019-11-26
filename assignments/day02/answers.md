# Docker Exercise

This assignment is supposed to get us familiar with using containers, images and config files in Docker.

## What is Docker?

Docker is a platform to create containers which can be used to host applicaions in an isolated  recreatable scope.

## What is the difference between:

* Virtual Machine
Virtual machine is an emulation of a computer system.
* Docker Container
Docker container is a standardized unit which can be created to deploy a particular application or environment.
* Docker Image
Docker image is a template used to build containers. Images are used to store and ship applications.

Virual machines are slow, containers are fast. Containers do not waste or block host resources unlike virtual machines.

## Web API?

Web API is an application programming interface for either web server or a web browser that is exposed over the internet.

## Postgres?

it is a object-relational database management system it emphasizes extensibility and technical standards compliance, it is free and open-source. 

## package.json file dependencies field:

List of the JavaScript packages and their version that are needed to run our application.

## npm express package:

Express is a minimal and flexible Node.js application framework that provides a robust set of features to develop web and mobile applications. Features include robust routing, http helpers, focus on high performance and more.

## npm pg package:

pg is a collection of node.js modules for interfacing with postgres database. It has support for callbacks, promises, async/await and more.

## What is docker-compose:

It is used to run multiple containers in a single service. 

## Results

We:

* Setup a Postgres database
* Connected it to an api
* Used docker-compose to connect them together
* Issued multiple POST requests to it that inserted data into the database
* Issued a GET request that fetched all of the data in alphabetical order