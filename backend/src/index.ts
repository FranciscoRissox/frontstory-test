import express from 'express';
import { AppDataSource } from "./data-source";
import campaignRouter from "./routes/campaign";
import cors from 'cors';

AppDataSource.initialize().then(async () => {
    console.log("Data Source has been initialized!");

    const app = express();
    const port = 3000;

    app.use(cors());    
    app.use(express.json());
    app.use('/campaigns', campaignRouter);

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });

}).catch(error => console.log("Error during Data Source initialization:", error));