# Skopos Logic Web - Next.js Website

Enterprise Technology Consultancy website built with Next.js, deployed on Alibaba Cloud OSS.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons
- **Deployment**: Static export to Alibaba Cloud OSS
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- Alibaba Cloud ossutil (for OSS deployment)

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

Static files will be generated in the `dist` directory.

## Deployment Options

### Option 1: Alibaba Cloud OSS (Recommended - Cheapest)

#### 1. Install ossutil

**macOS:**
```bash
curl http://gosspublic.alicdn.com/ossutil/1.7.18/ossutil-darwin-amd64 -o /usr/local/bin/ossutil
chmod +x /usr/local/bin/ossutil
```

**Linux:**
```bash
curl http://gosspublic.alicdn.com/ossutil/1.7.18/ossutil64 -o /usr/local/bin/ossutil
chmod +x /usr/local/bin/ossutil
```

**Windows:**
Download from: https://www.alibabacloud.com/help/en/oss/user-guide/install-ossutil

#### 2. Configure ossutil

```bash
./deploy-oss.sh config
```

Enter your:
- Endpoint: `oss-ap-southeast-1.aliyuncs.com` (or your region)
- AccessKeyID
- AccessKeySecret

#### 3. Deploy

```bash
# Full deployment (build + upload)
./deploy-oss.sh deploy

# Or build only
./deploy-oss.sh build
```

### Option 2: Docker (For other hosting providers)

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or with plain Docker
docker build -t skopos-logic-web .
docker run -p 80:80 skopos-logic-web
```

### Option 3: Manual OSS Upload

```bash
# Build the static site
npm run build

# Upload using ossutil
ossutil cp -r dist oss://your-bucket-name/ -r -f
```

## Project Structure

```
skopos-logic-web/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── Services.tsx
│   ├── Founder.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── public/                  # Static assets
├── dist/                    # Built static files (generated)
├── Dockerfile               # Docker build configuration
├── docker-compose.yml       # Docker Compose configuration
├── nginx.conf               # Nginx configuration for Docker
├── deploy-oss.sh            # OSS deployment script
├── next.config.ts           # Next.js configuration (static export)
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `OSS_BUCKET` | OSS bucket name | `skopos-logic-web` |
| `OSS_REGION` | OSS region | `ap-southeast-1` |
| `OSS_ENDPOINT` | OSS endpoint | `oss-ap-southeast-1.aliyuncs.com` |

## OSS Configuration

### Bucket Settings

- **ACL**: public-read (for static website)
- **Index Document**: index.html
- **Error Document**: 404.html

### Static Website URL

After deployment, your website will be accessible at:

```
http://skopos-logic-web.oss-ap-southeast-1.aliyuncs.com
```

### Custom Domain (Optional)

1. In OSS Console, bind your custom domain to the bucket
2. Configure CNAME record pointing to your OSS endpoint
3. Enable HTTPS with SSL certificate

## Cost Comparison

| Service | Monthly Cost (Estimated) |
|---------|-------------------------|
| OSS Standard | ~$1-5/month |
| Function Compute | ~$20-50/month |
| ECS | ~$10-30/month |

OSS is the most cost-effective solution for static websites.

## Customization

### Update Content

All content is in the `components/` directory. Edit the respective component files to update:

- Navigation menu items
- Hero section text
- Service offerings
- Founder information
- Contact details

### Change OSS Region

Update the region in `deploy-oss.sh`:

```bash
OSS_REGION="your-region"
OSS_ENDPOINT="oss-your-region.aliyuncs.com"
```

## Troubleshooting

### Build Fails

Clear Next.js cache and rebuild:

```bash
rm -rf .next dist
npm run build
```

### ossutil Not Found

Ensure ossutil is installed and in your PATH:

```bash
ossutil --version
```

### 403 Forbidden on OSS

1. Check bucket ACL is set to `public-read`
2. Verify object permissions in OSS console
3. Re-run deployment script

### CSS/JS Not Loading

Ensure all static assets were uploaded:

```bash
ossutil ls oss://your-bucket-name/_next/static/
```

## License

© 2026 Skopos Logic Technologies (Malaysia). All rights reserved.

## Contact

- **Telegram**: https://t.me/matthewchin
- **Email**: matthew@skoposlogic.com
- **LinkedIn**: https://linkedin.com/in/matthewchincy
- **GitHub**: https://github.com/matthewchincy
