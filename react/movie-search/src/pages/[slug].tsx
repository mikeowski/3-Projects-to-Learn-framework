import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { trpc } from '../utils/trpc'
import Image from 'next/image'

const MoviePage: NextPage = () => {
  const { slug } = useRouter().query
  if (!slug || typeof slug != 'string') {
    return <div>Please use slug</div>
  }
  const { data } = trpc.useQuery(['findById', { id: slug }])
  return (
    <div>
      <div className="relative">
        {data?.backdrop_image ? (
          <div className="relative w-full h-96 z-10">
            <Image
              src={'https://image.tmdb.org/t/p/original' + data.backdrop_image}
              alt={data.title}
              quality="100%"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 10%"
              draggable="false"
            />
          </div>
        ) : null}
        <div className="bg-gradient-to-t from-gray-900 flex sm:flex-row flex-col sm:items-end items-center sm:justify-between justify-end px-32 absolute z-30 w-full h-44 bottom-0 gap-2 sm:gap-0">
          <h1 className="md:text-6xl sm:text-4xl text-3xl">{data?.title}</h1>
          <span className="text-gray-300 md:text-4xl sm:text-2xl text-xl">
            {data?.release_date?.split('-').reverse().join('/')}
          </span>
        </div>
      </div>

      <p className="text-center md:text-5xl sm:text-4xl text-xl mt-24 text-gray-400">
        {data?.overview}
      </p>
    </div>
  )
}

export default MoviePage
