const { Vender } = require("../models/venderModel");
// const { client } = require("../config/db");
const { Tocken } = require("../models/tockenModel");
const { Users } = require("../models/userModel");
const { sequelize } = require("../config/db");
const { Sequelize, DataTypes, Op } = require("sequelize");

const axios = require("axios");

const jwt = require("jsonwebtoken");

exports.createVender = async (req, res) => {
  let body = req.body;
  const districts = `{
    "AN": {
      "ID": 1,
      "MASTER_STATE_CODE": "AN",
      "STATE_NAME": "Andaman and Nicobar",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "AP": {
      "ID": 2,
      "MASTER_STATE_CODE": "AP",
      "STATE_NAME": "Andhra Pradesh",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "AS": {
      "ID": 3,
      "MASTER_STATE_CODE": "AS",
      "STATE_NAME": "Assam",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "BR": {
      "ID": 4,
      "MASTER_STATE_CODE": "BR",
      "STATE_NAME": "Bihar",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "CH": {
      "ID": 5,
      "MASTER_STATE_CODE": "CH",
      "STATE_NAME": "Chandigarh",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "CG": {
      "ID": 6,
      "MASTER_STATE_CODE": "CG",
      "STATE_NAME": "Chattisgarh",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "DD": {
      "ID": 7,
      "MASTER_STATE_CODE": "DD",
      "STATE_NAME": "Daman and Diu",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "DL": {
      "ID": 8,
      "MASTER_STATE_CODE": "DL",
      "STATE_NAME": "Delhi",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "DN": {
      "ID": 9,
      "MASTER_STATE_CODE": "DN",
      "STATE_NAME": "Dadar and Nagar Haveli",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "GA": {
      "ID": 10,
      "MASTER_STATE_CODE": "GA",
      "STATE_NAME": "Goa",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "GJ": {
      "ID": 11,
      "MASTER_STATE_CODE": "GJ",
      "STATE_NAME": "Gujarat",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "HR": {
      "ID": 12,
      "MASTER_STATE_CODE": "HR",
      "STATE_NAME": "Haryana",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "JH": {
      "ID": 13,
      "MASTER_STATE_CODE": "JH",
      "STATE_NAME": "Jharkhand",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "JK": {
      "ID": 14,
      "MASTER_STATE_CODE": "JK",
      "STATE_NAME": "Jammu and Kashmir",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "KA": {
      "ID": 15,
      "MASTER_STATE_CODE": "KA",
      "STATE_NAME": "Karnataka",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "KL": {
      "ID": 16,
      "MASTER_STATE_CODE": "KL",
      "STATE_NAME": "Kerala",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "MB": {
      "ID": 17,
      "MASTER_STATE_CODE": "MB",
      "STATE_NAME": "Mumbai",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "MH": {
      "ID": 18,
      "MASTER_STATE_CODE": "MH",
      "STATE_NAME": "Maharashtra",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "ML": {
      "ID": 19,
      "MASTER_STATE_CODE": "ML",
      "STATE_NAME": "Meghalaya",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "MN": {
      "ID": 20,
      "MASTER_STATE_CODE": "MN",
      "STATE_NAME": "Manipur",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "MP": {
      "ID": 21,
      "MASTER_STATE_CODE": "MP",
      "STATE_NAME": "Madhya Pradesh",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "MZ": {
      "ID": 22,
      "MASTER_STATE_CODE": "MZ",
      "STATE_NAME": "Mizoram",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "OR": {
      "ID": 23,
      "MASTER_STATE_CODE": "OR",
      "STATE_NAME": "Odisha",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "PB": {
      "ID": 24,
      "MASTER_STATE_CODE": "PB",
      "STATE_NAME": "Punjab",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "PY": {
      "ID": 25,
      "MASTER_STATE_CODE": "PY",
      "STATE_NAME": "Puducherry",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "RJ": {
      "ID": 26,
      "MASTER_STATE_CODE": "RJ",
      "STATE_NAME": "Rajasthan",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "TN": {
      "ID": 27,
      "MASTER_STATE_CODE": "TN",
      "STATE_NAME": "Tamil Nadu",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "TR": {
      "ID": 28,
      "MASTER_STATE_CODE": "TR",
      "STATE_NAME": "Tripura",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "TS": {
      "ID": 29,
      "MASTER_STATE_CODE": "TS",
      "STATE_NAME": "Training State",
      "Districts": {},
      "IS_ENABLED": 0
    },
    "UP": {
      "ID": 30,
      "MASTER_STATE_CODE": "UP",
      "STATE_NAME": "Uttar Pradesh",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "UK": {
      "ID": 31,
      "MASTER_STATE_CODE": "UK",
      "STATE_NAME": "Uttarakhand",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "WB": {
      "ID": 32,
      "MASTER_STATE_CODE": "WB",
      "STATE_NAME": "West Bengal",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "HP": {
      "ID": 33,
      "MASTER_STATE_CODE": "HP",
      "STATE_NAME": "Himachal Pradesh",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "TL": {
      "ID": 34,
      "MASTER_STATE_CODE": "TL",
      "STATE_NAME": "Telangana",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "AR": {
      "ID": 35,
      "MASTER_STATE_CODE": "AR",
      "STATE_NAME": "Arunachal Pradesh",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "LK": {
      "ID": 36,
      "MASTER_STATE_CODE": "LK",
      "STATE_NAME": "Lakshadweep",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "NL": {
      "ID": 37,
      "MASTER_STATE_CODE": "NL",
      "STATE_NAME": "Nagaland",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "SK": {
      "ID": 38,
      "MASTER_STATE_CODE": "SK",
      "STATE_NAME": "Sikkim",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "LA": {
      "ID": 39,
      "MASTER_STATE_CODE": "LA",
      "STATE_NAME": "Ladakh",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "U1": {
      "ID": 40,
      "MASTER_STATE_CODE": "U1",
      "STATE_NAME": "Uttar Pradesh East",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "U2": {
      "ID": 41,
      "MASTER_STATE_CODE": "U2",
      "STATE_NAME": "Uttar Pradesh West",
      "Districts": {},
      "IS_ENABLED": 1
    },
    "U3": {
      "ID": 42,
      "MASTER_STATE_CODE": "U3",
      "STATE_NAME": "Uttar Pradesh Central",
      "Districts": {},
      "IS_ENABLED": 1
    }
  }`

  const history = `{
    "AN": {
      "ID": 1,
      "MASTER_STATE_CODE": "AN",
      "STATE_NAME": "Andaman and Nicobar",
      "History": [],
      "IS_ENABLED": 1
    },
    "AP": {
      "ID": 2,
      "MASTER_STATE_CODE": "AP",
      "STATE_NAME": "Andhra Pradesh",
      "History": [],
      "IS_ENABLED": 1
    },
    "AS": {
      "ID": 3,
      "MASTER_STATE_CODE": "AS",
      "STATE_NAME": "Assam",
      "History": [],
      "IS_ENABLED": 1
    },
    "BR": {
      "ID": 4,
      "MASTER_STATE_CODE": "BR",
      "STATE_NAME": "Bihar",
      "History": [],
      "IS_ENABLED": 1
    },
    "CH": {
      "ID": 5,
      "MASTER_STATE_CODE": "CH",
      "STATE_NAME": "Chandigarh",
      "History": [],
      "IS_ENABLED": 1
    },
    "CG": {
      "ID": 6,
      "MASTER_STATE_CODE": "CG",
      "STATE_NAME": "Chattisgarh",
      "History": [],
      "IS_ENABLED": 1
    },
    "DD": {
      "ID": 7,
      "MASTER_STATE_CODE": "DD",
      "STATE_NAME": "Daman and Diu",
      "History": [],
      "IS_ENABLED": 1
    },
    "DL": {
      "ID": 8,
      "MASTER_STATE_CODE": "DL",
      "STATE_NAME": "Delhi",
      "History": [],
      "IS_ENABLED": 1
    },
    "DN": {
      "ID": 9,
      "MASTER_STATE_CODE": "DN",
      "STATE_NAME": "Dadar and Nagar Haveli",
      "History": [],
      "IS_ENABLED": 1
    },
    "GA": {
      "ID": 10,
      "MASTER_STATE_CODE": "GA",
      "STATE_NAME": "Goa",
      "History": [],
      "IS_ENABLED": 1
    },
    "GJ": {
      "ID": 11,
      "MASTER_STATE_CODE": "GJ",
      "STATE_NAME": "Gujarat",
      "History": [],
      "IS_ENABLED": 1
    },
    "HR": {
      "ID": 12,
      "MASTER_STATE_CODE": "HR",
      "STATE_NAME": "Haryana",
      "History": [],
      "IS_ENABLED": 1
    },
    "JH": {
      "ID": 13,
      "MASTER_STATE_CODE": "JH",
      "STATE_NAME": "Jharkhand",
      "History": [],
      "IS_ENABLED": 1
    },
    "JK": {
      "ID": 14,
      "MASTER_STATE_CODE": "JK",
      "STATE_NAME": "Jammu and Kashmir",
      "History": [],
      "IS_ENABLED": 1
    },
    "KA": {
      "ID": 15,
      "MASTER_STATE_CODE": "KA",
      "STATE_NAME": "Karnataka",
      "History": [],
      "IS_ENABLED": 1
    },
    "KL": {
      "ID": 16,
      "MASTER_STATE_CODE": "KL",
      "STATE_NAME": "Kerala",
      "History": [],
      "IS_ENABLED": 1
    },
    "MB": {
      "ID": 17,
      "MASTER_STATE_CODE": "MB",
      "STATE_NAME": "Mumbai",
      "History": [],
      "IS_ENABLED": 1
    },
    "MH": {
      "ID": 18,
      "MASTER_STATE_CODE": "MH",
      "STATE_NAME": "Maharashtra",
      "History": [],
      "IS_ENABLED": 1
    },
    "ML": {
      "ID": 19,
      "MASTER_STATE_CODE": "ML",
      "STATE_NAME": "Meghalaya",
      "History": [],
      "IS_ENABLED": 1
    },
    "MN": {
      "ID": 20,
      "MASTER_STATE_CODE": "MN",
      "STATE_NAME": "Manipur",
      "History": [],
      "IS_ENABLED": 1
    },
    "MP": {
      "ID": 21,
      "MASTER_STATE_CODE": "MP",
      "STATE_NAME": "Madhya Pradesh",
      "History": [],
      "IS_ENABLED": 1
    },
    "MZ": {
      "ID": 22,
      "MASTER_STATE_CODE": "MZ",
      "STATE_NAME": "Mizoram",
      "History": [],
      "IS_ENABLED": 1
    },
    "OR": {
      "ID": 23,
      "MASTER_STATE_CODE": "OR",
      "STATE_NAME": "Odisha",
      "History": [],
      "IS_ENABLED": 1
    },
    "PB": {
      "ID": 24,
      "MASTER_STATE_CODE": "PB",
      "STATE_NAME": "Punjab",
      "History": [],
      "IS_ENABLED": 1
    },
    "PY": {
      "ID": 25,
      "MASTER_STATE_CODE": "PY",
      "STATE_NAME": "Puducherry",
      "History": [],
      "IS_ENABLED": 1
    },
    "RJ": {
      "ID": 26,
      "MASTER_STATE_CODE": "RJ",
      "STATE_NAME": "Rajasthan",
      "History": [],
      "IS_ENABLED": 1
    },
    "TN": {
      "ID": 27,
      "MASTER_STATE_CODE": "TN",
      "STATE_NAME": "Tamil Nadu",
      "History": [],
      "IS_ENABLED": 1
    },
    "TR": {
      "ID": 28,
      "MASTER_STATE_CODE": "TR",
      "STATE_NAME": "Tripura",
      "History": [],
      "IS_ENABLED": 1
    },
    "TS": {
      "ID": 29,
      "MASTER_STATE_CODE": "TS",
      "STATE_NAME": "Training State",
      "History": [],
      "IS_ENABLED": 0
    },
    "UP": {
      "ID": 30,
      "MASTER_STATE_CODE": "UP",
      "STATE_NAME": "Uttar Pradesh",
      "History": [],
      "IS_ENABLED": 1
    },
    "UK": {
      "ID": 31,
      "MASTER_STATE_CODE": "UK",
      "STATE_NAME": "Uttarakhand",
      "History": [],
      "IS_ENABLED": 1
    },
    "WB": {
      "ID": 32,
      "MASTER_STATE_CODE": "WB",
      "STATE_NAME": "West Bengal",
      "History": [],
      "IS_ENABLED": 1
    },
    "HP": {
      "ID": 33,
      "MASTER_STATE_CODE": "HP",
      "STATE_NAME": "Himachal Pradesh",
      "History": [],
      "IS_ENABLED": 1
    },
    "TL": {
      "ID": 34,
      "MASTER_STATE_CODE": "TL",
      "STATE_NAME": "Telangana",
      "History": [],
      "IS_ENABLED": 1
    },
    "AR": {
      "ID": 35,
      "MASTER_STATE_CODE": "AR",
      "STATE_NAME": "Arunachal Pradesh",
      "History": [],
      "IS_ENABLED": 1
    },
    "LK": {
      "ID": 36,
      "MASTER_STATE_CODE": "LK",
      "STATE_NAME": "Lakshadweep",
      "History": [],
      "IS_ENABLED": 1
    },
    "NL": {
      "ID": 37,
      "MASTER_STATE_CODE": "NL",
      "STATE_NAME": "Nagaland",
      "History": [],
      "IS_ENABLED": 1
    },
    "SK": {
      "ID": 38,
      "MASTER_STATE_CODE": "SK",
      "STATE_NAME": "Sikkim",
      "History": [],
      "IS_ENABLED": 1
    },
    "LA": {
      "ID": 39,
      "MASTER_STATE_CODE": "LA",
      "STATE_NAME": "Ladakh",
      "History": [],
      "IS_ENABLED": 1
    },
    "U1": {
      "ID": 40,
      "MASTER_STATE_CODE": "U1",
      "STATE_NAME": "Uttar Pradesh East",
      "History": [],
      "IS_ENABLED": 1
    },
    "U2": {
      "ID": 41,
      "MASTER_STATE_CODE": "U2",
      "STATE_NAME": "Uttar Pradesh West",
      "History": [],
      "IS_ENABLED": 1
    },
    "U3": {
      "ID": 42,
      "MASTER_STATE_CODE": "U3",
      "STATE_NAME": "Uttar Pradesh Central",
      "History": [],
      "IS_ENABLED": 1
    }
  }`

  body.district_code = districts
  body.history = history
  // console.log(body)
  try {
    let vender = await Vender.create(body);
    res.status(201).json(vender);
  } catch (error) {
    res.status(409).json({ message: "Vender already exist" });
  }
};

