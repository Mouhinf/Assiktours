import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { AIAssistant } from '@/components/layout/ai-assistant';

export default function AssistantPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-8">Votre Assistant de Voyage IA</h1>
        <p className="mt-4 text-lg text-secondary-foreground max-w-3xl mx-auto text-center mb-12">
          Posez toutes vos questions sur les destinations, nos services ou obtenez des conseils de voyage personnalisés.
        </p>
        <div className="bg-card rounded-lg shadow-lg p-6 h-[70vh] flex flex-col">
          <AIAssistant />
        </div>
      </main>
      <Footer />
    </div>
  );
}