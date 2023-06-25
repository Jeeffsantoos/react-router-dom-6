import { useLocation } from 'react-router'
import './style.css'

export const About = () => {
  const {state} = useLocation()

  return (
    <div>
      <h1>About</h1>
      <h1>{state as string}</h1>
    </div>
  )
}