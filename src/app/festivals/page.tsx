import FestivalsPage from "@/components/Page/FestivalsPage";
import { getSession } from "@/lib";

export default async function Festival() {
  const { name, token } = await getSession();
  return <FestivalsPage name={name} token={token} />;
}
