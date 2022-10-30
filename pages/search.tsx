import axios from "axios";
import { appendAnimeQuery, isPresent } from "hooks/useSearch";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProgressBar from "components/Layouts/ProgressBar";
import AnimeFoundList from "components/Anime/FoundList";
import AnimeNotFound from "components/Anime/NotFound";
import AnimeSearchForm from "components/Anime/SearchForm";

const SearchPage: NextPage = () => {
  const router = useRouter();
  const { keyword, year, season } = router.query;
  const [isSearching, setIsSearching] = useState<boolean>(true);
  const [resultAnimes, setResultAnimes] = useState<Anime[]>([]);

  useEffect(() => {
    const url = appendAnimeQuery(`${year}`, `${season}`, `${keyword}`);

    if (
      (isPresent(`${year}`) && isPresent(`${season}`)) ||
      isPresent(`${keyword}`)
    ) {
      axios.get(url.href).then((res) => {
        setResultAnimes(res.data);
        setIsSearching(false);
      });
    } else {
      setResultAnimes([]);
    }
  }, [year, season, keyword]);

  return (
    <>
      <div className="max-w-6xl mx-auto md:flex gap-4 mb-10">
        <div className="md:w-1/3 h-10 bg-red-500"></div>
        <div className="md:w-2/3 flex flex-col gap-4 m-2">
          <AnimeSearchForm />
          {keyword || (year && season) ? (
            <>
              {isSearching ? (
                <ProgressBar />
              ) : (
                <>
                  {resultAnimes[0] ? (
                    <AnimeFoundList animes={resultAnimes} />
                  ) : (
                    <AnimeNotFound keyword={`${keyword}`} />
                  )}
                </>
              )}
            </>
          ) : (
            <p className="text-gray-600 text-sm">Please enter the keyword.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
