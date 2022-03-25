export function countStars(star?: number): number {
  if (star) {
    if (star === 0) {
      return 0
    }

    if (star >= 1 && star <= 2) {
      return 1
    }

    if (star >= 3 && star <= 4) {
      return 2
    }

    if (star >= 5 && star <= 6) {
      return 3
    }

    if (star >= 7 && star <= 8) {
      return 4
    }

    if (star >= 8 && star <= 9) {
      return 5
    }
  }
  return 0
}
