import { FaSearch } from 'react-icons/fa';
import { useLang } from '@utilities/contexts/lang';
import { Button } from '@material-ui/core';

const Search = () => {
    const { phrases } = useLang();

    return (
        <div className="tw-flex tw-items-stretch tw-w-full">
            <input
                type="text"
                className="tw-w-full tw-bg-gray-100 focus:tw-bg-white tw-border tw-border-gray-100 tw-px-4 tw-py-3 tw-transition-all tw-duration-300 tw-text-gray-700 tw-text-sm"
                placeholder={phrases.search_for_courses}
            />
            <Button
                color="primary"
                size="small"
                className="tw-shadow-none tw-px-4 tw-min-w-0"
                variant="contained"
            >
                <FaSearch className="tw-text-lg" />
            </Button>
        </div>
    );
};

export default Search;
