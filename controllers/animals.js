const db = require('../db/connection');
const Animals = require('../models/animals');

// read and return all animals
const getAllAnimals = async (req, res) => {
    try {
        const allAnimals = await Animals.find();
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

module.exports = {
    getAllAnimals,
    createAnimal,
    updateAnimal,
    deleteAnimal
}
