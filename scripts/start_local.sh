#!/bin/bash

set -euxo pipefail

docker build ../game_api/ -t emiln17/hgop:62586c7b3517d2ec10743d95d6fb967586c98b97
GIT_COMMIT=62586c7b3517d2ec10743d95d6fb967586c98b97 docker-compose up