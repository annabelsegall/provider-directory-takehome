import { Link } from 'react-router-dom';
import './button.css';

export function ButtonLink({text, url, keyName, isPrimary, size, noLink, desc}) {
    const primaryClass = isPrimary ? 'primary' : 'secondary';
    const sizeClass = size;

    const button = <button aria-description={desc} className={`${primaryClass} ${sizeClass}`}> 
        {text}
    </button>;

    return noLink ? button : <Link to={url} key={keyName}> 
       {button} 
    </Link>;
}