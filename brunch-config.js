module.exports = {
    files: {
        javascripts: {
            joinTo: {
                "vendor.js": /^(?!app)/,
                "app.js": /^app/
            }
        },
        templates: {
            joinTo: "app.js"
        },
        stylesheets: {
            joinTo: "css/app.css"
        }
    },

    plugins: {
        babel: {
            presets: ["es2015", "es2016", "es2017", "latest"],
            ignore: [/^(node_modules|vendor|excludes)/]
        },
        stylus: {   
            plugins: [require('autoprefixer-stylus')({browsers: ['last 15 versions']})]
        },
    },
    server:{
        port: 1010
    }
};
