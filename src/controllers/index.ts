import { Request, Response } from 'express'

export const getMain = async (req: Request, res: Response) => {
    res.render('store/index.ejs', {
        pageTitle: 'Webstore'
    })
}