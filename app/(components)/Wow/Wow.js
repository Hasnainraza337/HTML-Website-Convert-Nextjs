"use client"
import { useEffect, useState } from "react";
import wow from "wowjs"

export default function Wow() {
    useEffect(() => {
        new wow.WOW().init()
    })
    return (
        <></>
    )
}


// export default function Wow() {
//     const [initialized, setInitialized] = useState(false);

//     useEffect(() => {
//         let isMounted = true;

//         if (typeof window !== 'undefined' && !initialized && isMounted) {
//             import('wowjs').then((wow) => {
//                 new wow.WOW().init();
//                 setInitialized(true);
//             });
//         }

//         return () => {
//             isMounted = false;
//         };
//     }, [initialized]);

//     return <></>;
// }


