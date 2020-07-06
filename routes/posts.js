const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const postsControllers = require('../controllers/postsControllers');

//GET all the posts
router.get('/', postsControllers.getPosts);

//GET a specific post
router.get ('/:postId', postsControllers.getPost);

//Delete a post
router.delete('/:postId', postsControllers.deletePost);

//Update a post
router.patch('/:postId', postsControllers.updatePost);

//Submit a post
router.post('/', postsControllers.submitPost);


module.exports =router;