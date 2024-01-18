import Advice from './components/advice'

export type AdviceType = {
  slip: {
    id: number;
    advice: string
  }
}

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-dark-blue">
      <Advice />
    </main>
  )
}
