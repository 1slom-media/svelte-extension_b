import express from "express";
import { PORT } from "./config.js";
import modules from "./modules/index.js";
import cors from 'cors';
import errorHandler from "./utils/error-handler.js";

const app = express(); 

app.use(express.json());
app.use(cors());
app.use(modules);
app.use(errorHandler)

app.listen(PORT, () => console.log(`server ready at http://localhost:${PORT}`));