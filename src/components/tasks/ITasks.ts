interface ITask {
  id: number;
  name: string;
  description: string;
  is_completed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ITasks {
  tasks: ITask[];
}
