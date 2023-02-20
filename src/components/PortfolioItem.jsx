import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link, details }) {
   return (
      <div
         className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
      >
         <a href={link} target="_blank" className="w-full h-36 md:h-48 object-cover cursor-pointer">
            <img
               src={imgUrl}
               alt="portfolio" 
            />
         </a>
         <div className="w-full p-4 flex flex-col gap-1">
            <a href={link} target="_blank" className="text-lg md:text-xl dark:text-white font-semibold hover:underline">{title}</a>
            <p className=''>{details}</p>
            <div className="flex flex-wrap gap-2 items-center justify-start text-xs md:text-sm dark:text-white mt-2">
               {stack.map( (item, index) => (
                  <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md dark:hover:bg-white dark:hover:text-stone-900 hover:bg-stone-900 hover:text-white transition-all cursor-default" key={index}>
                     {item}
                  </span>
               ))}
            </div>
         </div>
      </div>
   )
}

export default PortfolioItem;