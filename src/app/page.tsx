import ActiveBrand from "@/components/ajo-custom/active-brand";
import ActiveCreate from "@/components/ajo-custom/active-create";
import AjoCoin from "@/components/ajo-custom/ajo-coin";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ActiveBrand />
      <ActiveCreate />
      <AjoCoin/>
    </main>
  );
}
