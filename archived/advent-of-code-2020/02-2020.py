""" Day 2 """


def main_one():
    """ Find how many passwords are valid according to their policies """
    with open("02-2020.txt", "r") as _file:
        lines = _file.readlines()
    data = []
    for line in lines:
        _list = line.replace(":", "").strip().split(" ")
        data.append(_list)
    is_valid = 0
    for item in data:
        for idx, value in enumerate(item):
            if idx == 0:
                val = value.split("-")
                lowest = int(val[0])
                highest = int(val[1])
            if idx == 1:
                char = value
            if idx == 2:
                pwd = value
        times = pwd.count(char)
        if times >= lowest and times <= highest:
            is_valid += 1
    return is_valid


def main_two():
    """ Find how many passwords are valid according to the new interpretation
    of the policies """
    with open("02-2020.txt", "r") as _file:
        lines = _file.readlines()
    data = []
    for line in lines:
        _list = line.replace(":", "").strip().split(" ")
        data.append(_list)
    is_valid = 0
    for item in data:
        for idx, value in enumerate(item):
            if idx == 0:
                val = value.split("-")
                fPos = int(val[0])
                sPos = int(val[1])
            if idx == 1:
                char = value
            if idx == 2:
                pwd = value
        if pwd[fPos - 1] == char or pwd[sPos - 1] == char:
            is_valid += 1
        if pwd[fPos - 1] == char and pwd[sPos - 1] == char:
            is_valid -= 1
    return is_valid


if __name__ == "__main__":
    print(main_one())
    print(main_two())
