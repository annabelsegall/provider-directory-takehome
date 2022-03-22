import './provider-bio.css';
import { useState } from 'react';
import { localizedStrings } from '../../lang/localize';

export function ProviderBio({bio}) {

    const [showMore, updateShowMore] = useState(false);
    
    return <div>
        <div class={`${!showMore ? "truncated" : undefined} telus-body-3`}>{bio}</div>
        <div class='read-less' onClick={() => updateShowMore(!showMore)}>
                {!showMore ? localizedStrings.showMore : localizedStrings.showLess}
        </div>
    </div>;
}