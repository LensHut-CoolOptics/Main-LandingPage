'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
const cities = [{ href: '/tumkur', label: 'Tumakuru' }, { href: '/hassan', label: 'Hassan' }, { href: '/bengaluru', label: 'Bengaluru' }]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(true)
  useEffect(()=>{
    const onScroll = () => setSolid(window.scrollY > 0)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${solid?'nav-blur':'bg-transparent'}`} style={{ height: 'var(--nav-h)' }}>
      <nav className='container-px max-w-7xl mx-auto flex items-center gap-6 h-full'>
        <Link href='/tumkur' className='font-black text-xl tracking-tight text-gray-900'>Lens<span className='text-sky-600'>Hut</span></Link>
        <button className='ml-auto md:hidden border border-gray-200 rounded-xl px-3 py-2 text-gray-700' onClick={()=>setOpen(s=>!s)} aria-label='Toggle menu'>Menu</button>
        <ul className={`md:flex md:items-center md:gap-4 ${open? 'block':'hidden'} md:block w-full md:w-auto`}>
          <li><a className='hover:underline text-gray-700' href='#collections'>Collections</a></li>
          <li><a className='hover:underline text-gray-700' href='#eyecheck'>Eye Checkup</a></li>
          <li><a className='hover:underline text-gray-700' href='#contact'>Contact</a></li>
          <li className='md:ml-6 flex gap-2'>{cities.map(c => <Link key={c.href} href={c.href} className='text-gray-700 hover:text-gray-900 text-sm border border-gray-200 rounded-lg px-3 py-1'>{c.label}</Link>)}</li>
          <li className='md:ml-4'><a className='btn text-sm' href='tel:+919999999999'>Call Now</a></li>
        </ul>
      </nav>
    </header>
  )
}
