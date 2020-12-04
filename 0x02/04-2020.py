""" Day 4 """
import re


def main_one(filename):
    areValid = 0
    with open(filename, "r") as f:
        _str = (f.read())
    _list = _str.split("\n\n")
    data = []
    for _str in _list:
        data.append(_str.replace("\n", " ").strip())
    for datum in data:
        mandatory = 0
        mandatory += datum.count("byr")
        mandatory += datum.count("iyr")
        mandatory += datum.count("eyr")
        mandatory += datum.count("hgt")
        mandatory += datum.count("hcl")
        mandatory += datum.count("ecl")
        mandatory += datum.count("pid")
        if mandatory == 7:
            areValid += 1
    return areValid


def main_two(filename):
    areValid = 0
    with open(filename, "r") as f:
        _str = (f.read())
    _list = _str.split("\n\n")
    data = []
    for _str in _list:
        data.append(_str.replace("\n", " ").strip())
    for datum in data:
        datum = datum.split(" ")
        mandatory = 0
        for d in datum:
            if d.startswith("byr"):
                content = int(d.replace("byr:", ""))
                if content >= 1920 and content <= 2002:
                    mandatory += 1
            if d.startswith("iyr"):
                content = int(d.replace("iyr:", ""))
                if content >= 2010 and content <= 2020:
                    mandatory += 1
            if d.startswith("eyr"):
                content = int(d.replace("eyr:", ""))
                if content >= 2020 and content <= 2030:
                    mandatory += 1
            if d.startswith("hgt"):
                size = d[-2:]
                if size == "cm" or size == "in":
                    content = int(d[4:-2])
                    if size == "cm":
                        if content >= 150 and content <= 193:
                            mandatory += 1
                    if size == "in":
                        if content >= 59 and content <= 76:
                            mandatory += 1
            if d.startswith("hcl:#"):
                content = d.replace("hcl:#", "")
                if len(content) == 6:
                    if re.search('([0-9])', content):
                        mandatory += 1
                    elif re.search('([a-f])', content):
                        mandatory += 1
                    elif re.search('([0-9][a-f])', content):
                        mandatory += 1
                    else:
                        mandatory += 0
            if d.startswith("ecl"):
                content = d.replace("ecl:", "")
                if (content == "amb" or content == "blu" or content == "brn" or
                   content == "gry" or content == "grn" or content == "hzl" or
                   content == "oth"):
                    mandatory += 1
            if d.startswith("pid"):
                content = d.replace("pid:", "")
                if len(content) == 9:
                    if content.isnumeric():
                        mandatory += 1
        if mandatory == 7:
            areValid += 1
    return areValid


if __name__ == "__main__":
    print(main_one("04-2020.txt"))
    print(main_two("04-2020.txt"))
