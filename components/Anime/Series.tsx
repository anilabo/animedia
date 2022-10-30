import Image from "next/image";
import Link from "next/link";

interface InitialProps {
  anime: Anime;
}

const AnimeSeries = ({ anime }: InitialProps) => {
  return (
    <>
      <div className="bg-gray-100 p-2">
        <p className="font-semibold text-sm text-gray-600">Series</p>
      </div>
      <div className="flex flex-col text-gray-600 text-sm p-1">
        {anime.series.map((relatedAnime) => (
          <Link href={relatedAnime.public_uid} key={relatedAnime.public_uid}>
            <a className="grid grid-cols-3 gap-2 hover:bg-green-100 p-1 rounded">
              <Image
                src={relatedAnime.thumbnail_url}
                width={200}
                height={150}
                className="rounded"
              />
              <p className="col-span-2 my-auto">{relatedAnime.title}</p>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AnimeSeries;
