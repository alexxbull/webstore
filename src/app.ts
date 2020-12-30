import path from 'path'

import express from 'express'

import { storeRoutes } from './routes/store'
import { adminRoutes } from './routes/admin'
import { get404 } from './controllers/error'

const app = express()

require('dotenv').config()
if (process.env.APP_ENV === 'dev') {
    // enable live reloading of the frontend
    const connectLivereload = require("connect-livereload");
    app.use(connectLivereload())
}

// set template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// set static directory to public folder
app.use(express.static(path.join(__dirname, 'public')))

// parse body
app.use(express.urlencoded({ extended: false }))

// add routes
app.use(storeRoutes)
app.use('/admin', adminRoutes)
app.use(get404)


export default app