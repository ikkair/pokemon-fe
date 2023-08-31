type HomeProps = {
  name: String
}

export default function Home(props:HomeProps) {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

