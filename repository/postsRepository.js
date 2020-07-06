const mongoose = require('mongoose');
const Post = require('../models/Post');


const getRepositoryPosts = () => Post.find();

const getRepositoryPost = (postId) => Post.findById(postId);

const deleteRepositoryPost = (postId) => Post.deleteOne(postId);

const submitRepositoryPost = (postData) => {
    const {title, description} = postData;
    const post = new Post({
      title,
      description
  });
  return post;
};

const editRepositoryPost = (postId, sentData) => {
  const {title, description} = sentData;
  return Post.updateOne(
        postId,
        { $set : {title,
                  description
                }
        }); 
};

module.exports = {
  getRepositoryPosts,
  getRepositoryPost,
  deleteRepositoryPost,
  submitRepositoryPost,
  editRepositoryPost
}

