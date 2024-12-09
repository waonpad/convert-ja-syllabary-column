"use client";

export default function ErrorFallback({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex grow flex-col items-center justify-center gap-4">
      <h1 className="text-2xl">Something went wrong!</h1>
      <p>{error.message}</p>
      <button type="button" onClick={() => reset()} className="rounded-md border-2 border-black px-8 py-2">
        Try again
      </button>
    </div>
  );
}
