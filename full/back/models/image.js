module.exports = (sequelize,DataTypes)=>{
    const Image = sequelize.define("Image",{
        //id가 기본적으로 들어있음
        src:{
            type:DataTypes.STRING(250),
            allowNull:true,
        }
    },{
        charset:"utf8",//utf8:한글 
        collate:"utf8_general_ci"//한글,이모티콘 저장
    });
    Image.associate = (db)=>{
        db.Image.belongsTo(db.Post);
    };
    return Image;
}