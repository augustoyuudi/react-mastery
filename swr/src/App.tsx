import { useAnime } from './useAnime'
import Quote from './Quote'

function App() {
  const { data, isLoading, error } = useAnime()

  if (error) return <div>failed to load</div>

  if (isLoading) return <div>loading...</div>

  return (
    <>
      <main>
        <h1>Quote of the day</h1>
        <p>{data?.id}</p>
        <p>{data?.quote}</p>
        <p>{data?.anime}</p>
        <p>{data?.character}</p>

        <Quote></Quote>
      </main>
    </>
  )
}

export default App
