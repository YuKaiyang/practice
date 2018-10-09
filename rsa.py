from functools import reduce
import binascii
import struct


def str2bitarray(s):
    arr = []
    for c in s.encode('utf-8'):
        arr.append(str(c))

    return ''.join(arr)


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


a, b = 765, 75


def ext_euclid(a, b):
    if b == 0:
        return 1, 0, a
    else:
        x, y, q = ext_euclid(b, a % b)  # q = gcd(a, b) = gcd(b, a%b)
        x, y = y, (x - (a // b) * y)
        return x, y, q


def mofan(a, b):
    i = 1
    while True:
        if a*i <= b:
            i += 1
        elif a*i % b == 1:
            return i
        else:
            i += 1


p = 61
q = 53
n = p*q
fn = (p-1)*(q-1)
e = 65537

res = ext_euclid(fn, e)
d = mofan(e, fn)

keyG = (n, e)
keyS = (n, d)

m = '你好啊'.encode('utf-8')
test = str2bitarray('你')
m = 22811
print(m)

mf = pow(m, keyG[1]) % keyG[0]
ms = pow(mf, keyS[1]) % keyS[0]

print('发送: %s' % mf)
print('接收: %s' % ms)

print(ms)
