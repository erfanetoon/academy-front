type Routes =
    | 'home'
    | 'about'
    | 'privacy_policy'
    | 'terms_and_condition'
    | 'login';

type RoutesType = {
    [name in Routes]: string;
};

const Routes: RoutesType = {
    home: '/',
    about: '/about_us',
    privacy_policy: '/privacy_policy',
    terms_and_condition: '/terms_and_condition',

    // Auth
    login: '/login',
};

export default Routes;
