import CommentModel from "../models/CommentModel.js";

export const getComments = async (req, res) => {
    try {
      const comments = await CommentModel.find({ postId: req.params.postId });
      res.status(200).json(comments);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
};

export const createComment = async (req, res) => {
    const newComment = new CommentModel(req.body);
    try {
        const savedComment = await newComment.save();
        res.status(200).json(savedComment);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Comment Creating failed"});
    }
};

export const updateComment = async (req, res) => {
    try {
      const comment = await CommentModel.findById(req.params.id);
      if (comment.userId === req.body.userId) {
        await comment.updateOne({ $set: req.body });
        res.status(200).json({message: "the post has been updated"});
      } else {
        res.status(403).json({message: "you can update only your comment"});
      }
    } catch (err) {
        res.status(500).json(err);
    }
  };

  export const deleteComment = async (req, res) => {
    try {
        const comment = await CommentModel.findById(req.params.id);
        if (comment.userId === req.body.userId) {
            await comment.deleteOne();
            res.status(200).json({message: "the post has been deleted"});
        } else {
            return res.status(403).json({message: "you can delete only your post"});
        }
    } catch (err) {
        res.status(500).json(err);
    }
  };

  export const likeComment = async (req, res) => {
    try {
        const comment = await CommentModel.findById(req.params.id);
      if (!comment.likes.includes(req.body.userId)) {
        await comment.updateOne({ $push: { likes: req.body.userId } });
        res.status(200).json("The post has been liked");
      } else {
        await comment.updateOne({ $pull: { likes: req.body.userId } });
        res.status(200).json("The post has been disliked");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };