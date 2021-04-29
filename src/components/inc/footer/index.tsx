import Link from 'next/link';
import Routes from '@routes/index';
import { useLang } from '@utilities/contexts/lang';
import { NativeSelect } from '@material-ui/core';
import FooterStyles from './styles';
import { useRouter } from 'next/router';

const Footer = () => {
    const classes = FooterStyles();
    const router = useRouter();
    const { phrases, locale } = useLang();

    const handleLangChange = ({ target }) => {
        const value = target.value;

        router.push(router.pathname, router.pathname, {
            locale: value,
        });
    };

    return (
        <footer className="tw-border-b-4 tw-border-primary tw-bg-white tw-py-4">
            <section className="container">
                <div className="md:tw-flex tw-items-center tw-text-center md:tw-text-start">
                    <Link href={Routes.home}>
                        <a>
                            <img
                                className="tw-mx-auto md:tw-mx-0"
                                width={110}
                                src="/images/logo-dark.png"
                                alt={phrases.siteTitle}
                            />
                        </a>
                    </Link>
                    <ul className="tw-mx-auto tw-my-4 md:tw-my-0">
                        <li className="tw-inline-block tw-mx-2">
                            <Link href={Routes.about}>
                                <a className="tw-text-gray-600 hover:tw-text-primary active:tw-text-primary focus:tw-text-primary tw-transition-colors tw-duration-300">
                                    {phrases.about}
                                </a>
                            </Link>
                        </li>
                        <li className="tw-inline-block tw-mx-2">
                            <Link href={Routes.privacy_policy}>
                                <a className="tw-text-gray-600 hover:tw-text-primary active:tw-text-primary focus:tw-text-primary tw-transition-colors tw-duration-300">
                                    {phrases.privacy_policy}
                                </a>
                            </Link>
                        </li>
                        <li className="tw-inline-block tw-mx-2">
                            <Link href={Routes.terms_and_condition}>
                                <a className="tw-text-gray-600 hover:tw-text-primary active:tw-text-primary focus:tw-text-primary tw-transition-colors tw-duration-300">
                                    {phrases.terms_and_condition}
                                </a>
                            </Link>
                        </li>
                        <li className="tw-inline-block tw-mx-2">
                            <Link href={Routes.login}>
                                <a className="tw-text-gray-600 hover:tw-text-primary active:tw-text-primary focus:tw-text-primary tw-transition-colors tw-duration-300">
                                    {phrases.login}
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <NativeSelect
                        name="language"
                        onChange={handleLangChange}
                        defaultValue={locale}
                        className={classes.nativeSelect}
                        inputProps={{ 'aria-label': 'language' }}
                    >
                        <option value="en">English</option>
                        <option value="fa">فارسی</option>
                    </NativeSelect>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
