# def tower_of_hanoi(n, source, auxiliary, target):
#     if n == 1:
#         print(f"Move disk 1 from {source} to {target}")
#         return
#     tower_of_hanoi(n-1, source, target, auxiliary)
#     print(f"Move disk {n} from {source} to {target}")
#     tower_of_hanoi(n-1, auxiliary, source, target)


# n = 6
# tower_of_hanoi(n, 'A', 'B', 'C')

def tower_of_hanoi_moves_count(n, source, auxiliary, target):
    if n == 1:
        print(f"Move disk 1 from {source} to {target}")
        return 1
    move_count = 0
    move_count += tower_of_hanoi_moves_count(n-1, source, target, auxiliary)
    print(f"Move disk {n} from {source} to {target}")
    move_count += 1
    move_count += tower_of_hanoi_moves_count(n-1, auxiliary, source, target)
    return move_count

n = 3
total_moves = tower_of_hanoi_moves_count(n, 'A', 'B', 'C')
print("Total moves:", total_moves)