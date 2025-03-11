
interface Props {
  label: string;
  onClick: () => void

}

export default function Provider2Button({label, onClick}: Props) {
  return <button onClick={onClick}>{label}</button>;
}