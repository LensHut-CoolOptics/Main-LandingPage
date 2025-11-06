'use client'
import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
type Slide = { type: 'image'|'video'; src: string }
const IMAGE_DURATION = 6000, MIN_VIDEO_MS = 3000, MAX_VIDEO_MS = 20000
export default function FullscreenCarousel({ slides }: { slides: Slide[] }) {
  const [idx, setIdx] = useState(0)
  const timerRef = useRef<number | null>(null)
  const videoRefs = useRef<(HTMLVideoElement|null)[]>([])
  const clearTimer = () => { if (timerRef.current) window.clearTimeout(timerRef.current); timerRef.current = null }
  const scheduleNext = (ms: number) => { clearTimer(); timerRef.current = window.setTimeout(() => setIdx(i => (i + 1) % slides.length), ms) }
  useEffect(() => {
    const current = slides[idx]
    if (current?.type === 'video') {
      videoRefs.current.forEach((v, i) => { if (v && i !== idx) { try { v.pause() } catch {} } })
      const v = videoRefs.current[idx]
      if (v) {
        v.preload = 'auto'
        const proceed = () => {
          const dur = isFinite(v.duration) && v.duration > 0 ? v.duration*1000 : IMAGE_DURATION
          const bounded = Math.min(Math.max(dur, MIN_VIDEO_MS), MAX_VIDEO_MS)
          v.currentTime = 0; v.muted = true; v.play().catch(()=>{}); scheduleNext(bounded)
        }
        if (isNaN(v.duration) || !isFinite(v.duration) || v.duration === 0) { const onMeta = () => { v.removeEventListener('loadedmetadata', onMeta); proceed() }; v.addEventListener('loadedmetadata', onMeta, { once: true }); v.load() } else { proceed() }
        const onEnd = () => { scheduleNext(300) }; v.addEventListener('ended', onEnd, { once: true }); return () => { v.removeEventListener('ended', onEnd) }
      } else { scheduleNext(IMAGE_DURATION) }
    } else { const img = new Image(); const next = slides[(idx + 1) % slides.length]; if (next?.type === 'image') img.src = next.src; scheduleNext(IMAGE_DURATION) }
    return () => { clearTimer() }
  }, [idx, slides])
  useEffect(() => () => clearTimer(), [])
  const goTo = (i:number) => setIdx((i + slides.length) % slides.length)
  return (
    <div className='relative w-full h-svh overflow-hidden'>
      {slides.map((s, i) => (
        <div key={i} className={clsx('absolute inset-0 transition-opacity duration-700', i===idx?'opacity-100':'opacity-0')}>
          {s.type === 'image' ? (
            <img src={s.src} className='w-full h-full object-cover' alt='' loading={i===idx?'eager':'lazy'} />
          ) : (
            <video ref={el => (videoRefs.current[i] = el)} src={s.src} className='w-full h-full object-cover' muted playsInline preload={i===idx?'auto':'metadata'} />
          )}
          <div className='absolute inset-x-0 top-0 h-[var(--nav-h)] top-fade pointer-events-none'></div>
        </div>
      ))}
      <button onClick={()=>goTo(idx-1)} className='absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 border border-gray-200 shadow-soft'>‹</button>
      <button onClick={()=>goTo(idx+1)} className='absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 border border-gray-200 shadow-soft'>›</button>
      <div className='absolute bottom-4 left-0 right-0 flex justify-center gap-2'>
        {slides.map((_, i)=>(<button key={i} onClick={()=>goTo(i)} className={clsx('h-2 w-2 rounded-full', i===idx?'bg-gray-800':'bg-gray-400')} aria-label={`Go to slide ${i+1}`}></button>))}
      </div>
    </div>
  )
}
