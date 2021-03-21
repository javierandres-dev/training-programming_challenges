""" 0xde - Ordenar un arreglo grande
Escribe un programa que lee N números y los ordena en orden no decreciente """


def quick_sort(a, left, right):
    """ Quick sort technique """
    if left < right:
        start = qs_helper(a, left, right)
        quick_sort(a, left, start - 1)
        quick_sort(a, start + 1, right)


def qs_helper(a, left, right):
    """ Helper function """
    pivot = a[right]
    element = left - 1
    for i in range(left, right):
        if a[i] < pivot:
            element = element + 1
            buffer = a[element]
            a[element] = a[i]
            a[i] = buffer
    buffer = a[element + 1]
    a[element + 1] = a[right]
    a[right] = buffer
    return element + 1


def main():
    """ Using Quick sort """
    n = int(input())
    integers = input()
    a = integers.split(" ")
    left = 0
    right = n - 1
    print(a)
    quick_sort(a, left, right)
    a = " ".join(str(number) for number in a)
    print(a)


if __name__ == "__main__":
    main()
