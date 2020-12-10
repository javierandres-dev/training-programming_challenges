""" Escribe un programa que lee N números y los ordena en orden no decreciente
"""


def main():
    """ Bulit-in function """
    n = int(input())
    integers = input()
    a = integers.split(" ")
    print(a)
    a.sort()
    print(a)


def bubble_sort():
    """ Bubble sort technique """
    n = int(input())
    integers = input()
    a = list(map(int, integers.split(" ")))
    print(a)
    i = 0
    while i < n:
        j = 0
        k = 1
        while k < n:
            if a[k] < a[j]:
                x = a[k]
                a[k] = a[j]
                a[j] = x
            j += 1
            k += 1
        i += 1
    a = " ".join(str(number) for number in a)
    print(a)


def insertion_sort():
    """ Insertion sort technique """
    n = int(input())
    integers = input()
    a = list(map(int, integers.split(" ")))
    print(a)
    a = " ".join(str(number) for number in a)
    print(a)


if __name__ == "__main__":
#    main()
#    bubble_sort()
    insertion_sort()
