import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // console.log(res.data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePosts = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // console.log(res.data);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="text-center">Post Users App</h1>
        <button className="btn btn-success" onClick={handlePosts}>
          Load Posts
        </button>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {posts &&
                posts.map((post) => (
                  <div className="card" key={post.id}>
                    <p>{post.id}</p>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                  </div>
                ))}
            </div>
            <div className="col-md-6">
              {users &&
                users.map((user) => (
                  <div className="card p-3 m-2" key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
