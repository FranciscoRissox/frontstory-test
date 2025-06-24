import express from 'express';
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(async () => {
    console.log("Data Source has been initialized!");

    const app = express();
    const port = 3000;

    app.get('/', (req, res) => {
        res.send('Hello, World from TypeScript Express!');
    });

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });

}).catch(error => console.log("Error during Data Source initialization:", error));