""" In the 20×20 grid (txt file), What is the greatest product of four adjacent
    numbers in the same direction (up, down, left, right, or diagonally) in the
    20×20 grid? """


def main():
    greatestProduct = 0
    input_data = "011.txt"
    grid = []
    with open(input_data) as lines:
        for line in lines:
            grid.append(list(map(int, line.strip().split(" "))))
    rows = len(grid)
    cols = len(grid[0])
    size = 4
    for i in range(rows):
        for j in range(cols - size + 1):
            phv = max(grid[i][j] * grid[i][j+1] * grid[i][j+2] * grid[i][j+3],
                      grid[j][i] * grid[j+1][i] * grid[j+2][i] * grid[j+3][i])
            if i <= rows - size:
                pdd = max(grid[i][j] * grid[i+1][j+1] * grid[i+2][j+2],
                          grid[i+3][j+3] * grid[i][j+3] * grid[i+1][j+2],
                          grid[i+2][j+1] * grid[i+3][j])
    greatestProduct = max(greatestProduct, phv, pdd)
    return greatestProduct
        

if __name__ == "__main__":
    print(main())
