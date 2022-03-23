import './provider-bio.css';
import { useState } from 'react';
import { localizedStrings } from '../../lang/localize';

export function ProviderBio({bio}) {

    const [showMore, updateShowMore] = useState(false);
    
    return <div>
        <div role='info' className={`${!showMore ? "truncated" : undefined} telus-body-3`}>{bio}</div>
        <div  aria-hidden="true" className='read-less' onClick={() => updateShowMore(!showMore)}>
                {!showMore ? localizedStrings.showMore : localizedStrings.showLess}
        </div>
    </div>;
}