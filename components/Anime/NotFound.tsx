interface InitialProps {
  keyword: string;
}

const AnimeNotFound = ({ keyword }: InitialProps) => {
  return (
    <div className="flex flex-col text-gray-600 px-2 gap-2">
      <div className="flex gap-2">
        <p className="text-2xl font-semibold">{keyword}</p>
        <p className="mt-auto text-sm">was not found.</p>
      </div>
      <p className="text-sm">Please change search keyword.</p>
    </div>
  );
};
export default AnimeNotFound;
