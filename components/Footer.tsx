export default function Footer() {
  return (
    <footer 
      className="text-white pt-16 pb-16 min-h-[600px] flex flex-col justify-end"
      style={{ backgroundColor: '#061123' }}
    >
      <div className="container mx-auto px-4">
        {/* Main content - positioned lower */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Å brist eller bære?</h2>
          <p className="text-lg opacity-90">
            Prinsipper og tiltak for besøksforvaltning på Å
          </p>
        </div>
        
        {/* Bottom row with logos */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <a href="https://pir2.no" target="_blank" rel="noopener noreferrer" className="font-bold tracking-wide hover:opacity-80 transition-opacity">PIR2</a>
          <a href="https://travers.as" target="_blank" rel="noopener noreferrer" className="font-bold tracking-wide hover:opacity-80 transition-opacity">Travers</a>
          <a href="https://holthwinge.no" target="_blank" rel="noopener noreferrer" className="font-bold tracking-wide hover:opacity-80 transition-opacity">H&W</a>
          <span className="opacity-80">
            i samarbeid med{' '}
            <a href="https://www.moskenes.kommune.no" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 underline-offset-2 hover:underline transition-opacity">Moskenes kommune</a>
            {' '}og{' '}
            <a href="https://www.museumnord.no/vare-museer/norsk-fiskevaersmuseum/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 underline-offset-2 hover:underline transition-opacity">Museum Nord</a>.
          </span>
        </div>
      </div>
    </footer>
  )
}

