"use client";

export default function ErrorBoundary({ error, reset }: {
    error: Error, reset: () => void;
}){
    return <h2>{error.message} <button onClick={reset}>Try again</button></h2>
}