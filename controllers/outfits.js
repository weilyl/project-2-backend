const db = require('../db/connection');
const Outfits = require('../models/outfits');

// read and return all outfits
const getAllOutfits = async (req, res) => {
    try {
        const allOutfits = await Outfits.find();
        res.status(200).json(allOutfits);
    } catch(error) {
        res.status(400).send(error);
    }
}


// // create new outfit

const createOutfit = async (req, res) => {
    try {
        const newOutfit = await Outfits.create(req.body);
        const allOutfits = await Outfits.find();
        res.status(200).json(allOutfits);
    } catch(error) {
        res.status(400).send(error);
    }
}

// return specific Outfit
// const getOutfit = async (req, res) => {
//     try {
//         const specificOutfit = await Animals.findById(req.params.id);
//         if (specificOutfit.outfits !== null || undefined || 0) {
//             const referencedAnimals = specificAnimal.outfits.forEach(async (req) => {
//                 const anOutfit = await Outfits.findById(specificAnimal.outfits);
//                 return {
//                     "name": specificAnimal._id, 
//                     "photo": specificAnimal.photo,
//                     "photo-alt-text": specificAnimal["photo-alt-text"],
//                     "outfits": anOutfit
//                 }
//             })
//         } 
//         res.status(200).json(specificAnimal);
//     } catch(error) {
//         res.status(400).send(error);
//     }
// }

// update outfit 
const updateOutfit = async (req, res) => {
    try {
        const updatedOutfit = await Outfits.findByIdAndUpdate(req.params.id, req.body, {new: true});
        const allOutfits = await Outfits.find();
        res.status(200).json(allOutfits);
    } catch(error) {
        res.status(400).send(error);
    }
}

// // delete outfit 
const deleteOutfit = async (req, res) => {
    try {
        const deletedOutfit = await Outfits.findByIdAndRemove(req.params.id);
        const allOutfits = await Outfits.find();
        res.status(200).json(allOutfits);
    } catch(error) {
        res.status(400).send(error);
    }
}

module.exports = {
    getAllOutfits,
    createOutfit,
    updateOutfit,
    deleteOutfit
}
