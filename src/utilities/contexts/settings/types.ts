export interface SystemSettings {
    address: string;
    favicon: string;
    language: string;
    phone: string;
    slogan: string;
    system_email: string;
    system_name: string;
    system_title: string;
    thumbnail: string;
    version: string;
    vimeo_api_key: string;
    youtube_api_key: string;
}

export interface SystemImages {
    banner_image: string;
    dark_logo: string;
    favicon: string;
    light_logo: string;
    small_logo: string;
}

export type SettingsContextType = {
    settings: SystemSettings;
    images: SystemImages;
};
