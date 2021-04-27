import {
    createContext,
    FC,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';
import { AuthContextType, LoginStatus } from './types';

interface Props {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
    data: {
        loading: true,
        loginStatus: 'PENDING',
    },
    actions: {
        login: () => {},
        logout: () => {},
        setLoading: () => {},
        setLoginStatus: () => {},
    },
});

export const AuthProvider: FC<Props> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [loginStatus, setLoginStatus] = useState<LoginStatus>('PENDING');

    useEffect(() => {}, []);

    const login = async () => {};
    const logout = async () => {};

    return (
        <AuthContext.Provider
            value={{
                data: {
                    loading,
                    loginStatus,
                },
                actions: {
                    login,
                    logout,
                    setLoading,
                    setLoginStatus,
                },
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext<AuthContextType>(AuthContext);
