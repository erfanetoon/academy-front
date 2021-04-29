import { ToastContainer } from 'react-toastify';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { getApi } from '@utilities/request';
import { LangProvider } from '@utilities/contexts/lang';
import Theme from '@utilities/theme';
import { languagesPath } from '@routes/api';
import RTL from '@layouts/rtl';
import '@styles/app.scss';

const App = ({ Component, pageProps, phrases, locale, rtl }: AppProps) => {
    return (
        <>
            <Theme>
                {rtl && <RTL />}
                <LangProvider phrases={phrases} locale={locale}>
                    <ToastContainer />
                    <Component {...pageProps} />
                </LangProvider>
            </Theme>
        </>
    );
};

App.getInitialProps = async (ctx) => {
    const { locale } = ctx.router;
    let phrases;
    let rtl;

    try {
        const res = await getApi(languagesPath);
        res.data.map((item) => {
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

    return { phrases, locale, rtl };
};

export default App;
