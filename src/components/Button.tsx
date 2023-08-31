type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button(props: ButtonProps) {
  return (
    <button onClick={(event) => props.handleClick(event)}></button>
  )
}
