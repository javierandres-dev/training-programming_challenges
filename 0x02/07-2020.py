""" Day 7 """


def main_one():
    # Quantity of bag colors can eventually contain at least one shiny gold bag
    nLines = int(input())
    rules = []
    for line in range(nLines):
        rules.append(input())
    allBags = []
    allDirectly = []
    for rule in rules:
        bag = rule[0:rule.find(" bags")]
        allBags.append(bag)
        if rule.startswith("shiny gold") is not True:
            if rule.find("shiny gold") is not -1:
                allDirectly.append(bag)
    allIndirectly = []
    for directly in allDirectly:
        for rule in rules:
            bag = rule[0:rule.find(" bags")]
            if rule.startswith(directly) is not True:
                if rule.find(directly) is not -1:
                    allIndirectly.append(bag)
    return len(allDirectly) + len(set(allIndirectly))


if __name__ == "__main__":
    print(main_one())
