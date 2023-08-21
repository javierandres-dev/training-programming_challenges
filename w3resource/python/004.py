"""
4. Write a Python program that calculates the area of a circle based on the radius entered by the user.
Sample Output :
r = 1.1
Area = 3.8013271108436504
"""
from math import pi

radius = float(input("Enter radius value: "))
area = pi * radius ** 2
print(f"r = {radius}\nArea = {area}")
