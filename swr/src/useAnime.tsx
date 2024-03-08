import useSWR from 'swr'

type Quote = {
  id: string
  quote: string
  anime: string
  character: string
}

const BASE_URL = 'https://animechan.xyz/api/random'

function getAnimeQuote(id: string): Promise<Quote> {
  return new Promise((resolve,) => {
    setTimeout(() => {
      return resolve(fetch(BASE_URL).then((data) => data.json()))
    }, 5000)
  })
}

function useAnime() {
  const { data, error, isLoading } = useSWR<Quote>(BASE_URL, getAnimeQuote)

  return {
    data,
    error,
    isLoading
  }
}

export {
  useAnime
}