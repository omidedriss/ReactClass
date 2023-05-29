import React, { useState } from "react";
type TProps = {
  children: React.ReactNode;
};

function State(props: TProps) {
  const [name, setName] = useState<string>("");

  const change = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => {
          change(e);
        }}
      />
    </div>
  );
}
export default State;
