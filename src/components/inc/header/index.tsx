import MobileMenu from '../mobileMenu';
import Sidebar from '../sidebar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useLang } from '@utilities/contexts/lang';
import Search from './search';
import { Button } from '@material-ui/core';

const Header = () => {
    const mobileMenuStatus = useMediaQuery('(max-width:767px)');
    const { phrases } = useLang();

    return (
        <header className="tw-bg-white tw-shadow tw-py-4">
            <section className="container">
                <Sidebar />
                {mobileMenuStatus && <MobileMenu />}
                <nav className="md:tw-flex">
                    <img
                        height={35}
                        className="tw-h-9"
                        src="/images/logo-dark.png"
                        alt={phrases.siteTitle}
                    />
                    <div className="tw-mx-2">courses</div>
                    <Search />
                    <div className="tw-mx-2">basket</div>
                    <div className="tw-mx-2">
                        <Button
                            variant="outlined"
                            color="primary"
                            className="tw-w-max"
                        >
                            {phrases.login}
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            className="tw-w-max"
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
