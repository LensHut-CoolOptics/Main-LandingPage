import '../styles/globals.css'
export const metadata = { title: 'Lens Hut', description: 'Auto media carousel with sticky navbar (products auto 6)' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>)
}
