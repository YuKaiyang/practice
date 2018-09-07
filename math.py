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
        a, b = a*b, b+1
    return a


def factorial2(x, *y):
    if y[0]:
        a, b, n = x, x+1, y[0]
    else:
        a, b, n = 1, 2, x
    while b <= n:
        a, b = a*b, b+1
    return a


def P(n, k):
    return factorial(n)/factorial(n-k)


def C(n, k):
    return P(n, k)/factorial(k)


def C2(n, k):
    return factorial2(n-k+1, n)/factorial(k)


def ssq():
    return C(33, 6)*16


print(ssq())
print(C2(33, 6)*16)
