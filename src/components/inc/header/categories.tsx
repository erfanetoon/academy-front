import { useLang } from '@utilities/contexts/lang';
import { useEffect, useState } from 'react';
import { FaTh } from 'react-icons/fa';
import { getApi } from '@utilities/request';
import { categoriesPath } from '@routes/api';
import Routes from '@routes/index';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import { GiGraduateCap } from 'react-icons/gi';

const Categories = () => {
    const [data, setData] = useState([]);
    const { phrases } = useLang();

    useEffect(() => {
        (async () => {
            try {
                const { data } = await getApi(categoriesPath);
                setData(data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    return (
        <div className="header__courses tw-relative">
            <div className="tw-flex tw-items-center tw-min-w-max">
                <FaTh className="tw-text-sm tw-mx-1 tw-text-gray-400" />
                <span className="tw-text-gray-800">{phrases.courses}</span>
            </div>
            <div className="tw-absolute header__coursesCategory tw-hidden tw-transition-all tw-duration-300 tw-pt-4">
                <div className="tw-bg-white tw-shadow-lg tw-border tw-rounded">
                    <ul className="tw-text-gray-600">
                        {!!data.length &&
                            data.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={{
                                            pathname: Routes.courses,
                                            query: { category: item.slug },
                                        }}
                                    >
                                        <a className="tw-flex tw-items-center tw-px-2 tw-py-3 hover:tw-bg-gray-100 tw-transition-all tw-duration-300">
                                            <GiGraduateCap className="tw-text-2xl" />
                                            <span className="tw-mx-2 tw-text-sm">
                                                {item.name}
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        <li>
                            <Link href={Routes.courses}>
                                <a className="tw-flex tw-items-center tw-px-2 tw-py-3 hover:tw-bg-gray-100 tw-transition-all tw-duration-300">
                                    <HiMenu className="tw-text-2xl" />
                                    <span className="tw-mx-2 tw-text-sm">
                                        {phrases.all_courses}
                                    </span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Categories;
