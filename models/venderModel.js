
const DataTypes = require("sequelize");
const { sequelize } = require("../config/db");

const  Users  = require("./userModel")

const Vender=sequelize.define("vender",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    number:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    role: {
        type: DataTypes.STRING,
        allowNull:false
    },
    subrole : {
        type : DataTypes.STRING,
        defaultValue : "",
    },
    count : {
        type : DataTypes.INTEGER,
        defaultValue: 0,
    },
    otp : {
        type : DataTypes.STRING,
        defaultValue : "000000",
    },status: {
        type: DataTypes.STRING,
        defaultValue: 'active', // Set the default value to 'active'
    },
    state_code: {
        type: DataTypes.STRING, // You can adjust the data type as needed
        allowNull: false, // Or true, depending on whether it can be null
    },
    history: {
        type: DataTypes.TEXT, 
        allowNull: false
      },
      district_code: {
        type: DataTypes.TEXT, // Or use STRING if the column has a fixed length
        allowNull: true,
      },
});
sequelize.sync()
.then(() => {
    console.log("Vender table Synced successfully")
})
.catch(() => {
    console.log("failed to Sync Vender table")
})

module.exports={Vender}