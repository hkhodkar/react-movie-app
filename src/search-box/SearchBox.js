import React, { useState } from "react";
import "./SearchBox.css";

const SearchBox = (props) => {
  const [searchValue, setSearchValue] = useState();
  return (
    <div className="col colsm-4">
      <input
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        type="text"
        placeholder="type to search...."
        className="form-control"
      />
    </div>
  );
};

export default SearchBox;
