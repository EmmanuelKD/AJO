import MainLayout from "./layout/main-layout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ActiveBrand />
      <ActiveCreate />
      <AjoCoin />
    </main>
  );
}
