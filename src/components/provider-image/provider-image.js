import './provider-image.css';
import { localizedStrings } from '../../lang/localize';

export function ProviderImage({url, size}) {
    let avatar;
    if(url) avatar = <img
      aria-hidden={true}
      src={url}
      alt={localizedStrings.profileImage}
    />;

    else avatar = <img 
        aria-hidden={true}
        src="/images/backup-image.jpg"
        alt={localizedStrings.profileImage}
    />;

    return  <div className={`${size} profile-image`}>{avatar}</div>;
}