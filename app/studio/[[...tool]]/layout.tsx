export const metadata = {
  title: 'Sanity Studio - Å i Lofoten',
  description: 'CMS for Å i Lofoten besøksforvaltning',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
