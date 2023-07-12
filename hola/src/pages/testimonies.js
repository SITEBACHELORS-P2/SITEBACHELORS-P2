import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Testimonies() {
  const { t, i18n } = useTranslation();
  const testimonies = [
    {
      quote: 'After joining engineering. I really appreciate my brain, which is divided into two parts (right-left). In right, nothing is left. In left, nothing is right. If it was not for SITE bachelors I would have never discovered this. ',
      author: 'Steve',
      role: 'ELG 2025',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      quote: 'Sed egestas urna risus, a vestibulum dui consequat eu. Suspendisse nec finibus neque. Mauris in mi quis risus luctus dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In laoreet dolor nec leo tincidunt, et consectetur lectus facilisis.',
      author: 'John Doe',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1546471744-26f4c062bdd3?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
  ];

  const [currentTestimony, setCurrentTestimony] = useState(0);

  const handlePrevious = () => {
    setCurrentTestimony((prev) => (prev === 0 ? testimonies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimony((prev) => (prev === testimonies.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 px-6 sm:py-32 lg:px-8 relative">
      <div className="max-w-2xl mx-auto">
      <section>
      <h2>{t('Testimonies')}</h2>
      <div style={{ borderBottom: '1px solid black', width: '50px', margin: '10px auto' }}></div>
    </section>
        <figure className="mt-10 relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-900 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={handlePrevious}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-900 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={handleNext}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>{testimonies[currentTestimony].quote}</p>
          </blockquote>
          <figcaption className="mt-10">
            <img className="mx-auto h-10 w-10 rounded-full" src={testimonies[currentTestimony].image} alt="" />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">{testimonies[currentTestimony].author}</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">{testimonies[currentTestimony].role}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
