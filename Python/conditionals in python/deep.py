answer = str(input("Your Answer: ").lower().strip())

match answer:
    case "42" | "forty-two" | "forty two":
        print("Yes")
    case default:
        print("No")
