

# ".gif, .jpg, .jpeg, .png, .pdf, .txt", "/gif, /jpg, /jpeg, /png, /pdf, /txt"

# def main():
#     a = input("File name: ")
#     if switch is True:
#         print("image/" + b)
#     else:
#         return print("application/octet-stream")


# def switch():
#     if a.endswith(".gif, .jpg, .jpeg, .png, .pdf, .txt"):
#         return True
#     else:
#         return False

# main()


a = input("File name: ").lower().strip()

if a.endswith(".gif"):
    print("image/gif")
elif a.endswith(".jpg"):
    print("image/jpeg")
elif a.endswith(".jpeg"):
    print("image/jpeg")
elif a.endswith(".png"):
    print("image/png")
elif a.endswith(".pdf"):
    print("application/pdf")
elif a.endswith(".txt"):
    print("text/plain")
elif a.endswith(".zip"):
    print("application/zip")
else:
     print("application/octet-stream")



