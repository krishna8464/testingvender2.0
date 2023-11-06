const express = require("express");
const Userroute = express.Router();
const { Users } = require("../models/userModel");
const { logger } = require("../middleware/logger");
const {
  createUser,
  getUsers,
  mastergetUsers,
  updatebyId,
  deletebyId,
  getuserbyId,
  getCount,
  filterbyStatus,
  masterfilterbyStatus,
  getallcount,
  findUser,
  adminfindUser,
} = require("../controllers/usercontroller");
const { authMiddleware } = require("../middleware/auth");

Userroute.get("/database", async (req, res) => {
  res.send("Working");
});

Userroute.post("/create", logger, createUser);

Userroute.get("/get/:state_code/:page", logger, authMiddleware, getUsers);

Userroute.get("/masterget/:page", logger, authMiddleware, mastergetUsers);

Userroute.patch("/update/:id", logger, authMiddleware, updatebyId);

Userroute.delete("/delete/:id", logger, authMiddleware, deletebyId);

Userroute.get("/getone/:id", logger, authMiddleware, getuserbyId);

Userroute.get("/getnumber/:state_code", logger, authMiddleware, getCount);



Userroute.get("/filter/:key/:value/:msg/:venderStatus/:state_code/:page", logger, authMiddleware , filterbyStatus );

Userroute.get(
  "/masterfilterbyStatus/:page",
  logger,
  authMiddleware,
  masterfilterbyStatus
);

Userroute.get("/getallcount", logger, authMiddleware, getallcount);

Userroute.get("/search/:key/:value", logger, authMiddleware, findUser);

Userroute.get(
  "/adminfindUser/:key/:value/:page",
  logger,
  authMiddleware,
  adminfindUser
);

module.exports = { Userroute };
