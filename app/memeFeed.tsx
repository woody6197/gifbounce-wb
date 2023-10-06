import { TrendingOptions, getTrendingData } from "@/lib/giphy";
import Image from "next/image";
import LikeButton from "./likeButton";

export type MemeFeedProps = {
  options: TrendingOptions;
};

export default async function MemeFeed({ options }: MemeFeedProps) {
  const data = await getTrendingData(options);

  return data.map(({ id, images, title }) => {
    const gif_id = String(id);
    return (
      <section
        id={gif_id}
        key={gif_id}
        className="h-screen snap-center relative p-5"
      >
        <Image
          className="w-full h-screen object-cover absolute top-0 left-0 z-[-1]"
          src={images.original.webp}
          alt={title}
          width={512}
          height={512}
          priority
        />
        <LikeButton gifID={gif_id} />
      </section>
    );
  });
}
