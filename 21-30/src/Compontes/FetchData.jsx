import React, { useEffect, useState } from "react";

const FetchData = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch(console.error);
  }, [id]);

  return (
    <div>
      {data ? (
        <>
          <p>Title: {data.title}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchData;
