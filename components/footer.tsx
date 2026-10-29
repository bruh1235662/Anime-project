export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Browse</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Popular
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  New
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Alphabetical
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Simulcast
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Genres</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Action
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Drama
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Fantasy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Romance
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Account</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Sign In
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Watchlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Settings
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-muted-foreground font-mono">Houndslight | Zachary T. | Powered by Jikan API.</div>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Help
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
