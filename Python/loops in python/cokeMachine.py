# print("Amount Due: 50")
# amount_due = 50
# sum_all_coins_inserted = 0

# while True:
#     insert_coin = int(input("Insert Coin: "))
#     insert_coin = int
#     sum_all_coins_inserted = int
#     while sum_all_coins_inserted != 50:
#         sum_all_coins_inserted = sum_all_coins_inserted + insert_coin
#         if sum_all_coins_inserted != 0:
#             rest_to_add = amount_due - sum_all_coins_inserted
#             change_owed = amount_due - sum_all_coins_inserted
#             print("Amount Due: ", rest_to_add)
#             print("Change Owed: ", change_owed)
#         break
#     break


print("Amount Due: 50")
amount_due = 50
sum_all_coins_inserted = 0
allowed_coins = [5, 10, 25]

while sum_all_coins_inserted < amount_due:
    insert_coin = int(input("Insert Coin: "))

    if insert_coin not in allowed_coins:
        print("Amount Due: 50")
        continue

    sum_all_coins_inserted += insert_coin
    change_owed = sum_all_coins_inserted - amount_due

    if sum_all_coins_inserted < amount_due:
        rest_to_add = amount_due - sum_all_coins_inserted
        print("Amount Due:", rest_to_add)
    elif sum_all_coins_inserted == amount_due:
        print("Change Owed:", change_owed)
        break
    else:
        print("Change Owed:", change_owed)
        break
