import React from "react";

type SwitchProps = {
  isOn: boolean;
  handleToggle: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Toggle: React.FC<SwitchProps> = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export { Toggle };
