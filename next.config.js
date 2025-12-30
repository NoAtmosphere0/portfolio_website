module.exports = {
    reactStrictMode: true,
    // Turbopack configuration for Next.js 16+
    turbopack: {
        rules: {
            '*.html': {
                loaders: ['html-loader'],
                as: '*.js',
            },
        },
    },
    // Keep webpack config for fallback
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.html$/i,
            loader: "html-loader",
        });
        return config;
    },
}


