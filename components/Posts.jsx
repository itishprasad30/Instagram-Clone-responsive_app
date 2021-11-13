import { db } from "@/firebase";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => setPosts(snapshot.docs)
      ),
    [db]
  );

  // console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;

// const posts = [
//   {
//     id: "123",
//     username: "The Weeknd",
//     userImg: "https://avatars.githubusercontent.com/u/60768713?v=4",
//     img: "https://avatars.githubusercontent.com/u/60768713?v=4 ",
//     caption: "The genius artist",
//   },
//   {
//     id: "211",
//     username: "Itish Prasad",
//     userImg: "https://avatars.githubusercontent.com/u/60768713?v=4",
//     img: "https://avatars.githubusercontent.com/u/60768713?v=4 ",
//     caption: "Doing SOme Random THings",
//   },
//   {
//     id: "333",
//     username: "khalid",
//     userImg: "https://avatars.githubusercontent.com/u/60768713?v=4",
//     img: "https://avatars.githubusercontent.com/u/60768713?v=4 ",
//     caption: "The genius pop singer",
//   },
// ];
