import { signOut, useSession } from "next-auth/react";

const MiniProfile = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-gray-100 shadow-2xl ml-10 rounded-2xl hover:cursor-pointer">
      <div className="flex items-center justify-between ml-10 mt-14 ">
        <img
          className="rounded-full p-[2px] w-16 h-16 btn "
          src={session?.user?.image}
          alt=""
        />
        <div className="flex-1 mx-4">
          <h2 className="font-bold ">{session?.user?.username} </h2>
          <h3 className="text-sm">Welcome to instagram</h3>
        </div>
        <button
          onClick={signOut}
          className="text-blue-700 text-sm font-semibold btn"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default MiniProfile;
