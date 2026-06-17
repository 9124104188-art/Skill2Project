const favorites = require('../models/favorite');
const generatecode = require('../services/geminiService');

async function getProjects(req, res) {
    try{
        const skill = req.query.skill;

        if(!skill){
            return res.status(400).json({message: 'Skill is required'});
        }

        const ideas = await generatecode(skill);
        res.json(ideas);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
    

    
}

async function saveFavorite(req, res) {
    try{
        const existingFavorite = await favorites.findOne({
            title: req.body.title,
    });
        if(existingFavorite){
            return res.status(400).json({message: 'Project already exists in favorites'});
        }
        const favorite = await favorites.create(req.body);
        res.status(201).json({message:'Project saved to favorites successfully',
            favorite}
            );
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

async function getFavorites(req, res) {
    try{
        const favorite = await favorites.find();
        res.json(favorite);
}
catch(error){
    res.status(500).json({message: error.message});
}
}

async function deleteFavorite(req, res) {
    try{
        const id = req.params.id;
        await favorites.findByIdAndDelete(id);
        res.json({message: 'Project removed from favorites successfully'});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}
module.exports = {
    getProjects,
    saveFavorite,
    getFavorites,
    deleteFavorite
};