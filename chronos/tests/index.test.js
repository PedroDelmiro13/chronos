const {
  daysBetween,
  ageByBirthday,
  isWeekend,
  addDays,
  formatDateBr,
} = require("../src/index");

describe("daysBetween", () => {
  test("deve calcular a quantidade de dias entre duas datas", () => {
    const resultado = daysBetween("2026-01-01", "2026-01-10");
    expect(resultado).toBe(9);
  });

  test("deve funcionar mesmo se a segunda data vier antes da primeira", () => {
    const resultado = daysBetween("2026-01-10", "2026-01-01");
    expect(resultado).toBe(9);
  });

  test("deve retornar 0 quando as datas forem iguais", () => {
    const resultado = daysBetween("2026-01-01", "2026-01-01");
    expect(resultado).toBe(0);
  });
});

describe("ageByBirthday", () => {
  test("deve calcular a idade corretamente quando já fez aniversário no ano", () => {
    const idade = ageByBirthday("2000-01-01", "2026-06-01");
    expect(idade).toBe(26);
  });

  test("deve calcular a idade corretamente quando ainda não fez aniversário no ano", () => {
    const idade = ageByBirthday("2000-12-25", "2026-06-01");
    expect(idade).toBe(25);
  });

  test("deve usar a data de hoje quando referenceDate não for informada", () => {
    const nascimento = "2000-01-01";
    const idade = ageByBirthday(nascimento);
    expect(typeof idade).toBe("number");
  });
});

describe("isWeekend", () => {
  test("deve retornar true para um sábado", () => {
    expect(isWeekend("2026-08-01")).toBe(true);
  });

  test("deve retornar true para um domingo", () => {
    expect(isWeekend("2026-08-02")).toBe(true);
  });

  test("deve retornar false para um dia de semana", () => {
    expect(isWeekend("2026-08-03")).toBe(false);
  });
});

describe("addDays", () => {
  test("deve somar dias a uma data corretamente", () => {
    const resultado = addDays("2026-01-01", 10);
    expect(resultado.getDate()).toBe(11);
  });

  test("deve subtrair dias quando o número for negativo", () => {
    const resultado = addDays("2026-01-10", -5);
    expect(resultado.getDate()).toBe(5);
  });
});

describe("formatDateBr", () => {
  test("deve formatar a data no padrão dd/mm/aaaa", () => {
    const resultado = formatDateBr("2026-01-05");
    expect(resultado).toBe("05/01/2026");
  });

  test("deve adicionar zero à esquerda em dia e mês menores que 10", () => {
    const resultado = formatDateBr("2026-03-09");
    expect(resultado).toBe("09/03/2026");
  });
});