import SiteLayout from '@layouts/site';
import { useLang } from '@utilities/contexts/lang';

const Home = () => {
    const { phrases } = useLang();

    return <SiteLayout>{phrases.home}</SiteLayout>;
};

export default Home;
