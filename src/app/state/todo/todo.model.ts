export interface ToDo {
  id: number;
  task: string;
  complete: boolean;
}

export function generateToDos(): ToDo[] {
  return [
    {
      id: 1,
      task: '172.19.15.49',
      complete: false
    }

  ];
}
