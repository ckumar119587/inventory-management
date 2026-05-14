/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "dt-app-s3-inv.s3.us-east-1.amazonaws.com",
                port: "",
                pathname: "/**"

            }
        ]
    }
};

export default nextConfig;