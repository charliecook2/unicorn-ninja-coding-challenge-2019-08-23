const unobstructedWestViewCount = buildings => {
  const duplicate = [...buildings]
  let count = 0
  for (let i = 0; i < buildings.length; i++) {
    duplicate.shift()
    const currentBuilding = buildings[i]
    const canSee = !duplicate.some(building => currentBuilding <= building)
    if (canSee) count += 1
  }
  return count
}

module.exports = { unobstructedWestViewCount }
