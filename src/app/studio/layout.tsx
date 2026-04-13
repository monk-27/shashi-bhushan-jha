// Minimal layout so Sanity Studio takes over the entire page without header/footer conflicts
export const metadata = {
  title: 'Sanity Studio',
  description: 'Manage content for the site',
  robots: 'noindex, nofollow',
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ margin: 0, padding: 0, height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {children}
    </div>
  )
}
