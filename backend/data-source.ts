import { DataSource } from "typeorm";
import { Game } from "./entities/Game";
import { Genre } from "./entities/Genre";
import { ParentPlatform } from "./entities/ParentPlatform";
import { Store } from "./entities/Store";

export const AppDataSource = new DataSource({
  /* type: "mysql", */
  type: process.env.DB_TYPE as "mysql" | "postgres",
  /* url is the connection string */
  url: process.env["DATABASE_URL"],
  /* host: "localhost",
  port: 3307,
  username: "root",
  password: "123456",
  database: "rawgDatabase", */
  entities: [Game, Genre, ParentPlatform, Store],
  synchronize: true,
  logging: true,
});
