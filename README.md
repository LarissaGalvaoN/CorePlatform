# CorePlatform – Simulação de Governança de IA

Este repositório foi desenvolvido exclusivamente para o **Trabalho Final da disciplina de Governança de TI**.

Seu objetivo **não é representar uma aplicação funcional**, mas sim servir como ambiente de simulação para demonstrar os impactos do uso de Inteligência Artificial **com e sem regras de governança** durante o desenvolvimento de software.

O cenário é baseado na empresa fictícia **CoreIT Solutions**, apresentada no relatório do trabalho.

---

## Objetivo da Simulação

A proposta deste repositório é comparar dois cenários de utilização de IA no desenvolvimento de software:

### Cenário A – Com Governança

A IA recebe previamente um conjunto de regras de governança definidas para a empresa, contemplando aspectos como:

- proteção de dados sensíveis;
- prevenção de vulnerabilidades;
- geração de testes unitários;
- rastreabilidade;
- revisão humana obrigatória.

O resultado esperado é um código mais seguro, documentado e aderente às políticas estabelecidas.

---

### Cenário B – Sem Governança

O mesmo código é enviado à IA sem qualquer orientação adicional, simulando o comportamento de um desenvolvedor que utiliza IA sem seguir políticas corporativas.

O objetivo é evidenciar os riscos decorrentes da ausência de governança.

---

## Estrutura do Repositório

```
CorePlatform/
├── antes/
│   ├── db_connection.ts
│   └── sensor_query.ts
│
├── depois/
│   ├── cenario_A/
│   │   ├── db_connection_A.ts
│   │   ├── sensor_query_A.ts
│   │   └── sensor_query.test.ts
│   │
│   └── cenario_B/
│       ├── db_connection_B.ts
│       ├── sensor_query_B.ts
│       └── .env
│
└── README.md
```

---

## Importante

Todo o código presente neste repositório foi criado **exclusivamente para fins acadêmicos**.

Ele **não foi desenvolvido para execução em ambiente real** e contém trechos simplificados e vulnerabilidades inseridas propositalmente para possibilitar a análise comparativa exigida pelo trabalho.

---

## Documentação

A descrição completa do cenário, das regras de governança, da metodologia utilizada, das evidências da simulação e da análise crítica encontra-se no relatório do trabalho.

**Relatório:** [Larissa Galvão Nascimento - Trabalho de GTI - Relatório Final](https://docs.google.com/document/d/1IG7e_RuHQCD1r99akyv-yz6Pog_jlvPuG2TH4MonMVQ/edit?tab=t.jjf6kzbfccca)