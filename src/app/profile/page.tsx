import ProfilePage from '@/components/Page/ProfilePage'
import { getSession } from '@/lib'

export default async function Page() {
  const { id, token } = await getSession()
  return <ProfilePage userId={id} token={token} />
}
