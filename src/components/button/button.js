import { Link } from 'react-router-dom';
import './button.css';

export function ButtonLink({text, url, keyName, isPrimary, size, noLink}) {
    const primaryClass = isPrimary ? 'primary' : 'secondary';
    const sizeClass = size;

    const button = <button className={`${primaryClass} ${sizeClass}`}> 
        {text}
    </button>;

    return noLink ? button : <Link to={url} key={keyName}> 
       {button} 
    </Link>;
}