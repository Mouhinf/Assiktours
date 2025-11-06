import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HomeAbout() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 lg:h-full min-h-[400px] w-full rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/passport.jpg"
              alt="Passeport et billets d'avion"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Votre Partenaire de Confiance pour des Voyages Sereins</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Avec plus de 20 ans d'expérience, Assirik Tours, basée à Dakar, est votre agence de confiance agréée IATA. Nous nous engageons à transformer chaque voyage en une expérience exceptionnelle et sans souci.
            </p>
            <p className="mt-4 text-muted-foreground">
             De la billetterie à l'hébergement, notre équipe d'experts est dédiée à la création de voyages sur mesure, répondant à vos besoins avec professionnalisme et une connaissance approfondie du secteur.
            </p>
            <Link href="/about">
              <Button variant="default" size="lg" className="mt-6 group">
                En savoir plus sur nous <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
