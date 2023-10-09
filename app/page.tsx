import LikeButton from "./LikeButton";
import CommentSection from "./CommentSection";
import GiphyResult from "./giphy";

export default async function Home() {
  return (
    <main className="main bg-zinc-8.bg-zinc-800\/30 {
      background-color: rgb(39 39 42 / 0.3);
    }00/30 h-screen overflow-auto snap-mandatory snap-y">    
      <h1>Hello Dan</h1>
      <LikeButton />
      <CommentSection /> 
</main>
  );
}
