import FestivalsPage from "@/components/Page/FestivalsPage";
import { getSession } from "@/lib";

export default async function Page() {
  const { name, token } = await getSession();
  return <FestivalsPage name={name} token={token} />;
}
