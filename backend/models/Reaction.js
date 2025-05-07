import mongoose from 'mongoose'

const reactionSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: true},
    souvenirId: {type: mongoose.Schema.Types.ObjectId, ref: 'Souvenir' , required: true},
    type: {type: String, required: true, enum: ['like', 'comment']},
    comment: {type: String, trim: true},
    createdAt: {type: Date, default: Date.now},
    modifiedAt: {type: Date, default: Date.now}
})

const Reaction = mongoose.model('Reaction', reactionSchema)

export default Reaction