const db = require('../db/connection');
const Animals = require('../models/animals');
const Outfits = require('../models/outfits');

// read and return all animals
const getAllAnimals = async (req, res) => {
    try {
        const allAnimals = await Animals.find().populate('outfits');
        res.status(200).json(allAnimals);
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

// read and return a specific animal
const getAnimal = async (req, res) => {
    try {
        const specificAnimal = await Animals.findById(req.params.id);
        if (specificAnimal.outfits !== null || undefined || 0) {
            // following function is thanks to Magda for showing me a similar function in their controller
            const referencedOutfits = specificAnimal.outfits.forEach(async (req) => {
                const anOutfit = await Outfits.findById(specificAnimal.outfits);
                return {
                    "name": specificAnimal._id, 
                    "photo": specificAnimal.photo,
                    "photo-alt-text": specificAnimal["photo-alt-text"],
                    "outfits": anOutfit
                }
            })
        } 
        res.status(200).json(specificAnimal);
    } catch(error) {
        res.status(400).send(error);
    }
}

// update animal
const updateAnimal = async (req, res) => {
    try {
        const updatedAnimal = await Animals.findByIdAndUpdate(req.params.id, req.body, {new: true});
        const allAnimals = await Animals.find({});
        res.status(200).json(allAnimals);
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

// reference animal and outfit to each other
const makeMatch = async (req, res) => {
    try {
        //debuggathon with Rosemary
        const chosenAnimal = await Animals.findById(req.params.animalid);
        const chosenOutfit = await Outfits.findById(req.params.outfitid);
        if (chosenAnimal.outfits.includes(chosenOutfit._id) === false) {
            await chosenAnimal.outfits.push(chosenOutfit._id);
        }; 
        // special thanks to Rosmary for teaching me how and when to use .save() in a controller, and for showing me that it is the key to referencing two models to each other
        await chosenAnimal.save();
        if (chosenOutfit.animals.includes(chosenAnimal._id) === false) {
            await chosenOutfit.animals.push(chosenAnimal._id);
        };
        await chosenOutfit.save();
        const arr = [chosenOutfit, chosenAnimal];
        res.status(200).json(arr);  
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    getAllAnimals,
    createAnimal,
    getAnimal,
    updateAnimal,
    deleteAnimal,
    makeMatch
}

// code for getAnimal & makeMatch controllers are inspired by Rosemary & Magda's controllers forming referenced relationships