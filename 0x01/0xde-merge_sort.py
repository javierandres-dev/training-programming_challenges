""" 0xde - Ordenar un arreglo grande
Escribe un programa que lee N números y los ordena en orden no decreciente """


def merge_sort(a):
    """ Merge sort technique """
    middle = int(len(a) // 2)
    left = a[:middle]
    right = a[middle:]
    if middle > 0:
        merge_sort(left)
        merge_sort(right)
    ms_helper(a, left, right)


def ms_helper(a, left, right):
    """ Helper function """
    iA = iLeft = iRight = 0
    while iLeft < len(left) and iRight < len(right):
        if left[iLeft] < right[iRight]:
            a[iA] = left[iLeft]
            iLeft += 1
        else:
            a[iA] = right[iRight]
            iRight += 1
        iA += 1
    while iLeft < len(left):
        a[iA] = left[iLeft]
        iLeft += 1
        iA += 1
    while iRight < len(right):
        a[iA] = right[iRight]
        iRight += 1
        iA += 1


def main():
    """ Using Merge sort """
    n = int(input())
    integers = input()
    a = integers.split(" ")
    print(a)
    merge_sort(a)
    a = " ".join(str(number) for number in a)
    print(a)


if __name__ == "__main__":
    main()
