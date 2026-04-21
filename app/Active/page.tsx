"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BeyondSection from './activenk/page';
import AcademicActivities from './activeht/page';
import EnhancedBloomingGallery from './achievett/page';


const AppActive = () => {
    return (

        <div>
            <div className="relative z-40">
                <BeyondSection />
            </div>
            <div className="relative z-40">
                <AcademicActivities/>
            </div>
             <div className="relative z-40">
                <EnhancedBloomingGallery/>
            </div>
           
          

        </div>


    );
};

export default AppActive;