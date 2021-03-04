'use strict'

const path = require('path')
const mix = require('laravel-mix')
require('mix-env-file')

mix.disableNotifications()
mix.env(process.env.ENV_FILE)

if (mix.inProduction()) {
  mix.options({
    uglify: {
      uglifyOptions: {
        compress: {
          drop_console: true
        }
      }
    }
  })
}

mix.options({ publicPath: path.normalize('public/assets') })
	.sass('resources/sass/style.scss', 'css/style.css')
	.version()
	.sourceMaps()

