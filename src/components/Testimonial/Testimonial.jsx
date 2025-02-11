import { div } from 'motion/react-client';
import React from 'react'
import Slider from 'react-slick';

const TestimonialsData = [
    {
      id: 1,
      name: "Aashik ali",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/101/101",
      delay: 0.2,
    },
    {
      id: 2,
      name: "Devender singh mehra",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/102/102",
      delay: 0.5,
    },
    {
      id: 3,
      name: "Tarun",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/104/104",
      delay: 0.8,
    },
    {
      id: 5,
      name: "Javed ali",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/103/103",
      delay: 1.1,
    },
  ];
  
const Testimonial = () => {
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed:2000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
              breakpoint: 10000,
              settings: {
                slidesToShow: 3,
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
   <div className='mb-10 py-14'>
     <div className='container'>
        {/* Header section */}
        <div className='space-y-4 p-6 text-center max-w-[600px] mx-auto'>
            <h1 className='font-semibold text-orange-600 uppercase'>
                  our testimonials  
            </h1>
            <p className='text-3xl font-semibold '>
            What Our student Say About Us
            </p>
        </div>
        {/* testimonials card section */}
        <div>
            <Slider {...setting}>
                {
                    TestimonialsData.map(({id,name,text,img,delay}) =>{
                        return(
                            <div key={id}>
                            <div className="flex flex-col gap-4 p-8 mx-4 shadow-lg rounded-xl bg-secondary/10">
                              {/* upper section */}
                              <div className="flex items-center justify-start gap-5">
                                <img
                                  src={img}
                                  alt=""
                                  className="w-16 h-16 rounded-full"
                                />
                                <div>
                                  <p className="text-xl font-bold text-black/80">
                                    {name}
                                  </p>
                                 
                                </div>
                              </div>
                              {/* bottom section */}
                              <div className="py-6 space-y-4">
                                <p className="text-sm text-gray-500">{text}</p>
                                <p>⭐⭐⭐⭐⭐</p>
                              </div>
                            </div>
                          </div>
            
                        )
                    })
                }
            </Slider>
        </div>
    </div>
   </div>
  )
}

export default Testimonial