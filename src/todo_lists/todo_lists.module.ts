import { Module } from '@nestjs/common';
import { TodoListsController } from './todo_lists.controller';
import { TodoListsService } from './todo_lists.service';
import { CompleteableToDoItem } from 'src/interfaces/todo_list.interface';

const mockList: CompleteableToDoItem[] = [
  { id: 1, name: 'Learn React', isCompleted: false },
  { id: 2, name: 'Learn TypeScript', isCompleted: false },
  { id: 3, name: 'Build a Todo App', isCompleted: false },
];

@Module({
  imports: [],
  controllers: [TodoListsController],
  providers: [
    { provide: TodoListsService, useValue: new TodoListsService(mockList) },
  ],
})
export class TodoListsModule {}
