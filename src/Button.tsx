const Button: React.FunctionComponent<{ color: string }> = (props) => {
  return <button type="button" style={{ color: props.color }}>Hi! I am button from MF Sub App</button>
}

export default Button;
