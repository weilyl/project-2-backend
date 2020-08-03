const express = require('express');
const router = express.Router();
const  {
    getAllAnimals, 
    getAllOutfits,
    createAnimal, 
    createOutfit,
    updateAnimal,
    updateOutfit,
    deleteAnimal,
    deleteOutfit} = require('../controllers');

// get all Animals
router.get("/animals", getAllAnimals)

// get all Outfits 
router.get("/outfits", getAllOutfits)

// add new Animal
router.post("/animals", createAnimal)

// add new Outfit
router.post("/outfits", createOutfit)

// update existing Animal
router.put("/animals/:id", updateAnimal)

// update existing Outfit
router.put("/outfits/:id", updateOutfit)

// delete existing Animal
router.delete("/animals/:id", deleteAnimal)

// delete existing Outfit
router.delete("/outfits/:id", deleteOutfit)