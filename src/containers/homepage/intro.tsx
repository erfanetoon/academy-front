import { makeStyles, Theme } from '@material-ui/core';
import { useSettings } from '@utilities/contexts/settings';
import { useLang } from '@utilities/contexts/lang';
import Search from '@components/inc/header/search';
import { FaBullseye, FaCheck, FaClock } from 'react-icons/fa';

const Intro = () => {
    const { phrases, locale } = useLang();
    const { images } = useSettings();

    return (
        <>
            <div className="homepage__intro">
                <div className="container">
                    <div className="tw-grid md:tw-grid-cols-2">
                        <div className="tw-w-5/6">
                            <h2 className="tw-text-4xl tw-font-bold tw-mb-6">
                                {phrases.learn_on_your_schedule}
                            </h2>
                            <p className="tw-mb-6">
                                {locale === 'fa' &&
                                    'مطالعه هر مطلب، در هر زمان، جست وجو میان هزاران آموزش با کمترین هزینه'}
                                {locale === 'en' &&
                                    'Study any topic, anytime. Explore thousands of courses for the lowest price ever!'}
                            </p>
                            <Search />
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-bg-gradient-to-r tw-to-primary tw-from-secondary tw-py-4 tw-text-white">
                <div className="container">
                    <div className="tw-grid md:tw-grid-cols-3">
                        <div className="tw-flex tw-items-center tw-mb-8 md:tw-mb-0">
                            <FaBullseye className="tw-text-5xl" />
                            <div className="tw-mx-2">
                                <h4 className="tw-text-lg tw-font-bold">
                                    {phrases.online_courses}
                                </h4>
                                <p className="tw-text-gray-200">
                                    {phrases.explore_a_variety_of_fresh_topics}
                                </p>
                            </div>
                        </div>
                        <div className="tw-flex tw-items-center tw-mb-8 md:tw-mb-0">
                            <FaCheck className="tw-text-5xl" />
                            <div className="tw-mx-2">
                                <h4 className="tw-text-lg tw-font-bold">
                                    {phrases.expert_instruction}
                                </h4>
                                <p className="tw-text-gray-200">
                                    {phrases.explore_a_variety_of_fresh_topics}
                                </p>
                            </div>
                        </div>
                        <div className="tw-flex tw-items-center">
                            <FaClock className="tw-text-5xl" />
                            <div className="tw-mx-2">
                                <h4 className="tw-text-lg tw-font-bold">
                                    {phrases.online_courses}
                                </h4>
                                <p className="tw-text-gray-200">
                                    {phrases.explore_a_variety_of_fresh_topics}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .homepage__intro {
                    color: #fff;
                    padding: 170px 0 130px;
                    background-size: cover;
                    background-image: url(${images.banner_image});
                    background-repeat: no-repeat;
                    background-position: center center;
                }
            `}</style>
        </>
    );
};

export default Intro;
