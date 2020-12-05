""" 0x5c - Decir si hay una letra repetida
return 'yes' if the 'word' contains at least one repeated letter or
'no' if the 'word' doesn't contain any repeated letter """
flag = 0
word = input()
for letter in word:
    times = word.count(letter)
    if times > 1:
        flag += 1
if flag > 0:
    print("yes")
else:
    print("no")
