#!/bin/bash

set -euxo pipefail

docker build ../game_api/ -t emiln17/hgop:1b1900039e10ba3f853c339fdad539cb1b146df8
GIT_COMMIT=1b1900039e10ba3f853c339fdad539cb1b146df8 docker-compose up