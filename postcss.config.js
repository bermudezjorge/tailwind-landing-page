const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content: [
                './*.js',
                './**/*.js',
                './**/**/*.js'
            ],
            defaultExtractor: content => content.match(/[\w-:/]+(?<!:)/g) || []
        }),
    ]
}