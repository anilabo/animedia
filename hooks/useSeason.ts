// これはカスタムフックではないので、のちにutilsに移動すること。
const seasons = [
  { name: "winter", number: 1 },
  { name: "spring", number: 2 },
  { name: "summer", number: 3 },
  { name: "fall", number: 4 },
];

// convert season name (as string) to season number (as integer)
export const seasonNum = (seasonName: string) => {
  return seasons.filter((season) => season.name == seasonName)[0]?.number;
};
