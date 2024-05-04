const FriendList = () => {
  const friends = [
    { id: 1, name: "Alice", is_online: true },
    { id: 2, name: "Bob", is_online: false },
    { id: 3, name: "Charlie", is_online: true },
  ];

  return (
    <div>
      <h3 className="mb-2 text-md">Friends List</h3>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id} className="flex items-center space-x-2 mb-1">
            <p>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
