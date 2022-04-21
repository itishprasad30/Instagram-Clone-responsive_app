import React, { useEffect, useState } from "react";
import faker from "@faker-js/faker";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);

    const fake_data = [...Array(10)].map((_, index) => ({
      ...faker.helpers.contextualCard(),
      key: index + 1,
    }));
    // console.log(fake_data);
  }, []);

  return (
    <div className="mt-4 ml-10 bg-white shadow-2xl p-4 rounded-2xl hover:cursor-pointer">
      <div className=" flex justify-between text-sm mb-5">
        <h3 className=" text-sm text-gray-700 font-bold">Suggestion for You</h3>
        <button className="font-semibold">See All</button>
      </div>

      {suggestions.map((profile, index) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3 "
        >
          <img
            src={profile.avatar}
            alt=""
            className="w-10 h-10 rounded-full border p-[2px] btn "
          />
          <div className="flex-1">
            <h2 className="">{profile.username}</h2>
            <h2 className="text-xs text-gray-700">
              works at {profile.company.name}
            </h2>
          </div>
          <h2 className="text-blue-700 font-bold btn">Follow</h2>
        </div>
      ))}
    </div>
    // <div className="flex items-center mt-10 ml-10">
    //   <img
    //     className="rounded-full p-[2px] w-16 h-16"
    //     src="https://avatars.githubusercontent.com/u/60768713?v=4"
    //     alt=""
    //   />
    //   <div className="flex-1 mx-4">
    //     <h2 className="font-bold">Itish prasad</h2>
    //     <h3 className="text-sm">Welcome to instagram</h3>
    //   </div>
    //   <button className="text-blue-500 text-sm font-semibold">Sign Out</button>
    // </div>
  );
};

export default Suggestions;
