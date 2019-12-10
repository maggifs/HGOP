#!/bin/bash

set -euxo pipefail

docker build ../game_api/ -t emiln17/hgop:262d7fb5fff967ecbc0793512ddda51e6f76f790
GIT_COMMIT=262d7fb5fff967ecbc0793512ddda51e6f76f790 docker-compose up