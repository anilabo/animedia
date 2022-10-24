import axios from "axios";
import { animeQuery } from "hooks/useSearch";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProgressBar from "components/Layouts/ProgressBar";
import AnimeFoundList from "components/Anime/FoundList";
import AnimeNotFound from "components/Anime/NotFound";

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
      <div className="max-w-6xl mx-auto flex gap-4">
        <div className="w-1/3 h-10 bg-red-500"></div>
        <div className="w-2/3">
          {keyword ? (
            <>
              {isSearching ? (
                <ProgressBar />
              ) : (
                <>
                  {resultAnimes[0] ? (
                    <AnimeFoundList
                      keyword={`${keyword}`}
                      animes={resultAnimes}
                    />
                  ) : (
                    <AnimeNotFound keyword={`${keyword}`} />
                  )}
                </>
              )}
            </>
          ) : (
            <p>検索キーワードが必要ですね。</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
