# string = "StackOverFlow"
# newString = []
# for letters in string:
#     if letters.isupper():
#         letters = "_"+letters
#     newString.append(letters)
# print(''.join(newString))


user_input = input("camelCase: ")
new_user_output = []

for user_output in user_input:
    if user_output.isupper():
        user_output = "_" + user_output
        user_output = user_output.lower()
    new_user_output.append(user_output)
print("snake_case: "+"".join(new_user_output))