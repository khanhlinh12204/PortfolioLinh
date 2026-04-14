"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SkillsSection from './Skillcm';
import SoftSkillSection from './Skillm';



const AppSkill = () => {
    return (

        <div>
            <div className="relative z-40">
                <SkillsSection />
            </div>
            <div className="relative z-40">
                <SoftSkillSection/>
            </div>

        </div>


    );
};

export default AppSkill;