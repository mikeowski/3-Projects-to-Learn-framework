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
      {data?.backdrop_image ? (
        <div className="w-full relative h-10">
          <Image
            src={'https://image.tmdb.org/t/p/original' + data.backdrop_image}
            alt={data.title}
            layout="responsive"
            width={16}
            height={9}
          />
        </div>
      ) : null}
    </div>
  )
}

export default MoviePage
