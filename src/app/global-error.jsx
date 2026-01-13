"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function GlobalError({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-destructive/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <Card className="w-full max-w-lg relative z-10 border-destructive/20">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-4 rounded-full bg-destructive/10 w-fit">
            <AlertTriangle className="w-12 h-12 text-destructive" />
          </div>

          <CardTitle className="text-2xl">Something went wrong</CardTitle>

          <CardDescription>
            We’re sorry, something unexpected happened. You can try again,
            reload the page, or go back home.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {process.env.NODE_ENV === "development" && (
            <div className="mt-4 p-4 bg-muted rounded-lg overflow-auto max-h-48">
              <p className="font-mono text-sm text-destructive font-semibold mb-2">
                {error?.message}
              </p>
              {error?.stack && (
                <pre className="font-mono text-xs text-muted-foreground whitespace-pre-wrap">
                  {error.stack}
                </pre>
              )}
            </div>
          )}
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={reset}
            className="w-full sm:w-auto gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button>

          <Button
            variant="outline"
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Reload Page
          </Button>

          <Button
            onClick={() => router.push("/")}
            className="w-full sm:w-auto gap-2"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
