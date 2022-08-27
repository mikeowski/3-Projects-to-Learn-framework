import { Movie } from '../shared/types'
import Image from 'next/image'
import { useState } from 'react'
import { spawn } from 'child_process'
import Link from 'next/link'
type props = {
  movie: Movie
}
const MovieCard: React.FC<props> = ({ movie }) => {
  return (
    <div className="items-center justify-center flex flex-col relative h-full">
      {movie.poster_image ? (
        <Image
          src={'https://image.tmdb.org/t/p/original' + movie.poster_image}
          alt={movie.title}
          width={360}
          height={640}
          draggable="false"
        />
      ) : (
        <span>NO IMAGE</span>
      )}
      <div className="opacity-0 z-30 hover:opacity-100 absolute flex flex-col justify-center text-center hover:backdrop-brightness-50 backdrop-blur-sm transition-all translate-y-2 hover:translate-y-0 w-full h-full px-4 font-bold">
        {movie.adult ? <span className="text-2xl">+18</span> : null}
        <h2 className="text-white text-3xl">{movie.title}</h2>
        <span className="text-gray-300">
          {movie.release_date?.split('-').reverse().join('/')}
        </span>

        <div className="text-gray-200 mt-3">
          <Link href={`/${movie.id}`}>
            <a href="" className="hover:underline cursor-pointer text-red-500">
              details
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default MovieCard
