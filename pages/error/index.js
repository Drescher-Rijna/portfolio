import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ErrorMessage = () => {

    return(
        <div className="h-full">
            <div className="bg-green-600 pl-4 py-1" >
                <Link href='/'>
                    <img src="/logo-black-white.png" className="w-14 cursor-pointer" />
                </Link>
            </div>
            <div className="grid place-content-center place-items-center gap-y-12 my-20 mx-4 md:my-40 md:mx-20 lg:mx-48 lg:my-32 xl:mx-72 xl:my-40">
                <h2 className="heading-h2 text-center">
                    Der skete en fejl under forsendelsen. Være sikker på at alle felter er udfyldt korrekt.
                </h2>
                
                <FontAwesomeIcon icon={faTimes} className="text-red-600 text-9xl text-center" />
                
                <Link href='/'>
                    <h3 className="heading-h3 cursor-pointer text-center hover:text-green-600 hover:underline">
                        Du kan komme tilbage til kontaktformen ved at klikke her
                    </h3>
                </Link>
            </div>
        </div>
                
    );
}

export default ErrorMessage;