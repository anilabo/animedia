import { GetServerSideProps, NextPage } from "next";
import axios from "../../lib/axios";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

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
          <h2 className="text-xs">{anime.title_en}</h2>
        </div>
        <div className="flex gap-4">
          <div className="w-1/3 border rounded px-10 py-4">
            <Image src={anime.thumbnail_url} width={500} height={400} />
            <div className="flex">
              <p className="text-gray-500">
                {anime.year}, {anime.season}
              </p>
              <Link href={`/?q[year_eq]=${anime.year}&q[season_eq]=${anime.season}`}>
                <a className="ml-auto text-green-600 hover:underline">search with this season</a>
              </Link>
            </div>
          </div>
          <div className="w-2/3 bg-blue-500 h-10"></div>
        </div>
      </div>
    </>
  );
};

export default AnimeDetailPage;
