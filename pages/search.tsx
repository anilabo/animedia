import axios from "axios";
import { animeQuery } from "hooks/useSearch";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProgressBar from "components/Layouts/ProgressBar";

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
                    <div className="flex flex-col gap-2">
                      <div className="text-gray-600 flex gap-1 px-2">
                        <p className="text-2xl font-semibold my-auto">
                          {keyword}
                        </p>
                        <p className="mt-auto text-sm">
                          was found some animes.
                        </p>
                      </div>
                      <div>
                        {resultAnimes.map((anime) => (
                          <Link href={`/animes/${anime.public_uid}`}>
                            <a
                              key={anime.public_uid}
                              className="grid grid-cols-5 gap-4 hover:bg-green-100 border-b-2 p-2 rounded-t"
                            >
                              <div className="flex">
                                <Image
                                  src={anime.thumbnail_url}
                                  width={400}
                                  height={300}
                                  className="rounded object-fit"
                                />
                              </div>
                              <p className="my-auto text-gray-600 col-span-4">
                                {anime.title}
                              </p>
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col text-gray-600 px-2 gap-2">
                      <div className="flex gap-2">
                        <p className="text-2xl font-semibold">{keyword}</p>
                        <p className="mt-auto text-sm">was not found.</p>
                      </div>
                      <p className="text-sm">Please change search keyword.</p>
                    </div>
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
