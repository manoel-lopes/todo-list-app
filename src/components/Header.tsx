import logoImg from '../assets/logo.svg'

export function Header() {
  return (
    <div className="flex justify-center py-24 bg-neutral-900">
      <img src={logoImg} alt="Todo App" />
    </div>
  )
}
