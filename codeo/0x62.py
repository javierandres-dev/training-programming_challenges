# Contar elementos mayores a X
# Escribe un programa que recibe varias "consultas", cada una con un valor
# diferente de X y para cada consulta imprime el número de elementos en el
# arreglo que son mayores a X.
elements = int(input())
strNumbers = input()
numbers = strNumbers.split(" ")
queries = int(input())
while(queries > 0):
    query = int(input())
    count = 0
    for number in numbers:
        n = int(number)
        if n <= query:
            count += 1
    print(elements - count)
    queries -= 1
