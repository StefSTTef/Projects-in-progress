def convert(text):
    # Define a dictionary for emoticon-to-emoji mapping
    emoji_dict = {":)": "🙂", ":(": "🙁"}

    # Replace emoticons with emojis
    text = text.replace(":)", emoji_dict.get(":)", ":)"))
    text = text.replace(":(", emoji_dict.get(":(", ":("))

    return text

def main():
    # Get input from the user
    user_input = input("Enter text with emoticons: ")

    # Call the convert function to replace emoticons with emojis
    converted_text = convert(user_input)

    # Print the result
    print(converted_text)

main()