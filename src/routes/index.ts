type Routes =
    | 'home'
    | 'about'
    | 'privacy_policy'
    | 'terms_and_condition'
    | 'login'
    | 'sign_up'
    | 'courses';

type RoutesType = {
    [name in Routes]: string;
};

const Routes: RoutesType = {
    home: '/',
    about: '/about_us',
    privacy_policy: '/privacy_policy',
    terms_and_condition: '/terms_and_condition',

    // Courses
    courses: '/courses',

    // Auth
    login: '/login',
    sign_up: '/sign_up',
};

export default Routes;
