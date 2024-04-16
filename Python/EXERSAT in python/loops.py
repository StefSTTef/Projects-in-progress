# i = 0
# while i <= 3:
#     print("meow")
#     i = i + 1

# for _ in range(3):
#     print("meow")

# print("meow\n" * 3, end="")

# while True:
#     n = int(input("What's n? "))
#     if n > 0:
#         break
# for _ in range(n):
#     print("meow")

# def main():
#     number = get_number()
#     meow(number)

# def get_number():
#     while True:
#         n = int(input("What's n? "))
#         if n > 0:
#             break
#     return n
        
# def meow(n):
#     for _ in range(n):
#         print("meow")

# main()


# def main():
#     print_column(3)


# def print_column(height):
#     for _ in range(height):
#         print("#")


# main()

# def main():
#     print_row(4)

# def print_row(width):
#     print("?" * width)

# main()

def main():
    print_square(3)

def print_square(size):
    for i in range(size):
        for j in range(size):
            print("#", end="")
        print()



main()