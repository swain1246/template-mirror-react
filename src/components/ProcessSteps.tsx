// src/components/ProcessSteps.tsx
import React from 'react';

const ProcessSteps = () => {
  const processSteps = [
    {
      id: 1,
      title: "Book Your Order",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Pack Your Things",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Move Your Things",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Deliver Your Things",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 px-4 md:px-16 lg:px-24">
      {processSteps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="flex flex-col items-center group">
            <div className="relative">
              {/* Process number circle - hidden on hover */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-gray-200 text-sm font-bold z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                {step.id}
              </div>
              {/* Icon container with custom border that has gap at top */}
              <div className="w-32 h-32 relative">
                {/* Custom border with gap at top center */}
                <div className="absolute inset-0 border-2 border-gray-700 group-hover:border-gray-800 transition-colors duration-300"></div>
                {/* White overlay to create gap at top center */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-white group-hover:bg-gray-800 transition-colors duration-1000"></div>
                {/* Background overlay for hover effect */}
                <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded pointer-events-none"></div>
                {/* Icon content - with higher z-index to stay above background */}
                <div className="w-full h-full flex items-center justify-center relative z-10">
                  <div className="text-gray-700 group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>
                {/* Chevron icon - appears on hover at right center border */}
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center border-4 border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right text-white" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                      <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Process title - unchanged color on hover */}
            <div className="mt-3 text-center font-semibold text-gray-900 tracking-wide">
              {step.title}
            </div>
          </div>
          
          {/* Arrow between steps (not after the last one) - moved slightly up */}
          {index < processSteps.length - 1 && (
            <div className="hidden md:flex items-center justify-center text-gray-900 self-center -mt-6">
              {/* Using the provided SVG arrow */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-8 w-8 fill-current">
                <path d="M598.6 297.4C611.1 309.9 611.1 330.2 598.6 342.7L470.6 470.7C461.4 479.9 447.7 482.6 435.7 477.6C423.7 472.6 416 460.9 416 448L416 384L80 384C53.5 384 32 362.5 32 336L32 304C32 277.5 53.5 256 80 256L416 256L416 192C416 179.1 423.8 167.4 435.8 162.4C447.8 157.4 461.5 160.2 470.7 169.3L598.7 297.3z"/>
              </svg>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProcessSteps;