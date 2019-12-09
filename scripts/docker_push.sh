#!/bin/bash

set -euxo pipefail

GIT_COMMIT=$1

if docker push emiln17/hgop:$GIT_COMMIT; then
    echo "Docker build succeeded"
else
    echo "Docker build failed"
fi