import { ImSpinner } from 'react-icons/im';
import css from './Loader.module.css';

function Loader({ pokemonName }) {

  return (
    <div>
      <div className={css.container}>
        <ImSpinner size="32" className={css.iconSpin} />
        Please, wait...
      </div>
    </div>
  );
}

export default Loader;