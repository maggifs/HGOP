#!/bin/bash

GIT_COMMIT=$1

if docker build -t emiln17/hgop:$GIT_COMMIT itemrepository/; then
    echo "Docker build succeeded"
else
    echo "Docker build failed"
fi