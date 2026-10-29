"use client"

import { useEffect, useState } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Anime {
  mal_id: number
  title: string
  synopsis: string
  images: {
    jpg: {
      large_image_url: string
    }
  }
  score: number
  year: number
}

export function HeroSection() {
  const [featuredAnime, setFeaturedAnime] = useState<Anime | null>(null)

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime?limit=1")
      .then((res) => res.json())
      .then((data) => {
        if (data.data && data.data.length > 0) {
          setFeaturedAnime(data.data[0])
        }
      })
      .catch((error) => console.error("Error fetching featured anime:", error))
  }, [])

  if (!featuredAnime) {
    return <section className="relative h-[60vh] md:h-[70vh] bg-muted animate-pulse" />
  }

  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${featuredAnime.images.jpg.large_image_url})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-end pb-12 md:pb-16">
        <div className="max-w-2xl space-y-4">
          <div className="text-xs tracking-widest text-muted-foreground font-mono">FEATURED</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">{featuredAnime.title}</h1>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3">
            {featuredAnime.synopsis}
          </p>
          <div className="flex items-center gap-4 pt-2">
            <Button className="gap-2">
              <Play className="h-4 w-4" />
              Watch Now
            </Button>
            <div className="text-xs text-muted-foreground font-mono">
              {featuredAnime.year} · ★ {featuredAnime.score}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
