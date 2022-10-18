export interface HomeProps {
  result: {
    name: string
  }
}
const Home: React.FC<HomeProps> = ({ result }) => {
  return <div>Hello {result.name}!</div>
}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/hello', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const result = await response.json()

  return {
    props: {
      result,
    },
  }
}
export default Home
