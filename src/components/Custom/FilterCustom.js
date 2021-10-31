import React from "react";

const FilterCustom = (props) => {

  const handlerValue = (event) => {
    props.setcaregoryFilter(event.target.value);
  }
  return (
    <React.Fragment>
      <label>Filter:</label>
      <select className="ui search dropdown" onChange={handlerValue}>
        <option value="">All Models</option>
        {props.filterValue.map((ctgry) => (
          <option value={ctgry}>{ctgry}</option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default FilterCustom;
