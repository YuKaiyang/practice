# a = 'AAA'.encode('utf-8')

# print(a)
# print(a.decode('utf-8'))
# print('%2d-%02d' % (3, 1))
# print('%.2f' % 3.1415926)

# s1 = 72
# s2 = 85
# r = (s2 - s1) * 100 / s1
# print('%%%.2f' % r)

# if (False):
#     print(123)

# print(range(10))
# print(hex(s1))
# print(hex(s2))


def fib(n, a=1, b=1):
    if n == 0:
        return 0
    elif n <= 2:
        return b
    else:
        return fib(n-1, b, a+b)


def fib2(n):
    if n == 0:
        return 0
    elif n <= 2:
        return 1
    else:
        return fib2(n-2) + fib2(n-1)


def fib3(max):
    n, a, b = 0, 0, 1
    if max == 0:
        return 0
    while n < max:
        a, b = b, a+b
        n = n+1
    return a


print(fib(30))
print(34.76*12)
print(34.76*12/5266.84)
print(0.66*12)
# for i in range(100):
# print('%0d: %s' % (i, fib(i)))
