'use client'
import React, { useEffect, useState } from 'react'

type FileItem = { name: string; url: string }
type Product = { name: string; src: string }

function titleize(file: string) {
  const base = file.replace(/\.[^.]+$/, '').replace(/[\-_]+/g, ' ').trim()
  return base.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}
function shuffle<T>(arr: T[]): T[] { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]} return a }

export default function ProductsAutoGrid({ max=6 }: { max?: number }) {
  const [items, setItems] = useState<Product[] | null>(null)
  useEffect(() => {
    fetch('/api/products').then(r=>r.json()).then(data=>{
      if(!data.ok){ setItems([]); return }
      const files: FileItem[] = data.files || []
      const prods = files.map(f => ({ name: titleize(f.name), src: f.url }))
      setItems(shuffle(prods).slice(0, max))
    })
  }, [max])
  if (items === null) return <div className='text-gray-600'>Loading products…</div>
  if (items.length === 0) return <div className='text-gray-600'>Add images to <code>/public/products</code> and refresh.</div>
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
      {items.map((p, i)=>(
        <div key={i} className='rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-soft'>
          <img src={p.src} alt={p.name} className='w-full h-48 object-cover'/>
          <div className='p-3 font-medium text-gray-900 text-center'>{p.name}</div>
        </div>
      ))}
    </div>
  )
}
