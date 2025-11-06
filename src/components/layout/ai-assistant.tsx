'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Send, User, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/assist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: input }),
      });

      if (!res.ok) {
        throw new Error('Failed to get response from assistant');
      }

      const data = await res.json();
      const assistantMessage: Message = { role: 'assistant', content: data.response };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: Message = {
        role: 'assistant',
        content: "Désolé, une erreur s'est produite. Veuillez réessayer plus tard.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[calc(100vh-120px)]"> {/* Adjusted height for full page */}
      <div className="flex-grow my-4 pr-4">
        <ScrollArea className="h-full" ref={scrollAreaRef}>
          <div className="space-y-4 p-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary rounded-full text-primary-foreground">
                <Bot className="h-5 w-5" />
              </div>
              <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                <p className="text-sm">Bonjour ! Comment puis-je vous aider à planifier votre prochain voyage avec Assirik Tours ?</p>
              </div>
            </div>
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-start gap-3',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.role === 'assistant' && (
                  <div className="p-2 bg-primary rounded-full text-primary-foreground">
                    <Bot className="h-5 w-5" />
                  </div>
                )}
                <div
                  className={cn(
                    'p-3 rounded-lg max-w-[80%]',
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  )}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                 {message.role === 'user' && (
                  <div className="p-2 bg-muted rounded-full text-foreground">
                    <User className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary rounded-full text-primary-foreground">
                  <Bot className="h-5 w-5" />
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <Loader2 className="h-5 w-5 animate-spin" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2 border-t pt-4 p-4">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Posez votre question..."
          disabled={isLoading}
        />
        <Button type="submit" size="icon" disabled={isLoading}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}