"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Play, Star, Calendar, Tv, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface AnimeDetailsProps {
  animeId: string
}

interface AnimeData {
  mal_id: number
  title: string
  title_english: string
  title_japanese: string
  images: {
    jpg: {
      large_image_url: string
    }
  }
  synopsis: string
  score: number
  scored_by: number
  rank: number
  popularity: number
  members: number
  favorites: number
  episodes: number
  status: string
  aired: {
    from: string
    to: string
    string: string
  }
  season: string
  year: number
  broadcast: {
    day: string
    time: string
    timezone: string
    string: string
  }
  producers: Array<{ name: string }>
  studios: Array<{ name: string }>
  genres: Array<{ name: string }>
  themes: Array<{ name: string }>
  demographics: Array<{ name: string }>
  duration: string
  rating: string
}

interface Episode {
  mal_id: number
  title: string
  title_japanese: string
  aired: string
  score: number
  filler: boolean
  recap: boolean
}

interface Character {
  character: {
    mal_id: number
    name: string
    images: {
      jpg: {
        image_url: string
      }
    }
  }
  role: string
  voice_actors: Array<{
    person: {
      name: string
    }
    language: string
  }>
}

export function AnimeDetails({ animeId }: AnimeDetailsProps) {
  const [anime, setAnime] = useState<AnimeData | null>(null)
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        // Fetch anime details
        const animeRes = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/full`)
        const animeData = await animeRes.json()
        setAnime(animeData.data)

        // Fetch episodes
        const episodesRes = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/episodes`)
        const episodesData = await episodesRes.json()
        setEpisodes(episodesData.data || [])

        // Fetch characters
        const charactersRes = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/characters`)
        const charactersData = await charactersRes.json()
        setCharacters(charactersData.data?.slice(0, 12) || [])

        setLoading(false)
      } catch (error) {
        console.error("Error fetching anime data:", error)
        setLoading(false)
      }
    }

    fetchAnimeData()
  }, [animeId])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground font-mono text-sm">Loading...</div>
      </div>
    )
  }

  if (!anime) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground font-mono text-sm">Anime not found</div>
      </div>
    )
  }

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={anime.images.jpg.large_image_url || "/placeholder.svg"}
            alt={anime.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-end pb-12">
          <div className="max-w-3xl space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
                {anime.title_english || anime.title}
              </h1>
              <p className="text-lg text-muted-foreground font-mono">{anime.title_japanese}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm font-mono">
              {anime.score && (
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="font-medium">{anime.score}</span>
                  <span className="text-muted-foreground">({anime.scored_by?.toLocaleString()} users)</span>
                </div>
              )}
              {anime.year && <span className="text-muted-foreground">{anime.year}</span>}
              {anime.episodes && <span className="text-muted-foreground">{anime.episodes} Episodes</span>}
              {anime.status && <span className="text-muted-foreground">{anime.status}</span>}
            </div>

            <Button size="lg" className="gap-2">
              <Play className="h-4 w-4" />
              Watch Now
            </Button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Main Content */}
          <div className="space-y-12">
            {/* Synopsis */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Synopsis</h2>
              <p className="text-muted-foreground leading-relaxed">{anime.synopsis}</p>
            </section>

            {/* Tabs */}
            <Tabs defaultValue="episodes" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="episodes"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent"
                >
                  Episodes
                </TabsTrigger>
                <TabsTrigger
                  value="characters"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent"
                >
                  Characters
                </TabsTrigger>
                <TabsTrigger
                  value="info"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent"
                >
                  Information
                </TabsTrigger>
              </TabsList>

              <TabsContent value="episodes" className="mt-8 space-y-2">
                {episodes.length > 0 ? (
                  episodes.map((episode) => (
                    <div
                      key={episode.mal_id}
                      className="flex items-center gap-4 p-4 border border-border hover:bg-muted/50 transition-colors cursor-pointer group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-muted flex items-center justify-center font-mono text-sm">
                        {episode.mal_id}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium group-hover:text-accent transition-colors truncate">
                          {episode.title}
                        </h3>
                        {episode.title_japanese && (
                          <p className="text-sm text-muted-foreground font-mono truncate">{episode.title_japanese}</p>
                        )}
                      </div>
                      {episode.aired && (
                        <div className="text-xs text-muted-foreground font-mono">
                          {new Date(episode.aired).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 text-muted-foreground font-mono text-sm">No episodes available</div>
                )}
              </TabsContent>

              <TabsContent value="characters" className="mt-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {characters.map((char) => (
                    <div key={char.character.mal_id} className="space-y-3 group cursor-pointer">
                      <div className="aspect-[3/4] overflow-hidden bg-muted">
                        <img
                          src={char.character.images.jpg.image_url || "/placeholder.svg"}
                          alt={char.character.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm group-hover:text-accent transition-colors">
                          {char.character.name}
                        </h3>
                        <p className="text-xs text-muted-foreground font-mono">{char.role}</p>
                        {char.voice_actors[0] && (
                          <p className="text-xs text-muted-foreground mt-1">{char.voice_actors[0].person.name}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="info" className="mt-8 space-y-6">
                <div className="grid gap-6">
                  <InfoRow icon={Tv} label="Type" value={anime.status} />
                  <InfoRow icon={Calendar} label="Aired" value={anime.aired.string} />
                  {anime.broadcast?.string && <InfoRow icon={Clock} label="Broadcast" value={anime.broadcast.string} />}
                  <InfoRow icon={Users} label="Members" value={anime.members?.toLocaleString()} />
                  {anime.studios.length > 0 && (
                    <InfoRow label="Studios" value={anime.studios.map((s) => s.name).join(", ")} />
                  )}
                  {anime.producers.length > 0 && (
                    <InfoRow label="Producers" value={anime.producers.map((p) => p.name).join(", ")} />
                  )}
                  <InfoRow label="Duration" value={anime.duration} />
                  <InfoRow label="Rating" value={anime.rating} />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Stats */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold">Statistics</h3>
              <div className="space-y-3 text-sm">
                {anime.rank && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rank</span>
                    <span className="font-mono">#{anime.rank}</span>
                  </div>
                )}
                {anime.popularity && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Popularity</span>
                    <span className="font-mono">#{anime.popularity}</span>
                  </div>
                )}
                {anime.favorites && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Favorites</span>
                    <span className="font-mono">{anime.favorites.toLocaleString()}</span>
                  </div>
                )}
              </div>
            </section>

            {/* Genres */}
            {anime.genres.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-lg font-bold">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {anime.genres.map((genre) => (
                    <span
                      key={genre.name}
                      className="px-3 py-1 bg-muted text-xs font-mono hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Themes */}
            {anime.themes.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-lg font-bold">Themes</h3>
                <div className="flex flex-wrap gap-2">
                  {anime.themes.map((theme) => (
                    <span
                      key={theme.name}
                      className="px-3 py-1 bg-muted text-xs font-mono hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                    >
                      {theme.name}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Demographics */}
            {anime.demographics.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-lg font-bold">Demographics</h3>
                <div className="flex flex-wrap gap-2">
                  {anime.demographics.map((demo) => (
                    <span
                      key={demo.name}
                      className="px-3 py-1 bg-muted text-xs font-mono hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                    >
                      {demo.name}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon?: React.ElementType
  label: string
  value?: string | number
}) {
  if (!value) return null

  return (
    <div className="flex items-start gap-3 pb-6 border-b border-border last:border-0">
      {Icon && <Icon className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />}
      <div className="flex-1 min-w-0">
        <div className="text-xs text-muted-foreground font-mono mb-1">{label}</div>
        <div className="text-sm">{value}</div>
      </div>
    </div>
  )
}
