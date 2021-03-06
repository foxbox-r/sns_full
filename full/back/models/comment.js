module.exports = (sequelize,DataTypes)=>{
    const Comment = sequelize.define("Comment",{
        //id가 기본적으로 들어있음
        content:{
            type:DataTypes.TEXT,
            allowNull:false,
        }
    },{
        charset:"utf8mb4",//utf8:한글 mb4:이모티콘
        collate:"utf8mb4_general_ci"//한글,이모티콘 저장
    });
    //column => UserId,PostId,content
    Comment.associate = (db)=>{
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    };
    return Comment;
}