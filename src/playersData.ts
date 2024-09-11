// Define the TypeScript interface for a player
interface Player {
  id: number;
  name: string;
  team: string;
  nationality: string;
  jerseyNumber: number;
  age: number;
  imageURL: string;
}

// Create an array of player objects
export const players: Player[] = [
  {
    id: 1,
    name: "Lionel Messi",
    team: "Paris Saint-Germain",
    nationality: "Argentine",
    jerseyNumber: 30,
    age: 37,
    imageURL:
      "https://cdn.britannica.com/34/212134-050-A7289400/Lionel-Messi-2018.jpg",
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    team: "Al Nassr",
    nationality: "Portuguese",
    jerseyNumber: 7,
    age: 39,
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
  },
  {
    id: 3,
    name: "Kylian Mbappé",
    team: "Paris Saint-Germain",
    nationality: "French",
    jerseyNumber: 7,
    age: 25,
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg/1200px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg",
  },
  {
    id: 4,
    name: "Kevin De Bruyne",
    team: "Manchester City",
    nationality: "Belgian",
    jerseyNumber: 17,
    age: 33,
    imageURL:
      "https://assets.goal.com/images/v3/blt9f731d15f08d02a3/Kevin%20De%20Bruyne%20Manchester%20City%202024.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  },
  {
    id: 5,
    name: "Robert Lewandowski",
    team: "Barcelona",
    nationality: "Polish",
    jerseyNumber: 9,
    age: 36,
    imageURL:
      "https://cdn.punchng.com/wp-content/uploads/2023/11/12211629/Lewandowski-e1699820189383.jpeg",
  },
  {
    id: 6,
    name: "Virgil van Dijk",
    team: "Liverpool",
    nationality: "Dutch",
    jerseyNumber: 4,
    age: 33,
    imageURL:
      "https://static.independent.co.uk/2023/10/23/09/4a6c1786916775e6fb2440e8bcdf556bY29udGVudHNlYXJjaGFwaSwxNjk4MDk3MjYx-2.74237081.jpg",
  },
  {
    id: 7,
    name: "Sergio Ramos",
    team: "Sevilla",
    nationality: "Spanish",
    jerseyNumber: 4,
    age: 38,
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpr_e2_jHgAs1EOs3jq8QtQ_5nnP7IPEpesg&s",
  },
  {
    id: 8,
    name: "Enzo Fernández",
    team: "Chelsea",
    nationality: "Argentine",
    jerseyNumber: 8,
    age: 22,
    imageURL:
      "https://cdn.resfu.com/media/img_news/enzo-fernandez--en-el-chelsea-aston-villa-de-premier-league-2022-23--efe-tolga-akmen.jpg?size=1000x&lossy=1",
  },
];


