import css from './Button.module.css';

const Button = ({ onClick, title }) => {
  return (
    <button type="button" onClick={onClick} className={css.btn}>
      {title}
    </button>
  );
};

export default Button;