exports.getOTP = async (req, res) => {
  let { number } = req.body;
  try {
    let venderData = await Vender.findOne({ where: { number: number } });
    let body = [venderData];
    // console.log(venderData.status);
    if (venderData.status === "deactivate") {
      res.status(201).json({ message: "Vender is not active" });
    } else {
      if (body[0] === null) {
        res.status(201).json({ message: "Vender not found" });
      } else {
        // function generateRandomNumbers() {
        //   const randomNumbers = [];

        //   for (let i = 0; i < 6; i++) {
        //     const randomNumber = Math.floor(Math.random() * 10); // Change the range as needed
        //     randomNumbers.push(randomNumber);
        //   }

        //   return randomNumbers;
        // }
        // const sixRandomNumbers = generateRandomNumbers();
        // let value = sixRandomNumbers.join("");
        // updateData = { otp: value };
        // await Vender.update(updateData, { where: { id: venderData.id } });
        let binaryData = `[{"V":"1.5","ORG":"IYC","SESSION_ID":"cMjRQINXQPv9IydiTGFLHOAfIjOW4rhv2zfPWzrLBkhzXjscBO4xBDs9Up0IIwAi","DEVICE_ID":"cdbbed0a-1989-4fa7-859f-fc47dab6992a","USER_ID":"LTUveILGz+jqFIeLu3sD3g==","LATITUDE":"","LONGITUDE":"","STATE_CODE":"","MOBILE":${number}}]`;
        const base64Encoded = Buffer.from(binaryData).toString("base64");
        // console.log(base64Encoded);

        const url =
          "https://api.ycea.in/ycea/ycea-api/service/iyc/api/v1.0/auth/getOTP.php";
        const token = "72c831476bfc479d:4efb65f092ac72c83147";

        const dataToSend = base64Encoded;

        const headers = {
          "Content-Type": "text/plain",
          Authorization: `Bearer ${token}`,
          Token:
            "TGMJGnhY5jhiqNHwjwuH/+2LbKrt0oc1j1zlGbbXXotzXjscBO4xBDs9Up0IIwAi",
        };

        const response = await axios.post(url, dataToSend, { headers });

        let base64Dncoded = response.data;
        const decodedText = atob(base64Dncoded);
        const jsonObject = JSON.parse(decodedText);
        // console.log(jsonObject)
        if (jsonObject.status == "SUCCESS") {
          res.status(200).json({});
        } else {
          res.status(400).json({ message: "Send OTP is not working" });
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.status(402).json({ message: "Not authorized" });
  }
};

exports.validateOTP = async (req, res) => {
  let { number, otp } = req.body;
  let venderData = await Vender.findOne({ where: { number: number } });
  let id = venderData.id;
  try {
    let binaryData = `[{"V":"1.5","ORG":"IYC","SESSION_ID":"cMjRQINXQPv9IydiTGFLHOAfIjOW4rhv2zfPWzrLBkhzXjscBO4xBDs9Up0IIwAi","DEVICE_ID":"cdbbed0a-1989-4fa7-859f-fc47dab6992a","USER_ID":"LTUveILGz+jqFIeLu3sD3g==","LATITUDE":"3.989234383434343","LONGITUDE":"9.034342423423","STATE_CODE":"KA","MOBILE":${number},"OTP":${otp}}]`;
    const base64Encoded = Buffer.from(binaryData).toString("base64");
    // console.log(base64Encoded);

    const url =
      "https://api.ycea.in/ycea/ycea-api/service/iyc/api/v1.0/auth/validateOTP.php";
    const tokens = "72c831476bfc479d:4efb65f092ac72c83147";

    const dataToSend = base64Encoded;

    const headers = {
      "Content-Type": "text/plain",
      Authorization: `Bearer ${tokens}`,
      Token: "TGMJGnhY5jhiqNHwjwuH/+2LbKrt0oc1j1zlGbbXXotzXjscBO4xBDs9Up0IIwAi",
    };

    const response = await axios.post(url, dataToSend, { headers });

    let base64Dncoded = response.data;
    const decodedText = atob(base64Dncoded);
    const jsonObject = JSON.parse(decodedText);
    console.log(jsonObject);
    if (jsonObject.status == "SUCCESS") {
      const token = jwt.sign({ userid: id }, "WITHIYC");
      let districtdata = JSON.parse(venderData.district_code);
      let state = venderData.state_code;
      district = districtdata[`${state}`];

      res.status(200).json({
        Access_Token: token,
        vender: {
          name: venderData.name,
          number: venderData.number,
          role: venderData.role,
          state_code: venderData.state_code,
          districts : district
        },
      });
    } else {
      res.status(400).json({ message: "wrong otp entered" });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "wrong otp entered" });
  }
};

exports.updateVenderbyid = async (req, res) => {
  let ID = req.params["id"];
  let adminId = req.body.venderId;
  let updateData = req.body;
  let districtdata = JSON.stringify(req.body.district_code);
  updateData.district_code = districtdata;
  let historydata = JSON.stringify(req.body.history);
  updateData.history = historydata
  // console.log(updateData);
  try {
    const vender = await Vender.findByPk(ID);
    // console.log(vender)
    if(req.body.state_code){
    if (vender.state_code !== updateData.state_code) {
      console.log("state_code is different");
      const newHistoryEntry = {
        adminId: adminId,
        action: "change state code",
        recordcount: 0,
        state: `${vender.state_code} to ${updateData.state_code}`,
        date: new Date().toISOString().slice(0, 10), // Current date in 'YYYY-MM-DD' format
        time: new Date().toISOString().slice(11, 19), // Current time in 'HH:MM:SS' format
      };
      let dbhistory = JSON.parse(vender.history);
      let statecode = updateData.state_code;
      let values1 = dbhistory[`${statecode}`]["History"];
      let values2 = dbhistory[`${vender.state_code}`]["History"];
      values1.push(newHistoryEntry);
      values2.push(newHistoryEntry);
      let historys = JSON.stringify(dbhistory)
      
      // vender.history.push(newHistoryEntry);
      updateQuery = { history: historys };
      const [updatedRows] = await Vender.update(updateQuery, {
        where: { id: ID },
      });
      updateData.history=JSON.stringify(dbhistory);

    }
  }
  // else if(req.body.history){
  //   let historydata = JSON.stringify(req.body.history);
  //   updateData.history = historydata
  // }
    let updated = await Vender.update(updateData, { where: { id: ID } });
    if (updated[0] == 1) {
      let user = await Vender.findOne({ where: { id: ID } });
      // console.log(JSON.stringify(user.history));
      let jsonString  = user.district_code
      let historydata = JSON.parse(user.history)
      let districtdata = JSON.parse(jsonString);
      user.district_code=districtdata
      user.history = historydata
      res.status(200).json(user);
    } else {
      res.status(400).json({ message: "No one present with the id" });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "something went wrong with the route" });
  }
};

exports.getvenderHistorybyid = async (req, res) => {
  let ID = req.params["id"];
  try {
    const vender = await Vender.findByPk(ID);
    let statecode = vender.state_code;
    let jsonString  = vender.history
    let historytdata = JSON.parse(jsonString);
    res.status(200).send(historytdata[`${statecode}`]["History"]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong with the route" });
  }
};

exports.getvenderHistorybyauth = async (req, res) => {
  let ID = req.body.venderId;
  try {
    const vender = await Vender.findByPk(ID);
    let statecode = vender.state_code;
    let jsonString  = vender.history
    let historytdata = JSON.parse(jsonString);
    res.status(200).send(historytdata[`${statecode}`]["History"]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong with the route" });
  }
};

exports.getvenderdistrictsbyid = async ( req , res ) => {
  let ID = req.params["id"];
  try {
    const vender = await Vender.findByPk(ID);
    if(vender.subrole === ""){
      let statecode = vender.state_code
      let url = `https://portalserver.ycea.in/masterdb/dist/getstatedistrict/${statecode}`;
      const response = await axios.get(url);
      let district = response.data;
      let result = [];
      for(let i = 0;i<district.length;i++){
        let obj = {};
        obj.district_code=district[i].DISTRICT_CODE;
        obj.DISTRICT_NAME=district[i].DISTRICT_NAME;
        obj.IS_ENABLED = district[i].IS_ENABLED
        result.push(obj);
      }
      res.status(200).send(result);
    }else{
    let statecode = vender.state_code;
    let jsonString  = vender.district_code
    let districtdata = JSON.parse(jsonString);
    let dist = districtdata[`${statecode}`]["Districts"]
    const result = [];

for (let districtCode in dist) {
  const district = dist[districtCode];
  result.push({
    district_code: districtCode,
    DISTRICT_NAME: district.DISTRICT_NAME,
    IS_ENABLED: district.IS_ENABLED
  });
}
    res.status(200).send(result);
}
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong with the route" });
  }
}

exports.getvenderdistrictsbyauth = async ( req , res ) => {
  let ID = req.body.venderId;
  try {
    const vender = await Vender.findByPk(ID);
    if(vender.subrole === ""){
      let statecode = vender.state_code
      let url = `https://portalserver.ycea.in/masterdb/dist/getstatedistrict/${statecode}`;
      const response = await axios.get(url);
      let district = response.data;
      let result = [];
      for(let i = 0;i<district.length;i++){
        let obj = {};
        obj.district_code=district[i].DISTRICT_CODE;
        obj.DISTRICT_NAME=district[i].DISTRICT_NAME;
        obj.IS_ENABLED = district[i].IS_ENABLED
        result.push(obj);
      }
      res.status(200).send(result);
    }else{
    let statecode = vender.state_code;
    let jsonString  = vender.district_code
    let districtdata = JSON.parse(jsonString);
    let dist = districtdata[`${statecode}`]["Districts"]
    const result = [];

for (let districtCode in dist) {
  const district = dist[districtCode];
  result.push({
    district_code: districtCode,
    DISTRICT_NAME: district.DISTRICT_NAME,
    IS_ENABLED: district.IS_ENABLED
  });
}
    res.status(200).send(result);
}
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong with the route" });
  }
}

exports.updateVenderbyauth = async (req, res) => {
  let ID = req.body.venderId;
  let updateData = req.body;
  try {
    let updated = await Vender.update(updateData, { where: { id: ID } });

    if (updated[0] == 1) {
      let user = await Vender.findOne({ where: { id: ID } });
      res.status(200).json(user);
    } else {
      res.status(400).json({ message: "No one present with the id" });
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong with the route" });
  }
};

exports.deleteVender = async (req, res) => {
  let ID = req.params["id"];
  // console.log(ID)
  try {
    // res.send({id: ID})
    let deleted = await Vender.destroy({ where: { id: ID } });

    if (deleted == 1) {
      res.status(200).json({});
    } else {
      res.status(400).json({ message: "There is no Vender with the id" });
    }
  } catch (error) {
    // console.log(error)
    res
      .status(500)
      .json({ message: "Something went wrong in the vender delete route" });
  }
};

exports.getoneVender = async (req, res) => {
  let ID = req.params["id"];
  try {
    let vender = await Vender.findOne({ where: { id: ID } });
    let jsondistrictString  = vender.district_code
    let jsonhistoryString = Vender.history
    let historydata = JSON.parse(vender.history)
    
    let districtdata = JSON.parse(jsondistrictString);
    
    console.log(typeof(historydata))
    vender.district_code=districtdata
    vender.history = historydata
    res.status(200).json(vender);
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: "Something went wrong in the vender getone route" });
  }
};

exports.getoneVenderByNumber = async (req, res) => {
  let number = req.params["number"];
  try {
    let vender = await Vender.findOne({ where: { number: number } });
    res.status(200).json(vender);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong in the vender getone route" });
  }
};

exports.getoneVenderbyAuth = async (req, res) => {
  let ID = req.body.venderId;
  try {
    let vender = await Vender.findOne({ where: { id: ID } });
    res.status(200).json(vender);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong in the vender getone route" });
  }
};

exports.getallVender = async (req, res) => {
  try {
    let vender = await Vender.findAndCountAll();
    // console.log(vender)

    res.status(201).json(vender.rows);
  } catch (error) {
    res.status(500).json({ message: "something went wrong with the route" });
  }
};

exports.getWorkers = async (req, res) => {
  try {
    const vendors = await Vender.findAll({
      where: {
        role: "worker",
      },
    });
    res.status(200).send(vendors);
  } catch (error) {
    res.status(500).json({ message: "something went wrong with the route" });
  }
};

exports.getInspectors = async (req, res) => {
  const state_code = req.params["state_code"];
  try {
    const inspectors = await Vender.findAll({
      where: {
        role: "inspector",
        state_code: state_code,
      },
      order: [["name", "ASC"]],
    });
    const admins = await Vender.findAll({
      where: {
        role: "admin",
      },
      order: [["name", "ASC"]],
    });
    const mergedArray = inspectors.concat(admins);
    res.status(200).send(mergedArray);
  } catch (error) {
    res.status(500).json({ message: "something went wrong with the route" });
  }
};

// exports.getInspectorswithoutstate = async (req,res) => {
//   try {
//     const vendors = await Vender.findAll({
//       where: {
//         role: {
//           [Op.or]: ['admin', 'inspector'],
//         },
//       },
//     });
//     res.status(200).send(vendors);
//   } catch (error) {
//     res.status(500).json({ message: "something went wrong with the route" });
//   }
// }

exports.getcoutallVender = async (req, res) => {
  try {
    let vendercount = await Vender.count();
    const workerVenders = await Vender.count({
      where: {
        role: "worker",
      },
    });
    const inspectorVenders = await Vender.count({
      where: {
        role: "inspector",
      },
    });
    res.status(200).json({
      vendercount: vendercount,
      workercount: workerVenders,
      inspectorcount: inspectorVenders,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong in the vender getcount route" });
  }
};

exports.venderincCount = async (req, res) => {
  let venderid = req.body.venderId;
  try {
    const incrementValue = 1;
    const updateQuery = {
      count: sequelize.literal(`count + ${incrementValue}`),
    };
    const [updatedRows] = await Vender.update(updateQuery, {
      where: { id: venderid },
    });
    if (updatedRows > 0) {
      res.status(200).json({});
    } else {
      res.status(400).json({ message: "No one present with the id" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong in the vender Inccount route" });
  }
};

exports.venderdecCount = async (req, res) => {
  let venderid = req.body.venderId;
  try {
    const incrementValue = -1;
    const updateQuery = {
      count: sequelize.literal(`count + ${incrementValue}`),
    };
    const [updatedRows] = await Vender.update(updateQuery, {
      where: { id: venderid },
    });
    if (updatedRows > 0) {
      res.status(200).json({});
    } else {
      res.status(400).json({ message: "No one present with the id" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong in the vender Inccount route" });
  }
};

exports.venderStatistics = async (req, res) => {
  let venderid = req.body.venderId;
  try {
    const vender = await Vender.findByPk(venderid, { attributes: ["count"] });

    // Get the total sum of the count column for all vendors
    const totalVendorCount = await Vender.sum("count");
    let othersscount = totalVendorCount - vender.count;
    let yourcount = vender.count;
    res.status(200).json({ yourcount, othersscount });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong in the vender Inccount route" });
  }
};

exports.vendertopScore = async (req, res) => {
  const state_code = req.params["state_code"];
  try {
    console.log(state_code);
    const topVendors = await Vender.findAll({
      where: {
        state_code: state_code, // Add the condition for state_code
      },
      order: [["count", "DESC"]], // Order by the 'count' column in descending order
      limit: 3, // Limit the result to 3 records
    });

    res.status(200).json(topVendors);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong in the vender topthree route" });
  }
};

exports.venderscoreASC = async (req, res) => {
  try {
    const ascendingOrder = await Vender.findAll({
      order: [["count", "ASC"]],
    });
    res.status(200).json(ascendingOrder);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong in the vender ASC route" });
  }
};

exports.venderscoreDESC = async (req, res) => {
  try {
    const descendingOrder = await Vender.findAll({
      order: [["count", "DESC"]],
    });
    res.status(200).json(descendingOrder);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong in the vender DESC route" });
  }
};

exports.vendernameASC = async (req, res) => {
  try {
    const vendors = await Vender.findAll({
      order: [["name", "ASC"]], // Order by the 'username' column in ascending order
    });

    res.status(200).json(vendors);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong in the vender ASC route" });
  }
};

exports.workergetASC = async (req, res) => {
  try {
    const workerVendors = await Vender.findAll({
      where: {
        role: "worker",
      },
      order: [["name", "ASC"]], // Order by 'name' in ascending order
    });
    res.status(200).send(workerVendors);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong in the vender ASC route" });
  }
};

exports.workergetDESC = async (req, res) => {
  try {
    const workerVendors = await Vender.findAll({
      where: {
        role: "worker",
      },
      order: [["name", "DESC"]], // Order by 'name' in ascending order
    });
    res.status(200).send(workerVendors);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong in the vender ASC route" });
  }
};

exports.inspectorgetASC = async (req, res) => {
  try {
    const inspectorVendors = await Vender.findAll({
      where: {
        role: "inspector",
      },
      order: [["name", "ASC"]], // Order by 'name' in ascending order
    });
    res.status(200).send(inspectorVendors);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong in the vender ASC route" });
  }
};

exports.inspectorgetDESC = async (req, res) => {
  try {
    const inspectorVendors = await Vender.findAll({
      where: {
        role: "inspector",
      },
      order: [["name", "DESC"]], // Order by 'name' in ascending order
    });
    res.status(200).send(inspectorVendors);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong in the vender ASC route" });
  }
};

exports.findVender = async (req, res) => {
  const key = req.params["key"];
  const value = req.params["value"];
  const state_code = req.params["state_code"];
  try {
    const lowerCaseValue = value.toLowerCase(); // Convert the query value to lowercase

    const vender = await Vender.findAll({
      where: {
        state_code: state_code, // Add the condition for state_code
        [Op.or]: [
          sequelize.where(
            sequelize.fn("LOWER", sequelize.col(key)),
            lowerCaseValue
          ),
          // Add any other conditions you may have here
        ],
      },
    });
    res.status(200).json(vender);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Some thing went wrong in the users search route" });
  }
};

exports.venderLogout = async (req, res) => {
  try {
    let [tokenSyn, token] = req.headers.authorization.trim().split(" ");
    body = {
      tocken: token,
    };
    let black = await Tocken.create(body);
    // let blacklisting = await client.SADD("blackTokens", token);
    res.status(200).json({});
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong in the vender logout route" });
  }
};

exports.assignVender = async (req, res) => {
  let adminId = req.body.venderId;
  const venderid = req.params["venderid"];
  const userid = req.params["userid"];
  // console.log(venderid,userid);
  try {
    const [updatedRowCount] = await Users.update(
      { inspectorId: venderid },
      {
        where: { id: userid },
      }
    );

    if (updatedRowCount === 1) {
      const vender = await Vender.findByPk(venderid);
      let state_code = vender.state_code;
      const newHistoryEntry = {
        adminId: adminId,
        action: "assigned",
        state: state_code,
        date: new Date().toISOString().slice(0, 10), // Current date in 'YYYY-MM-DD' format
        time: new Date().toISOString().slice(11, 19), // Current time in 'HH:MM:SS' format
        recordcount: 1,
      };
      let dbhistory = JSON.parse(vender.history);
      let values = dbhistory[`${vender.state_code}`]["History"];
      values.push(newHistoryEntry);
      let historys = JSON.stringify(dbhistory)
       updateQuery = { history: historys };
      const [updatedRows] = await Vender.update(updateQuery, {
        where: { id: venderid },
      });
      let user = await Users.findOne({ where: { id: userid } });
      res.status(200).json(user);
    } else {
      res.status(400).json({ message: "No one present with the id" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong with the assignVender route" });
  }
};

exports.assignWorker = async (req, res) => {
  let adminId = req.body.venderId;
  const venderid = req.params["venderid"];
  const recordcount = Number(req.params["recordcount"]);
  // console.log(venderid,recordcount)
  try {
    const count = await Users.count({
      where: {
        venderID: 0,
        venderStatus: "",
        inspectorId: 0,
      },
    });

    if (count >= recordcount) {
      const vendor = await Vender.findOne({
        where: {
          id: venderid,
          role: "worker",
        },
      });

      if (vendor) {
        const [updatedRowCount] = await Users.update(
          { venderID: venderid }, // Set the new venderID value here
          {
            where: {
              inspectorId: 0,
              venderID: 0,
            },
            limit: recordcount, // Limit the number of records to update
          }
        );
        const vender = await Vender.findByPk(venderid);
        const newHistoryEntry = {
          adminId: adminId,
          action: "assigned",
          date: new Date().toISOString().slice(0, 10), // Current date in 'YYYY-MM-DD' format
          time: new Date().toISOString().slice(11, 19), // Current time in 'HH:MM:SS' format
          recordcount: recordcount,
        };
        vender.history.push(newHistoryEntry);
        updateQuery = { history: vender.history };
        const [updatedRows] = await Vender.update(updateQuery, {
          where: { id: venderid },
        });
        res.status(200).send({});
      } else {
        res.status(400).json({
          message: "There is no vender with this id or is not a worker",
        });
      }
    } else {
      res
        .status(400)
        .json({ message: `There are only ${count} records left to assign` });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong with the assignwork route" });
  }
};

exports.releaveWorker = async (req, res) => {
  let adminId = req.body.venderId;
  const venderid = req.params["venderid"];
  // console.log(venderid);
  try {
    const count = await Users.count({
      where: {
        venderStatus: "",
        venderID: venderid,
      },
    });
    const vendor = await Vender.findOne({
      where: {
        id: venderid,
        role: "worker",
      },
    });

    if (vendor) {
      if (count == 0) {
        res.status(400).send({ message: "There are no records to realeav" });
      } else {
        const [updatedRowCount] = await Users.update(
          { venderID: 0 }, // Set the new venderID value here
          {
            where: {
              venderStatus: "",
              venderID: venderid,
            },
          }
        );

        const vender = await Vender.findByPk(venderid);
        const newHistoryEntry = {
          adimId: adminId,
          action: "released",
          date: new Date().toISOString().slice(0, 10), // Current date in 'YYYY-MM-DD' format
          time: new Date().toISOString().slice(11, 19), // Current time in 'HH:MM:SS' format
          recordcount: updatedRowCount,
        };

        vender.history.push(newHistoryEntry);
        //   console.log(vender.history)
        updateQuery = { history: vender.history };
        //   console.log(updateQuery)
        const [updatedRows] = await Vender.update(updateQuery, {
          where: { id: venderid },
        });

        res.status(200).send({ releavecount: count });
      }
    } else {
      res.status(400).json({
        message: "There is no vender with this id or is not a worker",
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong with the releavevender route" });
  }
};
// exports.assignInspector = async (req, res) => {
//   let adminId = req.body.venderId
//   const venderid = req.params["venderid"];
//   const recordcount = Number(req.params["recordcount"]);
//   const state_code = req.params["state_code"]
//   try {
//     const vendor = await Vender.findOne({
//       where: {
//         id: venderid,
//         [Op.or]: [
//           { role: "inspector" },
//           { role: "admin" },
//         ],
//         state_code: state_code,
//       },
//     });

//     if(vendor){
//       const count = await Users.count({
//         where: {
//           status: "not_verified",
//           venderStatus: {
//             [Op.in]: ['0', '1', "2", '3', '4', '5', '6', '7', '8', '9', '10'],
//           },
//           inspectorId: 0,
//           state_code : state_code
//         },
//       });
//       console.log(count)
//       if(count >= recordcount){
//         const [updatedRowCount] = await Users.update(
//           { inspectorId: venderid }, // Set the new venderID value here
//           {
//             where: {
//               status: "not_verified",
//               venderStatus: {
//                 [Op.in]: ['0', '1', "2", '3', '4', '5', '6', '7', '8', '9', '10'],
//               },
//               inspectorId: 0,
//               state_code : state_code
//             },
//             limit: recordcount, // Limit the number of records to update
//           }
//         );

//         const vender = await Vender.findByPk(venderid);
//         const newHistoryEntry = {
//           adminId : adminId,
//           action: "assigned",
//           state : state_code,
//           date: new Date().toISOString().slice(0, 10), // Current date in 'YYYY-MM-DD' format
//           time: new Date().toISOString().slice(11, 19), // Current time in 'HH:MM:SS' format
//           recordcount: recordcount,
//         };
//         vender.history.push(newHistoryEntry);
//         updateQuery = { history: vender.history };
//         const [updatedRows] = await Vender.update(updateQuery, {
//           where: { id: venderid },
//         });
//         res.status(200).send({});
//       }else{
//         res
//       .status(400)
//       .json(`{ message: There are only ${count} records left to assign }`);

//       }
//     }else{
//       res
//       .status(400)
//       .json({ message: "There is no vender with this id or he is not an inspector or his not assigned to this state" });
//     }

//   } catch (error) {
//     console.log(error)
//     res
//       .status(500)
//       .json({ message: "something went wrong with the assigninspector route" });
//   }
// };

// exports.assignInspector = async (req, res) => {
//   let adminId = req.body.venderId;
//   const venderid = req.params["venderid"];
//   const recordcount = Number(req.params["recordcount"]);
//   const state_code = req.params["state_code"];
//   try {
//     const vendor = await Vender.findOne({
//       where: {
//         id: venderid,
//         role: "inspector",
//         state_code: state_code,
//       },
//     });
//     if (vendor) {
//       const count = await Users.count({
//         where: {
//           status: "not_verified",
//           venderStatus: {
//             [Op.in]: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
//           },
//           inspectorId: 0,
//           state_code: state_code,
//         },
//       });
//       console.log(count);
//       if (count >= recordcount) {
//         const [updatedRowCount] = await Users.update(
//           { inspectorId: venderid }, // Set the new venderID value here
//           {
//             where: {
//               status: "not_verified",
//               venderStatus: {
//                 [Op.in]: [
//                   "0",
//                   "1",
//                   "2",
//                   "3",
//                   "4",
//                   "5",
//                   "6",
//                   "7",
//                   "8",
//                   "9",
//                   "10",
//                 ],
//               },
//               inspectorId: 0,
//               state_code: state_code,
//             },
//             limit: recordcount, // Limit the number of records to update
//           }
//         );

//         const vender = await Vender.findByPk(venderid);
//         const newHistoryEntry = {
//           adminId: adminId,
//           action: "assigned",
//           state: state_code,
//           date: new Date().toISOString().slice(0, 10), // Current date in 'YYYY-MM-DD' format
//           time: new Date().toISOString().slice(11, 19), // Current time in 'HH:MM:SS' format
//           recordcount: recordcount,
//         };
//         vender.history.push(newHistoryEntry);
//         updateQuery = { history: vender.history };
//         const [updatedRows] = await Vender.update(updateQuery, {
//           where: { id: venderid },
//         });
//         res.status(200).send({});
//       } else {
//         res
//           .status(400)
//           .json({ message: `There are only ${count} records left to assign` });
//       }
//     } else {
//       res.status(400).json({
//         message:
//           "There is no vender with this id or he is not an inspector or his not assigned to this state",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     res
//       .status(500)
//       .json({ message: "something went wrong with the assigninspector route" });
//   }
// };

exports.assignInspector = async (req, res) => {
  let adminId = req.body.venderId;
  const venderid = req.params["venderid"];
  const recordcount = Number(req.params["recordcount"]);
  const state_code = req.params["state_code"];
  try {
    let vendor;
    const rolecheck = await Vender.findByPk(venderid);
    if (rolecheck.role === "admin") {
      vendor = await Vender.findOne({
        where: {
          id: venderid,
          role: "admin",
        },
      });
    } else {
      vendor = await Vender.findOne({
        where: {
          id: venderid,
          role: "inspector",
          state_code: state_code,
        },
      });
    }
    if (vendor) {
      const count = await Users.count({
        where: {
          status: "not_verified",
          venderStatus: {
            [Op.in]: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          },
          inspectorId: 0,
          state_code: state_code,
        },
      });
      console.log(count);
      if (count >= recordcount) {
        const [updatedRowCount] = await Users.update(
          { inspectorId: venderid }, // Set the new venderID value here
          {
            where: {
              status: "not_verified",
              venderStatus: {
                [Op.in]: [
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                ],
              },
              inspectorId: 0,
              state_code: state_code,
            },
            limit: recordcount, // Limit the number of records to update
          }
        );

        const vender = await Vender.findByPk(venderid);
        const newHistoryEntry = {
          adminId: adminId,
          action: "assigned",
          state: state_code,
          date: new Date().toISOString().slice(0, 10), // Current date in 'YYYY-MM-DD' format
          time: new Date().toISOString().slice(11, 19), // Current time in 'HH:MM:SS' format
          recordcount: recordcount,
        };
        
      let dbhistory = JSON.parse(vender.history);
      let values = dbhistory[`${vender.state_code}`]["History"];
      values.push(newHistoryEntry);
      let historys = JSON.stringify(dbhistory)

        // vender.history.push(newHistoryEntry);
        updateQuery = { history: historys};
        const [updatedRows] = await Vender.update(updateQuery, {
          where: { id: venderid },
        });
        res.status(200).send({});
      } else {
        res
          .status(200)
          .json(` message: There are only ${count} records left to assign `);
      }
    } else {
      res.status(200).json({
        message:
          "There is no vender with this id or he is not an inspector or his not assigned to this state",
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "something went wrong with the assigninspector route" });
  }
};

// exports.releaveInspector = async (req, res) => {
//   let adminId = req.body.venderId;
//   const venderid = req.params["venderid"];
//   console.log(venderid);
//   try {
//     const vendor = await Vender.findOne({
//       where: {
//         id: venderid,
//         role: "inspector",
//       },
//     });
//     const count = await Users.count({
//       where: {
//         status: "not_verified",
//         inspectorId: venderid,
//       },
//     });
//     if (vendor) {
//       if (count == 0) {
//         res.status(400).send({ message: "There are no records to realeav" });
//       } else {
//         const [updatedRowCount] = await Users.update(
//           { inspectorId: 0 }, // Set the new venderID value here
//           {
//             where: {
//               status: "not_verified",
//               inspectorId: venderid,
//             },
//           }
//         );

//         const vender = await Vender.findByPk(venderid);
//         const newHistoryEntry = {
//           adimId: adminId,
//           action: "released",
//           state: vender.state_code,
//           date: new Date().toISOString().slice(0, 10), // Current date in 'YYYY-MM-DD' format
//           time: new Date().toISOString().slice(11, 19), // Current time in 'HH:MM:SS' format
//           recordcount: updatedRowCount,
//         };

//         vender.history.push(newHistoryEntry);
//         //   console.log(vender.history)
//         updateQuery = { history: vender.history };
//         //   console.log(updateQuery)
//         const [updatedRows] = await Vender.update(updateQuery, {
//           where: { id: venderid },
//         });

//         res.status(200).send({ releavecount: count });
//       }
//     } else {
//       res.status(400).json({
//         message:
//           "There is no vender with this id or he is not an inspector or his not assigned to this state",
//       });
//     }
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "something went wrong with the releavevender route" });
//   }
// };

// exports.getStatisticsbyid = async (req, res) => {
//   const venderid = req.params["venderid"];
//   // console.log(venderid)
//   try {
//     const results = await Users.findAll({
//       attributes: ["status", [sequelize.fn("COUNT", "status"), "count"]],
//       where: {
//         venderID: venderid,
//       },
//       group: ["status"],
//     });
//     console.log(results)
//     if(results.length == 0){
//         res.status(200).send({"verifiedcount" : 0,"not_verifiedcount" : 0});
//     }else if(results.length == 1){
//         console.log(results)
//         let status = results[0].status
//         let count = results[0].dataValues.count
//         if(status =="verified"){
//             res.status(200).send({"verifiedcount" : count,"not_verifiedcount" : 0});
//         }else{
//             res.status(200).send({"verifiedcount" : 0,"not_verifiedcount" : count});
//         }
//     }else{
//         // let user1 = results[0]
//         // console.log(user1.dataValues.count)
//         let count1 = results[0].dataValues.count
//         let count2 = results[1].dataValues.count
//         res.status(200).send({"verifiedcount" : count1,"not_verifiedcount" : count2});
//     }
//   } catch (error) {
//     // console.log(error)
//     res
//       .status(500)
//       .json({
//         message: "something went wrong with the getStatisticsbyid route",
//       });
//   }
// };

// exports.getStatisticsbyauth = async (req, res) => {
//   ID = req.body.venderId;
//   try {
//     const results = await Users.findAll({
//       attributes: ["status", [sequelize.fn("COUNT", "status"), "count"]],
//       where: {
//         venderID: ID,
//       },
//       group: ["status"],
//     });
//     if(results.length == 0){
//         res.status(200).send({"verifiedcount" : 0,"not_verifiedcount" : 0});
//     }else if(results.length == 1){
//         console.log(results)
//         let status = results[0].status
//         let count = results[0].dataValues.count
//         if(status =="verified"){
//             res.status(200).send({"verifiedcount" : count,"not_verifiedcount" : 0});
//         }else{
//             res.status(200).send({"verifiedcount" : 0,"not_verifiedcount" : count});
//         }
//     }else{
//         // let user1 = results[0]
//         // console.log(user1.dataValues.count)
//         let count1 = results[0].dataValues.count
//         let count2 = results[1].dataValues.count
//         res.status(200).send({"verifiedcount" : count1,"not_verifiedcount" : count2});
//     }
//   } catch (error) {
//     // console.log(error)
//     res
//       .status(500)
//       .json({
//         message: "something went wrong with the getStatisticsbyid route",
//       });
//   }
// };

exports.releaveInspector = async (req, res) => {
  let adminId = req.body.venderId;
  const venderid = req.params["venderid"];
  const state_code = req.params["state_code"];
  console.log(venderid);
  try {
    let vendor;
    const rolecheck = await Vender.findByPk(venderid);
    if (rolecheck.role === "admin") {
      vendor = await Vender.findOne({
        where: {
          id: venderid,
          role: "admin",
        },
      });
    } else {
      vendor = await Vender.findOne({
        where: {
          id: venderid,
          role: "inspector",
          state_code: state_code,
        },
      });
    }
    const count = await Users.count({
      where: {
        status: "not_verified",
        inspectorId: venderid,
        state_code: state_code,
      },
    });
    if (vendor) {
      if (count == 0) {
        res.status(200).send({ message: "There are no records to realeav" });
      } else {
        const [updatedRowCount] = await Users.update(
          { inspectorId: 0 }, // Set the new venderID value here
          {
            where: {
              status: "not_verified",
              inspectorId: venderid,
              state_code: state_code,
            },
          }
        );

        const vender = await Vender.findByPk(venderid);
        const newHistoryEntry = {
          adimId: adminId,
          action: "released",
          state: vender.state_code,
          date: new Date().toISOString().slice(0, 10), // Current date in 'YYYY-MM-DD' format
          time: new Date().toISOString().slice(11, 19), // Current time in 'HH:MM:SS' format
          recordcount: updatedRowCount,
        };

        let dbhistory = JSON.parse(vender.history);
       let values = dbhistory[`${vender.state_code}`]["History"];
       values.push(newHistoryEntry);
       let historys = JSON.stringify(dbhistory)
        updateQuery = { history: historys };
        //   console.log(updateQuery)
        const [updatedRows] = await Vender.update(updateQuery, {
          where: { id: venderid },
        });

        res.status(200).send({ releavecount: count });
      }
    } else {
      res.status(400).json({
        message:
          "There is no vender with this id or he is not an inspector or his not assigned to this state",
      });
    }
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: "something went wrong with the releavevender route" });
  }
};

exports.releaveInspectorbyrecordcount = async (req, res) => {
  let adminId = req.body.venderId;
  const venderid = req.params["venderid"];
  const state_code = req.params["state_code"];
  const recordcount = Number(req.params["recordcount"]);
  console.log(venderid);
  try {
    let vendor;
    const rolecheck = await Vender.findByPk(adminId);
    if (rolecheck.role === "admin") {
      vendor = await Vender.findOne({
        where: {
          id: venderid,
          role: "admin",
        },
      });
    } else {
      vendor = await Vender.findOne({
        where: {
          id: venderid,
          role: "inspector",
          state_code: state_code,
        },
      });
    }
    const count = await Users.count({
      where: {
        status: "not_verified",
        inspectorId: venderid,
        state_code: state_code,
      },
    });
    if (vendor) {
      if (count == 0) {
        res.status(200).send({ message: "There are no records to realeav" });
      } else {
        const [updatedRowCount] = await Users.update(
          { inspectorId: 0 }, // Set the new venderID value here
          {
            where: {
              status: "not_verified",
              inspectorId: venderid,
              state_code: state_code,
            },
            limit: recordcount,
          }
        );

        const vender = await Vender.findByPk(venderid);
        const newHistoryEntry = {
          adimId: adminId,
          action: "released",
          state: vender.state_code,
          date: new Date().toISOString().slice(0, 10), // Current date in 'YYYY-MM-DD' format
          time: new Date().toISOString().slice(11, 19), // Current time in 'HH:MM:SS' format
          recordcount: updatedRowCount,
        };

        let dbhistory = JSON.parse(vender.history);
        let values = dbhistory[`${vender.state_code}`]["History"];
        values.push(newHistoryEntry);
        let historys = JSON.stringify(dbhistory)
         updateQuery = { history: historys };
        const [updatedRows] = await Vender.update(updateQuery, {
          where: { id: venderid },
        });

        res.status(200).send({ releavecount: count });
      }
    } else {
      res.status(400).json({
        message:
          "There is no vender with this id or he is not an inspector or his not assigned to this state",
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong with the releavevender route" });
  }
};

exports.getStatisticsbyworkerid = async (req, res) => {
  const workerid = req.params["workerid"];
  try {
    const countWithStatusonhold = await Users.count({
      where: {
        venderID: workerid,
        venderStatus: "onhold",
      },
    });
    const countWithStatusinprocess = await Users.count({
      where: {
        venderID: workerid,
        venderStatus: "inprocess",
      },
    });
    const countWithStatusreject = await Users.count({
      where: {
        venderID: workerid,
        venderStatus: "reject",
      },
    });
    let countWithStatus =
      countWithStatusonhold + countWithStatusinprocess + countWithStatusreject;
    console.log(countWithStatus);
    const countWithEmptyStatus = await Users.count({
      where: {
        venderID: workerid,
        venderStatus: "",
      },
    });
    res.status(200).send({
      onholdcount: countWithStatusonhold,
      onprocesscount: countWithStatusinprocess,
      rejectcount: countWithStatusreject,
      emptycount: countWithEmptyStatus,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong with the getStatisticsbyworkerid route",
    });
  }
};

exports.getStatisticsbyworkerauth = async (req, res) => {
  const workerid = req.body.venderId;
  try {
    const countWithStatusonhold = await Users.count({
      where: {
        venderID: workerid,
        venderStatus: "onhold",
      },
    });
    const countWithStatusinprocess = await Users.count({
      where: {
        venderID: workerid,
        venderStatus: "inprocess",
      },
    });
    const countWithStatusreject = await Users.count({
      where: {
        venderID: workerid,
        venderStatus: "reject",
      },
    });
    let countWithStatus =
      countWithStatusonhold + countWithStatusinprocess + countWithStatusreject;
    // console.log(countWithStatus)
    const countWithEmptyStatus = await Users.count({
      where: {
        venderID: workerid,
        venderStatus: "",
      },
    });
    res.status(200).send({
      onholdcount: countWithStatusonhold,
      onprocesscount: countWithStatusinprocess,
      rejectcount: countWithStatusreject,
      emptycount: countWithEmptyStatus,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong with the getStatisticsbyworkerid route",
    });
  }
};

exports.getStatisticsbyinspectorid = async (req, res) => {
  const workerid = req.params["inspectorid"];
  const state_code = req.params["state_code"];
  try {
    const countWithStatusverified = await Users.count({
      where: {
        inspectorId: workerid,
        status: "verified",
        state_code: state_code,
      },
    });
    const countWithStatusverification_failed = await Users.count({
      where: {
        inspectorId: workerid,
        status: "verification_failed",
        state_code: state_code,
      },
    });
    let countWithStatus =
      countWithStatusverified + countWithStatusverification_failed;
    console.log(countWithStatus);
    const countWithEmptyStatus = await Users.count({
      where: {
        inspectorId: workerid,
        status: "not_verified",
        state_code: state_code,
      },
    });
    res.status(200).send({
      verifiedcount: countWithStatusverified,
      verification_failedcount: countWithStatusverification_failed,
      empetycount: countWithEmptyStatus,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong with the getStatisticsbyworkerid route",
    });
  }
};

exports.getStatisticsbyinspectorauth = async (req, res) => {
  const workerid = req.body.venderId;
  const state_code = req.params["state_code"];
  try {
    const countWithStatusverified = await Users.count({
      where: {
        inspectorId: workerid,
        status: "verified",
        state_code: state_code,
      },
    });
    const countWithStatusverification_failed = await Users.count({
      where: {
        inspectorId: workerid,
        status: "verification_failed",
        state_code: state_code,
      },
    });
    let countWithStatus =
      countWithStatusverified + countWithStatusverification_failed;
    console.log(countWithStatus);
    const countWithEmptyStatus = await Users.count({
      where: {
        inspectorId: workerid,
        status: "not_verified",
        state_code: state_code,
      },
    });
    res.status(200).send({
      verifiedcount: countWithStatusverified,
      verification_failedcount: countWithStatusverification_failed,
      empetycount: countWithEmptyStatus,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong with the getStatisticsbyworkerid route",
    });
  }
};

// todo()

exports.getMasterstatisticsbyinspectorid = async (req, res) => {
  const inspectorid = req.params["inspectorid"];
  try {
    const results = await Users.findAll({
      attributes: [
        "state_code",
        [
          Sequelize.fn(
            "SUM",
            Sequelize.literal("CASE WHEN status = 'verified' THEN 1 ELSE 0 END")
          ),
          "verified_count",
        ],
        [
          Sequelize.fn(
            "SUM",
            Sequelize.literal(
              "CASE WHEN status = 'verification_failed' THEN 1 ELSE 0 END"
            )
          ),
          "verification_failed_count",
        ],
        [
          Sequelize.fn(
            "SUM",
            Sequelize.literal(
              "CASE WHEN status = 'not_verified' THEN 1 ELSE 0 END"
            )
          ),
          "not_verified_count",
        ],
      ],
      where: {
        inspectorId: inspectorid,
      },
      group: ["state_code"],
    });
    // console.log(results);
    res.status(200).send(results);
  } catch (error) {
    res.status(400).send(error);
  }
};

// todo()
exports.getMasterstatisticsbyauth = async (req, res) => {
  const inspectorid = req.body.venderId;
  try {
    const results = await Users.findAll({
      attributes: [
        "state_code",
        [
          Sequelize.fn(
            "SUM",
            Sequelize.literal("CASE WHEN status = 'verified' THEN 1 ELSE 0 END")
          ),
          "verified_count",
        ],
        [
          Sequelize.fn(
            "SUM",
            Sequelize.literal(
              "CASE WHEN status = 'verification_failed' THEN 1 ELSE 0 END"
            )
          ),
          "verification_failed_count",
        ],
        [
          Sequelize.fn(
            "SUM",
            Sequelize.literal(
              "CASE WHEN status = 'not_verified' THEN 1 ELSE 0 END"
            )
          ),
          "not_verified_count",
        ],
      ],
      where: {
        inspectorId: inspectorid,
      },
      group: ["state_code"],
    });
    // console.log(results);
    res.status(200).send(results);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getcountofnotassignedUserstoworker = async (req, res) => {
  try {
    const count = await Users.count({
      where: {
        venderID: 0,
        venderStatus: "",
        inspectorId: 0,
      },
    });
    res.status(200).send({ count: count });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong with the getcountofnotassignedUsers route",
    });
  }
};

exports.getcountofnotassignedUserstoinspectors = async (req, res) => {
  const state_code = req.params["state_code"];
  try {
    const count = await Users.count({
      where: {
        status: "not_verified",
        venderStatus: {
          [Op.in]: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        },
        inspectorId: 0,
        state_code: state_code,
      },
    });
    res.status(200).send({ count: count });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong with the getcountofnotassignedUsers route",
    });
  }
};

//todo()
exports.getmastercountofnotassignedUserstoinspectors = async (req, res) => {
  try {
    const count = await Users.count({
      where: {
        status: "not_verified",
        venderStatus: {
          [Op.in]: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        },
        inspectorId: 0,
      },
    });
    res.status(200).send({ count: count });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong with the getcountofnotassignedUsers route",
    });
  }
};

exports.getworkerassignedallUsers = async (req, res) => {
  ID = req.body.venderId;
  try {
    const users = await Users.findAll({
      where: {
        venderID: ID,
      },
    });
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong with the getworkerassignedallUsers route",
    });
  }
};

exports.getworkerverifiedUsers = async (req, res) => {
  ID = req.body.venderId;
  try {
    const users = await Users.findAll({
      where: {
        venderID: ID,
        venderStatus: {
          [Op.in]: ["inprocess", "onhold", "reject"],
        },
      },
    });
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong with the getworkerverifiedUsers route",
    });
  }
};

exports.getworkernotverifiedUsers = async (req, res) => {
  ID = req.body.venderId;
  try {
    const users = await Users.findAll({
      where: {
        venderID: ID,
        venderStatus: "",
      },
    });
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong with the getworkerverifiedUsers route",
    });
  }
};

// exports.getinspectorallassignedUsers = async (req, res) => {
//   ID = req.body.venderId;
//   try {
//     const users = await Users.findAll({
//       where: {
//         inspectorId: ID,
//       },
//     });

//     res.status(200).send(users);
//   } catch (error) {
//     res.status(500).json({
//       message:
//         "something went wrong with the getinspectorallassignedUsers route",
//     });
//   }
// };

// exports.getinspectornotverifiedUsers = async (req, res) => {
//   ID = req.body.venderId;
//   try {
//     const users = await Users.findAll({
//       where: {
//         inspectorId: ID,
//         status: "not_verified",
//       },
//     });

//     res.status(200).send(users);
//   } catch (error) {
//     res.status(500).json({
//       message:
//         "something went wrong with the getinspectornotverifiedUsers route",
//     });
//   }
// };

// exports.getinspectorverifiedUsers = async (req, res) => {
//   console.log("working");
//   ID = req.body.venderId;
//   // sdfasdfasdfsdf
//   try {
//     const users = await Users.findAll({
//       where: {
//         inspectorId: ID,
//         status: {
//           [Op.in]: ["verified", "verificatcdion_failed"],
//         },
//       },
//     });
//     res.status(200).send(users);
//   } catch (error) {
//     res.status(500).json({
//       message: "something went wrong with the getinspectorverifiedUsers route",
//     });
//   }
// };

exports.getinspectorallassignedUsers = async (req, res) => {
  ID = req.body.venderId;
  const rolecheck = await Vender.findByPk(ID);
  let state_code = rolecheck.state_code;
  try {
    const users = await Users.findAll({
      where: {
        inspectorId: ID,
        state_code: state_code,
      },
    });

    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({
      message:
        "something went wrong with the getinspectorallassignedUsers route",
    });
  }
};

exports.getinspectornotverifiedUsers = async (req, res) => {
  ID = req.body.venderId;
  const rolecheck = await Vender.findByPk(ID);
  let state_code = rolecheck.state_code;
  try {
    const users = await Users.findAll({
      where: {
        inspectorId: ID,
        status: "not_verified",
        state_code: state_code,
      },
    });

    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({
      message:
        "something went wrong with the getinspectornotverifiedUsers route",
    });
  }
};

exports.getinspectorverifiedUsers = async (req, res) => {
  ID = req.body.venderId;
  const rolecheck = await Vender.findByPk(ID);
  let state_code = rolecheck.state_code;
  // sdfasdfasdfsdf
  try {
    const users = await Users.findAll({
      where: {
        inspectorId: ID,
        status: {
          [Op.in]: ["verified", "verificatcdion_failed"],
        },
        state_code: state_code,
      },
    });
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong with the getinspectorverifiedUsers route",
    });
  }
};

//todo
exports.recordInspectorstatistics = async (req, res) => {
  const state_code = req.params["state_code"];
  try {
    const totalrecordscount = await Users.count({
      where: {
        state_code: state_code, // Add your desired state code here
      },
    });
    const unassignedinspectorcount = await Users.count({
      where: {
        status: "not_verified",
        venderStatus: {
          [Op.in]: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        },
        inspectorId: 0,
        state_code: state_code,
      },
    });
    const assignedinspectorcount = totalrecordscount - unassignedinspectorcount;
    res.status(200).send({
      unassignedinspectorcount,
      assignedinspectorcount,
      totalrecordscount,
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong with the recordInspectorstatistics route",
    });
  }
};

//todo()
exports.masterrecordInspectorstatistics = async (req, res) => {
  try {
    const totalrecordscount = await Users.count();
    const unassignedinspectorcount = await Users.count({
      where: {
        status: "not_verified",
        venderStatus: {
          [Op.in]: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        },
        inspectorId: 0,
      },
    });
    const assignedinspectorcount = totalrecordscount - unassignedinspectorcount;
    res.status(200).send({
      unassignedinspectorcount,
      assignedinspectorcount,
      totalrecordscount,
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong with the recordInspectorstatistics route",
    });
  }
};

//todo
exports.unassignedrecordstoInspector = async (req, res) => {
  let page = req.params["page"];
  const state_code = req.params["state_code"];
  const pageSize = 10;
  try {
    const unassignedInspectors = await Users.findAll({
      where: {
        status: "not_verified",
        venderStatus: {
          [Sequelize.Op.in]: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
          ],
        },
        inspectorId: 0,
        state_code: state_code,
      },
      offset: (page - 1) * pageSize, // Calculate the offset based on page number
      limit: pageSize, // Set the limit to the number of records per page
    });
    res.status(200).send(unassignedInspectors);
  } catch (error) {
    res.status(500).json({
      message:
        "something went wrong with the unassignedrecordstoInspector route",
    });
  }
};

exports.masterunassignedrecordstotheInspectorreport = async (req, res) => {
  try {
    const unassignedInspectors = await Users.findAll({
      where: {
        status: "not_verified",
        venderStatus: {
          [Sequelize.Op.in]: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
          ],
        },
        inspectorId: 0,
      },
    });
    res.status(200).send(unassignedInspectors);
  } catch (error) {
    res.status(500).json({
      message:
        "something went wrong with the unassignedrecordstoInspector route",
    });
  }
};

//todo()
exports.masterunassignedrecordstoInspector = async (req, res) => {
  let page = req.params["page"];
  const pageSize = 10;
  try {
    const unassignedInspectors = await Users.findAll({
      where: {
        status: "not_verified",
        venderStatus: {
          [Sequelize.Op.in]: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
          ],
        },
        inspectorId: 0,
      },
      offset: (page - 1) * pageSize, // Calculate the offset based on page number
      limit: pageSize, // Set the limit to the number of records per page
    });
    res.status(200).send(unassignedInspectors);
  } catch (error) {
    res.status(500).json({
      message:
        "something went wrong with the unassignedrecordstoInspector route",
    });
  }
};

//todo
// exports.getverificationfailedRecords = async (req, res) => {
//   try {
//     const verificationFailedUsers = await Users.findAll({
//       where: {
//         status: "verification_failed",
//       },
//     });
//     res.status(200).send(verificationFailedUsers);
//   } catch (error) {
//     res.status(500).json({
//       message:
//         "something went wrong with the getverificationfailedrecords route",
//     });
//   }
// };

//todo
exports.getverificationfailedRecords = async (req, res) => {
  const state_code = req.params["state_code"];
  try {
    const verificationFailedUsers = await Users.findAll({
      where: {
        status: "verification_failed",
        state_code: state_code,
      },
    });
    res.status(200).send(verificationFailedUsers);
  } catch (error) {
    res.status(500).json({
      message:
        "something went wrong with the getverificationfailedrecords route",
    });
  }
};
//todo
exports.getverificationfailedRecordsbyauth = async (req, res) => {
  let inspectorId = req.body.venderId;
  try {
    const verificationFailedUsers = await Users.findAll({
      where: {
        status: "verification_failed",
        inspectorId,
      },
    });
    res.status(200).send(verificationFailedUsers);
  } catch (error) {
    res.status(500).json({
      message:
        "something went wrong with the getverificationfailedrecords route",
    });
  }
};

//todo
// exports.inspectorReport = async (req, res) => {
//   try {
//     // Get all venders with the role "inspector"
//     const inspectors = await Vender.findAll({
//       where: {
//         role: "inspector",
//       },
//     });
//     // Extract inspectorIds from the inspectors
//     const inspectorIds = inspectors.map((inspector) => inspector.id);

//     // Create an array to store inspector data
//     const inspectorData = [];

//     // Fetch and store data for each inspector
//     for (const inspector of inspectors) {
//       const inspectorId = inspector.id;
//       const inspectorName = inspector.name; // Replace with your inspector name field
//       const inspectorNumber = inspector.number; // Replace with your inspector number field

//       const verifiedCount = await Users.count({
//         where: {
//           inspectorId,
//           status: "verified",
//         },
//       });

//       const failedCount = await Users.count({
//         where: {
//           inspectorId,
//           status: "verification_failed",
//         },
//       });

//       const totalCount = await Users.count({
//         where: {
//           inspectorId,
//         },
//       });

//       inspectorData.push({
//         inspectorId,
//         inspectorName,
//         inspectorNumber,
//         verifiedCount,
//         verification_failedcount: failedCount,
//         totalcheckedCount: verifiedCount + failedCount,
//         totalassignedCount: totalCount,
//       });
//     }

//     res.status(200).send(inspectorData);
//   } catch (error) {
//     res.status(500).json({
//       message:
//         "something went wrong with the getverificationfailedrecords route",
//     });
//   }
// };

//todo
exports.inspectorReport = async (req, res) => {
  const state_code = req.params["state_code"];
  try {
    // Get all venders with the role "inspector"
    const inspectors = await Vender.findAll({
      where: {
        role: "inspector",
        state_code,
      },
    });
    console.log(inspectors);
    // Extract inspectorIds from the inspectors
    const inspectorIds = inspectors.map((inspector) => inspector.id);

    // Create an array to store inspector data
    const inspectorData = [];

    // Fetch and store data for each inspector
    for (const inspector of inspectors) {
      const inspectorId = inspector.id;
      const inspectorName = inspector.name; // Replace with your inspector name field
      const inspectorNumber = inspector.number; // Replace with your inspector number field

      const verifiedCount = await Users.count({
        where: {
          inspectorId,
          status: "verified",
          state_code,
        },
      });

      const failedCount = await Users.count({
        where: {
          inspectorId,
          status: "verification_failed",
          state_code,
        },
      });

      const totalCount = await Users.count({
        where: {
          inspectorId,
          state_code,
        },
      });

      inspectorData.push({
        inspectorId,
        inspectorName,
        inspectorNumber,
        verifiedCount,
        verification_failedcount: failedCount,
        totalcheckedCount: verifiedCount + failedCount,
        totalassignedCount: totalCount,
      });
    }

    res.status(200).send(inspectorData);
  } catch (error) {
    res.status(500).json({
      message:
        "something went wrong with the getverificationfailedrecords route",
    });
  }
};

//todo
exports.masterinspectorReport = async (req, res) => {
  try {
    // Get all venders with the role "inspector"
    const inspectors = await Vender.findAll({
      where: {
        role: "inspector",
      },
    });
    console.log(inspectors);
    // Extract inspectorIds from the inspectors
    const inspectorIds = inspectors.map((inspector) => inspector.id);

    // Create an array to store inspector data
    const inspectorData = [];

    // Fetch and store data for each inspector
    for (const inspector of inspectors) {
      const inspectorId = inspector.id;
      const inspectorName = inspector.name; // Replace with your inspector name field
      const inspectorNumber = inspector.number; // Replace with your inspector number field

      const verifiedCount = await Users.count({
        where: {
          inspectorId,
          status: "verified",
        },
      });

      const failedCount = await Users.count({
        where: {
          inspectorId,
          status: "verification_failed",
        },
      });

      const totalCount = await Users.count({
        where: {
          inspectorId,
        },
      });

      inspectorData.push({
        inspectorId,
        inspectorName,
        inspectorNumber,
        verifiedCount,
        verification_failedcount: failedCount,
        totalcheckedCount: verifiedCount + failedCount,
        totalassignedCount: totalCount,
      });
    }

    res.status(200).send(inspectorData);
  } catch (error) {
    res.status(500).json({
      message:
        "something went wrong with the getverificationfailedrecords route",
    });
  }
};
//todo
exports.getverifiedrecordsReport = async (req, res) => {
  const state_code = req.params["state_code"];
  try {
    const users = await Users.findAll({
      where: {
        state_code: state_code,
        status: "verified", // Replace with your status condition
      },
      include: [
        {
          model: Vender,
          as: "VenderInfo", // Alias for the Vender association
        },
      ],
    });

    const resultArray = users.map((x) => {
      const result = {
        id: x.id,
        aggr_id: x.aggr_id,
        member_id: x.member_id,
        firstName: x.first_name,
        lastName: x.last_name,
        relative_name: x.relative_name,
        date_of_birth: x.date_of_birth,
        id_type: x.id_type,
        id_value: x.id_value,
        ID_FRONT: x.ID_FRONT,
        ID_BACK: x.ID_BACK,
        PHOTO_LINK: x.PHOTO_LINK,
        VIDEO: x.VIDEO,
        status: x.status,
        venderID: x.venderID,
        venderStatus: x.venderStatus,
        vender_reason: x.vender_reason,
        comment: x.comment,
        inspectorId: x.inspectorId,
      };

      // Check if VenderInfo is not null
      if (x.VenderInfo) {
        result.inspectorName = x.VenderInfo.name;
        // Add more properties from VenderInfo as needed
      }

      return result;
    });

    res.status(200).send(resultArray);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong with the getverifiedrecordsReport route",
    });
  }
};

