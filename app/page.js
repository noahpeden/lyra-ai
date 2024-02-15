'use client';
import { Typography, Button } from '@material-tailwind/react';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import Link from 'next/link';

export default function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Typography variant="h1">Welcome to LyraAI!</Typography>
      <Typography variant="h3">Create a childrens book on the fly</Typography>
      {session && (
        <Button
          onClick={async () => await supabase.auth.signOut()}
          className="ml-auto btn btn-secondary"
        >
          Sign Out
        </Button>
      )}
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['google']}
        />
      ) : (
        <Link href="/write-story">
          <Button variant="gradient" size="lg">
            Get Started
          </Button>
        </Link>
      )}
    </main>
  );
}
