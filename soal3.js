function getAngkaTerbesarKedua(personName) {
  if (personName === undefined) {
    return ' tanpa memberikan argumen/undefined, Parameter harus berupa array';
  }

  if (!Array.isArray(personName)) {
    return ' argumen 0 bukanlah array, Parameter harus berupa array';
  }

  personName.sort(function (a, b) {
    return b - a;
  });

  return personName[1];
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
