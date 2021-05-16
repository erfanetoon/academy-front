import { toast } from 'react-toastify';

const ResponseHandling = async (data, type, callbackFunction) => {
    if (data.status === 200) {
        if (data.message) {
            toast.success(data.message);
        }
        // if (type === 'login') {
        //     await authActions.login(data.result.token);
        // }
        // if (type === 'logout') {
        //     await authActions.logout();
        // }
        // if (type === 'getUser') {
        //     await authActions.getUser();
        // }
        if (callbackFunction) {
            await callbackFunction(data);
        }
    } else if (data.status === 401) {
        // await authActions.logout();
    } else {
        if (data.response.data.message) {
            toast.error(data.response.data.message);
        }
        if (callbackFunction) {
            callbackFunction(data);
        }
    }
};

export default ResponseHandling;
