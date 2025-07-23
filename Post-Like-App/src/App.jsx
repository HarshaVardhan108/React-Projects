import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaCircleUser } from "react-icons/fa6";


function App() {
  const imgUrl =
    "https://plus.unsplash.com/premium_photo-1753089574948-9a9a358bc575?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0)
  const handleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1)
    } else {
      setLike(false);
      setCount(count -1)
    }
  };
  return (
    <>
      <div className="container">
        <h1>Post Like App</h1>
        <p>Like Count: {count}</p>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-header">
            <h5 className="card-title"><FaCircleUser /> UserName</h5>
          </div>
          
          <img src={imgUrl} alt="Image" width={"100%"} height={"300px"} />
          <div className="card-footer">
            {like ? (
              <GoHeartFill size={30} className="text-danger" onClick={handleLike} style={{cursor: 'pointer'}}/>
            ) : (
              <GoHeart size={30} onClick={handleLike} style={{cursor: 'pointer'}} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
