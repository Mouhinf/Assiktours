import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-white">
      <Image
        src="/sydney.jpg"
        alt="Paysage de voyage idyllique"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-md font-headline">
          Relaxez-vous, Nous Nous Occupons De Tout
        </h1>
        <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
          Avec Assirik Tours, découvrez des destinations de rêve et vivez des expériences inoubliables, en toute sérénité.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/destinations">
            <Button size="lg" variant="default" className="w-full sm:w-auto">
              Explorer les Destinations
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
