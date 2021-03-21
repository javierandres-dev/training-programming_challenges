# Decimos que la matriz es un cuadrado mágico si la suma de sus filas,
# columnas y diagonales es siempre la misma.
# Escribe un programa que lee una matriz y determina si la matriz
# es un cuadrádo mágico o no.
import numpy as n
matrix = []
size = int(input())
count = size
while (count > 0):
    elements = list(map(int, input().rsplit(" ")))
    matrix.append(elements)
    count -= 1
matrix = n.array(matrix)
rows = [sum(matrix[i]) for i in range(size)]
columns = [sum(matrix[:, i]) for i in range(size)]
diagonals = sum(n.diagonal(matrix))
antiDiagonals = sum(n.fliplr(matrix).diagonal())
if (rows == columns and diagonals == antiDiagonals):
    print("Yes")
else:
    print("No")
