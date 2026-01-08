import React, { useState } from "react";

const FilterListDynamically = () => {
  const items = ["mobile", "Laptop", "Tablet"];
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text" value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {items
        .filter((item) =>
          item.includes(search)
        )
        .map((item, index) => (
          <p key={index}>{item}</p>
        ))}
    </div>
  );
};

export default FilterListDynamically;
