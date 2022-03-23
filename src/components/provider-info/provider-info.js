import './provider-info.css';
import { ButtonLink } from "../button/button";
import { localizedStrings } from "../../lang/localize";
import { ProviderBio } from "../provider-bio/provider-bio";
import { ProviderStats } from "../provider-stats/provider-stats";

export function ProviderInfo({provider}) {
    return <div className="provider-info">
        <div tabindex={0} role='info' className='telus-sub-heading-1 profile-header'>{provider.name}, {provider.title}</div>
        <ProviderBio bio={provider.bio}/>
        <ProviderStats provider={provider}/>
        <div className='booking-button'>
            <ButtonLink 
                keyName={provider.id}
                size="large" 
                isPrimary={true}
                url={`/book`} 
                text={localizedStrings.bookWithUs}>
            </ButtonLink>
        </div>
    </div>;
}