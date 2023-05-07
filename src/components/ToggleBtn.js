import React, { useState } from "react";
import ReactSwitch from "react-switch";

function ToggleBtn() {
  const [checked, setChecked] = useState(true);

  const handleChange = (val) => {
    setChecked(val);
  };

  return (
    <div>
      <ReactSwitch checked={checked} onChange={handleChange} />
    </div>
  );
}

export default ToggleBtn;
