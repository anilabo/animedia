import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const AnimeSearchForm = () => {
  const router = useRouter();
  const { year, season, keyword } = router.query;
  const yearsArray = [...Array(9)].map((_, i) => i + 2014).reverse();
  const seasonsArray = ["spring", "summer", "fall", "winter"];

  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedSeason, setSelectedSeason] = useState<string>("");

  useEffect(() => {
    if (year && season) {
      setSelectedYear(year as string);
      setSelectedSeason(season as string);
    }
  }, [year, season]);

  useEffect(() => {
    if (selectedYear && selectedSeason) {
      const query = [`year=${selectedYear}`, `season=${selectedSeason}`].join(
        "&"
      );
      router.push(`/search?${query}`);
    }
  }, [selectedYear, selectedSeason]);

  return (
    <form className="flex gap-2">
      <select
        name="year"
        id="year"
        className="border border-gray-400 rounded px-2 py-1 text-gray-600"
        onChange={(e) => setSelectedYear(e.target.value)}
        value={year}
      >
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
      />
    </form>
  );
};

export default AnimeSearchForm;
