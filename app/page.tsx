import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AnimeGrid } from "@/components/anime-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AnimeGrid />
      </main>
      <Footer />
    </div>
  )
}
