"use client"

import Image from "next/image"
import { AdviceType } from "../page"
import { useEffect, useState, useTransition } from "react";
import { getAdvice } from "../utils/getAdvice";



export default function Advice() {
    const [advice, setAdvice] = useState<AdviceType["slip"]>()
    const [isPending, startTransition] = useTransition()
    const [loading, setLoading] = useState(false)

    const fetchAdvice = async () => {
        setLoading(true)
        try {
            const data = await getAdvice();
            setAdvice(data.slip);
        } catch {
            throw new Error('Internal Error')
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        startTransition(() => {
            fetchAdvice();
        })
    }, []);

    const handleSubmit = () => {
        startTransition(() => {
            fetchAdvice();
        })
    };

    return (
        <article className="max-w-[500px] w-full flex flex-col items-center justify-center relative gap-7 bg-dark-grayish-blue rounded-md p-5">
            {loading && (
                <p className="text-primary-neon-green">Loading...</p>
            )}
            {!loading && advice && (
                <>
                    <h1 className="text-sm text-primary-neon-green">ADVICE #{advice.id}</h1>
                    <p className="text-xl text-white text-center">&quot;{advice.advice}&quot;</p>
                </>
            )}


            <Image src={'/pattern-divider-desktop.svg'} alt="divider" width={10} height={10} className="w-full mb-8" />
            <div className="bg-primary-neon-green p-3 rounded-full absolute -bottom-5 hover:shadow-primary-hover">

                <button className="w-full flex flex-col items-center justify-center" disabled={isPending} onClick={handleSubmit}>
                    <Image src={'/icon-dice.svg'} alt="Dice fron random advice " width={30} height={30} className="" />
                </button>

            </div>
        </article>
    )
}