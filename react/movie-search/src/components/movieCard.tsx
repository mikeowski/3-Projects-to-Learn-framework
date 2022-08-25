import { Movie } from '../shared/types'
import Image from 'next/image'
import { useState } from 'react'
import { spawn } from 'child_process'
type props = {
  movie: Movie
}
const MovieCard: React.FC<props> = ({ movie }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className="items-center justify-center flex flex-col relative ">
      {movie.backdrop_path ? (
        <Image
          src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path}
          alt={movie.title}
          width={360}
          height={640}
        />
      ) : (
        <span>NO IMAGE</span>
      )}

      <div className="opacity-0 hover:opacity-100 absolute flex flex-col justify-center text-center hover:backdrop-brightness-50 backdrop-blur-sm transition-all translate-y-10 hover:translate-y-0 w-full  h-full px-4 font-bold ">
        <h2 className="text-white text-3xl">{movie.title}</h2>
        <span className="text-gray-300">
          {movie.release_date?.split('-').reverse().join('/')}
        </span>
        <div className="text-gray-200 mt-3">
          {isOpen ? <p>{movie.overview}</p> : null}
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:underline cursor-pointer text-red-500"
            >
              details
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:underline cursor-pointer text-red-500"
            >
              hide
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default MovieCard
