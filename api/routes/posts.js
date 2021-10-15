const router = require("express").Router();
const Post = require("../models/Post");

// CREATE Post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        return res.status(200).json("Successfully added new post: " + savedPost)
    }catch(err){
        return res.status(500).json("Error trying to post: " + err)
    }
})

// UPDATE Post
router.put("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username){
            try{
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
                return res.status(200).json("Successfully updated post: " + updatedPost)
            }catch(err){
                return res.status(500).json("Error trying to update post: " + err)
            }
        }else{
            return res.status(401).json("You are only authorised to update your posts!")
        }
    }catch(err){
        return res.status(500).json("Error trying to find post: " + err)
    }
});

// DELETE Post
router.delete("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username){
            try{
                await post.delete();
                return res.status(200).json("Successfully deleted post!")
            }catch(err){
                return res.status(500).json("Error trying to delete post: " + err)
            }
        }else{
            return res.status(401).json("You are only authorised to delete your posts!")
        }
    }catch(err){
        return res.status(500).json("Error trying to find post: " + err)
    }
});

// GET Post
router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      return res.status(200).json(post);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

// GET All Posts
router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
      let posts;
      if(username){
          posts = await Post.find({username});
      }else if(catName){
        posts = await Post.find({categories: {
            $in:[catName]
        }})
      }else{
          posts = await Post.find();
      }
      return res.status(200).json(posts);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

module.exports = router;