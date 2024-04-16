def main():
    user_input = input("Input: ")
    new_user_input = replace(user_input)
    print("Output:", new_user_input)

def replace(user_input):
    banned_vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    new_user_input = user_input
    for vowel in banned_vowels:
        new_user_input = new_user_input.replace(vowel, "")
    return new_user_input


main()