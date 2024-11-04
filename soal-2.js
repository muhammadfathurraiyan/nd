function psbb(fam, mem) {
  // create array of mem by spliting the space
  const newMem = mem.split(" ");

  // check if fam is equal to newMem.length
  if (fam !== newMem.length) return "Input must be equal with count of family";

  // the formula to count the required bus is (total mem / 4) and round up, so i use Math.ceil()
  const result = Math.ceil(
    newMem.reduce((prev, cur) => prev + Number(cur), 0) / 4
  );

  // return the result
  return `Minimum bus required is : ${result}`;
}

console.log(psbb(8, "2 3 4 4 2 1 3 1"));
