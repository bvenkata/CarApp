import React from "react";
import { Link } from "react-router-dom";

const stylImageFix = {
  height: 225,
};

const CardCustom = (props) => {
  return (
    <div className="column">
      <div className="ui fluid card">
        <div className="image">
          <Link to="/cardetails">
            <img
              key={props.card.photo}
              src={require(`../../images/${props.card.photo}`).default}
              style={stylImageFix}
            />
          </Link>
        </div>
        <div className="content">
          <a className="header">
            {props.card.brandName} - {props.card.modelName}
          </a>
        </div>
        <div class="description">
          Price: {props.card.modelPrice}
        </div>
      </div>
    </div>
  );
};

export default CardCustom;
