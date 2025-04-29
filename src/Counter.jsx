import React, { useState, useEffect } from 'react';

export default function CounterBox() {
    const [count, setCount] = useState(0);
    const [poster, setPoster] = useState(null);

    // Data usia dan film Ernest, lengkap dengan deskripsi & poster
    const filmData = {
        32: {
            title: 'Comic 8: Casino Kings',
            desc: 'Umur 32: Ernest muncul di "Comic 8: Casino Kings". Dari stand-up ke layar lebar, siap jadi aktor!',
            poster: '/comic8.jpg',
        },
        33: {
            title: 'Ngenest',
            desc: 'Umur 33: "Ngenest" jadi debut penyutradaraannya! Diangkat dari kisah hidup sendiri—relate abis!',
            poster: '/ngenest.jpg',
        },
        34: {
            title: 'Cek Toko Sebelah',
            desc: 'Umur 34: "Cek Toko Sebelah" meledak! Film keluarga yang bikin ketawa sekaligus nangis.',
            poster: '/cts.jpg',
        },
        36: {
            title: 'Susah Sinyal',
            desc: 'Umur 36: "Susah Sinyal" rilis. Drama ibu-anak dengan latar indah Sumba, tapi konflik hati tetap yang utama.',
            poster: '/susahsinyal.jpg',
        },
        37: {
            title: 'Imperfect',
            desc: 'Umur 37: Ernest jadi produser dan sutradara "Imperfect". Body positivity jadi tema yang powerful!',
            poster: '/imperfect.jpg',
        },
        40: {
            title: 'Gara-Gara Warisan',
            desc: 'Umur 40: Comeback ke depan layar di "Gara-Gara Warisan". Cerita warisan yang kocak tapi bikin mikir!',
            poster: '/warisan.jpg',
        },
    };
    
    useEffect(() => {
        if (filmData[count]) {
            alert(filmData[count].desc);
            setPoster(filmData[count].poster);
        } else {
            setPoster(null); // Tidak ada poster
        }
    }, [count]);

    const increment = () => {
        if (count < 100) setCount(prev => prev + 1);
    };

    const decrement = () => {
        if (count > 0) setCount(prev => prev - 1);
    };

    const reset = () => setCount(0);

    return (
        <div className="bg-gradient-galaxy-pastel min-h-screen flex flex-col items-center justify-center px-4 py-10">
            <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center">
                <h2 className="text-3xl font-bold text-purple-900 mb-6">Ernest Career Counter</h2>
                <div className="text-6xl font-extrabold text-purple-800 mb-6">{count}</div>
                <div className="flex justify-center gap-4 mb-6">
                    <button
                        onClick={decrement}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-sm"
                    >
                        -
                    </button>
                    <button
                        onClick={reset}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg shadow-sm"
                    >
                        Reset
                    </button>
                    <button
                        onClick={increment}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-sm"
                    >
                        +
                    </button>
                </div>
                <p className="text-sm text-gray-600">
                    Naikkan angkanya untuk melihat film yang dibuat Ernest di umur itu!
                </p>
            </div>

            {poster && (
                <div className="mt-8">
                    <img
                        src={poster}
                        alt="Poster Film Ernest"
                        className="w-64 rounded-xl shadow-md border border-gray-300"
                    />
                </div>
            )}
        </div>
    );
}
