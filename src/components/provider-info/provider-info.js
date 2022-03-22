import './provider-info.css';
import { ButtonLink } from "../button/button";
import { localizedStrings } from "../../lang/localize";
import { ProviderBio } from "../provider-bio/provider-bio";
import { ProviderStats } from "../provider-stats/provider-stats";

export function ProviderInfo({provider}) {
    return <div class="provider-info">
        <div class='telus-sub-heading-1 profile-header'>{provider.name}, {provider.title}</div>
        <ProviderBio bio={provider.bio}/>
        <ProviderStats provider={provider}/>
        <div class='booking-button'>
            <ButtonLink 
                key={provider.id}
                size="large" 
                isPrimary={true}
                 url={`/book`} 
                 text={localizedStrings.bookWithUs}>
            </ButtonLink>
        </div>
    </div>;
}