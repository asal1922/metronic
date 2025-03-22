import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const icons = {
    chevronLeft: faChevronLeft,
    chevronRight: faChevronRight,
    windows: faWindows

};

interface IconProps {
    name: keyof typeof icons;
    className?: string;
}

const Icon = ({ name, className }: IconProps) => {
    const icon = icons[name];

    return <FontAwesomeIcon icon={icon} className={className} />;
};

export default Icon;
