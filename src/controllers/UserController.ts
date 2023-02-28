import { Request, Response } from 'express'

import User from '../schemas/user'

class UserController {
    public async index (req: Request, res: Response): Promise<Response> {
        const users = await User.find()

        return res.json(users)
    }

    public async store (req: Request, res: Response): Promise<Response> {
        const user = await User.create(req.body)

        return res.json(user)
    }

    public async edit (req: Request, res: Response): Promise<Response> {
        const {
            firstName,
            lastName,
            fullName,
            id,
            email
        } = req.body
        const filter = { _id: id }
        const update = { $set: { firstName, lastName, fullName, email } }
        
        const edit = await User.updateOne(filter, update)        

        return res.json(edit)
    }
}

export default new UserController()
