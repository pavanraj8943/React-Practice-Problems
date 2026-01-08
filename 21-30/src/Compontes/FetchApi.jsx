import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((result) => setData(result.posts))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        data.map((item) => <p key={item.id}>{item.id}</p>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchApi;
