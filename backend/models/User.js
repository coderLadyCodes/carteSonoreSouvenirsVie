import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
pseudo: {type: String, trim: true},
name: {type: String, required: true, trim: true},
email: {type: String, required: true, unique: true, lowercase: true},
password: {type: String, required: true, minkength: 6},
createdAt: {type: Date, default: Date.now},
modifiedAt: {type: Date, default: Date.now},
role: { type: String, enum: ['user', 'admin'], default: 'user'}
})

const User = mongoose.model('User', userSchema)

export default User