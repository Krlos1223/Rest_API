const express = require('express');
const router = express.Router();
const Post = require('../models/Post_modules');  // Asegúrate de que la ruta sea correcta

router.post('/', async (req, res) => {
    const post = new post({  // Usa 'Post' para crear una nueva instancia
        title: req.body.title,
        description: req.body.description        
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);        
    } catch (error) {
        res.json({message: error});
    }
});

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({message: error});
    }    
});

router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    } catch (error) {
        res.json({message: error});
    }    
});

router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}});
        res.json(updatePost);
    } catch (error) {
        res.json({message: error});
    }    
});

module.exports = router;
