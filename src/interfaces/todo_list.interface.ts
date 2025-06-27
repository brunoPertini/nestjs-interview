export interface TodoList {
  id: number;
  name: string;
}

export interface CompleteableToDoItem extends TodoList {
  isCompleted: boolean;
}
