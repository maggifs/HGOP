#!/bin/bash

set -euxo pipefail

docker build ../game_api/ -t emiln17/hgop:e42478556062d5ce204858d8427da1e7d4d7499e
GIT_COMMIT=e42478556062d5ce204858d8427da1e7d4d7499e docker-compose up