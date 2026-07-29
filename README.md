# Chronos

Biblioteca simples em JavaScript para realizar cálculos comuns com datas.

## Instalação (via git submodule)

```bash
git submodule add https://github.com/PedroDelmiro13/chronos.git libs/chronos
```

## Como usar

```javascript
const {
  daysBetween,
  ageByBirthday,
  isWeekend,
  addDays,
  formatDateBr,
} = require("./libs/chronos/src/index.js");
```

## Funções disponíveis

### `daysBetween(date1, date2)`
Retorna a quantidade de dias entre duas datas.

```javascript
daysBetween("2026-01-01", "2026-01-10"); // 9
```

### `ageByBirthday(birthDate, referenceDate)`
Calcula a idade em anos completos. Se `referenceDate` não for informado, usa a data de hoje.

```javascript
ageByBirthday("2000-05-15"); // idade atual
ageByBirthday("2000-05-15", "2026-01-01"); // idade em uma data específica
```

### `isWeekend(date)`
Retorna `true` se a data cair em sábado ou domingo.

```javascript
isWeekend("2026-08-01"); // true ou false
```

### `addDays(date, days)`
Retorna uma nova data somando (ou subtraindo, se negativo) dias.

```javascript
addDays("2026-01-01", 30); // objeto Date
```

### `formatDateBr(date)`
Formata uma data no padrão `dd/mm/aaaa`.

```javascript
formatDateBr("2026-01-01"); // "01/01/2026"
```

## Rodando os testes

```bash
npm install
npm test
```

## Autor
Pedro Delmiro