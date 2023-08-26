export const load = ({ fetch }) => {
  const fetchGenes = async () => {
    const res = await fetch("https://vda-lab.github.io/assets/genes.json")
    const data = await res.json()
    return data
  }

  const fetchProteins = async () => {
    const res = await fetch("https://vda-lab.github.io/assets/interactions.json")
    const data = await res.json()
    return data
  }

  return {
    genes: fetchGenes(),
    interactions: fetchProteins()
  }