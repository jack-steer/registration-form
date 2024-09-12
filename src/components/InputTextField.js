import '../App.css';

export const InputTextField = ({labelText, placeholder}) => {
    return (
        <div className="input-form">
            <label>{labelText}</label>
            <input
            type="text"
            placeholder={placeholder}
            className="input-text-field"
            />
      </div>
    );
  }