""" Day 6 """


def main_one(filename):
    """ Return the sum of the counts """
    with open(filename, "r") as f:
        data = f.readlines()
    answers = []
    group = []
    for datum in data:
        if datum.isspace() is not True:
            datum = datum.strip()
            group.append(datum)
        if datum.isspace() is True:
            answers.append(group)
            group = []
    sumCounts = 0
    for group in answers:
        yes = ""
        for person in group:
            yes += person
        yes = set(yes)
        sumCounts += len(yes)
    return sumCounts


if __name__ == "__main__":
    print(main_one("06-2020.txt"))
