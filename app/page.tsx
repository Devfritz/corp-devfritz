import HomeImg from "../public/home.jpg"
import Hero from './(components)/Hero'

export default function Home() {
  return (
    <main>
      <Hero title='Professionnel Cloud Hosting' imgData={HomeImg} alt='exe' />
    </main>
  )
}
