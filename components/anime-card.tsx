"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import Link from "next/link"

interface AnimeCardProps {
  anime: {
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
}

export function AnimeCard({ anime }: AnimeCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/anime/${anime.mal_id}`}>
      <div
        className="group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[2/3] overflow-hidden bg-muted">
          <img
            src={anime.images.jpg.large_image_url || "/placeholder.svg"}
            alt={anime.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {isHovered && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300">
              <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center">
                <Play className="h-5 w-5 text-foreground" />
              </div>
            </div>
          )}

          {anime.score && (
            <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm px-2 py-1 text-xs font-mono">
              ★ {anime.score}
            </div>
          )}
        </div>

        <div className="mt-3 space-y-1">
          <h3 className="text-sm font-medium leading-tight line-clamp-2 group-hover:text-accent transition-colors">
            {anime.title}
          </h3>
          <div className="text-xs text-muted-foreground font-mono">
            {anime.year} {anime.episodes && `· ${anime.episodes} EP`}
          </div>
        </div>
      </div>
    </Link>
  )
}
