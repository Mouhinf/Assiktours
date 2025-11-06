import { defineFlow, run } from 'genkit';
import { ai } from './genkit';
import { z } from 'zod';

export const assistantFlow = defineFlow(
  {
    name: 'assistantFlow',
    inputSchema: z.object({ query: z.string() }),
    outputSchema: z.string(),
  },
  async ({ query }) => {
    const llmResponse = await run('run-llm', async () => {
      const prompt = `Vous êtes un assistant de voyage serviable pour Assirik Tours, une agence de voyages basée à Dakar, Sénégal. Votre objectif est d'aider les utilisateurs à planifier leurs voyages. Vous êtes amical, professionnel et bien informé sur les voyages. Vous pouvez répondre aux questions sur les destinations, nos services (vols, forfaits personnalisés, assurance voyage, assistance visa), et fournir des conseils de voyage. Gardez vos réponses concises et utiles.

      Question de l'utilisateur : ${query}`;

      return await ai.generate({
        prompt,
        config: {
          temperature: 0.7,
        },
      });
    });

    return llmResponse.text();
  }
);