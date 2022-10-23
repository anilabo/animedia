import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import { useState } from "react";
import AnimeThumbnailCard from "components/Anime/ThumbnailCard";
import AnimeSubscribes from "components/Anime/Subscribes";
import AnimeMyCommentsLink from "components/Anime/MyCommentsLink";
import AnimeInformation from "components/Anime/Information";
import { isNotFoundCode } from "hooks/useNotFound";
import AnimeSeries from "components/Anime/Series";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { hash_id } = context.query;

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_ANILABO_URL}/animes/${hash_id}`);
    const anime = await res.data;
    return {
      props: { anime },
    };
  } catch (error) {
    return {
      props: {},
      notFound: isNotFoundCode(error),
    };
  }
};

type InitialProps = { anime: Anime };

const AnimeDetailPage: NextPage<InitialProps> = ({ anime }) => {
  const [companyNames] = useState<string>(
    anime.companies[0]
      ? `（${anime.companies.map((company) => company.name).join(", ")}）`
      : ""
  );

  return (
    <>
      <div className="max-w-6xl mx-auto mb-10">
        <div className="flex flex-col p-2">
          <h1 className="text-xl font-semibold">
            {anime.title}
            {companyNames}
          </h1>
          <h2 className="text-xs text-gray-600">{anime.title_en}</h2>
        </div>
        <div className="flex gap-4">
          <div className="w-1/3 flex flex-col gap-4">
            <div className="border rounded">
              <AnimeThumbnailCard anime={anime} />
            </div>
            <div className="border rounded">
              <AnimeSubscribes anime={anime} />
              <AnimeMyCommentsLink anime={anime} />
              <AnimeInformation anime={anime} />
            </div>
            {anime.series[0] && (
              <div className="border rounded">
                <AnimeSeries anime={anime} />
              </div>
            )}
          </div>
          <div className="w-2/3 bg-blue-500 h-10"></div>
        </div>
      </div>
    </>
  );
};

export default AnimeDetailPage;
