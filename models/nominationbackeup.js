const DataTypes = require("sequelize");
const { sequelize } = require("../config/db");

const Nominationbackup = sequelize.define("nominationbackup",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    venderID:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    memberID:{
        type:DataTypes.STRING,
        allowNull:false
    },
    oldupdate:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    latestupdate:{
        type:DataTypes.TEXT,
        allowNull:false
    }
});

sequelize.sync()
.then(() => {
    console.log("nominationbackup table Synced successfully")
})
.catch(() => {
    console.log("failed to sync nominationbackup table")
})

module.exports={Nominationbackup}