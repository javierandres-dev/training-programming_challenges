# Decimos que la matriz es un cuadrado mágico si la suma de sus filas,
# columnas y diagonales es siempre la misma.
# Escribe un programa que lee una matriz y determina si la matriz
# es un cuadrádo mágico o no.
listOfLists = []
size = int(input())
count = size
while (count > 0):
    elements = list(map(int, input().rsplit(" ")))
    assert size == len(elements), "Different length."
    listOfLists.append(elements)
    count -= 1
sumSubLists = list(map(sum, listOfLists))
if all(i == sumSubLists[0] for i in sumSubLists):
    columnList = []
    for subList in listOfLists:
        sumColumns = []
        sumC = 0
        for item in subList:
            sumC += item
        sumColumns.append(sumC)
        columnList.append(sumColumns)
    sumColumns = list(map(sum, columnList))
    if all(i == sumSubLists[0] for i in sumColumns):
        diagonalList = list(listOfLists[i][i] for i in range(len(listOfLists)))
        sumDiagonals = []
        sumD = 0
        for d in diagonalList:
            sumD += d
            sumDiagonals.append(sumD)
        lastD = sumDiagonals.pop()
        if (lastD == sumSubLists[0]):
            antiDiagonalList = list(listOfLists[i][len(listOfLists)-i-1] for i in range(len(listOfLists)))
            sumAntiDiagonals = []
            sumAd = 0
            for ad in antiDiagonalList:
                sumAd += ad
                sumAntiDiagonals.append(sumAd)
            lastAd = sumAntiDiagonals.pop()
            if (lastAd == sumColumns[0]):
                print("Yes")
            else:
                print("No")
        else:
            print("No")
    else:
        print("No")
else:
    print("No")
