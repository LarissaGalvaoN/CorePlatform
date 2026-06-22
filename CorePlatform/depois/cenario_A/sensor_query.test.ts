// [Contém IA]

import { getTransactions } from "./sensor_query";
import { getConnection } from "./db_connection";

jest.mock("./db_connection");

describe("getTransactions", () => {

  const mockQuery = jest.fn();
  const mockEnd = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (getConnection as jest.Mock).mockResolvedValue({
      query: mockQuery,
      end: mockEnd,
    });
  });


  it("deve retornar transações para um clientId válido", async () => {

    mockQuery.mockResolvedValue({
      rows: [
        {
          id: 1,
          client_id: "123",
          amount: 100,
        },
      ],
    });


    const result = await getTransactions("123");


    expect(result).toHaveLength(1);
    expect(mockQuery).toHaveBeenCalledWith(
      expect.stringContaining("WHERE client_id = $1"),
      ["123"]
    );

    expect(mockEnd).toHaveBeenCalled();
  });


  it("deve rejeitar clientId vazio", async () => {

    await expect(
      getTransactions("")
    ).rejects.toThrow("clientId é obrigatório");


    expect(getConnection).not.toHaveBeenCalled();
  });


  it("deve fechar conexão quando ocorrer erro na consulta", async () => {

    mockQuery.mockRejectedValue(
      new Error("Database error")
    );


    await expect(
      getTransactions("123")
    ).rejects.toThrow("Database error");


    expect(mockEnd).toHaveBeenCalled();
  });

});