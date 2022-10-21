import { GetServerSideProps, NextPage } from "next";
import axios from "../../lib/axios";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";

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
          <div className="w-1/3 border rounded p-6 flex flex-col gap-4">
            <Image
              src={anime.thumbnail_url}
              width={500}
              height={400}
              className="rounded"
            />
            <div className="flex">
              <p className="text-gray-500">
                {anime.year}, {anime.season}
              </p>
              <Link
                href={`/?q[year_eq]=${anime.year}&q[season_eq]=${anime.season}`}
              >
                <a className="ml-auto text-green-600 hover:underline">
                  search with this season
                </a>
              </Link>
            </div>
            <div className="w-fit text-sky-500">
              <div className="flex gap-2">
                <Link href={`https://twitter.com/${anime.twitter_account}`}>
                  <a target="_blank" className="text-xl">
                    <FaTwitter />
                  </a>
                </Link>
                <Link href={`https://twitter.com/hashtag/${anime.twitter_hash_tag}`}>
                  <a target="_blank" className="text-sm hover:underline">#{anime.twitter_hash_tag}</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-2/3 bg-blue-500 h-10"></div>
        </div>
      </div>
    </>
  );
};

export default AnimeDetailPage;
