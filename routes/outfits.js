const express = require('express');
const router = express.Router();

const  {
    getAllOutfits,
    createOutfit,
    getOutfit,
    updateOutfit,
    deleteOutfit
} = require('../controllers/outfits');

// get all Outfits 
router.get("/", getAllOutfits)

// add new Outfit
router.post("/", createOutfit)

// get a specific Outfit
router.get("/:id", getOutfit)

// update existing Outfit
router.put("/:id", updateOutfit)

// delete existing Outfit
router.delete("/:id", deleteOutfit)

module.exports = router;