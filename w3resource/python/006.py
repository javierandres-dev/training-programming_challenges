"""
6. Write a Python program that accepts a sequence of comma-separated numbers from the user and generates a list and a tuple of those numbers.
Sample data : 3, 5, 7, 23
Output :
List : ['3', ' 5', ' 7', ' 23']
Tuple : ('3', ' 5', ' 7', ' 23')
"""
numbers = input("Enter number values separated by comma: ")
list = numbers.split(",")
tuple = tuple(list)
print(f"List: {list}\nTuple: {tuple}")
