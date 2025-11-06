'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CarouselAuto from '../components/CarouselAuto'
import ProductsAutoGrid from '../components/ProductsAutoGrid'
import { CityData, CALL_NUMBER } from '../components/CityData'

export default function Page({ params }: { params: { city: string } }) {
  const key = (params.city || 'tumkur').toLowerCase() as keyof typeof CityData
  const city = CityData[key] ?? CityData.tumkur

  return (
    <main className='relative min-h-screen'>
      <Navbar />
      <CarouselAuto />

      <section className='container-px max-w-5xl mx-auto text-center py-12'>
        <h1>{city.heading}</h1>
        <p className='mt-4'>{city.tagline}</p>
        <a className='btn mt-6' href={`tel:${CALL_NUMBER}`}>Call Now</a>
      </section>

      <section id='collections' className='container-px max-w-7xl mx-auto mt-4'>
        <div className='mb-4'><h2>Featured Collections</h2></div>
        <ProductsAutoGrid max={6} />
      </section>

      <section id='visit' className='container-px max-w-7xl mx-auto mt-14'>
        <div className='rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-soft'>
          <h2>Visit Lens Hut – {city.name}</h2>
          <p className='text-gray-700 mt-2'>{city.address}</p>
          <div className='flex items-center justify-center gap-4 mt-4'>
            <a className='btn' href={city.map} target='_blank' rel='noreferrer'>Open in Maps</a>
            <a className='btn' href={`tel:${CALL_NUMBER}`}>Call Now</a>
          </div>
        </div>
      </section>

      <Footer address={city.address} />
    </main>
  )
}
