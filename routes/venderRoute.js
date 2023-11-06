const express = require("express");
const Venderroute = express.Router();
require("dotenv").config();

const jwt = require("jsonwebtoken");

const { Vender } = require("../models/venderModel");
const { logger } = require("../middleware/logger");
const { authMiddleware } = require("../middleware/auth");
const {
  createVender,
  getOTP,
  validateOTP,
  updateVenderbyid,
  updateVenderbyauth,
  deleteVender,
  getoneVender,
  getallVender,
  getcoutallVender,
  venderLogout,
  venderincCount,
  venderdecCount,
  venderStatistics,
  vendertopScore,
  venderscoreASC,
  venderscoreDESC,
  vendernameASC,
  findVender,
  assignVender,
  assignWorker,
  releaveWorker,
  assignInspector,
  releaveInspector,
  releaveInspectorbyrecordcount,
  getcountofnotassignedUserstoworker,
  getcountofnotassignedUserstoinspectors,
  getmastercountofnotassignedUserstoinspectors,
  getinspectorallassignedUsers,
  getinspectornotverifiedUsers,
  getinspectorverifiedUsers,
  getWorkers,
  getInspectors,
  workergetASC,
  inspectorgetASC,
  workergetDESC,
  inspectorgetDESC,
  getStatisticsbyworkerid,
  getStatisticsbyworkerauth,
  getStatisticsbyinspectorid,
  getStatisticsbyinspectorauth,
  getMasterstatisticsbyinspectorid,
  getMasterstatisticsbyauth,
  getworkerassignedallUsers,
  getworkerverifiedUsers,
  getworkernotverifiedUsers,
  recordInspectorstatistics,
  masterrecordInspectorstatistics,
  unassignedrecordstoInspector,
  masterunassignedrecordstoInspector,
  masterunassignedrecordstotheInspectorreport,
  getverificationfailedRecords,
  getverificationfailedRecordsbyauth,
  inspectorReport,
  masterinspectorReport,
  getverifiedrecordsReport,
  getverificationfailedrecordsReport,
  getverifiedandverificationfailedReport,
  getvenderHistorybyid,
  getoneVenderbyAuth,
  getinspecassignedusersbyconditontoadminUsers,
  getfilterdataforinspector,
  getvenderdistrictsbyid,
  getvenderdistrictsbyauth,
  getvenderHistorybyauth
} = require("../controllers/vendercontroller");

Venderroute.post("/create", logger, createVender);

Venderroute.post("/getOTP", logger, getOTP);

Venderroute.post("/validateOTP", logger, validateOTP);

Venderroute.patch("/update/:id", logger, authMiddleware, updateVenderbyid);

Venderroute.get("/getvenderHistorybyid/:id", logger, getvenderHistorybyid);

Venderroute.get("/getvenderHistorybyauth" , logger , authMiddleware , getvenderHistorybyauth)

Venderroute.get("/getvenderdistrictsbyid/:id", logger , getvenderdistrictsbyid);

Venderroute.get("/getvenderdistrictsbyauth" , logger, authMiddleware , getvenderdistrictsbyauth);

Venderroute.patch(
  "/updateVenderbyauth",
  logger,
  authMiddleware,
  updateVenderbyauth
);

Venderroute.delete("/delete/:id", logger, deleteVender);

Venderroute.get("/getone/:id", logger, getoneVender);

Venderroute.get("/getall", logger, getallVender);

Venderroute.get("/getcount", logger, getcoutallVender);

Venderroute.post("/logout", logger, authMiddleware, venderLogout);

Venderroute.patch("/increcount", logger, authMiddleware, venderincCount);

Venderroute.patch("/deccount", logger, authMiddleware, venderdecCount);

Venderroute.get("/venderStatistics", logger, authMiddleware, venderStatistics);

Venderroute.get("/topthree/:state_code", logger, vendertopScore);

Venderroute.get("/venderscoreASC", logger, venderscoreASC);

Venderroute.get("/venderscoreDSC", logger, venderscoreDESC);

Venderroute.get("/vendernameASC", logger, vendernameASC);

Venderroute.get(
  "/search/:key/:value/:state_code",
  logger,
  authMiddleware,
  findVender
);

Venderroute.post(
  "/assignWorker/:venderid/:recordcount",
  logger,
  authMiddleware,
  assignWorker
);

Venderroute.post(
  "/releaveworker/:venderid",
  logger,
  authMiddleware,
  releaveWorker
);

Venderroute.post(
  "/assignInspector/:venderid/:recordcount/:state_code",
  logger,
  authMiddleware,
  assignInspector
);

Venderroute.post(
  "/releaveInspector/:venderid/:state_code",
  logger,
  authMiddleware,
  releaveInspector
);

Venderroute.post(
  "/releaveInspectorbyrecordcount/:venderid/:recordcount/:state_code",
  logger,
  authMiddleware,
  releaveInspectorbyrecordcount
);

