import { CardWithTitle, SimpleCard } from "@shared/ui/components";
import { BaseLayout } from "@shared/ui";

function App() {
  return (
    <BaseLayout>
      <div className="my-10 w-48">
      <CardWithTitle title="starship">
        mdfkmg
      </CardWithTitle>
      </div>

      <SimpleCard>
        simple
      </SimpleCard>
    </BaseLayout>
  );
}

export default App;
