'use client'
import React, { useEffect, useState } from 'react'
import FullscreenCarousel from './FullscreenCarousel'
type FileItem = { name: string; url: string }
type Slide = { type: 'image'|'video'; src: string }
function shuffle<T>(arr: T[]): T[] { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]} return a }
export default function CarouselAuto({ sub='' }: { sub?: string }) {
  const [slides, setSlides] = useState<Slide[]|null>(null)
  useEffect(() => {
    const url = sub ? `/api/carousel?sub=${encodeURIComponent(sub)}` : '/api/carousel'
    fetch(url).then(r=>r.json()).then(data=>{
      if(!data.ok){ setSlides([]); return }
      const items: FileItem[] = data.files || []
      const toSlide = (f: FileItem): Slide => /\.(mp4|webm)$/i.test(f.url) ? { type:'video', src:f.url } : { type:'image', src:f.url }
      setSlides(shuffle(items.map(toSlide)))
    })
  }, [sub])
  if (!slides) return <div className='h-svh flex items-center justify-center text-gray-600 main-under-nav'>Loading media…</div>
  if (slides.length === 0) return <div className='h-svh flex items-center justify-center text-gray-600 main-under-nav'>Add images/videos to <code>/public/carousel{sub? '/' + sub : ''}</code> and refresh.</div>
  return <div className='main-under-nav'><FullscreenCarousel slides={slides} /></div>
}
