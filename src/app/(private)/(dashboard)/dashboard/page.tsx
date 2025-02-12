import TestTable from "../components/TestTable";

export default function Page() {
  return (
    <div className="container h-screen m-7">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <TestTable />
    </div>
  );
}
