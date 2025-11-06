import Image from 'next/image';
import { Users, Globe, Heart, Building, Award, Target } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const whyUs = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Plus de 20 ans d'expérience",
    description: "Assirik Tours bénéficie de plus de 20 ans d'expérience dans le secteur du voyage et du tourisme, vous assurant un service expert et fiable.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Agréée IATA et Ministère du Tourisme",
    description: "Officiellement agréée par l'IATA et détentrice d'une licence du Ministère du Tourisme sénégalais, notre agence vous garantit sérieux et conformité.",
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Services Complets et Personnalisés",
    description: "Nous ofrons une gamme complète de services, de la billetterie au tourisme religieux, avec un engagement pour des prestations personnalisées.",
  },
];

const companyInfo = [
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: 'Notre Histoire',
    description: "Assirik Tours est une agence de voyages établie à Dakar, Sénégal, bénéficiant de plus de 20 ans d'expérience dans le secteur du voyage et du tourisme.",
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: 'Notre Mission',
    description: "Proposer une gamme complète de services pour répondre aux besoins des voyageurs, incluant la billetterie aérienne, le tourisme religieux, les transferts aéroport, la location de voitures, et l'hébergement.",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Nos Valeurs',
    description: "Offrir des prestations personnalisées et adaptées aux exigences de notre clientèle, avec un ancrage fort dans le contexte sénégalais et une offre diversifiée.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-16 sm:py-24 bg-primary/5">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">À Propos de Assirik Tours</h1>
            <p className="mt-4 text-lg text-secondary-foreground max-w-3xl mx-auto">
              Découvrez comment notre expérience et notre engagement font de Assirik Tours votre partenaire idéal pour des voyages sereins et mémorables.
            </p>
          </div>
        </section>

        <section id="about" className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 lg:h-full min-h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/sydney.jpg"
                  alt="Globe terrestre et carte du monde"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Voyagez en toute sérénité avec Assirik Tours</h2>
                <div className="mt-4 text-lg text-muted-foreground space-y-4">
                  <p>
                  Assirik Tours est une agence de voyages établie à Dakar, Sénégal, bénéficiant de plus de 20 ans d'expérience dans le secteur du voyage et du tourisme. Elle est officiellement agréée par l'Association Internationale du Transport Aérien (IATA) et détient une licence délivrée par le Ministère du Tourisme sénégalais, garantissant ainsi son sérieux et sa conformité aux normes du secteur.
                  </p>
                  <p>
                  L'agence propose une gamme complète de services pour répondre aux besoins des voyageurs, incluant la billetterie aérienne, le tourisme religieux, les transferts vers et depuis l'aéroport international Blaise Diagne (AIBD), la location de voitures, ainsi que des solutions d'hébergement en hôtels et résidences meublées. Assirik Tours fait également partie du groupe Aviation Handling-Assirik Tours, ce qui renforce son expertise dans le domaine du voyage et de la logistique.
                  </p>
                  <p>
                  Située à Dakar, à proximité de l'Hôpital Philippe Senghor, l'agence se distingue par son engagement à offrir des prestations personnalisées et adaptées aux exigences de sa clientèle, aussi bien locale qu’internationale. Pour le contact, elle est joignable au +221 77 184 57 57 et dispose de plateformes digitales pour faciliter l'accès à ses services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-primary/5">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">Pourquoi nous choisir ?</h2>
                </div>
                 <div className="grid md:grid-cols-3 gap-8">
                  {whyUs.map((item) => (
                    <div key={item.title} className="bg-background p-6 rounded-lg shadow-md flex items-start gap-4 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                        <p className="mt-1 text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
        </section>

        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">Notre Agence</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {companyInfo.map((item) => (
                        <div key={item.title} className="bg-primary/5 p-8 rounded-lg shadow-md flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                            <div className="bg-primary/10 rounded-full p-4 mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-primary mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    ))}"
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
