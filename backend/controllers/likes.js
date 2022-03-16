const {Likes} = require('../models');

exports.like = async (req,res) => {
    const {PostId} = req.body;
    const UserId = req.user.id;

    const found = await Likes.findOne({ where: { PostId: PostId, UserId: UserId } });

    if(!found){
        await Likes.create({PostId: PostId, UserId: UserId});
        res.json({Liked: true});
    }else{
        await Likes.destroy({where: { PostId: PostId, UserId: UserId } });
        res.json({Liked: false});
    }
}