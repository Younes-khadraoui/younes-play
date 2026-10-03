import { createFileRoute, useLoaderData } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  loader: async ({ abortController }) => {
    const res = await fetch(import.meta.env.VITE_BACKEND_URL + '/test', {
      signal: abortController.signal,
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`)
    }

    return res.text()
  },
  component: Home,
})

function Home() {
  const data = Route.useLoaderData()
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to {data}</h1>
      <p className="mt-4 text-lg">
        Edit <code>src/routes/index.tsx</code> to get started.
      </p>
    </div>
  )
}
