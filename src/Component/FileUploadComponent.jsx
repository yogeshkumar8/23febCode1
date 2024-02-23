// import React, { useState } from "react";
// import { FileUploader } from "react-drag-drop-files";

// const fileTypes = ["JPG", "PNG", "GIF"];

// function DragDrop() {
//   const [file, setFile] = useState(null);
//   const handleChange = (file) => {
//     setFile(file);
//   };
//   return (
//     <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
//   );
// }

// export default DragDrop;

import React, { useState } from "react";

function NumberInput() {
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value.replace(/[^0-9]/g, ""); // Replace any non-numeric character with an empty string
    setNumber(inputValue);
    // setIsValid(/^\d+$/.test(inputValue)); // Test if the input consists of only digits
  };

  return (
    <form>
      <label htmlFor="numberInput">Enter a Number:</label>
      <input
        type="text"
        id="numberInput"
        name="numberInput"
        value={number}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NumberInput;
