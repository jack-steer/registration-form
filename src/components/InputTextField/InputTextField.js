import "./InputTextField.css";

export const InputTextField = ({ id, labelText, placeholder, onChange }) => {
  return (
    <div className="input-form">
      <label>{labelText}</label>
      <input
        type="text"
        placeholder={placeholder}
        id={id}
        onChange={onChange}
      />
    </div>
  );
};
