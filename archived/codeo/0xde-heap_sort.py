""" 0xde - Ordenar un arreglo grande
Escribe un programa que lee N números y los ordena en orden no decreciente """


def heap_sort(a):
    """ Heap sort technique """
    aa = []
    for i in range(len(a) // 2 - 1, -1, -1):
        a = hs_helper(a, i)
    for i in range(len(a)):
        buffer = a[0]
        a[0] = a[len(a) - 1]
        a[len(a) - 1] = buffer
        aa.append(buffer)
        a = a[:len(a) - 1]
        a = hs_helper(a, 0)
    aa = " ".join(str(number) for number in aa)
    print(aa)


def hs_helper(a, i):
    """ Helper function """
    left = 2 * i + 1
    right = 2 * i + 2
    if right <= len(a) - 1:
        if a[left] <= a[right]:
            min = left
        else:
            min = right
        if a[i] > a[min]:
            buffer = a[i]
            a[i] = a[min]
            a[min] = buffer
            hs_helper(a, min)
    elif left <= len(a) - 1:
        if a[i] > a[left]:
            buffer = a[i]
            a[i] = a[left]
            a[left] = buffer
    return a


def main():
    """ Using Heap sort """
    n = int(input())
    integers = input()
    a = integers.split(" ")
    print(a)
    heap_sort(a)


if __name__ == "__main__":
    main()
