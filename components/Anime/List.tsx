import Image from "next/image";
import Link from "next/link";

interface InitialProps {
  animes: AnimeShortInfo[];
  progress: AnimeWatchingProgressType;
  user: User;
}

const AnimeList = ({ animes, progress, user }: InitialProps) => {
  return (
    <>
      {animes[0] && (
        <div className="rounded border text-gray-600">
          <div className="px-4 py-2 border-b flex gap-2">
            <p className="font-semibold">{progress}</p>
            <div className="bg-green-500 text-white rounded-full w-fit h-6 flex">
              <p className="m-auto px-2">{animes.length}</p>
            </div>
            {animes.length > 10 && (
              <Link href={`/users/${user.uid}/${progress}`}>
                <a className="ml-auto text-gray-400 text-xs my-auto hover:underline">
                  {"> see all"}
                </a>
              </Link>
            )}
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 p-4">
            {animes.slice(0 ,10).map((anime) => (
              <div key={anime.public_uid}>
                <Link href={`/animes/${anime.public_uid}`}>
                  <a>
                    <Image
                      src={anime.thumbnail_url}
                      width={500}
                      height={400}
                      className="rounded"
                    />
                  </a>
                </Link>
                <Link href={`/animes/${anime.public_uid}`}>
                  <a className="text-xs text-green-500 hover:underline">
                    {anime.title}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AnimeList;
