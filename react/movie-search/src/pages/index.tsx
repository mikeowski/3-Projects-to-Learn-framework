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
import { map } from 'zod'
import MovieCard from '../components/MovieCard'
const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
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
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <label
          htmlFor="text"
          className="px-3 py-5 border rounded-lg border-gray-500"
        >
          <span className="text-xl">Search:</span>
          <input
            placeholder="Kill Bill"
            {...register('query', { required: true })}
            className="bg-inherit text-lg px-2 focus:outline-none border-b-2 focus:border-gray-600"
          />
        </label>
        <div>
          <label htmlFor="checkbox" className="flex w-full justify-between">
            <span>Adult search</span>
            <input {...register('adult')} type="checkbox" className="" />
          </label>
        </div>
        {/* errors will return when field validation fails  */}

        <input
          type="submit"
          className="hover:cursor-pointer px-4 py-2 border rounded-lg hover:border-gray-100 border-gray-500 transition-all"
        />
      </form>
    </div>
  )
}

export default Home
