""" find the two entries that sum to 2020
and then multiply those two numbers together """


def main():
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


if __name__ == "__main__":
    print(main())
