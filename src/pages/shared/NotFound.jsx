import { Link } from 'react-router-dom'
import Container from '../../components/globals/Container'
import Button from '../../components/buttons/Button'

export default function NotFound() {
  return (
    <Container className="min-h-[60vh] flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-8xl font-bold text-green mb-4">404</h1>
      <h2 className="text-3xl font-bold text-dark mb-4">Page Not Found</h2>
      <p className="text-dark/60 mb-8 max-w-md">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/"><Button variant="primary" size="lg">Back to Home</Button></Link>
    </Container>
  )
}
