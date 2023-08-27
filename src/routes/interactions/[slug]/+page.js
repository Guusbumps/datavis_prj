// export const load = ({ params }) => {
//   return {
//       slug: params.slug
//   }
// }

export const load = ({ params, fetch }) => {

  const fetchInteractions = async () => {
    const res = await fetch("https://vda-lab.github.io/assets/interactions.json")
    const data = await res.json()
    return data
  }

  return {
    slug: params.slug,
    interactions: fetchInteractions()
  }
}