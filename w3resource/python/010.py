"""
10. Write a Python program that accepts an integer (n) and computes the value of n+nn+nnn.
Sample value of n is 5
Expected Result : 615
"""
number = int(input("Enter an integer number: "))
double = int("%s%s"%(number, number))
triple = int("%s%s"%(number, double))
print(f"Result: {number + double + triple}")
