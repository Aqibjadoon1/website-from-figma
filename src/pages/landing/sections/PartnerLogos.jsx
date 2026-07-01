import Container from '../../../components/globals/Container'
import bannerHero from '../../../assets/banner hero.png'

export default function BannerHero() {
  return (
    <Container className="py-12">
      <img src={bannerHero} alt="Banner" className="w-full h-auto" />
    </Container>
  )
}
