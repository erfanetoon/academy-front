import Footer from '@components/inc/footer';
import Header from '@components/inc/header';
import { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const SiteLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default SiteLayout;
