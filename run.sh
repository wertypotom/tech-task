#!/bin/bash

# Exit on any error
set -e

IMAGE_NAME="dummy-store"

echo "=== Building Docker image: $IMAGE_NAME ==="
docker build -t $IMAGE_NAME .

echo "=== Stopping existing container (if any) ==="
docker stop $IMAGE_NAME 2>/dev/null || true
docker rm $IMAGE_NAME 2>/dev/null || true

echo "=== Starting container on port 3000 ==="
docker run -d --name $IMAGE_NAME -p 3000:3000 --env-file .env $IMAGE_NAME

echo "✅ App is running at http://localhost:3000"
