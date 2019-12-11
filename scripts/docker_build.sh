#!/bin/bash

set -euxo pipefail

GIT_COMMIT=$1

docker build -t emiln17/hgop:$GIT_COMMIT game_api/;
docker build -t emiln17/hgop:$GIT_COMMIT game_client/;
