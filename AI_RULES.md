# AI Development Rules for Assirik Tours

This document outlines the technical stack and development conventions for this project. Adhering to these rules ensures consistency, maintainability, and high-quality code.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) with the App Router for building the React application.
- **Language**: [TypeScript](https://www.typescriptlang.org/) for static typing and improved developer experience.
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) is the primary component library, built on Radix UI and Tailwind CSS.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) is used exclusively for all styling via utility classes.
- **Icons**: [Lucide React](https://lucide.dev/) provides a consistent and clean set of icons.
- **Forms**: [React Hook Form](https://react-hook-form.com/) is used for managing form state and submissions.
- **Schema Validation**: [Zod](https://zod.dev/) is used with React Hook Form for robust, type-safe form validation.
- **Notifications**: A custom `useToast` hook built with shadcn/ui components is used for user feedback.
- **AI Features**: [Google AI Genkit](https://firebase.google.com/docs/genkit) is integrated for AI-powered functionalities.

## Development Guidelines & Library Usage

### 1. UI and Components
- **Primary Component Library**: **ALWAYS** use components from the pre-installed `shadcn/ui` library located in `src/components/ui`.
- **Custom Components**: If a `shadcn/ui` component doesn't fit the need, create a new custom component in `src/components/layout` or `src/components/sections` by composing existing `shadcn/ui` components.
- **No New UI Libraries**: Do **NOT** install or use other component libraries like Material-UI, Ant Design, or Chakra UI.

### 2. Styling
- **Utility-First CSS**: All styling **MUST** be done using [Tailwind CSS](https://tailwindcss.com/) utility classes.
- **No Custom CSS Files**: Avoid creating separate `.css` files for component styling. Use the `className` prop exclusively.
- **Responsiveness**: All components and layouts must be fully responsive, using Tailwind's responsive modifiers (e.g., `md:`, `lg:`).

### 3. Forms
- **Form Management**: Use `react-hook-form` for handling all form logic, state, and submissions.
- **Validation**: Use `zod` to define validation schemas for all forms. The `zodResolver` should be used to connect Zod schemas with `react-hook-form`.

### 4. Icons
- **Icon Source**: All icons **MUST** come from the `lucide-react` package to ensure visual consistency.

### 5. Notifications
- **User Feedback**: For any user feedback (e.g., form submission success, errors), use the custom `useToast` hook located at `src/hooks/use-toast.ts`.

### 6. Routing and Navigation
- **Client-side Navigation**: Use the `<Link>` component from `next/link` for all internal navigation.
- **Programmatic Navigation**: Use the `useRouter` hook from `next/navigation` if you need to navigate programmatically.

### 7. Code Structure
- **Pages**: Place all page components directly within the `src/app/` directory, using Next.js App Router conventions (e.g., `src/app/about/page.tsx`).
- **Reusable Components**:
  - General-purpose UI components are in `src/components/ui`.
  - Layout components (Header, Footer) are in `src/components/layout`.
  - Page-specific, larger components are in `src/components/sections`.
- **Hooks**: Custom hooks should be placed in the `src/hooks/` directory.