import './provider-list-header.css';

import { localizedStrings } from "../../lang/localize";
import { useProviders } from "../../providers/wrappers";

export function ProviderListHeader({region, lang}) {
    let providers = useProviders(region, lang);

    if(!providers) {
      return <div className='provider-list-header'>
        <div className='telus-sub-heading-3'>
          {localizedStrings.browse}
          </div> 
        </div>;
    }

    return <div className='provider-list-header'>
      <div className='telus-sub-heading-3'>{localizedStrings.browse}</div> 
      <div className='input-text-3'> {localizedStrings.formatString(
        localizedStrings.specialistsAvailable,
        providers.length === 1 ? localizedStrings.is : localizedStrings.are,
        providers.length ? providers.length : localizedStrings.no,
        lang,
        providers.length === 1 ? localizedStrings.specialist : localizedStrings.specialists,
        region
      )}
      </div>
    </div>;
}