import {Head} from "@inertiajs/react";
import PizzaStatus from "../Profile/Partials/PizzaStatus";
import { useEffect } from "react";

export default function Show({pizza})  {
    useEffect(() =>{
        const interval = setInterval(() =>{
            router.reload({only:['pizza']});
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    },[]);

    return (
        <div className="max-w-3xl mx-auto py-12">
            <Head title={"Order #" + pizza.id} />
            <div className="py-8">
                <svg
                    className="w-32 h-32 rotate-12 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="64"
                    height="64"
                    viewBox="0 0 100 100"
                >
                    <g>
                        <path
                            d="M40.9,57.6c2.8-2.8,7.4-2.8,10.3,0c2.8,2.8,2.8,7.4,0,10.3c-2.8,2.8-7.4,2.8-10.3,0C38.1,65,38.1,60.3,40.9,57.6z"
                            fill="#ffffff"
                        />
                        <path
                            d="M61.5,37c2.8-2.8,7.4-2.8,10.3,0c2.8,2.8,2.8,7.4,0,10.3c-2.8,2.8-7.4,2.8-10.3,0C58.7,44.4,58.7,39.7,61.5,37z"
                            fill="#ffffff"
                        />
                        <path
                            d="M45.2,12.1c2.8-2.8,7.4-2.8,10.3,0c2.8,2.8,2.8,7.4,0,10.3c-2.8,2.8-7.4,2.8-10.3,0C42.4,19.5,42.4,14.9,45.2,12.1z"
                            fill="#ffffff"
                        />
                        <path
                            d="M36.7,0C16.5,0,0,16.5,0,36.7s16.5,36.7,36.7,36.7s36.7-16.5,36.7-36.7S56.9,0,36.7,0z M40.9,67.9
                                c-4.5,4.5-11.9,4.5-16.4,0c-4.5-4.5-4.5-11.9,0-16.4c4.5-4.5,11.9-4.5,16.4,0C45.5,56,45.5,63.4,40.9,67.9z M67.9,40.9
                                c-4.5,4.5-11.9,4.5-16.4,0c-4.5-4.5-4.5-11.9,0-16.4c4.5-4.5,11.9-4.5,16.4,0C72.4,29,72.4,36.4,67.9,40.9z M45.2,24.4
                                c-4.5,4.5-11.9,4.5-16.4,0c-4.5-4.5-4.5-11.9,0-16.4c4.5-4.5,11.9-4.5,16.4,0C49.7,12.5,49.7,19.9,45.2,24.4z"
                            fill="#ff0000"
                        />
                    </g>
                </svg>
            </div>

            <PizzaStatus currentStatus={pizza.status}></PizzaStatus>
            <div className="text-center mt-4">
                <p className="text-lg">{pizza.chef} started{pizza.status.toLowerCase()} your order<span className="underline font-semibold">{pizza.last_updated}</span></p>
            </div>
        </div>
    )
}
