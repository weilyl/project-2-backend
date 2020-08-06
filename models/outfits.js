const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const outfitSchema = new Schema(
    {
        'name': {type: String},
        'photo': {type: String},
        'photo-alt-text': {type: String},
        'animals': [{type: Schema.Types.ObjectId, ref: 'Animal'}]
    }, 
    {timestamps: false}
)

module.exports = model('Outfit', outfitSchema);