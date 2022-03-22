import { localizedStrings } from "../../lang/localize";
import { ProviderStatItem } from "../provider-stat-item/provider-stat-item";

export function ProviderStats({provider}) {
    return <div className='stats'>
        <ProviderStatItem 
            icon='map' 
            label={localizedStrings.location} 
            value={provider.location}/>
        <ProviderStatItem 
            icon='hat' 
            label={localizedStrings.education}
             value={provider.education}/>
        <ProviderStatItem 
            icon='globe' 
            label={localizedStrings.languages}
            value={provider.languages.join(', ')}/>
    </div>;
}