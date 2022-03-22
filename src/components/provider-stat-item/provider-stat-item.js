import { FaGraduationCap, FaMapMarkedAlt, FaGlobe } from 'react-icons/fa';
import './provider-stat-item.css'
export function ProviderStatItem({icon, label, value}) {
    let iconComponent;

    switch (icon) {
        case 'globe':
            iconComponent = <FaGlobe/>;
            break;
        case 'hat':
            iconComponent = <FaGraduationCap/>;
            break;
        case 'map':
            iconComponent = <FaMapMarkedAlt/>;
            break;
        default: 
            break;
    }

    return <div class='stat-item'>
        <div class='stat-icon'>{iconComponent}</div>
        <div class='input-text-1 stacked-item'>
            {label} 
            <div class='telus-label-3-dark'>
                {value}
            </div>
        </div>
    </div>;
}