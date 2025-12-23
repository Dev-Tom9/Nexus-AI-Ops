/** @type {import('next').NextConfig} */
const nextConfig = {
  /* This fixes the "Element type is invalid" error by 
     ensuring icon libraries are processed correctly */
  transpilePackages: ['lucide-react'],
};

export default nextConfig;