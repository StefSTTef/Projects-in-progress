# x, y, z= expression.split(" ")

# expression = int(input("Expression: "))
# x, y, z= expression.split(" ")


x = int
y = str
z = int
x, y, z = input("Expression: ").split(" ")

a = int(x)
b = int(z)

if y == ("+"):
    print(float(a + b))
elif y == ("-"):
    print (float(a - b))
elif y == ("/"):
    print (float(a / b))
elif y == ("*"):
    print (float(a * b))
