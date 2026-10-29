"use client"

import Link from "next/link"
import { Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold tracking-tight text-accent">
              Crunchyroll
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-sm hover:text-accent transition-colors">
                Browse
              </Link>
              <Link href="#" className="text-sm hover:text-accent transition-colors">
                Seasonal
              </Link>
              <Link href="#" className="text-sm hover:text-accent transition-colors">
                Popular
              </Link>
              <Link href="#" className="text-sm hover:text-accent transition-colors">
                New
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex hover:text-accent">
              <Search className="h-4 w-4" />
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="#" className="text-sm hover:text-accent transition-colors">
                Browse
              </Link>
              <Link href="#" className="text-sm hover:text-accent transition-colors">
                Seasonal
              </Link>
              <Link href="#" className="text-sm hover:text-accent transition-colors">
                Popular
              </Link>
              <Link href="#" className="text-sm hover:text-accent transition-colors">
                New
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
