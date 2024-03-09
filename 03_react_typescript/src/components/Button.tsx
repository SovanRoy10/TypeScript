import React from "react";
import { useState } from "react";


interface MyButtonProps {
  text: string | number | boolean;
  onClick?: () => void;
}

// type props = {
//   text: string;
// };

interface Book {
  name: string;
  price: number;
}

const MyButton: React.FC<MyButtonProps> = (props) => {


  // const { text, onClick = () => {} } = props;

  // explicit casting
  const [value, setValue] = useState<Book>({
    name: "book1",
    price: 10,
  });

  const handleClick = () => {
    setValue({ name: "book2", price: 20 });
  };

  return (
    <button onClick={handleClick}>
      Book Name : {value.name}- Rs.{value.price}
    </button>
  );
};

export default MyButton;
