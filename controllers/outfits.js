const db = require('../db/connection');
// const Animals = require('../models/animals');
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


// // update outfit 
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
