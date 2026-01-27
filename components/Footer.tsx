export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-32 pb-12 min-h-[400px] flex flex-col justify-between">
      <div className="container mx-auto px-4 flex-1 flex flex-col justify-between">
        {/* Main content */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Å brist eller bære?</h2>
          <p className="text-lg opacity-90">
            Prinsipper og tiltak for besøksforvaltning på Å
          </p>
        </div>
        
        {/* Bottom row with logos */}
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span className="font-bold tracking-wide">PIR2</span>
          <span className="font-bold tracking-wide">Travers</span>
          <span className="font-bold tracking-wide">H&W</span>
          <span className="opacity-80">i samarbeid med Moskenes kommune og Museum nord.</span>
        </div>
      </div>
    </footer>
  )
}

