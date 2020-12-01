#!/usr/bin/env python3
""" The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
    Find the sum of all the primes below two million. """
import math


def isPrime(n):
    for i in reversed(range(n)):
        if i < 2:
            break
        if n % i == 0:
            return False
    return True


def getPrimes(n):
    primes = []
    for i in range(2, n + 1):
        prime = isPrime(i)
        if prime:
            primes.append(i)
    return primes


limit = 2000000
rs_limit = int(math.sqrt(limit))
primes = getPrimes(rs_limit)
sumPrimes = 0
for i in range(2, limit):
    rs = int(math.sqrt(i))
    flag = 0
    for prime in primes:
        if prime > rs:
            break
        if i % prime == 0:
            flag += 1
    if flag == 0:
        sumPrimes += i
print(sumPrimes)
