const db = require('../db/connection');
const Animals = require('../models/animals');
const Outfits = require('../models/outfits');
const { text } = require('express');

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

// const getAnimal = async (req, res) => {
//     try {
//         const specificAnimal = await Animals.findById(req.params.id);
//         if (specificAnimal.outfits !== null || undefined || 0) {
//             const referencedOutfits = specificAnimal.outfits.forEach(async (req) => {
//                 const anOutfit = await Outfits.findById(specificAnimal.outfits);
//                 return {
//                     "name": specificAnimal._id, 
//                     "photo": specificAnimal.photo,
//                     "photo-alt-text": specificAnimal["photo-alt-text"],
//                     "outfits": anOutfit
//                 }
//             })
//         } 
//         res.status(200).json(specificAnimal);
//     } catch(error) {
//         res.status(400).send(error);
//     }
// }

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
        await chosenAnimal.outfits.push(chosenOutfit._id);
        await chosenAnimal.save();
        await chosenOutfit.animals.push(chosenAnimal._id);
        await chosenOutfit.save();
        
        console.log(chosenAnimal, chosenOutfit)

        // from stackoverflow
        // const chosenAnimal = await Animals.findById(req.params.animalid);
        // chosenAnimal.save(function (err) { 
        //     async () => {
        //     if (err) return handleError(err);

        //     const chosenOutfit = await Outfits.findById(req.params.outfitid).updateOne(animals.push(chosenAnimal._id));

        //     chosenOutfit.save(function (err) {
        //         if (err) return handleError(err);
        //     })
        // }
        // });
        // testing with Lia
        // console.log(req.params.animalid, req.params.outfitid, "hello");
        // const chosenAnimal = await Animals.findById(req.params.animalid).populate('outfits');
        // console.log(req.params.animalid, req.params.outfitid, "hello2");
        // //const chosenOutfit = await Outfits.findById(req.params.outfitid);
        // //console.log(chosenAnimal, chosenOutfit, req.params.outfitid, chosenOutfit._id, ObjectId(chosenOutfit._id));
        // chosenAnimal.outfits.push(req.params.outfitid);
        // //chosenOutfit.animals.push(req.params.animalid);
        res.status(200).json(chosenAnimal);  
    } catch (error) {
        res.status(400).send(error);
    }
}

// const returnAnimal = await Animals.findById(req.params.id);
//         const returnOutfit = await Outfits.findById(req.params.id2);
//         returnAnimal.outfits.push(returnOutfit);
//         returnOutfit.animals.push(returnAnimal);

// const makeMatch = async (req, res) => {
//     try {
//         const returnAnimal = await Animals.findById(req.params.id);
//         const returnAnimal2 = await Animals.findById(req.params.id2);
//         const returnOutfit = await Outfits.findById(req.params.id);
//         const returnOutfit2 = await Outfits.findById(req.params.id2);
//         if (returnAnimal !== null || undefined || 0 && returnOutfit2 !== null || undefined || 0) {
//             returnAnimal.outfits.push(returnOutfit2);
//             returnOutfit2.animals.push(returnAnimal);
//         } else if (returnAnimal2 !== null || undefined || 0 && returnOutfit0 !== null || undefined || 0) {
//             returnAnimal2.outfits.push(returnOutfit);
//             returnOutfit.animals.push(returnAnimal2);
//         }  
//     } catch (error) {
//         res.status(400).send(error);
//     }
// }

module.exports = {
    getAllAnimals,
    createAnimal,
    getAnimal,
    updateAnimal,
    deleteAnimal,
    makeMatch
}

// code for getAnimal & makeMatch controllers are inspired by Rosemary & Magda's controllers forming referenced relationships