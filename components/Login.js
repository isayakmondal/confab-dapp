import Image from "next/image";
import { useMoralis } from "react-moralis";
// import profilePic from '../public/images/pic.png'
import background from '../public/images/metaverse-background.jpg'
import confabLogo from '../public/images/confab-logo-color.png'
// import Initialzing from "./Initialzing";

function Login() {
    const { authenticate} = useMoralis();


    return (
        <div className="bg-black relative">
           
            <div className="flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-4">
               {/* <h1>Confab Dapp</h1> */}
                <Image
                    className="object-cover rounded-full " 
                    src={confabLogo}
                    height={200}
                    width={200}
                    
                />
                
                <button 
                    onClick={authenticate}
                    className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Login to the Metaverse
                </button>
            </div>
            {/* <div className="flex flex-col absolute z-50 max-h-3.5 w-full items-center justify-center space-y-4">
                    <p className=" text-xl text-yellow-500  ">A decentralized chatting application.</p>
            </div> */}

            <div className="w-full h-screen">
                <Image
                    src={background}
                    layout="fill"
                    objectFit="cover"
                    quality='100'
                    unoptimized="true"
                />
            </div>
        </div>
    )
}

export default Login