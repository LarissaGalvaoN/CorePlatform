// [Contém IA]

import { getConnection } from "./db_connection";

export async function getTransactions(
  clientId: string
): Promise<Record<string, unknown>[]> {

  if (!clientId || clientId.trim().length === 0) {
    throw new Error("clientId é obrigatório");
  }

  const client = await getConnection();

  try {
    const query = `
      SELECT
        id,
        client_id,
        amount,
        created_at
      FROM transactions
      WHERE client_id = $1
    `;

    const result = await client.query(query, [clientId]);

    return result.rows;

  } finally {
    await client.end();
  }
}