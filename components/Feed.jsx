import React from "react";
import Head from "next/dist/shared/lib/head";
import Stories from "@/components/Stories";
import Posts from "@/components/Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import { useSession } from "next-auth/react";

const Feed = () => {
  const { data: session } = useSession();

  return (
    <main
      className={`grid  grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto  ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
    >
      <section className="col-span-2">
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>
      {/* section 2 */}

      {session && (
        <section className="col-span-1">
          <div className="fixed">
            {/* Sectons for mini profile */}

            <MiniProfile />
            {/* suggections */}
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
};

export default Feed;
