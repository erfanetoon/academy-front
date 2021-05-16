import { FaSearch } from 'react-icons/fa';
import { useLang } from '@utilities/contexts/lang';
// import { Button } from '@material-ui/core';

const Search = () => {
    const { phrases } = useLang();

    return (
        <div className="flex items-stretch w-full">
            <input
                type="text"
                className="w-full bg-gray-100 focus:bg-white border border-gray-100 px-4 py-3 transition-all duration-300 text-gray-700 text-sm"
                placeholder={phrases.search_for_courses}
            />
            {/* <Button
                color="primary"
                size="small"
                className="shadow-none px-4 min-w-0"
                variant="contained"
            >
                <FaSearch className="text-lg" />
            </Button> */}
        </div>
    );
};

export default Search;
