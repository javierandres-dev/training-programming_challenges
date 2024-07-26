""" 0xdd - Ordenar un arreglo pequeño
Escribe un programa que lee N números y los ordena en orden no decreciente """


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


if __name__ == "__main__":
    insertion_sort()