//todo
exports.getverificationfailedrecordsReport = async (req, res) => {
  const state_code = req.params["state_code"];
  try {
    const users = await Users.findAll({
      where: {
        state_code: state_code,
        status: "verification_failed", // Replace with your status condition
      },
      include: [
        {
          model: Vender,
          as: "VenderInfo", // Alias for the Vender association
        },
      ],
    });

    const resultArray = users.map((x) => {
      const result = {
        id: x.id,
        aggr_id: x.aggr_id,
        member_id: x.member_id,
        firstName: x.first_name,
        lastName: x.last_name,
        relative_name: x.relative_name,
        date_of_birth: x.date_of_birth,
        id_type: x.id_type,
        id_value: x.id_value,
        ID_FRONT: x.ID_FRONT,
        ID_BACK: x.ID_BACK,
        PHOTO_LINK: x.PHOTO_LINK,
        VIDEO: x.VIDEO,
        status: x.status,
        venderID: x.venderID,
        venderStatus: x.venderStatus,
        vender_reason: x.vender_reason,
        comment: x.comment,
        inspectorId: x.inspectorId,
      };

      // Check if VenderInfo is not null
      if (x.VenderInfo) {
        result.inspectorName = x.VenderInfo.name;
        // Add more properties from VenderInfo as needed
      }
      return result;
    });
    res.status(200).send(resultArray);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong with the getverifiedrecordsReport route",
    });
  }
};

