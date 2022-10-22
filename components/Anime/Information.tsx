type InitialProps = { anime: Anime }

const AnimeInformation = ({ anime }: InitialProps) => {
  return (
    <>
      <div className="bg-gray-100 p-2">
        <p className="font-semibold text-sm text-gray-600">Information</p>
      </div>
      <div className="flex flex-col text-gray-600 text-sm">
        <div className="flex gap-4 px-8 py-4">
          <p>Registrations</p>
          <p className="text-green-600">1,000</p>
        </div>
      </div>
    </>
  );
};

export default AnimeInformation;
