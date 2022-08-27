import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full text-center py-2 z-30">
      <Link href="/" className="hover:cursor-pointer">
        <a href="">
          <h1 className="text-6xl">Movie Search</h1>
        </a>
      </Link>
    </header>
  )
}
export default Header
