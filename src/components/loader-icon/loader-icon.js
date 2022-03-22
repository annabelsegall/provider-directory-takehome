import './loader-icon.css';
import { Bars } from "react-loader-spinner";
import { localizedStrings } from "../../lang/localize";

export default function LoaderIcon() {
    // color: Primary 5 (see colors.css)
    return <div className='loading-background'>
        <Bars
            height="100"
            width="100"
            color="#4B286D"
            ariaLabel={localizedStrings.loading}/>
    </div>;
}