// Venderroute.get("/getStatisticsbyid/:venderid", logger , getStatisticsbyid);

// Venderroute.get("/getStatisticsbyauth" , logger , authMiddleware , getStatisticsbyauth);

Venderroute.get(
  "/getcountofnotassignedUserstoworker",
  logger,
  getcountofnotassignedUserstoworker
);

Venderroute.get(
  "/getcountofnotassignedUserstoinspectors/:state_code",
  logger,
  getcountofnotassignedUserstoinspectors
);

Venderroute.get(
  "/getmastercountofnotassignedUserstoinspectors",
  logger,
  getmastercountofnotassignedUserstoinspectors
);

Venderroute.get("/getWorkers", logger, getWorkers);

Venderroute.get("/getInspectors/:state_code", logger, getInspectors);

Venderroute.get("/workergetASC", logger, workergetASC);

Venderroute.get("/workergetDESC", logger, workergetDESC);

Venderroute.get("/inspectorgetASC", logger, inspectorgetASC);

Venderroute.get("/inspectorgetDESC", logger, inspectorgetDESC);

Venderroute.get(
  "/getStatisticsbyworkerid/:workerid",
  logger,
  getStatisticsbyworkerid
);

Venderroute.get(
  "/getStatisticsbyworkerauth",
  logger,
  authMiddleware,
  getStatisticsbyworkerauth
);

Venderroute.get(
  "/getStatisticsbyinspectorid/:inspectorid/:state_code",
  logger,
  getStatisticsbyinspectorid
);

Venderroute.get(
  "/getStatisticsbyinspectorauth/:state_code",
  logger,
  authMiddleware,
  getStatisticsbyinspectorauth
);

Venderroute.get(
  "/getMasterstatisticsbyinspectorid/:inspectorid",
  logger,
  getMasterstatisticsbyinspectorid
);

Venderroute.get(
  "/getMasterstatisticsbyauth",
  logger,
  authMiddleware,
  getMasterstatisticsbyauth
);

Venderroute.get(
  "/getworkerassignedallUsers",
  logger,
  authMiddleware,
  getworkerassignedallUsers
);

Venderroute.get(
  "/getworkerverifiedUsers",
  logger,
  authMiddleware,
  getworkerverifiedUsers
);

Venderroute.get(
  "/getworkernotverifiedUsers",
  logger,
  authMiddleware,
  getworkernotverifiedUsers
);

Venderroute.get(
  "/getinspectornotverifiedUsers",
  logger,
  authMiddleware,
  getinspectornotverifiedUsers
);

Venderroute.get(
  "/getinspectorverifiedUsers",
  logger,
  authMiddleware,
  getinspectorverifiedUsers
);

Venderroute.get(
  "/getinspectorallassignedUsers",
  logger,
  authMiddleware,
  getinspectorallassignedUsers
);

Venderroute.get(
  "/recordInspectorstatistics/:state_code",
  logger,
  recordInspectorstatistics
);

Venderroute.get(
  "/masterrecordInspectorstatistics",
  logger,
  masterrecordInspectorstatistics
);

Venderroute.get(
  "/unassignedrecordstoInspector/:page/:state_code",
  logger,
  unassignedrecordstoInspector
);

Venderroute.get(
  "/masterunassignedrecordstotheInspectorreport",
  logger,
  masterunassignedrecordstotheInspectorreport
);

Venderroute.get(
  "/masterunassignedrecordstoInspector/:page",
  logger,
  masterunassignedrecordstoInspector
);

Venderroute.get(
  "/getverificationfailedRecords/:state_code",
  logger,
  getverificationfailedRecords
);

Venderroute.get(
  "/getverificationfailedRecordsbyauth",
  logger,
  authMiddleware,
  getverificationfailedRecordsbyauth
);

Venderroute.get("/inspectorReport/:state_code", logger, inspectorReport);

Venderroute.get("/masterinspectorReport", logger, masterinspectorReport);

Venderroute.get(
  "/getverifiedrecordsReport/:state_code",
  logger,
  getverifiedrecordsReport
);

Venderroute.get(
  "/getverificationfailedrecordsReport/:state_code",
  logger,
  getverificationfailedrecordsReport
);

Venderroute.get(
  "/getverifiedandverificationfailedReport/:state_code",
  logger,
  getverifiedandverificationfailedReport
);

Venderroute.get("/getonebyAuth", logger, authMiddleware, getoneVenderbyAuth);

Venderroute.get(
  "/getinspecassignedusersbyconditontoadminUsers/:msg/:inspectorId",
  logger,
  getinspecassignedusersbyconditontoadminUsers
);

Venderroute.post(
  "/assignVender/:venderid/:userid",
  logger,
  authMiddleware,
  assignVender
);

Venderroute.get("/filter/:key/:value/:msg/:venderStatus/:page", logger, authMiddleware , getfilterdataforinspector );



module.exports = { Venderroute };
