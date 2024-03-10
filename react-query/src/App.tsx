import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main>
          <Example></Example>
        </main>
      </QueryClientProvider>
    </>
  )
}

function Example() {
  type Quote = {
    id: string
    quote: string
    anime: string
    character: string
  }

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn(): Promise<Quote> {
      return fetch('https://animechan.xyz/api/random').then((res) =>
        res.json(),
      )
    }
  })

  if (isPending) return 'Loading...'

  if(error) return 'An error has ocurred:' + error.message

  return (
    <div>
      <p>{data.id}</p>
      <p>{data.quote}</p>
      <p>{data.anime}</p>
      <p>{data.character}</p>
    </div>
  )
}

export default App
