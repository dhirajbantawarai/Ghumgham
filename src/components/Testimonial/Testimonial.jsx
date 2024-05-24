import React from 'react'
import Slider from 'react-slick';


const TestimonialData = [
    {
        id: 1,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: "https://picsum.photos/id/381/101/101.jpg",
    },
    {
        id: 2,
        name: "Dhiraj",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Bantawa",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: "https://picsum.photos/103/103",
    },

];
const Testimonial = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                },
            },

        ],
    };
    return (
        <div
            className='py-10'>

            <div className='container'>
                {/* header section  */}
                <div className='text-center mb-20 max-2-[400px] mx-auto '>
                    <p className='text-2xl bg-clip-text text-transparent
                    bg-gradient-to-r from-primary to-secondary'>
                        Testimonial</p>
                    <h1 className='text-3xl font-bold'>What Our Client Say</h1>
                    <p className='text-sm text-gray-400'>
                        {""}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                {/* Testimonial section */}

                <Slider {...settings}>
                    {
                        TestimonialData.map(({ id, name, text, img }) => {
                            return (
                                <div key={id} className='my-6'>
                                    <div className='
                                    flex flex-col justify-center items-center gap-4 
                                    text-center shadow-lg p-4 mx-4 rounded-xl bg-primary/10
                                    relative
                                    '>
                                        <img src={img} alt=""
                                            className='rounded-full block mx-auto ' />
                                        <h1 className='text-xl font-bold'> {name}</h1>
                                        <p className='text-gray-500 text-sm'>{text}</p>
                                        <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
                                            ,,</p>

                                    </div>

                                </div>
                            );
                        })}

                </Slider>
            </div>
        </div >
    )
}

export default Testimonial