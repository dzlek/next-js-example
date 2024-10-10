import { useState, useEffect } from 'react'

let idCounter = 0

export const useGetId = (providedId?: string) => {
  const [generatedId, setGeneratedId] = useState<string | undefined>(providedId)

  useEffect(() => {
    if (!providedId) {
      idCounter += 1
      setGeneratedId(`custom-id-${idCounter}`)
    }
  }, [providedId])

  return providedId || generatedId
}