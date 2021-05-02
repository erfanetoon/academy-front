import dynamic from 'next/dynamic';
import SiteLayout from '@layouts/site';
import { useLang } from '@utilities/contexts/lang';
import RoutesLoading from '@components/routesLoading';

const HomepageContainer = dynamic(() => import('@containers/homepage'), {
    loading: RoutesLoading,
});

const Home = () => {
    return (
        <SiteLayout>
            <HomepageContainer />
        </SiteLayout>
    );
};

export default Home;
