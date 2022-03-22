import {ProviderList} from '../provider-list/provider-list.js';
import {ProviderListHeader} from '../provider-list-header/provider-list-header.js';
import { useParams } from 'react-router-dom';

export function ProviderPage() {

 const params = useParams();
 const lang = params.lang;
 const region = params.region;

  return (
      <div className="provider-page">
        <ProviderListHeader region={region} lang={lang}/>
        <ProviderList region={region} lang={lang}/>
      </div>
  );
}

