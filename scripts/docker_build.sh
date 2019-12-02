#!/bin/bash

GIT_COMMIT=$1

docker build -t emiln17/hgop:$GIT_COMMIT itemrepository/

# TODO exit on error if any command fails