//todo
exports.getverifiedandverificationfailedReport = async (req, res) => {
  const state_code = req.params["state_code"];
  try {
    const users = await Users.findAll({
      where: {
        state_code: state_code,
        [Op.or]: [{ status: "verified" }, { status: "verification_failed" }],
      },
      include: [
        {
          model: Vender,
          as: "VenderInfo", // Alias for the Vender association
        },
      ],
    });

    const resultArray = users.map((x) => {
      const result = {
        id: x.id,
        aggr_id: x.aggr_id,
        member_id: x.member_id,
        firstName: x.first_name,
        lastName: x.last_name,
        relative_name: x.relative_name,
        date_of_birth: x.date_of_birth,
        id_type: x.id_type,
        id_value: x.id_value,
        ID_FRONT: x.ID_FRONT,
        ID_BACK: x.ID_BACK,
        PHOTO_LINK: x.PHOTO_LINK,
        VIDEO: x.VIDEO,
        status: x.status,
        venderID: x.venderID,
        venderStatus: x.venderStatus,
        vender_reason: x.vender_reason,
        comment: x.comment,
        inspectorId: x.inspectorId,
      };

      // Check if VenderInfo is not null
      if (x.VenderInfo) {
        result.inspectorName = x.VenderInfo.name;
        // Add more properties from VenderInfo as needed
      }
      return result;
    });
    res.status(200).send(resultArray);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong with the getverifiedrecordsReport route",
    });
  }
};

