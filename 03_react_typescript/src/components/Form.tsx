import React from "react";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState<string | undefined>();
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleNameChange}
        type="text"
        placeholder="Enter your name"
        value={name}
      />
      <button type="submit">submit</button>
    </form>
  );
}
