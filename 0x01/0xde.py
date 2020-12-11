""" 0xde - Ordenar un arreglo grande
Escribe un programa que lee N números y los ordena en orden no decreciente """


def merge_sort():
    n = int(input())
    integers = input()
    a = integers.split(" ")
    print(a)
    ms_helper_sort(a)
#    a = " ".join(str(number) for number in a)
#    print(a)


def ms_helper_sort(a):
    middle = int(len(a) // 2)
    left = a[:middle]
    right = a[middle:]
    if middle > 0:
        ms_helper_sort(left)
        ms_helper_sort(right)
        print(middle, left, right)
#    ms_helper_merge(a, left, right)


def ms_helper_merge(a, left, right):
    iA = iLeft = iRight = 0
    while iLeft < len(left) and iRight < len(right):
        if left[iLeft] < right[iRight]:
            a[iA] = left[iLeft]
            iLeft += 1
        else:
            a[iA] = right[iRight]
            iRight += 1
        iA +=1
    while iLeft < len(left):
        a[iA] = left[iLeft]
        iLeft += 1
        iA += 1
    while iRight < len(right):
        a[iA] = right[iRight]
        iRight += 1
        iA += 1


def main():
    n = int(input())
    integers = input()
    a = integers.split(" ")
    print(a)
    a.sort()
    print(a)


if __name__ == "__main__":
    merge_sort()
#    quick_sort()
#    heap_sort()
#    main()
