# ¿Mayor, menor o igual?
# Escribe un programa que determina
# si un número es menor, mayor o igual a otro.
data = input()
numbers = data.split(" ")
a = int(numbers[0])
b = int(numbers[1])
if a > b:
    print(">")
elif b > a:
    print("<")
else:
    print("=")
