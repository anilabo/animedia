import axios from "axios";
import { animeQuery } from "hooks/useSearch";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SearchPage: NextPage = () => {
  const router = useRouter();
  const { keyword } = router.query;

  const [isSearching, setIsSearching] = useState<boolean>(true);
  const [resultAnimes, setResultAnimes] = useState<Anime[]>([]);

  useEffect(() => {
    if (keyword) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_ANILABO_URL}/animes?q[${animeQuery}]=${keyword}`
        )
        .then((res) => {
          setResultAnimes(res.data);
          setIsSearching(false);
        });
    }
  }, [keyword]);

  return (
    <>
      {keyword ? (
        <>
          {isSearching ? (
            <p>検索中です...</p>
          ) : (
            <>
              {resultAnimes[0] ? (
                <>
                  {resultAnimes.map((anime) => (
                    <p key={anime.public_uid}>{anime.title}</p>
                  ))}
                </>
              ) : (
                <p>残念、見つからなかった</p>
              )}
            </>
          )}
        </>
      ) : (
        <p>検索キーワードが必要ですね。</p>
      )}
      <p>this is search page.</p>
    </>
  );
};

export default SearchPage;
