import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
  serverExternalPackages: [],
  
  // Compiler optimizations
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Security headers
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()'
        }
      ]
    }
  ],

  // Remove X-Powered-By header
  poweredByHeader: false,

  // Enable compression
  compress: true,

  // Generate ETags for caching
  generateEtags: true,

  // SWC minification is enabled by default in Next.js 15
  // Removed: swcMinify: true,

  // Trailing slash handling
  trailingSlash: true,

  // React strict mode
  reactStrictMode: true,

  // Bundle optimization
  webpack: (config: any, { isServer, dev }: { isServer: boolean; dev: boolean }) => {
    // Production optimizations
    if (!dev && !isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Optimize bundle splitting
    if (!dev) {
      config.optimization = config.optimization || {};
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Vendor chunk
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20
          },
          // Common chunk
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          },
          // Framework chunk (React, Next.js)
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /(?<!node_modules.*)[\\\\/]node_modules[\\\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\\\/]/,
            priority: 40,
            enforce: true
          },
          // Game-specific libraries
          gameLibs: {
            name: 'game-libs',
            chunks: 'all',
            test: /[\\\\/]node_modules[\\\\/](framer-motion|canvas-confetti)[\\\\/]/,
            priority: 30,
            enforce: true
          }
        }
      };
    }

    return config;
  },

  // Redirects for SEO
  redirects: async () => [],

  // Output configuration for different deployment targets
  output: 'standalone', // For Docker deployments
};

// Bundle analyzer - install first: npm install -D @next/bundle-analyzer
let configWithAnalyzer = nextConfig;

if (process.env.ANALYZE === 'true') {
  try {
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
      enabled: true,
    });
    configWithAnalyzer = withBundleAnalyzer(nextConfig);
  } catch (error) {
    console.warn('Bundle analyzer not installed. Run: npm install -D @next/bundle-analyzer');
  }
}

export default configWithAnalyzer;