import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Import Components
import Hero from "../components/Hero";

export default function Home() {

    const [heroData, setHeroData] = useState({});

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}`)
            .then(res => {
                setHeroData(res.data);
            })
            .catch(err => {
                alert('There was an error retrieving data')
            })
    });

    return (
        <div className="container flex items-center mx-auto justify-center">
            <Hero src="/images/hero-example.png" />
        </div>
    )
}