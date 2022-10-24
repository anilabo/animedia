import Image from "next/image";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";

interface InitialProps {
  anime: Anime;
}

const AnimeThumbnailCard = ({ anime }: InitialProps) => {
  return (
    <div className="p-6 flex flex-col gap-4">
      <Link href={anime.public_url}>
        <a target="_blank">
          <Image
            src={anime.thumbnail_url}
            width={500}
            height={400}
            className="rounded"
          />
        </a>
      </Link>
      <div className="flex">
        <p className="text-gray-500">
          {anime.year}, {anime.season}
        </p>
        <Link href={`/search/?year=${anime.year}&season=${anime.season}`}>
          <a className="ml-auto text-green-600 hover:underline">
            search with this season
          </a>
        </Link>
      </div>
      <div className="w-fit text-sky-500">
        <div className="flex gap-2">
          <Link href={`https://twitter.com/${anime.twitter_account}`}>
            <a target="_blank" className="text-xl">
              <FaTwitter />
            </a>
          </Link>
          <Link href={`https://twitter.com/hashtag/${anime.twitter_hash_tag}`}>
            <a target="_blank" className="text-sm hover:underline">
              #{anime.twitter_hash_tag}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimeThumbnailCard;
