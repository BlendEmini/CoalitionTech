import Image from "next/image";
import { Inter } from "next/font/google";
import Logo from "../public/HiringSkillsProject/logo.png";
import carousel1 from "../public/HiringSkillsProject/carousel1.jpg";
import carousel2 from "../public/HiringSkillsProject/carousel2.jpg";
import carousel3 from "../public/HiringSkillsProject/carousel3.jpg";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });
const slides = [
    { id: 1, img: carousel1 },
    { id: 2, img: carousel2 },
    { id: 3, img: carousel3 },
    { id: 4, img: carousel2 },
];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [firstMountain, setFirstMountain] = useState(true);
    const [secondMountain, setSecondMountain] = useState(false);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <main className="">
            <div className="hero w-screen h-screen text-center  flex justify-center flex-col">
                <h1 id="LA">LOSANGELES</h1>
                <h1 id="MT">MOUNTAINS</h1>
            </div>
            <div className="w-screen h-20  flex flex-col justify-center">
                <div className="flex justify-around section-1">
                    <div className="flex ">
                        <Image alt="img" src={Logo} />
                        <div className="">
                            <h5 id="LA-s">LOSANGELES</h5>
                            <h5 id="MT-s">MOUNTAINS</h5>
                        </div>
                    </div>
                    <div className="section-2 flex gap-4">
                        <a>01.History</a>
                        <a>02.Team</a>
                    </div>
                </div>
            </div>
            <div className="carousel">
                <Image
                    className="w-screen h-auto lg:h-screen"
                    alt="img"
                    src={slides[currentIndex].img}
                />
                <div className="md:flex hidden gap-4   justify-center -mt-32 bg-slate-800 opacity-80 ">
                    {slides.map((slides) => {
                        return (
                            <Image
                                key={slides.id}
                                className="w-56"
                                alt="img"
                                src={slides.img}
                            />
                        );
                    })}
                </div>
                <div className="flex justify-center">
                    {slides.map((slides, slidesIndex) => {
                        return (
                            <div
                                className=""
                                key={slidesIndex}
                                onClick={() => goToSlide(slidesIndex)}
                            >
                                ○
                            </div>
                        );
                    })}{" "}
                </div>
            </div>
            <div className="w-screen h-44 flex justify-center">
                <div className="section-4 flex justify-center gap-3">
                    <h1>02.</h1>
                    <h4>CLIMB</h4>
                    <p>
                        Cras scelerisque id quam sed dignissim Pellentesque urna
                        nunc, gravida quis hendrerit ac, tristique ut quam.
                        Vivamus suscipit dignissim tortor nec congue.{" "}
                    </p>
                </div>
            </div>
            <div className="last-section">
                <div className="bar w-screen h-10 flex justify-center">
                    <button
                        onClick={() => {
                            setFirstMountain(true);
                            setSecondMountain(false);
                        }}
                        className="btn px-2"
                    >
                        MOUNTAIN1
                    </button>
                    <button
                        onClick={() => {
                            setFirstMountain(false);
                            setSecondMountain(true);
                        }}
                        className="btn px-2"
                    >
                        MOUNTAIN1
                    </button>
                </div>
                {firstMountain ? (
                    <div className="mountain-1 w-screen">
                        <div className="disp w-96 h-60 div-sc">
                            <h1 className="txt-hb text-center">SCHEDULE</h1>
                            <div className="flex gap-6 justify-center ">
                                <div className="flex flex-col gap-2">
                                    <h3>25Nov2016</h3>
                                    <h3>28Nov2016</h3>
                                    <h3>18Dec2016</h3>
                                    <h3>07Jan2017</h3>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3>Vestibulum Vivierra</h3>
                                    <h3>Vestibulum Vivierra</h3>
                                    <h3>Vestibulum Vivierra</h3>
                                    <h3>Vestibulum Vivierra</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
                {secondMountain ? (
                    <div className="mountain-2">
                        <div className="disp w-96 h-60 div-sc">
                            <h1 className="txt-hb text-center">SCHEDULE</h1>
                            <div className="flex gap-6 justify-center ">
                                <div className="flex flex-col gap-2">
                                    <h3>25Nov2016</h3>
                                    <h3>28Nov2016</h3>
                                    <h3>18Dec2016</h3>
                                    <h3>07Jan2017</h3>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3>Vestibulum Vivierra</h3>
                                    <h3>Vestibulum Vivierra</h3>
                                    <h3>Vestibulum Vivierra</h3>
                                    <h3>Vestibulum Vivierra</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className="footer flex w-screen h-20">
                <div className="flex justify-between section-1 gap-5 lg:gap-96 ">
                    <div className="flex ">
                        <Image alt="img" className="opacity-50" src={Logo} />
                        <div className=" opacity-50">
                            <h5 className="from-neutral-50 ft">LOSANGELES</h5>
                            <h5 className="from-neutral-50 ft">MOUNTAINS</h5>
                        </div>
                    </div>
                    <div className="section-2 flex">
                        <p className="opacity-50 ft from-neutral-50">
                            COPYRIGHT 2016.ALL RIGHTS RESERVED
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
