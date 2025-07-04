import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [__dirname + '/entity/**/*.ts'],
    migrations: [],
    subscribers: [],
})
