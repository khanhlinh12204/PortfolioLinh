"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import AboutHero from './Intro1';
import StorySection from './storysection';
import JourneySection from './funsection';
import LeadershipSection from './funsection';
import AchievementSection from './partsection';
import InternshipSection from './InternSection';
import AboutMeSection from './FavorSection';
import MindsetSection from './valueSection';
import GoalSection from './purposeSection';
import AboutSection from './StrenngthSection';
import CTASection from './ContactSection';

const Appdashboard = () => {
    return (

        <div>
            <div className="relative z-40">
                <AboutHero />
            </div>
            <div className="relative z-40">
                <AboutMeSection />
            </div>
            <div className="relative z-40">
                <LeadershipSection />
            </div>
            <div className="relative z-40">
                <InternshipSection />
            </div>
            <div className="relative z-40">
                <AchievementSection />
            </div>
            <div className="relative z-40">
                <StorySection />
            </div>
            <div className="relative z-40">
                <GoalSection />
            </div>
            {/* <div className="relative z-40">
                <AboutSection />
            </div> */}
            <div className="relative z-40">
                < MindsetSection />
            </div>
            <div className="relative z-40">
                <CTASection />
            </div>

        </div>


    );
};

export default Appdashboard;