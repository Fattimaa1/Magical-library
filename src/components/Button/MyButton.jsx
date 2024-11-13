const MyButton = ({ buttonText, onClickHandler }) => {
  return (
    <button type="button" className="Button-main" onClick={onClickHandler}>
      {buttonText}
    </button>
  );
};

export default MyButton;
