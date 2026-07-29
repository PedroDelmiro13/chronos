function daysBetween(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const difference = Math.abs(d2 - d1);
  const oneDay = 1000 * 60 * 60 * 24;

  return Math.floor(difference / oneDay);
}

function ageByBirthday(birthDate, referenceDate) {
  if (!referenceDate) {
    referenceDate = new Date();
  }

  const birth = new Date(birthDate);
  const reference = new Date(referenceDate);

  let age = reference.getFullYear() - birth.getFullYear();

  const currentMonth = reference.getMonth();
  const birthMonth = birth.getMonth();

  if (currentMonth < birthMonth) {
    age = age - 1;
  } else if (currentMonth === birthMonth && reference.getDate() < birth.getDate()) {
    age = age - 1;
  }

  return age;
}

function isWeekend(date) {
  const day = new Date(date).getDay();

  if (day === 0 || day === 6) {
    return true;
  }

  return false;
}

function addDays(date, days) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

function formatDateBr(date) {
  const d = new Date(date);

  let day = d.getDate();
  let month = d.getMonth() + 1;
  const year = d.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  return day + "/" + month + "/" + year;
}

module.exports = {
  daysBetween,
  ageByBirthday,
  isWeekend,
  addDays,
  formatDateBr,
};