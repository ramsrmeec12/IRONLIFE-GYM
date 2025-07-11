import { Link } from 'react-router-dom';
import coverphoto from '../assets/coverphoto.jpg';
import MembershipForm from './form';
import Footer from './footer';

function Home() {
    return (
        <div className="w-full max-w-3xl px-2">

            {/* Static Image Section */}
            <div className="relative">
                <Link to="/">
                    <img
                        className="aspect-w-16 mt-0 aspect-h-0.5 object-cover rounded-xl border"
                        src={coverphoto}
                        alt="Gym Cover"
                    />
                </Link>
            </div>

            {/* Description Text */}
            <p className="text-base sm:text-lg font-medium text-gray-600 leading-relaxed tracking-wide px-4 mt-4 text-center max-w-prose mx-auto">
                We offer a wide range of fitness programs including Strength Training, Aerobics, Competition Prep, and Personal Training — all guided by expert coaches. Whether you're looking to build muscle, improve endurance, or get stage-ready, our tailored plans and supportive environment help you achieve your fitness goals faster and smarter.
            </p>

            <MembershipForm />
            <Footer />
        </div>
    );
}

export default Home;
