import { useAnime } from './useAnime'

export default function Quote() {
  const { data, isLoading, error } = useAnime()

  if (error) return <div>failed to load</div>

  if (isLoading) return <div>loading...</div>

  return (
    <>
      <details>
        <summary>I want to replicate the quote here for some reason</summary>
        <p>{data?.id}</p>
        <p>{data?.quote}</p>
        <p>{data?.anime}</p>
        <p>{data?.character}</p>
      </details>
    </>
  )
}