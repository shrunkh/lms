import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';

const Testimonial = () => {
  return (
    <div className='pb-14 px-8 md:px-0'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3'>
        Hear from our learners as they share their journeys of transformation, success, and how our <br />
        platform has made a difference in their lives.
      </p>

      {/* Horizontal row with smaller cards */}
      <div className='flex flex-row gap-4 mt-10 overflow-x-auto'>
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className='min-w-[220px] max-w-xs flex-shrink-0 text-sm text-left border border-gray-300 pb-4 rounded-md bg-white shadow-md overflow-hidden'
          >
            <div className='flex items-center gap-3 px-4 py-3 bg-gray-100'>
              <img
                className='h-10 w-10 rounded-full'
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h1 className='text-base font-medium text-gray-800'>{testimonial.name}</h1>
                <p className='text-xs text-gray-600'>{testimonial.role}</p>
              </div>
            </div>

            <div className='px-4 pt-3'>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, i) => (
                  <img
                    className='h-4'
                    key={i}
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt='star'
                  />
                ))}
              </div>
              <p className='text-xs text-gray-500 mt-3 line-clamp-4'>{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
