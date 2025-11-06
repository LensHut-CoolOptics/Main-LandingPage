import React from 'react'
import { CALL_NUMBER } from './CityData'
export default function Footer({ address }: { address: string }) {
  return (
    <footer id='contact' className='mt-16 border-top border-gray-200 bg-gradient-to-b from-white to-sky-50'>
      <div className='container-px max-w-7xl mx-auto py-10 grid sm:grid-cols-3 gap-8'>
        <div><h3 className='font-bold text-lg text-gray-900'>LensHut</h3><p className='text-gray-600 mt-2'>Premium eyewear and eye care with certified optometrists.</p></div>
        <div><h4 className='font-semibold text-gray-900'>Address</h4><p className='text-gray-600 mt-2'>{address}</p></div>
        <div><h4 className='font-semibold text-gray-900'>Contact</h4><p className='text-gray-600 mt-2'>Phone: <a className='underline text-sky-700' href={`tel:${CALL_NUMBER}`}>{CALL_NUMBER}</a></p></div>
      </div>
      <div className='text-center text-gray-500 text-sm pb-8'>© {new Date().getFullYear()} LensHut. All rights reserved.</div>
    </footer>
  )
}
