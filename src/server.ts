import path from 'path'

import app from './app'

// load dev dependencies
require('dotenv').config()
if (process.env.APP_ENV === 'dev') {
    // enable live reloading of the frontend
    const livereload = require("livereload")
    const liveReloadServer = livereload.createServer()
    liveReloadServer.watch(path.join(__dirname, 'public'))
    liveReloadServer.server.once("connection", () => setTimeout(() => liveReloadServer.refresh("/"), 100))
}

app.listen(3000, () => console.log('Server running'))