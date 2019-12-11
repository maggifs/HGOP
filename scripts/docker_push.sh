#!/bin/bash

set -euxo pipefail

GIT_COMMIT=$1

docker push emiln17/hgop:$GIT_COMMIT;
docker push emiln17/game_client:$GIT_COMMIT;
