import './provider-single.css';
import LoaderIcon from "../loader-icon/loader-icon";
import { ProviderImage } from "../provider-image/provider-image";
import { ProviderInfo } from "../provider-info/provider-info";
import { useParams } from "react-router-dom";
import { useProvider } from "../../providers/wrappers";

export default function ProviderSingle() {
    let params = useParams();
    let id = params.providerId;
    let provider = useProvider(id);

    if(!provider) {
        return  <LoaderIcon/>;
    }

    return <div className="provider-single">        
            <ProviderImage size="large" url={provider.avatarUrl}/>
            <ProviderInfo provider={provider}/>
        </div>;
  }