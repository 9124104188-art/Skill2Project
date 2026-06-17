const express = require('express');
const { getProjects, saveFavorite , getFavorites, deleteFavorite} = require('../controllers/projectController');

const router = express.Router();

router.get('/',getProjects);
router.post('/favorites',saveFavorite);
router.get('/favorites',getFavorites);
router.delete('/favorites/:id',deleteFavorite);


module.exports = router;