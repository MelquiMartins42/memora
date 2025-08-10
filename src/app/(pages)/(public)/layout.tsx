import Header from '@/components/layout/Header'

import RootLayout from '../layout'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout>
      <section className="flex flex-col w-full h-full">
        <Header />

        <main className="flex items-center justify-center w-full h-full overflow-y-auto">
          {children}
        </main>
      </section>
    </RootLayout>
  )
}
