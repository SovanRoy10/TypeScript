import React from "react";
import { useCounter } from "../provider/Counter";

interface MyButtonProps {
  text: string | number | boolean;
  onClick?: () => void;
}



const MyButton1: React.FC<MyButtonProps> = () => {

  const context =  useCounter();


  return (
    <button onClick={()=> context?.setCount(context?.value+1)}>
      {context?.value}
    </button>
  );
};

export default MyButton1;
