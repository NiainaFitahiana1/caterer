import { Button } from '../ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/img.png'
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-primary/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image alt='Logo' className='size-20' src={logo}></Image>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-semibold hover:text-primary transition-colors">Caterers</a>
          <a href="#" className="text-sm font-semibold hover:text-primary transition-colors">Categories</a>
          <a href="#" className="text-sm font-semibold hover:text-primary transition-colors">How it Works</a>
          <a href="#" className="text-sm font-semibold hover:text-primary transition-colors">Blog</a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" asChild><Link href="/login">Login</Link></Button>
          <Button variant="primary" asChild><Link href="/register/user">Register</Link></Button>
        </div>
      </nav>
    </header>
  );
}