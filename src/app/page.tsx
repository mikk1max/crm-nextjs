// import StatusLabel, { Status } from '@/app/components/status-label';
import AddCompanyButton from '@/app/components/add-company-button';
import ServerComponent from '@/app/components/server-component';
import ClientComponent from '@/app/components/client-component';
import ServerComponentCopy from '@/app/components/server-component-copy';

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl">Home page</h1>
      {/*<StatusLabel status={Status.Active}>Active label</StatusLabel>*/}
      {/*<StatusLabel status={Status.NotActive}>Not Active label</StatusLabel>*/}
      {/*<StatusLabel status={Status.Pending}>Pending label</StatusLabel>*/}
      {/*<StatusLabel status={Status.Suspended}>Suspended label</StatusLabel>*/}

      <AddCompanyButton />

      <ServerComponent />
      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent>
    </main>
  );
}
