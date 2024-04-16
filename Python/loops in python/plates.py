def main():
    plate = input("Plate: ")
    if is_valid(plate):
        print("Valid")
    else:
        print("Invalid")

def is_valid(s):
    if not has_minimum_length(s):
        return False
    if not has_maximum_length(s):
        return False
    if not starts_with_letters(s):
        return False
    if not ends_with_numbers(s):
        return False
    if not contains_valid_characters(s):
        return False
    return True

def has_minimum_length(s):
    return len(s) >= 2

def has_maximum_length(s):
    return len(s) <= 6

def starts_with_letters(s):
    return s[:2].isalpha()

def ends_with_numbers(s):
    if len(s) > 2 and s[-1].isdigit() and s[-2:].isalpha() and s[-1] != '0':
        return True
    return False

def contains_valid_characters(s):
    return s.isalnum()

if __name__ == "__main__":
    main()