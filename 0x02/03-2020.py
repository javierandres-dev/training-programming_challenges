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


if __name__ == "__main__":
    print(main_one())
