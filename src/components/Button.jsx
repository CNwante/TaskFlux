// Button Component

export const Button = ({ content, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {content}
    </button>
  );
};
