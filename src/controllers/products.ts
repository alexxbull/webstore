import { Request, Response } from 'express'

export const getProducts = (req: Request, res: Response) => {
    res.render('main.ejs', {
        pageTitle: 'Webstore'
    })
}