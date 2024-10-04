import "./InputTextField.css";

export const InputTextField = ({
  id,
  type,
  labelText,
  placeholder,
  onChange,
  required = true,
}) => {
  return (
    <div className="input-form">
      <label>{labelText}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        {...required}
      />
    </div>
  );
};
