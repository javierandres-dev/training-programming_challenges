""" 0xdd - Ordenar un arreglo pequeño
Escribe un programa que lee N números y los ordena en orden no decreciente """


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
    i = 1
    while i < n:
        j = i
        while j > 0:
            if a[j] < a[j-1]:
                x = a[j]
                a[j] = a[j-1]
                a[j-1] = x
            j -= 1
        i += 1
    a = " ".join(str(number) for number in a)
    print(a)


def selection_sort():
    """ Selection sort technique """
    n = int(input())
    integers = input()
    a = list(map(int, integers.split(" ")))
    print(a)
    i = 0
    while i < n:
        _min = i
        j = i+1
        while j < n:
            if a[j] < a[_min]:
                _min = j
            j += 1
        x = a[i]
        a[i] = a[_min]
        a[_min] = x
        i += 1
    a = " ".join(str(number) for number in a)
    print(a)


def main():
    """ Bulit-in function """
    n = int(input())
    integers = input()
    a = integers.split(" ")
    print(a)
    a.sort()
    print(a)


if __name__ == "__main__":
    bubble_sort()
#    insertion_sort()
#    selection_sort()
#    main()
