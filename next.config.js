/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.graphassets.com'
            },
            {
                protocol: 'https',
                hostname: 'mdbcdn.b-cdn.net'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'media.ed.edmunds-media.com'
            },
            {
                protocol: 'https',
                hostname: 'www.edmunds.com'
            },
            {
                protocol: 'https',
                hostname: 'www.honda.co.uk'
            }
        ]
    }
}

module.exports = nextConfig
