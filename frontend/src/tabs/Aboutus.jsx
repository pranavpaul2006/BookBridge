import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Aboutus = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
  <div className='w-3/4 m-auto'>
    <div className='mt-20'>
     <Slider {...settings}>
       {data.map((d) => (
        <div className='bg-w h-[450px] text-black rounded-xl'>
          <div className='rounded-t-xl bg-orange-400 flex justify-center items-center h-[300px]'>
            <img src={d.img} alt='' className='h-60 w-60 rounded-full px-2 py-2'/>
          </div>
           <div className=' bg-blue-300 flex flex-col justify-center items-center gap-4 p-4'>
            <p className='text-xl font-semibold px-2 top-1'>{d.name}</p>
            <p className='top-1'>{d.review}</p>
            <a href='https://www.linkedin.com/in/adinath-manoj-nambiar-3b1b75292/' target="_blank" previewlistener="true">
               <button className=' top-0 bg-orange-400 text-white text-xl px-6 py-1 rounded-xl'>
                Lets Connect!
               </button>
            </a>
           </div>

         </div>
        
      
      ))}
     </Slider> 
    </div>

  </div>
  );
}

const data = [
  {
    name: `Amal Varghese`,
    img: `/students/WhatsApp Image 2024-07-29 at 13.10.15.jpeg`,
    review: 'Perumbavoor'
  },
  {
    name: `Pranav Paul`,
    img: `/students/WhatsApp Image 2024-07-29 at 13.10.15.jpeg`,
    review: `Angamaly`
  },
  {
    name: `Adinath Manoj`,
    img: `/students/WhatsApp Image 2024-07-29 at 13.10.15.jpeg`,
    review: `Kannur`
  },
  {
    name: `Cebin Mec`,
    img: `/students/WhatsApp Image 2024-07-29 at 13.10.15.jpeg`,
    review: `Thudapuzha`
  },
  {
    name: `Alan M Varghese`,
    img: `/students/WhatsApp Image 2024-07-29 at 13.10.15.jpeg`,
    review: `Kollam`
  },
  
];



export default Aboutus;
