function findPrimeBetweenTwoBinaryNumbers(bnum1, bnum2) {
  const num1 = convertBinaryToNumber(bnum1);
  const num2 = convertBinaryToNumber(bnum2);

  const primeNumbers = [];
  for (let i = num1; i <= num2; i++) {
    const isPrime = isPrimeNumber(i);
    if (isPrime) primeNumbers.push(i);
  }
  return primeNumbers;
}

function isPrimeNumber(num) {
  for (let i = 2, x = Math.sqrt(num); i <= x; i++)
    if (num % i === 0) return false;
  return num > 1;
}

function convertBinaryToNumber(binary) {
  return parseInt(binary.split("").reverse().join(""), 2);
}

console.log(findPrimeBetweenTwoBinaryNumbers("101", "11111"));
