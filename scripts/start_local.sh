#!/bin/bash

set -euxo pipefail

docker build ../game_api/ -t emiln17/hgop:7b1fc5f1b6ebc1e839ae6efed0b1314272f866bf
GIT_COMMIT=7b1fc5f1b6ebc1e839ae6efed0b1314272f866bf docker-compose up