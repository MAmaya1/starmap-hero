import React from 'react';

export default function Hero({ heroData }) {
    return (
        <div className='mx-auto flex w-792 h-373 bg-white justify-between shadow-sm mobile:h-full mobile:flex-col-reverse'>
            <div className='flex flex-col w-70 justify-between h-full pl-4 pt-3 pb-3 mobile:w-full mobile:p-10'>
                <div>
                    <p className='text-3xl mobile:text-5xl' data-testid='hero-header'>{heroData.header}</p>
                    <p className='text-lg mt-5 mobile:text-3xl'>{heroData.content}</p>
                </div>

                <img
                    src='/images/hero.png'
                    className='w-0.5 mx-auto mt-10 mb-12 hidden mobile:inline-block'
                />

                <button className='bg-button text-white text-lg font-bold py-3 cursor-pointer shadow-sm rounded-lg hover:bg-hover transition duration-500 ease-in-out mobile:text-3xl'>{heroData.cta}</button>
            </div>
            <div className='flex-auto mr-0'>
                <img
                    src='/images/hero.png'
                    className='h-full float-right mobile:hidden'
                />
            </div>
        </div>
    );
}