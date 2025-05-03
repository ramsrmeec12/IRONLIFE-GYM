import { useState } from 'react';
import coverphoto from '../assets/coverphoto.jpg';
import coverphoto2 from '../assets/coverphoto2.jpg';
import { Link } from 'react-router-dom';
import MembershipForm from './form';
import Footer from './footer';

const images = [coverphoto, coverphoto2];

function Home() {
    const [current, setCurrent] = useState(0);

    const nextImage = () => {
        setCurrent((current + 1) % images.length);
    };

    const prevImage = () => {
        setCurrent((current - 1 + images.length) % images.length);
    };

    return (
        <div className="w-full max-w-3xl">

            {/* Make only this section relative */}
            <div className="relative">
                <Link to="/">
                    <img
                        className="aspect-w-16 mt-0 aspect-h-0.5 object-cover rounded-xl border transition-opacity duration-500"
                        src={images[current]}
                        alt={`Slide ${current + 1}`}
                    />
                </Link>

                {/* Arrows */}
                <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                    &#8592;
                </button>

                <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                    &#8594;
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 mx-1 rounded-full ${index === current ? 'bg-black' : 'bg-gray-300'
                            }`}
                    ></button>
                ))}
            </div>

            {/* Text */}
            <p className="text-base sm:text-lg font-medium text-gray-600 leading-relaxed tracking-wide px-4 mt-4 text-center max-w-prose mx-auto">
                Fitness First features progressive programs with world-class fitness equipment, trainers, and nutrition counselors to help you take your fitness further. We offer the widest range of group fitness classes such as Yoga, Aerobics, Zumba, Les Mills favorites, and much more.
            </p>
            <MembershipForm></MembershipForm>
            <Footer></Footer>

        </div>
    );
}

export default Home;
