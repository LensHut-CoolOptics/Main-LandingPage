import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
export async function GET(request: Request) {
  const url = new URL(request.url)
  const sub = url.searchParams.get('sub') || ''
  const root = path.join(process.cwd(), 'public', 'carousel', sub)
  const allowed = new Set(['.jpg','.jpeg','.png','.webp','.mp4','.webm'])
  try {
    const entries = fs.readdirSync(root, { withFileTypes: true })
    const files = entries.filter(e=>e.isFile() && allowed.has(path.extname(e.name).toLowerCase()))
      .map(e=>({ name: e.name, url: `/carousel/${sub ? sub+'/' : ''}${e.name}` }))
    return NextResponse.json({ ok: true, files })
  } catch (e:any) { return NextResponse.json({ ok:false, error:e.message, files:[] }, { status: 200 }) }
}
