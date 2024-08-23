import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV()

export function getItem<T>(key: string): T | null {
  const value = storage.getString(key)
  if (value) {
    return JSON.parse(value)
  }
  return null
}

export async function setItem<T>(key: string, value: T) {
  storage.set(key, JSON.stringify(value))
}

export async function removeItem(key: string) {
  storage.delete(key)
}