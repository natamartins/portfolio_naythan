import Image from 'next/image'
import React from 'react'
import ImgModel from '@/Images/projects-preview.png'

const Cards = ({ mobile, desktop }: any) => {
    return (
        <div className='card_all-projects'>
            <Image
                src={ImgModel}
                alt='Imagem dos projetos'
                width={500}

            />
            <span>
                <Image src={mobile} alt='' />
            </span>
            <span>
                <Image src={desktop} alt='' />
            </span>
        </div>
    )
}

export default Cards