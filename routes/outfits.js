const express = require('express');
const router = express.Router();
const  {
    getAllOutfits,
    createOutfit,
    updateOutfit,
    deleteOutfit
} = require('../controllers/outfits');

// get all Outfits 
router.get("/", getAllOutfits)

// add new Outfit
router.post("/", createOutfit)


// update existing Outfit
router.put("/:id", updateOutfit)

// delete existing Outfit
router.delete("/:id", deleteOutfit)

module.exports = router;