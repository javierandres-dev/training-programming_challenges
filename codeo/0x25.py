# Suma de un subarreglo
# Escribe un programa que recibe varias "consultas" de la forma p, q y para
# cada consulta calcula la suma de todos los elementos del subarreglo que
# empieza en p y termina en q.
def printSum(p, q):
    if (p == 0):
        print(allSums[q])
    else:
        print(allSums[q] - allSums[p - 1])
nElements = int(input())
elements = list(map(int, input().rsplit(" ")))
allSums = []
aSum = 0
for element in elements:
    aSum += element
    allSums.append(aSum)
nQueries = int(input())
queries = []
while (nQueries > 0):
    query = list(map(int, input().rsplit(" ")))
    queries.append(query)
    nQueries -= 1
for query in queries:
    p = query[0]
    q = query[1]
    printSum(p, q)
