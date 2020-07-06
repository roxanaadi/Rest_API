const Post = require('../models/Post');
const postsRepositories = require('../repository/postsRepository');

//GET all the posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await postsRepositories.getRepositoryPosts();
    res.success(posts);
  }
  catch (err) {
    res.customedError({message: `Error GET all the posts: ${err}`});
  }
};

//GET a specific post
exports.getPost = async (req, res) => {
  try {
    const post = await postsRepositories.getRepositoryPost(req.params.postId);
    res.success(post);
  }
  catch (err) {
    res.customedError({message: `Error GET a specific post: ${err}`});
  }
};

//Delete a post
// we use {_id}, because this is how mongo generates automatically the id for us,
// eg.  {"_id": "5f0283205d419e063cbf7df5", "title": "third post" }
exports.deletePost = async (req, res) => {
  try {
     const deletedPost = await postsRepositories.deleteRepositoryPost({ _id: req.params.postId });
     res.success({message: `The post was deleted`});
  }
  catch (err) {
     res.customedError({message: `Error delete a post: ${err}`});
  }
};

//Update a post
exports.updatePost = async (req, res) => {
  try {
    //the first object ,_id: req.params.postId, is the search criteria,
    //the next object contains the specific information you want to change
      const postId = { _id: req.params.postId };
      const updatedPost = req.body;
      const post = await postsRepositories.editRepositoryPost(postId, updatedPost);
      res.success({message: `The post was updated`});
  }
  catch (err) {
    res.customedError({message: `Error PATCH/update a post: ${err}`});
 }
};

// Submit a post
//same code as below, but with async/await
exports.submitPost = async (req, res) => {
  const post = req.body;

  try {
    const newPost = postsRepositories.submitRepositoryPost(post);
    const savePost = await newPost.save();
    res.success(savePost);
  }
  catch (err){
    res.customedError({message: `Error POST/submit a post: ${err}`});
  }
};

// router.post('/', (req, res) => {
//   // console.log(req.body);
//   const post = new Post({
//     title: req.body.title,
//     description: req.body.description
//   });

//   post.save() //this return a promise
//       .then(data => {
//         //res.status(200).json(data);
//         console.log("inside then");
//         res.json(data);
//       })
//       .catch(err => {
//         //res.status(404).json({message: err});
//         res.json({ message: err});
//       });
// });