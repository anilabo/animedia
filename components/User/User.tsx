import AnimeList from "components/Anime/List";
import Image from "next/image";

type InitialProps = { user: User };

const UserComponent = ({ user }: InitialProps) => {
  return (
    <div className="max-w-6xl m-2 md:mx-auto mb-10">
      <div className="grid grid-cols-3 gap-4 text-gray-600 ">
        <div className="rounded border border-gray-300 p-4 flex flex-col gap-4 h-fit">
          <p className="mx-auto font-semibold text-xl">{user.display_name}</p>
          <div className="h-40 w-40 mx-auto">
            <Image
              src={user.photo_url}
              className="rounded"
              width={500}
              height={500}
            />
          </div>
          <button className="rounded border hover:bg-green-500 hover:text-white w-40 mx-auto py-1">
            フォロー
          </button>
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <div className="rounded border">
            {user.watched_animes.map((anime) => (
              <>
                <p>{anime.title}</p>
                <p>{anime.thumbnail_url}</p>
                <p>{anime.opinion}</p>
                <hr />
              </>
            ))}
          </div>
          <AnimeList animes={user.watched_animes} progress="watched" />
          <AnimeList animes={user.watching_animes} progress="watching" />
          <AnimeList animes={user.will_watch_animes} progress="will_watch" />
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
