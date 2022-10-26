interface InitialProps {
  keyword: string;
}

const AnimeNotFound = ({ keyword }: InitialProps) => {
  return (
    <div className="flex flex-col text-gray-600 px-2 gap-2">
      <p>Not found</p>
      <p className="text-sm">Please change search keyword or filter.</p>
    </div>
  );
};
export default AnimeNotFound;
