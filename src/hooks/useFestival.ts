'use client'

import { useEffect, useState } from 'react'

export function useFestival(params: Promise<{ id: string }>) {
  const [festivalId, setFestivalId] = useState<string | null>(null)

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params
      setFestivalId(resolvedParams.id)
    }
    fetchParams()
  }, [params])

  return festivalId
}
