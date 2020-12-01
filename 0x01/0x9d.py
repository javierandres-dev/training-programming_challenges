# ¿Está ordenado?
# Escribe un programa que determina si
# un arreglo está ordenado de menor a mayor.
nElements = int(input())
elements = input().rsplit(" ")
numbers = list(map(int, elements))
comply = True
i = 1
while i < nElements:
    if(numbers[i] < numbers[i - 1]):
        comply = False
    i += 1
if (comply):
    print("Ordenado")
else:
    print("Desordenado")
