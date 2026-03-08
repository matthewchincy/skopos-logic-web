#!/bin/bash

# Configuration
REGION="ap-southeast-1"
REPOSITORY="skoposlogic"
IMAGE_NAME="skopos-website"
TAG="latest"

# Full image names
LOCAL_IMAGE="${IMAGE_NAME}:${TAG}"
REMOTE_IMAGE="crpi-ez8mdaksubl5qn6m.${REGION}.personal.cr.aliyuncs.com/${REPOSITORY}/${IMAGE_NAME}:${TAG}"

echo "=== Building Docker image ==="
docker build --platform linux/amd64 -t ${LOCAL_IMAGE} .

echo ""
echo "=== Tagging image for Function Compute ==="
docker tag ${LOCAL_IMAGE} ${REMOTE_IMAGE}

echo ""
echo "=== Pushing to Function Compute Container Registry ==="
docker push ${REMOTE_IMAGE}

echo ""
echo "=== Deployment image ready ==="
echo "Image: ${REMOTE_IMAGE}"
echo ""
echo "Next steps:"
echo "1. Verify the image in Alibaba Cloud Container Registry"
echo "2. Deploy using fc-cli or Alibaba Cloud Console"
echo "3. Or run: fun deploy -y"
