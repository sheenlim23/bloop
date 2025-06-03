import React from 'react'

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-auto pt-20">
      {children}
    </main>
  )
}

export default Main