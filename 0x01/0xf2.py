# Partir un arreglo en 2
# Tenemos un arreglo de enteros.
# Queremos partirlo en dos arreglos de tal manera que:
# * La suma de los elementos en el lado izquierdo sea positiva;
# * La suma de los elementos en el lado derecho sea negativa.
# No está permitido reordenar o cambiar los elementos del arreglo.
# Preferimos la solución que tenga el lado izquierdo más pequeño.
# Escribe un programa que dado un arreglo encuentra la mejor solución,
# si existe.
nNumbers = int(input())
numbers = list(map(int, input().rsplit(" ")))
assert nNumbers == len(numbers), "Different lengths."
whole = sum(numbers)
left = 0
for i in range(1, nNumbers):
    left = left + numbers[i - 1]
    right = whole - left
    if left > 0 and right < 0:
        index = i
        break
    else:
        index = "Impossible"
print(index)
