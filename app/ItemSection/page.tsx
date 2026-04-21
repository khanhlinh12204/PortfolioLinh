"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Link from 'next/link';
import SkillSection from './skillcmSection/page';
import SoftSkillSoftDesign from './skillmSection/page';



const AppSkill = () => {
    return (

        <div>
            <div className="relative z-40">
                <SkillSection />
            </div>
            <div className="relative z-40">
                < SoftSkillSoftDesign/>
            </div>

        </div>


    );
};

export default AppSkill;