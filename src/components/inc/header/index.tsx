import MobileMenu from '../mobileMenu';
import Sidebar from '../sidebar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useLang } from '@utilities/contexts/lang';
import Search from './search';
import { Badge, Button, IconButton } from '@material-ui/core';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaTh } from 'react-icons/fa';

const Header = () => {
    const mobileMenuStatus = useMediaQuery('(max-width:767px)');
    const { phrases } = useLang();

    return (
        <header className="tw-bg-white tw-shadow tw-py-4 header">
            <section className="container">
                <Sidebar />
                {mobileMenuStatus && <MobileMenu />}
                <nav className="tw-flex tw-items-center">
                    <Link href="/">
                        <a>
                            <img
                                height={35}
                                className="tw-h-9 tw-max-w-max"
                                src="/images/logo-dark.png"
                                alt={phrases.siteTitle}
                            />
                        </a>
                    </Link>
                    <div className="tw-mx-4 md:tw-inline-flex tw-hidden">
                        <div className="header__courses tw-relative">
                            <div className="tw-flex tw-items-center tw-min-w-max">
                                <FaTh className="tw-text-sm tw-mx-1 tw-text-gray-400" />
                                <span className="tw-text-gray-800 tw-text-sm">
                                    {phrases.courses}
                                </span>
                            </div>
                            <div className="tw-absolute header__coursesMenu tw-hidden tw-transition-all tw-duration-300 tw-pt-4">
                                <div className="tw-bg-white tw-shadow-lg tw-p-2 tw-border">
                                    menu
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tw-mx-6 tw-w-full md:tw-inline-flex tw-hidden">
                        <Search />
                    </div>

                    <div className="tw-mx-2">
                        <IconButton
                            color="default"
                            aria-label="add to shopping cart"
                        >
                            <Badge badgeContent={4} color="primary">
                                <AiOutlineShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                    <div className="tw-mx-2 md:tw-inline-flex tw-hidden">
                        <Button
                            variant="outlined"
                            color="primary"
                            className="tw-w-max tw-py-3"
                        >
                            {phrases.login}
                        </Button>
                    </div>
                    <div className="md:tw-inline-flex tw-hidden">
                        <Button
                            variant="contained"
                            color="primary"
                            className="tw-w-max tw-py-3 tw-shadow-none"
                        >
                            {phrases.sign_up}
                        </Button>
                    </div>
                </nav>
            </section>
        </header>
    );
};

export default Header;
