export const load = ({ params, fetch }) => {
  const fetchGenes = async () => {
    const res = await fetch("https://vda-lab.github.io/assets/genes.json")
    const data = await res.json()
    return data
  }
  return {
      slug: params.slug,
      genes: fetchGenes()
  }
}