""" This solution don't is mine, I copied to learn. """


def parse(filename):
    """Parse the input file to form two digraphs: one showing
    which bags are able to be contained in which and the other
    showing which bags contain what numbers of which other bags.
    """
    parents = dict()
    children = dict()

    with open(filename, "r") as f:
        lines = f.readlines()

    # Figure out which colors we have
    for line in lines:
        color = " ".join(line.split()[:2])
        parents[color] = []
        children[color] = []

    # Fill in the digraphs
    for line in lines:
        words = line.split()
        if "no other" in line:
            continue
        parent_color = " ".join(words[:2])

        child_words = iter(words[4:])
        while True:
            count = int(next(child_words))
            child_adj = next(child_words)
            child_color = next(child_words)
            child_name = f"{child_adj} {child_color}"
            parents[child_name].append(parent_color)
            children[parent_color].append((child_name, count))
            if next(child_words)[-1] == ".":
                break
    return parents, children


def holders(color, parents_graph):
    """Build a set of all unique bags which can contain the 
    requested bag color.
    """
    result = set(parents_graph[color])
    for c in parents_graph[color]:
        result |= holders(c, parents_graph)
    return result


def count_contents(color, children_graph):
    """Add up the bags inside a given bag plus all of the bags within
    each of each child bags.
    """
    return sum(count + count * count_contents(child_color, children_graph) 
                for child_color, count in children_graph[color])

def part1(parents_graph):
    gold_holders = len(holders("shiny gold", parents_graph))
    print(f"{gold_holders} different colors can contain 'shiny gold.'")


def part2(children_graph):
    print(f"{count_contents('shiny gold', children_graph)} bags are in a 'shiny gold.'")


if __name__ == "__main__":
    parents, children = parse("07a-2020-copy.txt")
#    parents, children = parse("07-2020-copy.txt")
    part1(parents)
    part2(children)
