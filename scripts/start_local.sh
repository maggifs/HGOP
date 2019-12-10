#!/bin/bash

set -euxo pipefail

docker build -t emiln17/hgop:dev game_api/  
(cd /game_client && npm build)
docker build -t emiln17/game_client:dev game_client/

API_URL=localhost GIT_COMMIT=dev docker-compose up