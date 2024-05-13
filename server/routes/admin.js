import express from 'express';
import { getUserData, logOut, login, userList } from '../controller/admin.js';
import adminAuthentication from '../middleware/adminAuthentication.js';

const admin = express.Router();

admin.post("/login", login);
admin.get("/profile", adminAuthentication, getUserData);
admin.get("/log-out", logOut);
admin.get("/users", adminAuthentication, userList);

export default admin;