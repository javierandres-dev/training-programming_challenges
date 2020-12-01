""" Day 1 """


def main_a():
    """ find the two entries that sum to 2020
    and then multiply those two numbers together """
    input_data = "01-2020.txt"
    data = []
    with open(input_data) as lines:
        line = lines.readline()
        for line in lines:
            data.append(int(line.strip()))
    for i in range(len(data)):
        for j in range(len(data)):
            if (data[i] + data[j] == 2020):
                return (data[i] * data[j])


def main_b():
    """ find the three entries that sum to 2020
    and then multiply those three numbers together """
    input_data = "01-2020.txt"
    data = []
    with open(input_data) as lines:
        line = lines.readline()
        for line in lines:
            data.append(int(line.strip()))
    for i in range(len(data)):
        for j in range(len(data)):
            for k in range(len(data)):
                if (data[i] + data[j] + data[k] == 2020):
                    return (data[i] * data[j] * data[k])


if __name__ == "__main__":
    print(main_a())
    print(main_b())
