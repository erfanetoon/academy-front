import { createContext, FC, ReactNode, useContext } from 'react';
import { SettingsContextType, SystemImages, SystemSettings } from './types';

interface Props {
    children: ReactNode;
    settings: SystemSettings;
    images: SystemImages;
}

const SettingsContextDefault = {
    settings: {
        address: '',
        favicon: '',
        language: '',
        phone: '',
        slogan: '',
        system_email: '',
        system_name: '',
        system_title: '',
        thumbnail: '',
        version: '',
        vimeo_api_key: '',
        youtube_api_key: '',
    },
    images: {
        banner_image: '',
        dark_logo: '',
        favicon: '',
        light_logo: '',
        small_logo: '',
    },
};

const SettingsContext = createContext<SettingsContextType>(
    SettingsContextDefault
);

export const SettingsProvider: FC<Props> = ({ children, settings, images }) => {
    return (
        <SettingsContext.Provider value={{ settings, images }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => useContext(SettingsContext);
