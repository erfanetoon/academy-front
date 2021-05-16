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
                <div className="app-container">
                    <div className="grid md:grid-cols-2">
                        <div className="md:w-5/6">
                            <h2 className="text-4xl font-bold mb-6">
                                {phrases.learn_on_your_schedule}
                            </h2>
                            <p className="mb-6">
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
            <div className="bg-gradient-to-r to-primary from-secondary py-4 text-white">
                <div className="app-container">
                    <div className="grid md:grid-cols-3">
                        <div className="flex items-center mb-8 md:mb-0">
                            <FaBullseye className="text-5xl" />
                            <div className="mx-2">
                                <h4 className="text-lg font-bold">
                                    {phrases.online_courses}
                                </h4>
                                <p className="text-gray-200">
                                    {phrases.explore_a_variety_of_fresh_topics}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center mb-8 md:mb-0">
                            <FaCheck className="text-5xl" />
                            <div className="mx-2">
                                <h4 className="text-lg font-bold">
                                    {phrases.expert_instruction}
                                </h4>
                                <p className="text-gray-200">
                                    {phrases.find_the_right_course_for_you}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <FaClock className="text-5xl" />
                            <div className="mx-2">
                                <h4 className="text-lg font-bold">
                                    {phrases.lifetime_access}
                                </h4>
                                <p className="text-gray-200">
                                    {phrases.learn_on_your_schedule}
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
