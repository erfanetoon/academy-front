import { getItem } from '@utilities/helper/localStorage';
import { ReactNode, FC } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

interface Props {
    children: ReactNode;
}

const RouteGuard: FC<Props> = ({ children }) => {
    const token = getItem('token');
    const router = useRouter();

    if (typeof window !== 'undefined' && !token) {
        // toast(errors.routeGuard);
        router.push('/');
        return <></>;
    } else {
        return <>{children}</>;
    }
};

export default RouteGuard;
