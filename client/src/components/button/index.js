import "./index.scss";

//type it takes values "main" and "secondary"

const Button = ({ label, type, selected, onClick = () => {} }) => {
  const classes = ["default-btn", `${type}-btn`];
  if (selected) classes.push("selected-btn");

  return (
    <button onClick={onClick} className={classes.join(" ")}>
      {label}
    </button>
  );
};

export default Button;
