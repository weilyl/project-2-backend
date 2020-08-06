const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const animalSchema = new Schema(
    {
        'name': {type: String},
        'photo': {type: String},
        'photo-alt-text': {type: String},
        'outfits': [{type: Schema.Types.ObjectId, ref: 'Outfit'}]
    }, 
    {timestamps: false}
)

module.exports = model('Animal', animalSchema);