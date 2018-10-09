from functools import reduce


def max(a, b):
    if a > b:
        return a
    else:
        return b


def min(a, b):
    if a < b:
        return a
    else:
        return b


def gdc(a, b):
    x = max(a, b)
    y = min(a, b)
    while y != 0:
        x, y = y, x % y
        print(x, y)
    return x


def factorial(n):
    a, b = 1, 2
    while b <= n:
        a, b = a * b, b + 1
    return a


def P1(n, r):  # 排列公式
    a, b = n, n - 1
    while b > n - r:
        a, b = a * b, b - 1
    return a


def C(n, r):  # 组合公式
    return P1(n, r)/factorial(r)


def pow(x, n):
    a, i = x, 1
    while i < n:
        a, i = a * x, i + 1
    return a


def P(n, r):  # 概率公式
    return P1(n, r)/pow(n, r)


print(1 - P(365, 64))
print(1 - P(365, 23))

print(P1(4, 2))
    
