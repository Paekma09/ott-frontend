import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('about_title')}</h1>
            <p>{t('about_content')}</p>
        </div>
    );
};

export default AboutPage;
