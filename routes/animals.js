const express = require('express');
const router = express.Router();

const  {
    getAllAnimals, 
    // getAllOutfits,
    createAnimal, 
    // createOutfit,
    updateAnimal,
    // updateOutfit,
    deleteAnimal//,
    // deleteOutfit
} = require('../controllers/animals');

// get all Animals
router.get("/", getAllAnimals)

// get all Outfits 
// router.get("/outfits", getAllOutfits)

// add new Animal
router.post("/", createAnimal)

// // add new Outfit
// router.post("/outfits", createOutfit)

// update existing Animal
router.put("/:id", updateAnimal)

// // update existing Outfit
// router.put("/outfits/:id", updateOutfit)

// delete existing Animal
router.delete("/:id", deleteAnimal)

// // delete existing Outfit
// router.delete("/outfits/:id", deleteOutfit)


module.exports = router;