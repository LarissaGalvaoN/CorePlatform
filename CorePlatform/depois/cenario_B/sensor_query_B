import pool from "./db_connection";

export async function getTransactions(userInput: string) {
  const query = `
    SELECT *
    FROM transactions
    WHERE client_id = $1
  `;

  const result = await pool.query(query, [userInput]);

  return result.rows;
}