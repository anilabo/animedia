import { memo, useEffect, useState } from "react";

type InitialProps = { anime: Anime };

const AnimeInformation = memo(({ anime }: InitialProps) => {
  const [registrationsCount, setRegistrationsCont] = useState<number>(
    anime.watched_users.length +
      anime.watching_users.length +
      anime.will_watch_users.length
  );

  useEffect(() => {
    setRegistrationsCont(
      anime.watched_users.length +
        anime.watching_users.length +
        anime.will_watch_users.length
    );
  }, [anime]);

  return (
    <>
      <div className="bg-gray-100 p-2">
        <p className="font-semibold text-sm text-gray-600">Information</p>
      </div>
      <div className="flex flex-col text-gray-600 text-sm">
        <div className="flex gap-4 px-8 py-4">
          <p>Registrations</p>
          <p className="text-green-600">{registrationsCount}</p>
        </div>
      </div>
    </>
  );
});

export default AnimeInformation;
