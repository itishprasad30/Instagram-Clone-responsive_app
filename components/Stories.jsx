import faker from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "@/components/Story";
import { useSession } from "next-auth/react";

const Stories = () => {
  const { data: session } = useSession();

  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
    // console.log(suggestions);
  }, []);
  return (
    <div className="flex space-x-2 p-6 mt-8 border-gray-200 rounded-md overflow-x-scroll scrollbar-thin scrollbar-thumb-black  ">
      {session && (
        <Story
          key={session?.user?.uid}
          img={session?.user?.image}
          username={session?.user?.username}
        />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
