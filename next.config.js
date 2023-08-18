module.exports = {
    reactStrictMode: true,
    future: {
        webpack5: true,
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.html$/i,
            loader: "html-loader",
        });
        return config;
    },

}

