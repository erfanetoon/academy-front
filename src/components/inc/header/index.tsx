import MobileMenu from '../mobileMenu';
import Sidebar from '../sidebar';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useLang } from '@utilities/contexts/lang';
import { useSettings } from '@utilities/contexts/settings';
import Search from './search';
// import { Badge, Button, IconButton } from '@material-ui/core';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Categories from './categories';
import Routes from '@routes/index';
import Button from '@components/ui/button';

const Header = () => {
    // const mobileMenuStatus = useMediaQuery('(max-width:767px)');
    const { phrases } = useLang();
    const { images } = useSettings();

    return (
        <header className="bg-white shadow py-4 header">
            <section className="app-container">
                <Sidebar />
                {/* {mobileMenuStatus && <MobileMenu />} */}
                <nav className="flex items-center">
                    <Link href={Routes.home}>
                        <a className="w-full md:w-auto">
                            <img
                                height={35}
                                className="h-9 max-w-max"
                                src={images.dark_logo}
                                alt={phrases.siteTitle}
                            />
                        </a>
                    </Link>
                    <div className="mx-4 md:inline-flex hidden">
                        <Categories />
                    </div>
                    <div className="mx-6 w-full md:inline-flex hidden">
                        <Search />
                    </div>
                    <div className="mx-2">
                        {/* <IconButton
                            color="default"
                            aria-label="add to shopping cart"
                        >
                            <Badge badgeContent={4} color="primary">
                                <AiOutlineShoppingCart />
                            </Badge>
                        </IconButton> */}
                    </div>
                    <div className="mx-2 sm:inline-flex hidden">
                        <Link href={Routes.login}>
                            <a>
                                <Button color="primary">{phrases.login}</Button>
                            </a>
                        </Link>
                    </div>
                    <div className="sm:inline-flex hidden">
                        <Link href={Routes.sign_up}>
                            <a>
                                <Button color="primary">
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
