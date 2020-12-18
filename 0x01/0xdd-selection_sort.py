""" 0xdd - Ordenar un arreglo pequeño
Escribe un programa que lee N números y los ordena en orden no decreciente """


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


if __name__ == "__main__":
    selection_sort()
