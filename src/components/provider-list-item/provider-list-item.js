
import './provider-list-item.css';
import { ButtonLink } from '../button/button';
import { Link } from 'react-router-dom';
import { localizedStrings } from '../../lang/localize';
import { ProviderImage } from '../provider-image/provider-image';

export function ProviderListItem({provider}) {

    return <div className="list-item" role="list-item">
        <Link to={`/providers/${provider.id}`} key={provider.id}>
            <div className='profile-image-title'>
                <ProviderImage  size="small" url={provider.url} />
                <div className='telus-label-5 profile-header-small'>{provider.name},{provider.title}
                </div>
            </div>
            <div aria-hidden={true} className="bio telus-body-3">{provider.bio}</div>
            <ButtonLink
                desc={localizedStrings.clickToSchedule} 
                size="small" 
                noLink
                url={`/providers/${provider.id}`}
                keyName={provider.id} 
                text={`${localizedStrings.available}
                ${localizedStrings[
                    provider.availabilty === 'next-week'
                    ? 'nextweek' : provider.availabilty]}`}>
            </ButtonLink>
            </Link>
    </div>;
}