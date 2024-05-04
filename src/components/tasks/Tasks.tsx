const Tasks = ({ tasks }: ITasks) => {
  return (
    <div className="bg-gray-700 bg-opacity-50 px-10 py-5 rounded-md text-sm">
      <h3 className="mb-2 text-md">Tasks to complete</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center space-x-2 mb-1">
            <input type="checkbox" />
            <p>{task.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
