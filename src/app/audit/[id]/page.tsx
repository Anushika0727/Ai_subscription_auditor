type Props = {
    params: Promise<{ id: string }>;
  };
  
  export default async function PublicAuditPage({ params }: Props) {
    const { id } = await params;
  
    return (
      <main className="p-8">
        <h1 className="text-2xl font-semibold">Public Audit</h1>
        <p className="mt-4">Audit ID: {id}</p>
      </main>
    );
  }