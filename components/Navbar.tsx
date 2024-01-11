import { ModeToggle } from '@/components/modetoggle'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5'>
      <Link href={"/"} className='font-bold text-3xl'>
        My <span className="text-primary">Blog</span>
      </Link>
      <ModeToggle />
    </div>
  )
}