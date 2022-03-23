import './provider-list.css';
import LoaderIcon from "../loader-icon/loader-icon";
import { localizedStrings } from "../../lang/localize";
import { Outlet } from "react-router-dom";
import {ProviderListItem} from '../provider-list-item/provider-list-item.js';
import { useProviders } from "../../providers/wrappers";

export function ProviderList({region, lang}) {
    let providers = useProviders(region, lang);

    if(!providers) {
        return <LoaderIcon/>;
    }
    if(!providers.length) {
        return <div className="provider-list">
            <div className="provider-list-empty" role='alert'>
                {localizedStrings.noProviders}
            </div>
        </div>;
    }

    const providerList = providers.map((provider) => {
        return <ProviderListItem provider={provider} key={provider.id}/>
    });

    return <div role="list" className="provider-list">{providerList}<Outlet/></div>;
}