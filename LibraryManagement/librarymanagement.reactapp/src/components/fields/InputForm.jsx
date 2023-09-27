// Custom components
import React from "react";

function InputForm(props) {
  const { label,name, id, extra, type, placeholder} =
    props;

  return (
    <div className={`${extra}`}>
      <label
        htmlFor={id}
        className={`text-m text-navy-700 dark:text-white`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
      />
    </div>
  );
}

export default InputForm;
