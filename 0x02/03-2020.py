""" Day 3 """


def main_one():
    """ Count how many trees there are, Starting at the top-left corner of your
    map and following a slope of right 3 and down 1. """
    with open("03-2020.txt", "r") as _file:
        lines = _file.readlines()
    myMap = []
    for line in lines:
        myMap.append(line.strip())
    trees = 0
    right = 3
    step = - 3
    for road in myMap:
        if step + right > len(road):
            step = (len(road) - step) * - 1
        if step + right == len(road):
            step = - 3
        step += right
        if road[step] == "#":
            trees += 1
    return trees


def main(right):
    """ Helper function """
    with open("03-2020.txt", "r") as _file:
        lines = _file.readlines()
    myMap = []
    for line in lines:
        myMap.append(line.strip())
    trees = 0
    step = right * - 1
    for road in myMap:
        if step + right > len(road):
            step = (len(road) - step) * - 1
        if step + right == len(road):
            step = - right
        step += right
        if road[step] == "#":
            trees += 1
    return trees


def main_two():
    """ Determine the number of trees you would encounter if, for each of the
    following slopes, you start at the top-left corner and traverse the map all
    the way to the bottom.
    Right 1, down 1.
    Right 3, down 1. (This is the slope you already checked.)
    Right 5, down 1.
    Right 7, down 1.
    Right 1, down 2.
    Find the product got at multiplying the number of trees found in each one
    of the slope numbered. """
    slopeA = main(1)
    slopeB = main(3)
    slopeC = main(5)
    slopeD = main(7)
    slopeE = 0
    with open("03-2020.txt", "r") as _file:
        lines = _file.readlines()
    myMap = []
    for line in lines:
        myMap.append(line.strip())
    right = 1
    step = right * - 1
    for idx, road in enumerate(myMap):
        if idx % 2 == 0:
            if step + right > len(road):
                step = (len(road) - step) * - 1
            if step + right == len(road):
                step = - right
            step += right
            if road[step] == "#":
                slopeE += 1
    return slopeA * slopeB * slopeC * slopeD * slopeE


if __name__ == "__main__":
    print(main_one())
    print(main_two())
