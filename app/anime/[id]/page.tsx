import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimeDetails } from "@/components/anime-details"

export default function AnimePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AnimeDetails animeId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
