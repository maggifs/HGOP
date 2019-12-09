#!/bin/bash

set -euxo pipefail

docker build ../game_api/ -t emiln17/hgop:87e8af54a73686c5cc442844523bbde6b3d23038
GIT_COMMIT=87e8af54a73686c5cc442844523bbde6b3d23038 docker-compose up