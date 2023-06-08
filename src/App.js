import React from 'react'
import "./App.css";
import { increment } from "./Actions/index";
import { decrement } from "./Actions/index";

import { useSelector, useDispatch } from "react-redux";

const App = () => {

  // it alternative to the useContext hooks in react / consumer from context API
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  const dispatch = useDispatch();
  // const dispatch = useDispatch();

  return (

    <>
      <div className="main-div">


        <div className="container">

          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div className="quantity">
            <a href="/#" className="quantity__minus" title="Decrement"
              onClick={() => dispatch(decrement(10))}>
              <span> - </span></a>
            <input name="quantity" type="text" class="quantity__input" value={changeTheNumber} />
            <a href="/#" className="quantity__plus" title="Increment"
              onClick={() => dispatch(increment(10))}>
              <span> +   </span></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App