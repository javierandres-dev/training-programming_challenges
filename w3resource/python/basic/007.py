"""
7. Write a Python program that accepts a filename from the user and prints the extension of the file.
Sample filename : abc.java
Output : java
"""
filename = input("Enter a file name: ")
filename = filename.split(".")
if len(filename) == 2:
    print(f"Extension of the file: {repr(filename[1])}")
else:
    print("Incorrect input")
