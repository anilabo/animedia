import { useRouter } from "next/router";
import { useState, useEffect, FormEvent } from "react";

const AnimeSearchForm = () => {
  const router = useRouter();
  const { year, season, keyword } = router.query;
  const yearsArray = [...Array(9)].map((_, i) => i + 2014).reverse();
  const seasonsArray = ["spring", "summer", "fall", "winter"];

  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedSeason, setSelectedSeason] = useState<string>("");

  const [inputKeyword, setInputKeyword] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = new URL(location.href);
    const params = url.searchParams;
    params.delete("keyword");
    params.append("keyword", inputKeyword);
    router.push(url.href);
  };

  useEffect(() => {
    if (year && season) {
      setSelectedYear(year as string);
      setSelectedSeason(season as string);
    }
  }, [year, season]);

  useEffect(() => {
    if (selectedYear) {
      const url = new URL(location.href);
      const params = url.searchParams;
      params.delete("year");
      params.append("year", selectedYear);
      router.push(url.href);
    }
  }, [selectedYear]);

  useEffect(() => {
    if (selectedSeason) {
      const url = new URL(location.href);
      const params = url.searchParams;
      params.delete("season");
      params.append("season", selectedSeason);
      router.push(url.href);
    }
  }, [selectedSeason]);

  useEffect(() => {
    setInputKeyword(`${keyword}`);
  }, [keyword]);

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex gap-2">
      <select
        name="year"
        id="year"
        className="border border-gray-400 rounded px-2 py-1 text-gray-600"
        onChange={(e) => setSelectedYear(e.target.value)}
        value={year}
      >
        <option value="blank">YEAR</option>
        {yearsArray.map((i, index) => (
          <option key={index} value={i}>
            {i}
          </option>
        ))}
      </select>
      <select
        name="season"
        id="season"
        className="text-gray-600 border border-gray-400 rounded px-2"
        onChange={(e) => setSelectedSeason(e.target.value)}
        value={season}
      >
        <option value="blank">SEASON</option>
        {seasonsArray.map((seasonName, index) => (
          <option key={index} value={seasonName}>
            {seasonName}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="border border-gray-400 rounded px-2 py-1 text-gray-600"
        placeholder="keyword"
        defaultValue={keyword}
        onChange={(e) => setInputKeyword(e.target.value)}
      />
    </form>
  );
};

export default AnimeSearchForm;
