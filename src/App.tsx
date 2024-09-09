import { CardWithTitle, SimpleCard } from "@shared/ui/components";
import { BaseLayout } from "@shared/ui";
import { DataContext } from "@app/context";

function App() {
  return (
    <DataContext.Provider value={null}>
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
