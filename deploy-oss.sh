# OSS Deployment Script for Alibaba Cloud OSS
# This script builds and deploys the static site to Alibaba Cloud OSS

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Configuration
OSS_BUCKET="${OSS_BUCKET:-skopos-logic-web}"
OSS_REGION="${OSS_REGION:-ap-southeast-1}"
OSS_ENDPOINT="${OSS_ENDPOINT:-oss-ap-southeast-1.aliyuncs.com}"

echo -e "${GREEN}==================================${NC}"
echo -e "${GREEN}Skopos Logic Web - OSS Deploy${NC}"
echo -e "${GREEN}==================================${NC}"

# Function to check prerequisites
check_prerequisites() {
    echo -e "${YELLOW}Checking prerequisites...${NC}"
    
    if ! command -v ossutil &> /dev/null; then
        echo -e "${RED}Error: ossutil is not installed${NC}"
        echo -e "${YELLOW}Please install it: https://www.alibabacloud.com/help/en/oss/user-guide/install-ossutil${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✓ Prerequisites check passed${NC}"
}

# Function to build the static site
build_site() {
    echo -e "${YELLOW}Building static site...${NC}"
    npm run build
    echo -e "${GREEN}✓ Build completed successfully${NC}"
}

# Function to deploy to OSS
deploy_oss() {
    echo -e "${YELLOW}Deploying to Alibaba Cloud OSS...${NC}"
    
    # Configure ossutil if not already configured
    if [ ! -f ~/.ossutilconfig ]; then
        echo -e "${YELLOW}ossutil not configured. Running config...${NC}"
        ossutil config
    fi
    
    # Create bucket if it doesn't exist
    echo -e "${YELLOW}Creating OSS bucket (if not exists)...${NC}"
    ossutil mb oss://${OSS_BUCKET} --region ${OSS_REGION} || true
    
    # Set bucket ACL to public-read for website hosting
    echo -e "${YELLOW}Setting bucket ACL to public-read...${NC}"
    ossutil set-acl oss://${OSS_BUCKET} public-read --region ${OSS_REGION}
    
    # Upload files to OSS
    echo -e "${YELLOW}Uploading files to OSS...${NC}"
    ossutil cp -r dist oss://${OSS_BUCKET}/ --include "*.html" --include "*.css" --include "*.js" --include "*.png" --include "*.jpg" --include "*.svg" --include "*.ico" --include "*.json" --include "*.txt" --exclude "node_modules" --exclude ".git" -f --region ${OSS_REGION}
    
    echo -e "${GREEN}✓ Deployment completed successfully${NC}"
    echo -e "${GREEN}Website URL: http://${OSS_BUCKET}.${OSS_ENDPOINT}${NC}"
}

# Function to configure OSS for static website
configure_website() {
    echo -e "${YELLOW}Configuring OSS for static website hosting...${NC}"
    
    # Create index.html as default homepage
    cat > index-document.xml << EOF
<?xml version="1.0" encoding="UTF-8"?>
<IndexDocument>
    <Suffix>index.html</Suffix>
</IndexDocument>
EOF

    # Create error page configuration
    cat > error-document.xml << EOF
<?xml version="1.0" encoding="UTF-8"?>
<ErrorDocument>
    <Key>404.html</Key>
</ErrorDocument>
EOF

    # Apply static website configuration
    ossutil put-bucket-website oss://${OSS_BUCKET} --index-document index-document.xml --error-document error-document.xml --region ${OSS_REGION}
    
    # Cleanup temp files
    rm -f index-document.xml error-document.xml
    
    echo -e "${GREEN}✓ Static website configuration applied${NC}"
}

# Parse command line arguments
case "${1:-deploy}" in
    build)
        check_prerequisites
        build_site
        ;;
    deploy)
        check_prerequisites
        build_site
        deploy_oss
        configure_website
        ;;
    config)
        ossutil config
        ;;
    *)
        echo -e "${YELLOW}Usage: $0 {build|deploy|config}${NC}"
        echo ""
        echo "Commands:"
        echo "  build   - Build static site only"
        echo "  deploy  - Full deployment (build, upload, configure)"
        echo "  config  - Configure ossutil credentials"
        exit 1
        ;;
esac

echo -e "${GREEN}Done!${NC}"
