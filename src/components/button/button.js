import { Link } from 'react-router-dom';
import './button.css';

export function ButtonLink({text, url, key, isPrimary, size}) {
    const primaryClass = isPrimary ? 'primary' : 'secondary';
    const sizeClass = size;

    return <Link to={url} key={key}> 
        <button class={`${primaryClass} ${sizeClass}`}> 
            {text}
        </button>
    </Link>;
}