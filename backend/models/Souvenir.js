import mongoose from 'mongoose'

const souvenirSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: true},
    title: {type: String, trim: true},
    type: {type: String, required: true, enum: ['audio', 'text']},
    location: {
        lat: {type: Number, required: true},
        lng: {type: Number, required: true},
        city: {type: String, required: true, trim: true},
        region: {type: String, required: true, trim: true}
    },
    year: {type: Number},
    theme: {type: String, required: true, enum: ['childhood', 'family', 'love', 'friendship', 'travel', 'school', 'work', 'home_neighborhood', 'celebration', 'music_culture', 'historical_event', 'vague_memory_dream']},
    visibility: {type: String, enum: ['public', 'private', 'personal'], default: 'personal'},
    photoUrl: {type: String, trim: true},
    createdAt: {type: Date, default: Date.now},
    modifiedAt: {type: Date, default: Date.now},
    stats: {
        listens: {type: Number, default: 0},
        shares: {type: Number, default: 0}
    },
})

const Souvenir = mongoose.model('Souvenir', souvenirSchema)

export default Souvenir