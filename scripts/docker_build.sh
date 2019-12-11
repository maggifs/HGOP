#!/bin/bash

set -euxo pipefail

GIT_COMMIT=$1

docker build -t emiln17/hgop:$GIT_COMMIT game_api/;
(cd game_client && npm run build)
docker build -t emiln17/game_client:$GIT_COMMIT game_client/;
