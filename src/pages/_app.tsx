import { ToastContainer } from 'react-toastify';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { getApi } from '@utilities/request';
import { LangProvider } from '@utilities/contexts/lang';
import { appLogoPath, languagesPath, settingsPath } from '@routes/api';
import { SettingsProvider } from '@utilities/contexts/settings';
import RTL from '@layouts/rtl';
import '@styles/app.scss';

const App = ({
    Component,
    pageProps,
    phrases,
    locale,
    rtl,
    settings,
    images,
}: AppProps) => {
    return (
        <>
            <SettingsProvider settings={settings} images={images}>
                {rtl && <RTL />}
                <LangProvider
                    phrases={{
                        ...phrases,
                        siteTitle: rtl ? 'آکادمی آنلاین' : 'Online Academy',
                    }}
                    locale={locale}
                >
                    <ToastContainer />
                    <Component {...pageProps} />
                </LangProvider>
            </SettingsProvider>
        </>
    );
};

App.getInitialProps = async (ctx) => {
    const { locale } = ctx.router;
    let phrases;
    let rtl;
    let settings;
    let images;

    try {
        const { data } = await getApi(settingsPath);
        settings = data;
    } catch (err) {
        console.log(err);
    }

    try {
        const { data } = await getApi(appLogoPath);
        images = data;
    } catch (err) {
        console.log(err);
    }

    try {
        const { data } = await getApi(languagesPath);
        data.map((item) => {
            if (item.value === 'english' && locale === 'en') {
                phrases = item.phrases;
            } else if (item.value === 'persian' && locale === 'fa') {
                phrases = item.phrases;
                rtl = true;
            }
        });
    } catch (err) {
        console.log(err);
    }

    return { phrases, locale, rtl, settings, images };
};

export default App;
