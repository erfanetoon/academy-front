import { useLang } from '@utilities/contexts/lang';

const Home = () => {
    const { phrases } = useLang();

    return <div>{phrases.home}</div>;
};

export default Home;
