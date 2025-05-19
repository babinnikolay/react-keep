function Button({ children, className, id, onClick }) {
  return (
    <button className={className} id={id} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
