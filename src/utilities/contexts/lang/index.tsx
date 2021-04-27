import { createContext, FC, ReactNode, useContext } from 'react';

interface Props {
    children: ReactNode;
    phrases: any;
    locale: string;
}

const LangContext = createContext<any>({});

export const LangProvider: FC<Props> = ({ children, phrases, locale }) => {
    return (
        <LangContext.Provider value={{ phrases, locale }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => useContext(LangContext);
