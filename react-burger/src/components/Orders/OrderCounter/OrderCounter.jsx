import React from "react";
import PropTypes from "prop-types";
import style from "./OrderCounter.module.css";

export default function OrderCounter({title, number}) {

  return(
    <div className={style.OrderCounterContainer}>
      <h2 className="text text_type_main-medium"> { title } </h2>
      <p className="text text_type_digits-large">
        { number }
      </p>
    </div>
  );
}

OrderCounter.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
}; 