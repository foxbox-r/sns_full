module.exports = (sequelize,DataTypes)=>{
    const Post = sequelize.define("Post",{
        //id가 기본적으로 들어있음
        content:{
            type:DataTypes.TEXT,
            allowNull:false,
        }
    },{
        charset:"utf8mb4",//utf8:한글 mb4:이모티콘
        collate:"utf8mb4_general_ci"//한글,이모티콘 저장
    });
    Post.associate = (db)=>{
        db.Post.belongsTo(db.User); // post.addUser (생성) , post.getUser (가져오기) , post.removeUser (삭제) , post.setUser (수정)
        db.Post.hasMany(db.Comment);   // post.addComments (복수) , ...
        db.Post.hasMany(db.Image);  // post.addImages (복수) , ...
        db.Post.belongsToMany(db.Hashtag,{through:"PostHashtag"});  // post.addHashtags , ...
        db.Post.belongsToMany(db.User,{through:"Like",as:"Likers"});    // post.addLikers post.removeLikers (복수) , ...
        db.Post.belongsTo(db.Post,{as:"Retweet"});  // PostId => RetweetId , post.addRetweet (단수) , ...
    };
    return Post;
}