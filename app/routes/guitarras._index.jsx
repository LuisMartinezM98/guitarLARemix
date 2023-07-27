import { useLoaderData } from '@remix-run/react'
import { getGuittaras} from '~/models/guitarras.server'
import ListadoGuitarras from '~/components/listado-guitarras'

export function meta(){
  return ([
    {title: 'GuitarLA - Tienda de Guitarras'},
    {descrpition: 'GuitarLA - nuestro catalogo de guitarras'}
  ])
}


export async function loader(){
  const guitarras = await getGuittaras()
  return guitarras.data
}

function Tienda() {

  const guitarras = useLoaderData()

  return (
      <ListadoGuitarras
      guitarras={guitarras}
      />
  )
}

export default Tienda