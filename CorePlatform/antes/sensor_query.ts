import { getConnection } from "./db_connection";

export async function getTransactions(userInput: string) {
  const client = getConnection();

  const query = `
    SELECT *
    FROM transactions
    WHERE client_id = '${userInput}'
  `;

  const result = await client.query(query);

  await client.end();

  return result.rows;
}