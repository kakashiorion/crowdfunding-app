import LocationCell from 'src/components/Admin/Location/LocationCell'

type LocationPageProps = {
  id: number
}

const LocationPage = ({ id }: LocationPageProps) => {
  return <LocationCell id={id} />
}

export default LocationPage
