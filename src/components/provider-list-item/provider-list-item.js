
import './provider-list-item.css';
import {ButtonLink} from '../button/button';
import { localizedStrings } from '../../lang/localize';
import { ProviderImage } from '../provider-image/provider-image';

export function ProviderListItem({provider}) {

    return <div class="list-item">
        <div class='profile-image-title'>
            <ProviderImage  size="small" url={provider.url} />
            <div class='telus-label-5 profile-header-small'>{provider.name},{provider.title}
            </div>
        </div>
        <div class="bio telus-body-3">{provider.bio}</div>
        <ButtonLink 
            size="small" 
            url={`/providers/${provider.id}`}
             key={provider.id} 
             text={`${localizedStrings.available}
              ${localizedStrings[
                  provider.availabilty === 'next-week'
                   ? 'nextweek' : provider.availabilty]}`}>
        </ButtonLink>
    </div>;
}