function designFileSystem(inputArr) {
  const result = [];
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = i + 1; j < inputArr.length; j++) {
      if (inputArr[i] !== inputArr[j]) {
        result.push(inputArr[i]);
        result.push(inputArr[j]);
      } else {
        const newFileName = result.push(`${inputArr[i]}(${j})`);
      }
    }
  }
  return new Set(result);
}

console.log(
  designFileSystem(["naruto", "naruto(1)", "naruto(2)", "naruto(3)", "naruto"])
);
