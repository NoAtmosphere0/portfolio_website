const path = require('path');

module.exports = {
    module: {
        rules: [{test: /\.html$/,
        loader: 'html-loader'
        }],
    },

};