def decode(message_file):
    # Open the file and read the lines
    with open(message_file, 'r') as file:
        lines = file.readlines()

    # Initialize an empty list to store pyramid words
    pyramid_words = []

    # Process each line to extract the pyramid words
    for line in lines:
        # Split the line into number and word
        num, word = line.split()
        # Convert number to integer
        num = int(num)
        # Append the word to the corresponding position in the pyramid list
        if num > len(pyramid_words):
            pyramid_words.extend([''] * (num - len(pyramid_words)))
        pyramid_words[num - 1] = word

    # Construct the pyramid structure
    pyramid = []
    for i, word in enumerate(pyramid_words):
        pyramid.append([''] * (i + 1))
        pyramid[i][i] = word

    # Flatten the pyramid structure to extract the message words
    message_words = [word for row in pyramid for word in row]

    # Return the decoded message as a string
    return ' '.join(message_words)

# Specify the file path
file_path = r'D:\Python\Python\Python\EXERSAT in python\coding_qual_input.txt'

# Call the decode function with the file path
decoded_message = decode(file_path)

# Print the decoded message
print(decoded_message)