#Define the main function that will let user to input
def ecuatie():
    masa = int(input("Write your mass: "))
    formula(masa)

#Define the formula function that will calculate E=mc^2
def formula(masa):
    speedoflight = 300000000
    speedoflightputere = speedoflight ** 2
    print(masa * speedoflightputere)
    
#Calling the function
ecuatie()
