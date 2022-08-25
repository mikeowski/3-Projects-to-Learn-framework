import type { NextPage } from 'next'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  searchInputValidator,
  SearchInputValidatorType,
} from '../shared/searchInputValidator'
import { zodResolver } from '@hookform/resolvers/zod'
import { trpc } from '../utils/trpc'
import { useState } from 'react'
import { Movie } from '../shared/types'
import MovieCard from '../components/movieCard'

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SearchInputValidatorType>({
    resolver: zodResolver(searchInputValidator),
  })
  const [searchResults, setSearchResults] = useState<Movie[]>([])

  const { mutate, isSuccess } = trpc.useMutation(['search'], {
    onSuccess(data) {
      setSearchResults(data)
    },
  })
  const onSubmit: SubmitHandler<SearchInputValidatorType> = async (
    submitData
  ) => {
    mutate(submitData)
    reset()
  }

  return (
    <div className="mt-40 container flex text-lg flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 mb-10"
      >
        <div className="px-3 py-5 border rounded-lg border-gray-500">
          <span className="text-xl">Search:</span>
          <input
            placeholder="Kill Bill"
            {...register('query', { required: true })}
            className="bg-inherit text-lg px-2 focus:outline-none border-b-2 focus:border-gray-600"
          />
        </div>
        <div className="flex w-full justify-between">
          <span>Adult search</span>
          <input {...register('adult', { required: true })} type="checkbox" />
        </div>
        {errors.query && <span>This field is required</span>}
        {errors.adult && <span>This field is required</span>}
        <input
          type="submit"
          className="hover:cursor-pointer px-4 py-2 border rounded-lg hover:border-gray-100 border-gray-500 transition-all"
        />
      </form>
      <div className="w-full p-4 sm:grid grid-cols-3 gap-4 flex flex-col">
        {isSuccess
          ? searchResults.map((movie) => {
              return <MovieCard key={movie.title} movie={movie} />
            })
          : null}
      </div>
    </div>
  )
}

export default Home
