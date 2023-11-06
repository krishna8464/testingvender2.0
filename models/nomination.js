const DataTypes = require("sequelize");
const { sequelize } = require("../config/db");



const Nomination = sequelize.define('tbl_add_nomination_iyc', {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    MEMBER_ID: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    FIRST_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    LAST_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    CONTESTING_FOR: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    LEVEL1: {
      type: DataTypes.CHAR(3),
      allowNull: true,
    },
    LEVEL2: {
      type: DataTypes.CHAR(3),
      allowNull: true,
    },
    LEVEL3: {
      type: DataTypes.CHAR(3),
      allowNull: true,
    },
    UPLOAD_CATEGORY_DOC: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    BPL_CARD: {
      type: DataTypes.CHAR(5),
      allowNull: true,
    },
    UPLOAD_BPL_CARD_DOC: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    COURT_CASE_PENDING: {
      type: DataTypes.CHAR(5),
      allowNull: true,
    },
    CRIMINAL_CASES: {
      type: DataTypes.CHAR(5),
      allowNull: true,
    },
    UPLOAD_CRIMINAL_CASE_DOC: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    PREVIOUS_OB: {
      type: DataTypes.CHAR(1),
      allowNull: true,
    },
    PYC_PRESIDENT: {
      type: DataTypes.CHAR(1),
      allowNull: true,
    },
    CREATED_BY: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    CREATED_ON: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    MODIFIED_BY: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    MODIFIED_ON: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DECLARATION_STATUS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
    CASE_DESCRIPTION: {
      type: DataTypes.STRING(4000),
      allowNull: true,
    },
    OLD_BARCODE: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    AMOUNT: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    PAYMENT_STATUS: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    NOMINATION_STATUS: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    NOMINATION_REJECT_REASON: {
      type: DataTypes.STRING(2000),
      allowNull: true,
    },
    ID_PROOF_DOC: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    LEVEL4: {
      type: DataTypes.CHAR(6),
      allowNull: true,
    },
    ID_PROOF: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    BSN: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    GENDER: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    CATEGORY: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    MOBILE: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    DOB: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    MASTER_LEVEL_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    POST_CODE: {
      type: DataTypes.CHAR(5),
      allowNull: true,
    },
    SHOW_NOMINATION: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
      defaultValue: 1,
    },
    CONCENSUS_STATUS: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
      defaultValue: 0,
    },
    LEVEL5: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    REMARK: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    EMAIL: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    LEVEL6: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    BLOOD_GROUP: {
      type: DataTypes.CHAR(10),
      allowNull: true,
    },
  },{
    tableName: 'tbl_add_nomination_iyc',
    timestamps: true,
    createdAt: 'CREATED_ON',
    updatedAt: 'MODIFIED_ON',
    charset: 'utf8mb3',
    collate: 'utf8mb3_general_ci',
    indexes: [
        { unique: true, fields: ['MEMBER_ID'] },
        { fields: ['LEVEL1'] },
        { fields: ['LEVEL2'] },
        { fields: ['LEVEL3'] },
        { fields: ['MOBILE'] },
        { fields: ['CONTESTING_FOR'] },
      ],
  });

sequelize.sync()
.then(() => {
    console.log("tbl_add_nomination_iyc table Synced successfully")
})
.catch((e) => {
    console.log(e)
    console.log("failed to sync tbl_add_nomination_iyc table")
})

module.exports = {Nomination}