#!/bin/bash

set -euxo pipefail

docker build ../game_api/ -t emiln17/hgop:c20f70725626f5e660967090fcfd20401c5a5937
GIT_COMMIT=c20f70725626f5e660967090fcfd20401c5a5937 docker-compose up