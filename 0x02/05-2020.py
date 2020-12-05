""" Day 5 """
import math


def search_row(seven):
    """ helper function to find row """
    start = 0
    end = 127
    rows = start + end
    for one in seven:
        if one == "F":
            end = math.floor(rows / 2) + start
            rows = end - start
            if rows == 0:
                return end
        if one == "B":
            start = math.ceil(rows / 2) + start
            rows = end - start
            if rows == 0:
                return start


def search_column(three):
    """ helper function to find column """
    start = 0
    end = 7
    columns = start + end
    for one in three:
        if one == "L":
            end = math.floor(columns / 2) + start
            columns = end - start
            if columns == 0:
                return end
        if one == "R":
            start = math.ceil(columns / 2) + start
            columns = end - start
            if columns == 0:
                return start


def main_one(boarding_passes):
    """ Return the highest seat ID on a boarding pass """
    with open(boarding_passes, "r") as f:
        lines = f.readlines()
    bbpp = []
    for line in lines:
        bbpp.append(line.strip())
    highest = 0
    for bp in bbpp:
        row = search_row(bp[:-3])
        column = search_column(bp[-3:])
        seatId = row * 8 + column
        if seatId > highest:
            highest = seatId
    return highest


def main_two(boarding_passes):
    """ Return my seat ID """
    with open(boarding_passes, "r") as f:
        lines = f.readlines()
    bbpp = []
    for line in lines:
        bbpp.append(line.strip())
    ul = []
    for bp in bbpp:
        row = search_row(bp[:-3])
        column = search_column(bp[-3:])
        seatId = row * 8 + column
        ul.append(seatId)
    ol = sorted(ul)
    for idx, value in enumerate(ol):
        if not value - 1 == ol[idx - 1]:
            if value - 2 == ol[idx - 1]:
                return value - 1


if __name__ == "__main__":
    print(main_one("05-2020.txt"))
    print(main_two("05-2020.txt"))
