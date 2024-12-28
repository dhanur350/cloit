import { CUSTOM_ICON_REF, CustomIcon } from "./IconRef";
import "./SvgIcon.scss";

interface Props {
    name: CUSTOM_ICON_REF;
    baseClassname?: string;
    size?: 'small' | 'medium' | 'large';
}

function SvgIcon (props: Props) {
    
    const {name, baseClassname, size} = props;

    const CustomIconSVG = CustomIcon[name];

    return(
        <div className={`${baseClassname} custom-icon-${size}`}>
            <CustomIconSVG />
        </div>
    )
}

export default SvgIcon;