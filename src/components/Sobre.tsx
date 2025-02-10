'use client'

import { useState, useEffect } from 'react'

const images = [
  "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
  "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
  "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
  "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
  "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
  "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
  "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
];

export default function Sobre() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500); // Duration of the fade-out effect
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto q-full min-h-screen max-h-auto max-w-4xl">
      <h1 className="text-4xl font-bold text-center mt-8">Sobre</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="col-span-1 md:grid-col-1 gap-4">
          <div className='gap-4 rounded-box p-4'>
            <h1 className='text-2xl font-extrabold place-items-center'>Sobre o Insituto</h1>
            <p className='text-lg'>O Instituto Pro Vidas é uma organização sem fins lucrativos que tem como objetivo principal a promoção da saúde e do bem-estar da população mais carente.</p>
          </div>
          <div className='gap-4 rounded-box p-4 flex justify-center items-center'>
            <button className="btn btn-primary">Saiba mais</button>
          </div>
        </div>
        <div className="grid cols-1 md:grid-cols-1 md:grid-col-2 gap-4 lg:col-start-3">
          <div className="carousel rounded-box w-80 md:w-128 mx-auto md:mx-0">
            <div className={`carousel-item w-full transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
              <img
                src={images[currentImageIndex]}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
