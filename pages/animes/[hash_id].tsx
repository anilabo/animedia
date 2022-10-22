import { GetServerSideProps, NextPage } from "next";
import axios from "../../lib/axios";
import { useState } from "react";
import AnimeThumbnailCard from "../../components/Layouts/Anime/ThumbnailCard";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { hash_id } = context.query;

  const res = await axios.get(`/animes/${hash_id}`);
  const anime = await res.data;
  return {
    props: { anime },
  };
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
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col p-2">
          <h1 className="text-lg font-semibold">
            {anime.title}
            {companyNames}
          </h1>
          <h2 className="text-xs text-gray-600">{anime.title_en}</h2>
        </div>
        <div className="flex gap-4">
          <div className="w-1/3">
            <AnimeThumbnailCard anime={anime} />
          </div>
          <div className="w-2/3 bg-blue-500 h-10">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeDetailPage;
