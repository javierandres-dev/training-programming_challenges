""" Escribe un programa que lee una matriz y calcula la máxima suma entre todas
    las posibles submatrices.  Encontrar la submatriz cuya suma sea máxima. """


def main():
    sizeMatrix = input()
    rc = list(map(int, sizeMatrix.rsplit(" ")))
    rows = rc[0]
    columns = rc[1]
    matrix = []
    for row in range(rows):
        line = input()
        iMatrix = list(map(int, line.rsplit(" ")))
        matrix.append(iMatrix)
    return(matrix)


if __name__ == "__main__":
    print(main())
