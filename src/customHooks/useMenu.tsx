import { useTranslation } from 'react-i18next';

type SubMenu = {
    name: string;
};

type MenuItem = {
    header: string;
    sub_menu?: SubMenu[];
};

type MenuSection = {
    title?: string;
    items: MenuItem[];
};

const useMenu = (): MenuSection[] => {
    const { t } = useTranslation();

    return (t('items', { returnObjects: true }) as MenuSection[]) || [];
};

export default useMenu;
