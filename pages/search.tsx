import axios from "axios";
import { animeQuery, isPresent } from "hooks/useSearch";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProgressBar from "components/Layouts/ProgressBar";
import AnimeFoundList from "components/Anime/FoundList";
import AnimeNotFound from "components/Anime/NotFound";
import AnimeSearchForm from "components/Anime/SearchForm";
import { seasonNum } from "hooks/useSeason";

const SearchPage: NextPage = () => {
  const router = useRouter();
  const { keyword, year, season } = router.query;
  const [isSearching, setIsSearching] = useState<boolean>(true);
  const [resultAnimes, setResultAnimes] = useState<Anime[]>([]);

  useEffect(() => {
    const url = new URL(`${process.env.NEXT_PUBLIC_ANILABO_URL}/animes`);
    const params = url.searchParams;

    if (keyword) {
      params.append(`q[${animeQuery}]`, `${keyword}`);
    }
    if (isPresent(`${year}`)) {
      params.append("q[year_eq]", `${year}`);
    }
    if (isPresent(`${season}`)) {
      params.append("q[season_eq]", `${seasonNum(`${season}`)}`);
    }

    if ((isPresent(`${year}`) && isPresent(`${season}`)) || keyword) {
      axios.get(url.href).then((res) => {
        setResultAnimes(res.data);
      });
    } else {
      setResultAnimes([]);
    }
    setIsSearching(false);
  }, [year, season, keyword]);

  return (
    <>
      <div className="max-w-6xl mx-auto flex gap-4 mb-10">
        <div className="w-1/3 h-10 bg-red-500"></div>
        <div className="w-2/3 flex flex-col gap-4">
          <AnimeSearchForm />
          {keyword || (year && season) ? (
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
            <p className="text-gray-600 text-sm">Please enter the keyword.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
