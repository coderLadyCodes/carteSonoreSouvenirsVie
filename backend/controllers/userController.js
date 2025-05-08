import bcrypt from 'bcrypt'
import User from '../models/User.js'

export const signUp = async (req, res) => {
    const hashPassword = bcrypt.hash(req.body.password, 10)
    try{
       
        const user = new User({
            pseudo: req.body.pseudo,
            name: req.body.name,
            email:req.body.email,
            password:hashPassword,
            createdAt: req.body.createdAt,
            modifiedAt: req.body.modifiedAt,
            role: req.body.role,
        })
        const savedUser = await user.save()
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(400).json({error : err.message})
    }
}