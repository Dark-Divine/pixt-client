"use client"

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from "motion/react"
import 'swiper/css';
import 'swiper/css/navigation';

export default function SingleProductPageComponent() {
    return (
        <div className="container mx-auto w-full h-full ">
            <div className="min-h-screen flex items-center h-full">
                <div className="flex gap-6 h-full w-full ">
                    <motion.div className="w-full h-fit rounded-2xl overflow-hidden" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}>
                        <Swiper
                            pagination={{
                                type: 'progressbar',
                            }}
                            navigation={true}
                            modules={[Navigation]}
                            slidesPerView={1}
                        >
                            <SwiperSlide>
                                <Image src="/test.png" width={1920} height={1080} alt="" className="w-full h-full object-cover rounded-3xl" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/test.png" width={1920} height={1080} alt="" className="w-full h-full object-cover rounded-3xl" />
                            </SwiperSlide>
                        </Swiper>
                    </motion.div>
                    <div className="w-full h-full flex flex-col gap-6 pt-2 p-6 rounded-3xl">
                        <h2 className="font-bold text-2xl backdrop-blur-xl">0R-Multiplayer Towtruck v2</h2>
                        <div className="flex gap-2 items-center">
                            <div className="h-9 px-2 rounded-lg border border-white/10 w-fit bg-white/5 flex items-center justify-center">qb core</div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-2 pt-2 flex-wrap">
                                <p className="flex items-center font-bold text-2xl sm:text-3xl leading-tight line-clamp-1" >
                                    €62.50
                                </p>
                                <span className="line-through text-sm text-white/30">
                                    €89.29
                                </span>
                                <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">-30%</span>
                            </div>
                            <button className="w-fit font-semibold px-12 h-12 overflow-hidden rounded-2xl relative bg-linear-to-t from-blue-500 to-blue-400 shadow-md shadow-blue-500/40 flex items-center justify-center">
                                {/* <div className="absolute w-9 h-9 bottom-0 right-0 bg-white z-10 rounded-full blur-xl shadow-md shadow-white"></div> */}
                                Add to Cart
                            </button>
                        </div>
                        <div>
                            <p>
                                JG HUD is the all-in-one HUD you’ve been searching for - and the last one you’ll ever need. With over 25 component styles, deep layout control, server default profiles, full ultrawide support, integrated vehicle controls, and more than a dozen other features, nothing else comes close. It’s compatible with everything from vMenu and custom frameworks to QBCore, Qbox, and ESX for out of the box RP integration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[800px]"></div>

        </div>
    )
}
