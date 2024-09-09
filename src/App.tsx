import { DataContext } from "@app/context";
import { useInitData } from "@app/hooks";
import { CharacterOfTheDay } from "@pages/CharacterOfTheDay";

function App() {
  const data = useInitData();

  return (
    <DataContext.Provider value={data}>
      <CharacterOfTheDay />
    </DataContext.Provider>
  );
}

export default App;
