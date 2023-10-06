import { Suspense } from "react";
import Loading from "./loading";
import MemeFeed from "./memeFeed";

// const MemeFeed = lazy(() => import("./memeFeed"));

export default function Home() {
  return (
    <main className="main bg-zinc-800/30 h-screen overflow-auto snap-mandatory snap-y">
      <Suspense fallback={<Loading />}>
        <MemeFeed options={{ limit: 10, rating: "g" }} />
      </Suspense>
    </main>
  );
}
