const Story = ({ img, username }) => {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-[1.5px ] border-2 border-red-500 object-contain  cursor-pointer hover:scale-110 transition duration-200 ease-out"
        src={img}
        alt="profile img"
      />
      <h2 className="text-sm w-14 truncate text-center">{username}</h2>
    </div>
  );
};

export default Story;
