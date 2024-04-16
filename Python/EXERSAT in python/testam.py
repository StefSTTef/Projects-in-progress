# def tower_of_hanoi(n, source, auxiliary, target):
#     if n == 1:
#         print(f"Move disk 1 from {source} to {target}")
#         return
#     tower_of_hanoi(n-1, source, target, auxiliary)
#     print(f"Move disk {n} from {source} to {target}")
#     tower_of_hanoi(n-1, auxiliary, source, target)


# n = 6
# tower_of_hanoi(n, 'A', 'B', 'C')

# def tower_of_hanoi_moves_count(n, source, auxiliary, target):
#     if n == 1:
#         print(f"Move disk 1 from {source} to {target}")
#         return 1
#     move_count = 0
#     move_count += tower_of_hanoi_moves_count(n-1, source, target, auxiliary)
#     print(f"Move disk {n} from {source} to {target}")
#     move_count += 1
#     move_count += tower_of_hanoi_moves_count(n-1, auxiliary, source, target)
#     return move_count

# n = 3
# total_moves = tower_of_hanoi_moves_count(n, 'A', 'B', 'C')
# print("Total moves:", total_moves)

# Data for customer analysis
customer_data = {
    "18-24": {"Male": 14, "Female": 86},
    "25-29": {"Male": 18, "Female": 82},
    "30-34": {"Male": 73, "Female": 27},
    "35-39": {"Male": 49, "Female": 51},
    "40-44": {"Male": 33, "Female": 67},
    "45-49": {"Male": 100, "Female": 0},
    "50-55": {"Male": 100, "Female": 0},
    "56-59": {"Male": 100, "Female": 0},
}

# Calculate the percentage of age groups with more male customers
male_dominated_groups = 0
total_groups = len(customer_data)

for age_group, customers in customer_data.items():
    if customers["Male"] > customers["Female"]:
        male_dominated_groups += 1

# Calculate the percentage
percentage = (male_dominated_groups / total_groups) * 100

print(f"{percentage:.2f}% of age groups have more male customers than female customers.")