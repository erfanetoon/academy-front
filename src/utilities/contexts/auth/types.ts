export type LoginStatus = 'TRUE' | 'FALSE' | 'PENDING';

export type AuthContextType = {
    data: {
        loading: boolean;
        loginStatus: LoginStatus;
    };
    actions: {
        login: Function;
        logout: Function;
        setLoading: Function;
        setLoginStatus: Function;
    };
};
