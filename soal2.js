const checkTypeNumber = (givenNumber) => {
  const tipeNomor = (angka) => {
    if (typeof angka !== 'number') {
      return 'Error: Invalid Data type';
    }

    if (angka % 2 === 0) {
      return 'GENAP';
    } else {
      return 'GANJIL';
    }
  };

  if (givenNumber === undefined) {
    return 'Error: Bro where is there parameter?';
  }

  return tipeNomor(givenNumber);
};

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber('3'));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