exports.getinspecassignedusersbyconditontoadminUsers = async (req, res) => {
  const ID = req.params.inspectorId;
  const msg = req.params.msg;
  try {
    const users = await Users.findAll({
      where: {
        inspectorId: ID,
        status: msg,
      },
    });
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({
      message:
        "Something went wrong with the getinspecassignedusersbyconditontoadminUsers route",
    });
  }
};

exports.getfilterdataforinspector = async (req, res) => {
  const ID = req.body.venderId;
  const key = req.params["key"];
  const value = req.params["value"];
  const venderStatus = req.params["venderStatus"];
  const msg = req.params["msg"];
  const page = req.params["page"];
  const user = await Users.findOne({"id":ID});
  const state_code = user.state_code;

  const whereConditions = {};
  whereConditions.inspectorId = ID;
  if (state_code != "0") {
    whereConditions.state_code = state_code;
  }
  if (msg != "0") {
    whereConditions.status = msg;
  }
  if (venderStatus != "empty") {
    whereConditions.venderStatus = venderStatus;
  }
  try {
    if (key === "0" && value === "0") {
      const limit = 100;
      const offset = (page - 1) * limit;
      const userRecords = await Users.findAndCountAll({
        where: whereConditions,
        limit: limit,
        offset: offset,
      });
      res.status(200).send(userRecords);
    } else {
      const limit = 100;
      const offset = (page - 1) * limit;
      const lowerCaseValue = value.toLowerCase(); // Convert the query value to lowercase
      const records = await Users.findAndCountAll({
        where: {
          ...whereConditions,
          [Op.or]: [
            sequelize.where(
              sequelize.fn("LOWER", sequelize.col(key)),
              lowerCaseValue
            ),
            {
              [key]: {
                [Op.regexp]: `.*${lowerCaseValue}.*`,
              },
            },
          ],
        },
        limit: limit,
        offset: offset,
      });
      res.status(200).send(records);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Some thing went wrong in the filter route" });
  }
};
