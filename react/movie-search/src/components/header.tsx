import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="text-center py-2">
      <Link href="/" className="hover:cursor-pointer">
        <a href="">
          <h1 className="text-6xl">Movie Search</h1>
        </a>
      </Link>
    </header>
  )
}
export default Header
