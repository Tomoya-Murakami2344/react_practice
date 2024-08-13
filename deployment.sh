#!/bin/sh
docker build --platform linux/amd64 --no-cache -t gcr.io/ancient-ensign-420411/react_practice:tag .  

docker tag gcr.io/ancient-ensign-420411/react_practice:tag us-central1-docker.pkg.dev/ancient-ensign-420411/react-practice/image:tag

docker push us-central1-docker.pkg.dev/ancient-ensign-420411/react-practice/image:tag