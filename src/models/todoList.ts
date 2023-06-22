export interface Todo {
  id: number;
  name: string;
  taskDate: string;
}

export interface TodoList extends Todo {
  dateCreated: string;
}
