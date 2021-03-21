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


def main_two(filename):
    """ Return the sum of the counts to which everyone answered 'yes' """
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
    allYes = 0
    for group in answers:
        yes = ""
        for person in group:
            yes += person
        questions = set(yes)
        for question in questions:
            answYes = 0
            for person in group:
                if person.find(question) is not -1:
                    answYes += 1
            if answYes == len(group):
                allYes += 1
    return allYes


if __name__ == "__main__":
    print(main_one("06-2020.txt"))
    print(main_two("06-2020.txt"))
