import FestivalClientContent from './FestivalClientContent'

export default function FestivalPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  return <FestivalClientContent params={params} />
}
