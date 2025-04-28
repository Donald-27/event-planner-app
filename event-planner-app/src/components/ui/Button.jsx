export default function Button({ children, onClick, type = 'button' }) {
    return (
      <button type={type} className="custom-button" onClick={onClick}>
        {children}
      </button>
    );
  }