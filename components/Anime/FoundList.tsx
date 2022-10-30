import Image from "next/image";
import Link from "next/link";

interface InitialProps {
  animes: Anime[];
}

const AnimeFoundList = ({ animes }: InitialProps) => {
  return (
    <div className="flex flex-col gap-2">
      {animes.map((anime) => (
        <Link href={`/animes/${anime.public_uid}`} key={anime.public_uid}>
          <a
            key={anime.public_uid}
            className="grid grid-cols-3 md:grid-cols-5 gap-4 hover:bg-green-100 border-b-2 p-2 rounded-t"
          >
            <div className="flex">
              <Image
                src={anime.thumbnail_url}
                width={400}
                height={300}
                className="rounded object-fit"
              />
            </div>
            <p className="my-auto text-gray-600 col-span-2 md:col-span-4">{anime.title}</p>
          </a>
        </Link>
      ))}
    </div>
  );
};
export default AnimeFoundList;
