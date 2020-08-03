const db = require('../db/connection');
const Animals = require('../models/animals');
const Outfits = require('../models/outfits');

// read and return all animals
const getAllAnimals = async (req, res) => {
    try {
        const allAnimals = await Animals.find();
        res.status(200).json(allAnimals);
    } catch(error) {
        res.status(400).send(error);
    }
}

// read and return all outfits
const getAllOutfits = async (req, res) => {
    try {
        const allOutfits = await Outfits.find();
        res.status(200).json(allOutfits);
    } catch(error) {
        res.status(400).send(error);
    }
}

// create new animal
const createAnimal = async (req, res) => {
    try {
        const newAnimal = await Animals.create(req.body);
        const allAnimals = await Animals.find();
        res.status(200).json(allAnimals);
    } catch(error) {
        res.status(400).send(error);
    }
}

// create new outfit

const createOutfit = async (req, res) => {
    try {
        const newOutfit = await Outfits.create(req.body);
        const allOutfits = await Outfits.find();
        res.status(200).json(allOutfits);
    } catch(error) {
        res.status(400).send(error);
    }
}

// update animal

const updateAnimal = async (req, res) => {
    try {
        const updatedAnimal = await Animals.findByIdAndUpdate(req.params.id, req.body, {new: true});
        const allAnimals = await Animals.find();
        res.status(200).json(allAnimals);
    } catch(error) {
        res.status(400).send(error);
    }
}

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

// delete animal
const deleteAnimal = async (req, res) => {
    try {
        const deletedAnimal = await Animals.findByIdAndRemove(req.params.id);
        const allAnimals = await Animals.find();
        res.status(200).json(allAnimals);
    } catch(error) {
        res.status(400).send(error);
    }
}

// delete outfit 
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
    getAllAnimals,
    getAllOutfits,
    createAnimal,
    createOutfit,
    updateAnimal,
    updateOutfit,
    deleteAnimal,
    deleteOutfit
}
