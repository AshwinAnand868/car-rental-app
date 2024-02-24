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
            }
        ]
    }
}

module.exports = nextConfig
