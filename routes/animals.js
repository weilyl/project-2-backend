const express = require('express');
const router = express.Router();

const  {
    getAllAnimals, 
    createAnimal, 
    updateAnimal,
    deleteAnimal
} = require('../controllers/animals');

// get all Animals
router.get("/", getAllAnimals)

// add new Animal
router.post("/", createAnimal)

// update existing Animal
router.put("/:id", updateAnimal)

// delete existing Animal
router.delete("/:id", deleteAnimal)

module.exports = router;