import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8 md:p-10">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-3 rounded-2xl text-white">
              <span className="material-symbols-outlined text-4xl">restaurant</span>
            </div>
            <h1 className="text-3xl font-bold text-primary">Caterly</h1>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-2">Bienvenue</h2>
        <p className="text-center text-neutral-text/70 mb-8">Connectez-vous à votre compte</p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="votre@email.com"
              className="w-full px-4 py-3 rounded-2xl border border-neutral-text/20 focus:border-primary focus:ring-0 bg-background-light dark:bg-slate-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Mot de passe</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-2xl border border-neutral-text/20 focus:border-primary focus:ring-0 bg-background-light dark:bg-slate-800"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-primary" />
              Se souvenir de moi
            </label>
            <Link href="/forgot-password" className="text-primary hover:underline">
              Mot de passe oublié ?
            </Link>
          </div>

          <Button variant="primary" size="lg" className="w-full">
            Se connecter
          </Button>
        </form>

        <p className="text-center mt-8 text-sm text-neutral-text/60">
          Vous n'avez pas de compte ?{' '}
          <Link href="/register" className="text-primary font-semibold hover:underline">
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  );
}