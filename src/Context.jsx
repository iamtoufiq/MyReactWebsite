import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "./Reducer";
import { myData } from "./MyData";
const createOne = createContext();
const intialState = {
  names: "",
  images: "",
};

const Context = ({ children }) => {
  const [datas, setDatas] = useState([]);
  const [state, dispach] = useReducer(reducer, intialState);

  // dispach

  const updateHomePage = () => {
    return dispach({
      type: "Home-update",
      payload: {
        names: "Taufique Chaudhary",
        images: "./images/double.svg",
      },
    });
  };
  const updateAboutPage = () => {
    return dispach({
      type: "About-update",
      payload: {
        names: "Toufiq Choudhari",
        images: "./images/alone.svg",
      },
    });
  };

  useEffect(() => {
    setDatas([...myData]);
  }, []);
  return (
    <>
      <createOne.Provider value={{ ...state, updateAboutPage, updateHomePage }}>
        {children}
      </createOne.Provider>
    </>
  );
};
const globalContextHook = () => {
  return useContext(createOne);
};
export default Context;
export { globalContextHook };
