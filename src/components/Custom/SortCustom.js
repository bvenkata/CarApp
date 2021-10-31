import React from "react";

const SortCustom = (props) => {

  return (
    <React.Fragment>
      <label>Sort:</label>
      <select className="ui dropdown" onChange={props.sortValue}>
        <option value=""></option>
        <option value="Low to High">Low to High</option>
        <option value="High to Low">Hight to Low</option>
      </select>
    </React.Fragment>
  );
};

export default SortCustom;
