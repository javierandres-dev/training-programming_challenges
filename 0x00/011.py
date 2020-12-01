""" In the 20×20 grid (txt file), What is the greatest product of four adjacent
    numbers in the same direction (up, down, left, right, or diagonally) in the
    20×20 grid? """


def main():
    input_data = "011.txt"
    data = []
    with open(input_data) as lines:
        for line in lines:
            data.append(line.strip())
#    return data
        for item in data:
            print(item)

if __name__ == "__main__":
    main()
