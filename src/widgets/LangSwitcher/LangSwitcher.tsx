import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const {
        className,
    } = props;
    const { t, i18n } = useTranslation();

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={onToggle}
        >
            {t('Language')}
        </Button>
    );
};
