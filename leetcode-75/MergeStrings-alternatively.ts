function mergeAlternately (word1: string, word2: string): string {
  const merged: string[] = []
  let i: number = 0
  let j: number = 0

  while (i < word1.length && j < word2.length) {
    merged.push(word1[i])
    merged.push(word2[j])
    i++
    j++
  }

  // Append remaining characters from word1
  while (i < word1.length) {
    merged.push(word1[i])
    i++
  }

  // Append remaining characters from word2
  while (j < word2.length) {
    merged.push(word2[j])
    j++
  }

  return merged.join('')
}
