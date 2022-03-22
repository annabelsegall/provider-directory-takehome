import './landing-page.css';
import { ButtonLink } from '../button/button';
import Dropdown from 'react-dropdown';
import { localizedStrings } from '../../lang/localize';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { defaultLang, defaultRegion, languages, regions } from '../../providers/defaults';

export default function LandingPage() {

    const [lang, updateLang] = useState(defaultLang);
  
    const onLangChange = (e) => {
      localizedStrings.setLanguage(e.value === 'French' ? 'fr' : 'en');
      updateLang(e.value);
    };

    const [region, updateRegion] = useState(defaultRegion);
  
    const onRegionChange = (e) => {
      updateRegion(e.value);
    };

    return <div class='landing-background'>
        <div class='landing-settings'>{localizedStrings.selectLanguage}
            <Dropdown options={languages} onChange={onLangChange} value={defaultLang} />
            <Dropdown options={regions} onChange={onRegionChange} value={defaultRegion} />
            <div class='get-started'>
                <ButtonLink 
                    text={localizedStrings.getStarted} 
                    url={`/providers/${lang}/${region}`} 
                    key="1" isPrimary={true} 
                    size="large"/>
                </div>
            <Outlet/>
        </div>
    </div>;
}