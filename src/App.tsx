import { CardWithTitle, SimpleCard } from "@shared/ui/components";
import { BaseLayout } from "@shared/ui";
import { DataContext } from "@app/context";
import { useInitData } from "@app/hooks";

function App() {
  const data = useInitData();

  return (
    <DataContext.Provider value={data}>
      <BaseLayout>
        <div className="my-10 w-48">
          <CardWithTitle title="starship">mdfkmg</CardWithTitle>
        </div>

        <SimpleCard>simple</SimpleCard>
      </BaseLayout>
    </DataContext.Provider>
  );
}

export default App;
