"use client"

import { useEffect, useState } from "react"
import { AnimeCard } from "@/components/anime-card"

interface Anime {
  mal_id: number
  title: string
  images: {
    jpg: {
      large_image_url: string
    }
  }
  score: number
  year: number
  episodes: number
}

export function AnimeGrid() {
  const [seasonalAnime, setSeasonalAnime] = useState<Anime[]>([])
  const [popularAnime, setPopularAnime] = useState<Anime[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch("https://api.jikan.moe/v4/seasons/now?limit=12").then((res) => res.json()),
      fetch("https://api.jikan.moe/v4/top/anime?limit=12").then((res) => res.json()),
    ])
      .then(([seasonalData, popularData]) => {
        setSeasonalAnime(seasonalData.data || [])
        setPopularAnime(popularData.data || [])
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching anime:", error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 lg:px-8 py-16 space-y-16">
        <div className="space-y-8">
          <div className="h-6 w-48 bg-muted animate-pulse" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-muted animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 lg:px-8 py-16 space-y-16">
      <section className="space-y-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">This Season</h2>
          <button className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono">
            VIEW ALL →
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {seasonalAnime.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Most Popular</h2>
          <button className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono">
            VIEW ALL →
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {popularAnime.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      </section>
    </div>
  )
}
