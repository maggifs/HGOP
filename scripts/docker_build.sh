#!/bin/bash

set -euxo pipefail

GIT_COMMIT=$1

if docker build -t emiln17/hgop:$GIT_COMMIT game_api/; then
    echo "Docker build succeeded"
else
    echo "Docker build failed"
fi