const express = require('express');
const router = express.Router();

const  {
    getAllAnimals, 
    createAnimal,
    getAnimal, 
    updateAnimal,
    deleteAnimal,
    makeMatch
} = require('../controllers/animals');

// get all Animals
router.get("/", getAllAnimals)

// add new Animal
router.post("/", createAnimal)

// get a specific Animal
router.get("/:id", getAnimal)

// update existing Animal
router.put("/:id", updateAnimal)

// delete existing Animal
router.delete("/:id", deleteAnimal)

// match one animal and one outfit together
router.put("/match/:id/:id2", makeMatch)

module.exports = router;