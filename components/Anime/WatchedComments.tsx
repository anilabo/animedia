import Image from "next/image";
import Link from "next/link";

interface InitialProps {
  anime: Anime;
}

const AnimeWatchedComments = ({ anime }: InitialProps) => {
  return (
    <>
      <div className="flex flex-col border rounded">
        <div className="text-gray-600 font-semibold px-4 py-2 border-b">
          Comments & Reviews
        </div>
        <div className="grid grid-cols-6 text-center text-gray-600 text-sm">
          <Link href={`/animes/${anime.public_uid}`}>
            <a className="my-auto py-1 border-r border-gray-300 bg-white">
              all
            </a>
          </Link>
          <Link href={`/animes/${anime.public_uid}#spoiler`}>
            <a className="my-auto py-1 border-r border-gray-300 bg-gray-100 border-b">
              spoiler
            </a>
          </Link>
          <Link href={`/animes/${anime.public_uid}#likes`}>
            <a className="my-auto py-1 border-r border-gray-300 bg-gray-100 border-b">
              likes
            </a>
          </Link>
          <div className="col-span-3 bg-gray-100 border-gray-300 border-b"></div>
        </div>
        {anime.watched_users.map((user) => (
          <div className="flex gap-4 p-4" key={user.uid}>
            <Link href={`/users/${user.uid}`}>
              <a className="w-12 h-12">
                <Image
                  width={500}
                  height={500}
                  src={user.photo_url}
                  className="rounded"
                />
              </a>
            </Link>
            <div className="flex flex-col text-sm">
              <Link href={`/users/${user.uid}`}>
                <a className="text-green-500 font-semibold hover:underline w-fit">
                  {user.display_name}
                </a>
              </Link>
              <p className="text-gray-600">{user.opinion}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AnimeWatchedComments;
