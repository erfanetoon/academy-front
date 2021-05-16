import Link from 'next/link';
import Routes from '@routes/index';
import { useLang } from '@utilities/contexts/lang';
// import { NativeSelect } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useSettings } from '@utilities/contexts/settings';

const Footer = () => {
    const router = useRouter();
    const { phrases, locale } = useLang();
    const { images } = useSettings();

    const handleLangChange = ({ target }) => {
        const value = target.value;

        router.push(router.pathname, router.pathname, {
            locale: value,
        });
    };

    return (
        <footer className="border-b-4 border-primary bg-white py-4 footer">
            <section className="app-container">
                <div className="md:flex items-center text-center md:text-start">
                    <Link href={Routes.home}>
                        <a>
                            <img
                                className="mx-auto md:mx-0"
                                width={110}
                                src={images.dark_logo}
                                alt={phrases.siteTitle}
                            />
                        </a>
                    </Link>
                    <ul className="mx-auto my-4 md:my-0">
                        <li className="inline-block mx-2">
                            <Link href={Routes.about}>
                                <a className="text-gray-600 hover:text-primary active:text-primary focus:text-primary transition-colors duration-300">
                                    {phrases.about}
                                </a>
                            </Link>
                        </li>
                        <li className="inline-block mx-2">
                            <Link href={Routes.privacy_policy}>
                                <a className="text-gray-600 hover:text-primary active:text-primary focus:text-primary transition-colors duration-300">
                                    {phrases.privacy_policy}
                                </a>
                            </Link>
                        </li>
                        <li className="inline-block mx-2">
                            <Link href={Routes.terms_and_condition}>
                                <a className="text-gray-600 hover:text-primary active:text-primary focus:text-primary transition-colors duration-300">
                                    {phrases.terms_and_condition}
                                </a>
                            </Link>
                        </li>
                        <li className="inline-block mx-2">
                            <Link href={Routes.login}>
                                <a className="text-gray-600 hover:text-primary active:text-primary focus:text-primary transition-colors duration-300">
                                    {phrases.login}
                                </a>
                            </Link>
                        </li>
                    </ul>
                    {/* <NativeSelect
                        name="language"
                        onChange={handleLangChange}
                        defaultValue={locale}
                        className="footer__nativeSelect"
                        inputProps={{ 'aria-label': 'language' }}
                    >
                        <option value="en">English</option>
                        <option value="fa">فارسی</option>
                    </NativeSelect> */}
                </div>
            </section>
        </footer>
    );
};

export default Footer;
