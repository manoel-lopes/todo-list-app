import { useState, useCallback } from 'react'

type LocalStorageTuple<T> = readonly [T, (value: T) => void]

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): LocalStorageTuple<T> {
  const [storedValue, setStoredValue] = useState<T>(getInitialStoredValue())
  function getInitialStoredValue(): T {
    if (typeof window === 'undefined') return initialValue
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error setting ${key} to localStorage`, error)
      return initialValue
    }
  }

  const setValue = useCallback(
    (value: T) => {
      try {
        const isValueAFunction = typeof value === 'function'
        const valueToStore = isValueAFunction ? value(storedValue) : value
        setStoredValue(value)
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore))
        }
      } catch (error) {
        console.error(`Error setting ${key} to localStorage`, error)
      }
    },
    [key, storedValue],
  )

  return [storedValue, setValue] as const
}
