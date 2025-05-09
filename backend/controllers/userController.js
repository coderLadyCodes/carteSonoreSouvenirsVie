import bcrypt from 'bcrypt'
import User from '../models/User.js'

export const signUp = async (req, res) => {

    const hashPassword = await bcrypt.hash(req.body.password, 10)

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
        console.log("saved user to mongo: ", savedUser)
        const {password:_, ...userWithoutPassword} = savedUser.toObject()
        console.log("savedUserToObject : ", savedUser.toObject())
        console.log("userWithoutPassword : ", userWithoutPassword)
        //res.status(201).json(savedUser)
        res.status(201).json(userWithoutPassword)
    } catch (err) {
        res.status(500).json({error : err.message})
    }
}