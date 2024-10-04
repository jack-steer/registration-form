export const ProgressButton = ({ onClick, children, buttonDisabled }) => {
  return (
    <button
      className="cta-button"
      onClick={onClick}
      disabled={buttonDisabled}
    >
      {children}
    </button>
  );
};
