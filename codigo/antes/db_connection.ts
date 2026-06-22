import { Client } from "pg";

const DB_CONFIG = {
  host: "coreit-prod-db.internal",
  database: "coreplatform",
  user: "admin_coreit",
  password: "SuperSecret123!", 
  port: 5432,
};

export function getConnection() {
  const client = new Client(DB_CONFIG);

  client.connect();

  return client;
}