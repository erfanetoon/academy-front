import { ToastContainer } from 'react-toastify';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import '@styles/app.scss';
import { getApi } from '@utilities/request';
import { LangProvider } from './../utilities/contexts/lang';

const App = ({ Component, pageProps, phrases, locale }: AppProps) => {
    return (
        <>
            <LangProvider phrases={phrases} locale={locale}>
                <ToastContainer />
                <Component {...pageProps} />
            </LangProvider>
        </>
    );
};

App.getInitialProps = async (ctx) => {
    const { locale } = ctx.router;
    let phrases;

    try {
        const res = await getApi('/languages');
        res.data.map((item) => {
            if (item.value === 'english' && locale === 'en') {
                phrases = item.phrases;
            } else if (item.value === 'persian' && locale === 'fa') {
                phrases = item.phrases;
            }
        });
    } catch (err) {
        console.log(err);
    }

    return { phrases, locale };
};

export default App;
