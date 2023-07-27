import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
    return([
        {title:'Guitar-Remix - Nosotros'},
        {description: 'Venta de guitarras, blog de música y más'}
    ]
    )
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}


function Nostros(){
    return(
        <main className="contenedor nosotros">
            <h2 className="heading"> Nosotros</h2>
            <div className="contenido">
                <img src={imagen} alt='imagen sobre nosotros'/>
                <div>
                    <p>Suspendisse potenti. Nunc egestas suscipit nibh a suscipit. 
                        Morbi ornare a nunc a aliquam. Maecenas vestibulum ligula lacus, vel finibus arcu euismod id. Nunc at nibh urna. 
                        Cras faucibus et mauris a efficitur. Fusce blandit et augue ultrices finibus. 
                        Sed volutpat, libero id condimentum lobortis, augue mauris tempus turpis, 
                        non facilisis enim quam ut justo.</p>

                        <p>Suspendisse potenti. Nunc egestas suscipit nibh a suscipit. 
                        Morbi ornare a nunc a aliquam. Maecenas vestibulum ligula lacus, vel finibus arcu euismod id. Nunc at nibh urna. 
                        Cras faucibus et mauris a efficitur. Fusce blandit et augue ultrices finibus. 
                        Sed volutpat, libero id condimentum lobortis, augue mauris tempus turpis, 
                        non facilisis enim quam ut justo.</p>
                </div>
            </div>
        </main>
    )
}

export default Nostros