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
        <div className="header__courses relative">
            <div className="flex items-center min-w-max">
                <FaTh className="text-sm mx-1 text-gray-400" />
                <span className="text-gray-800">{phrases.courses}</span>
            </div>
            <div className="absolute header__coursesCategory hidden transition-all duration-300 pt-4">
                <div className="bg-white shadow-lg border rounded">
                    <ul className="text-gray-600">
                        {!!data.length &&
                            data.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={{
                                            pathname: Routes.courses,
                                            query: { category: item.slug },
                                        }}
                                    >
                                        <a className="flex items-center px-2 py-3 hover:bg-gray-100 transition-all duration-300">
                                            <GiGraduateCap className="text-2xl" />
                                            <span className="mx-2 text-sm">
                                                {item.name}
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        <li>
                            <Link href={Routes.courses}>
                                <a className="flex items-center px-2 py-3 hover:bg-gray-100 transition-all duration-300">
                                    <HiMenu className="text-2xl" />
                                    <span className="mx-2 text-sm">
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
