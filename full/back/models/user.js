module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define("User",{//mysql에서는 소문자변환+s => users
        //id가 기본적으로 들어있음
        email:{
            type:DataTypes.STRING(50),//STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
            allowNull:false,//필수
            unique:true,//고유한 값
        },
        nickname:{
            type:DataTypes.STRING(30),
            allowNull:false,//필수
        },
        password:{
            type:DataTypes.STRING(100),//암호화 고려해서 100
            allowNull:false,//필수
        },
    },{
        charset:"utf8",
        collate:"utf8_general_ci"//한글저장
    });  
    User.associate = (db)=>{
        db.User.hasMany(db.Post);
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post,{through:"Like",as:"Liked"});//through:테이블이름 ,as:컬럼이름, foreignKey:먼저찾을컬럼이름
        db.User.belongsToMany(db.User,{through:"Follow",as:"Followers",foreignKey:"FollowingId"});//
        db.User.belongsToMany(db.User,{through:"Follow",as:"Followings",foreignKey:"FollowerId"});
    };
    return User;
}