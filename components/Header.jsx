import { modalState } from "@/atoms/ModalAtoms";
import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  PlusSmIcon,
  SearchIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { useRecoilState } from "recoil";

const Header = () => {
  const { data: session } = useSession();
  // console.log(session);
  const router = useRouter();

  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div className="shadow-md border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left Area  */}
        <div className="relative hidden lg:inline-grid  w-24 cursor-pointer ">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
            onClick={() => router.push("/")}
          />
        </div>

        <div className="relative w-10 h-10 flex-shrink-0 lg:hidden cursor-pointer mt-4">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
            onClick={() => router.push("/")}
          />
        </div>
        {/* Search Bar */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none ">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-50 rounded-md block w-full pl-10 sm:text-sm border-gray-300 focus:ring-blue-700 focus:border-blue-200"
            />
          </div>
        </div>
        {/* Icons last */}
        <div className=" flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />
          {session ? (
            <>
              <PlusCircleIcon className="btn" onClick={() => setOpen(true)} />
            </>
          ) : (
            <></>
          )}

          <MenuIcon className="h-8  md:hidden cursor-pointer " />

          {session ? (
            <>
              <div className="relative navBtn ">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-2 text-xs w-5 h-5  flex items-center bg-red-500 justify-center rounded-full animate-pulse text-white ">
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon onClick={() => setOpen(false)} className="navBtn" />

              <img
                src={session?.user?.image}
                alt="profile pic"
                className="h-10 w-10 rounded-full cursor-pointer navBtn"
                onClick={signOut}
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
