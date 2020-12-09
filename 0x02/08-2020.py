""" Day 8 """


def main_one(filename):
    """ Return accumulator value immediately before any instruction is executed
    a second time """
    with open(filename, "r") as f:
        lines = f.readlines();
    data = []
    for line in lines:
        line = line.strip()
        data.append(line)
    instructions = []
    accumulator = 0
    instruction = 0
    while(instruction < len(data)):
        if instructions.count(instruction) > 0:
            return accumulator
        else:
            instructions.append(instruction)
            operation = data[instruction][:3]
            argument = int(data[instruction][4:])
            if operation == "acc":
                accumulator += argument
            if operation == "jmp":
                instruction += argument
            else:
                instruction += 1


def main_two(filename):
    """ Return accumulator value immediately before any instruction is executed
    a second time """
    with open(filename, "r") as f:
        lines = f.readlines();
    data = []
    for line in lines:
        line = line.strip()
        data.append(line)
    instructions = []
    accumulator = 0
    instruction = 0
    while(instruction < len(data)):
        if instructions.count(instruction) > 0:
            return accumulator
        else:
            instructions.append(instruction)
            operation = data[instruction][:3]
            argument = int(data[instruction][4:])
            if operation == "acc":
                accumulator += argument
            if operation == "jmp":
                instruction += argument
            else:
                instruction += 1


if __name__ == "__main__":
    print(main_one("08-2020.txt"))
    print(main_two("08-2020.txt"))
