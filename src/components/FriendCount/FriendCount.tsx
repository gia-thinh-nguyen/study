const FriendCount = () => {
  const friendCount = 10;
  return (
    <div className="bg-gray-700 bg-opacity-40 px-5 py-5 rounded-md text-xl z-10 h-fit">
      <p>Friends Active: {friendCount} 👀</p>
    </div>
  );
};

export default FriendCount;
