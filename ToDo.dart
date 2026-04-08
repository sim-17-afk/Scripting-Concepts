import 'dart:io';

void main() {
  List<String> tasks = [];
  int choice = 0;

  while (choice != 4) {
    print("\n===== TODO LIST APPLICATION =====");
    print("1) Add Task");
    print("2) View Tasks");
    print("3) Remove Task");
    print("4) Exit");
    stdout.write("Enter your choice: ");

    void addTask(){
        stdout.write("Enter task to add: ");
        String task = stdin.readLineSync()!;
        tasks.add(task);
        print("Task added successfully!");
    }
    
    void viewTask(){
        if (tasks.isEmpty) {
          print("No tasks available.");
        } else {
          print("\nYour Tasks:");
          for (int i = 0; i < tasks.length; i++) {
            print("${i + 1}. ${tasks[i]}");
          }
        }
    }

    void removeTask(){
        if (tasks.isEmpty) {
          print("No tasks to remove.");
        } else {
          print("\nSelect task number to remove:");
          for (int i = 0; i < tasks.length; i++) {
            print("${i + 1}. ${tasks[i]}");
          }

          stdout.write("Enter task number to remove: ");
          int removeIndex = int.parse(stdin.readLineSync()!);

          if (removeIndex > 0 && removeIndex <= tasks.length) {
            tasks.removeAt(removeIndex - 1);
            print("Task removed successfully!");
          } else {
            print("Invalid task number.");
          }
        }
    }

    void exitApp(){
        print("Exiting application. Goodbye!");
    }
    choice = int.parse(stdin.readLineSync()!);

    switch (choice) {
      case 1:
        addTask();
        break;

      case 2:
        viewTask();
        break;

      case 3:
        removeTask();
        break;

      case 4:
        exitApp();
        break;

      default:
        print("Invalid choice. Please try again.");
    }
  }
}