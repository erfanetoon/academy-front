import MobileMenu from '../mobileMenu';
import Sidebar from '../sidebar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useLang } from '@utilities/contexts/lang';
import Search from './search';
import { Badge, Button, IconButton } from '@material-ui/core';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Categories from './categories';
import Routes from '@routes/index';

const Header = () => {
    const mobileMenuStatus = useMediaQuery('(max-width:767px)');
    const { phrases } = useLang();

    return (
        <header className="tw-bg-white tw-shadow tw-py-4 header">
            <section className="container">
                <Sidebar />
                {mobileMenuStatus && <MobileMenu />}
                <nav className="tw-flex tw-items-center">
                    <Link href={Routes.home}>
                        <a className="tw-w-full md:tw-w-auto">
                            <img
                                height={35}
                                className="tw-h-9 tw-max-w-max"
                                src="/images/logo-dark.png"
                                alt={phrases.siteTitle}
                            />
                        </a>
                    </Link>
                    <div className="tw-mx-4 md:tw-inline-flex tw-hidden">
                        <Categories />
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
                    <div className="tw-mx-2 sm:tw-inline-flex tw-hidden">
                        <Link href={Routes.login}>
                            <a>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    className="tw-w-max tw-py-3"
                                >
                                    {phrases.login}
                                </Button>
                            </a>
                        </Link>
                    </div>
                    <div className="sm:tw-inline-flex tw-hidden">
                        <Link href={Routes.sign_up}>
                            <a>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="tw-w-max tw-py-3 tw-shadow-none"
                                >
                                    {phrases.sign_up}
                                </Button>
                            </a>
                        </Link>
                    </div>
                </nav>
            </section>
        </header>
    );
};

export default Header;
