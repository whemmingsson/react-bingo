const checkBingo = (size, values) => {
  // size is the side length of the grid, so n*n is the total number of cells
  // values contains all the ids of selected cells.
  // Check if we have any sequence of length n horizontally, vertically and diagonally.
  // We can do this by checking if the values are in the same row, column or diagonal.

  // First, we need to convert the values to a 2D array of size n x n
  const grid = [...Array(size)].map(() => Array(size).fill(false));
  values.forEach((value) => {
    grid[Math.floor(value / size)][value % size] = true;
  });

  // Check columns/rows
  for (let i = 0; i < size; i++) {
    if (grid.every((row) => row[i])) {
      return true;
    }
    if (grid[i].every((cell) => cell)) {
      return true;
    }
  }

  // Check diagonals
  if (grid.every((row, i) => row[i])) {
    return true;
  }
  if (grid.every((row, i) => row[size - i - 1])) {
    return true;
  }

  return false;
};

export default checkBingo;
