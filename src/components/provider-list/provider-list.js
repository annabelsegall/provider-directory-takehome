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
        return <div class="provider-list">
            <div class="provider-list-empty">
                {localizedStrings.noProviders}
            </div>
        </div>;
    }

    const providerList = providers.map((provider) => {
        return <ProviderListItem provider={provider}/>
    });

    return <div class="provider-list">{providerList}<Outlet/></div>;
}