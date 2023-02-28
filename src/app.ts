import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import Routes from './routes'

class App {
    public express: express.Application

    public constructor (){
        this.express = express()

        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares (): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database (): void {
        mongoose.set('strictQuery', true)
        mongoose.connect('mongodb://localhost:27017/tsnode')
    }
    
    private routes (): void {
        this.express.use(Routes)
    }
}

export default new App().express
