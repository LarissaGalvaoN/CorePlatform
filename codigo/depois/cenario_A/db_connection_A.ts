// [Contém IA]

import { Client, ClientConfig } from "pg";

function getDatabaseConfig(): ClientConfig {
  return {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT ?? 5432),
  };
}

export async function getConnection(): Promise<Client> {
  const client = new Client(getDatabaseConfig());

  await client.connect();

  return client;
}