import { GetServerSideProps, NextPage } from "next";
import axios from "../../lib/axios";
import Image from "next/image";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { hash_id } = context.query

  const res = await axios.get(`/animes/${hash_id}`)
  const anime = await res.data
  return {
    props: {anime}
  }
}

type InitialProps = { anime: Anime }

const AnimeDetailPage: NextPage<InitialProps> = ({ anime }) => {
  return (
    <>
      <Image src={anime.thumbnail_url} width={500} height={400} />
      <p>AnimeDetailPage</p>
      <p>title: {anime.title}</p>
      <p>title_en: {anime.title_en}</p>
      <p>title_short1: {anime.title_short1}</p>
      <p>title_short2: {anime.title_short2}</p>
      <p>title_short3: {anime.title_short3}</p>
      <div>companies: 
        {anime.companies.map((company) => (
          <p>{company.name }</p>
        ))}
      
      </div>
      
    </>
  );
};

export default AnimeDetailPage;
