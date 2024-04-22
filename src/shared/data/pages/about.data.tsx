import URLs from '~/constants/urls';
import dynamicIcons from '~/components/atoms/Icons';
import { FeaturesProps, HeroProps } from '~/shared/types';
// TODO UPDATE IMAGE
import aboutHero from '~/assets/images/aboutHero.webp';

// Hero
export const hero2About: HeroProps = {
  title: 'Crafting Excellence in East Texas',
  subtitle: 'Our skilled team of electronics experts delivers top-tier solutions and service.',
  tagline: 'Dedicated to Quality, Committed to You',
  callToAction: {
    text: 'View jobs',
    href: URLs.CAREERS,
  },
  callToAction2: {
    text: 'Contact us',
    href: URLs.CONTACT,
  },
  image: {
    src: aboutHero,
    alt: 'About Us Hero Image',
  },
};

// Defining Values items using a consistent structure and using dynamic icons
const VALUE_ITEMS = {
  INTEGRITY: {
    title: 'Integrity',
    description:
      'Upholding the highest standards of honesty, transparency, and ethical behavior in all our actions and decisions, fostering trust and credibility with our customers, employees, and partners.',
    icon: dynamicIcons.homeEco,
  },
  INNOVATION: {
    title: 'Innovation',
    description:
      'Embracing a culture of creativity, curiosity, and forward thinking, continually seeking new ideas and technologies to drive growth, solve complex problems, and stay ahead in a rapidly evolving industry.',
    icon: dynamicIcons.user,
  },
  EXCELLENCE: {
    title: 'Excellence',
    description:
      'Striving for excellence in everything we do, from the quality of our products and services to the level of customer support we provide, setting the bar high and consistently exceeding expectations.',
    icon: dynamicIcons.bulb,
  },
  COLLABORATION: {
    title: 'Collaboration',
    description:
      'Valuing collaboration, teamwork, and mutual respect, recognizing that our collective strength lies in our ability to leverage diverse perspectives, skills, and experiences to achieve common goals.',
    icon: dynamicIcons.thumbUp,
  },
  CUSTOMER_FOCUS: {
    title: 'Customer Focus',
    description:
      'Putting the needs and satisfaction of our customers first, listening attentively to their feedback, understanding their challenges, and delivering innovative solutions and exceptional experiences that add tangible value to their lives and businesses.',
    icon: dynamicIcons.adjustments,
  },
  COMMUNITY_ENGAGEMENT: {
    title: 'Community Engagement',
    description:
      'Actively engaging with and giving back to the communities we serve, demonstrating social responsibility, supporting local initiatives, and contributing to the greater good beyond our business objectives.',
    icon: dynamicIcons.heartHandshake,
  },
};

// Defining culture items using a consistent structure and using dynamic icons
const CULTURE_ITEMS = {
  COMMITMENT_TO_EXCELLENCE: {
    title: 'Commitment to Excellence',
    description:
      'Demonstrating a relentless pursuit of quality in both our products and services, ensuring that every customer interaction reflects our dedication to delivering the best possible experience.',
    icon: dynamicIcons.circlesRelation,
  },
  INNOVATION_AND_ADAPTABILITY: {
    title: 'Innovation and Adaptability',
    description:
      'Fostering a culture that embraces creativity, encourages innovative thinking, and readily adapts to technological advancements and market changes to stay ahead of the curve.',
    icon: dynamicIcons.palette,
  },
  TEAM_COLLABORATION: {
    title: 'Team Collaboration',
    description:
      'Encouraging open communication, collaboration, and mutual respect among team members, recognizing that diverse perspectives contribute to stronger solutions and a more cohesive work environment.',
    icon: dynamicIcons.book,
  },
  CUSTOMER_CENTRIC_APPROACH: {
    title: 'Customer-Centric Approach',
    description:
      'Placing the needs and satisfaction of our customers at the forefront of everything we do, striving to exceed expectations and build long-lasting relationships based on trust and integrity.',
    icon: dynamicIcons.puzzle2,
  },
  CONTINUOUS_LEARNING_AND_DEVELOPMENT: {
    title: 'Continuous Learning and Development',
    description:
      'Promoting a culture of continuous learning and professional development, empowering employees to expand their skills, stay informed about industry trends, and pursue personal and career growth opportunities.',
    icon: dynamicIcons.flame,
  },
  COMMUNITY_ENGAGEMENT_AND_RESPONSIBILITY: {
    title: 'Community Engagement and Responsibility',
    description:
      'Actively participating in and giving back to the local community, demonstrating social responsibility, and maintaining ethical business practices that positively impact our stakeholders and the environment.',
    icon: dynamicIcons.scale,
  },
};

// Our Mission
export const featuresFourAbout: FeaturesProps = {
  id: 'features-four-on-about',
  hasBackground: false,
  header: {
    title: 'Our Mission',
    subtitle:
      'At East Texas Electronics LLC, our mission is to empower individuals and businesses through seamless connectivity solutions while enhancing lives through innovation, reliability, and exceptional service. Guided by a commitment to excellence, integrity, and community, we strive to deliver cutting-edge technology and personalized support that exceeds expectations, fosters growth, and creates lasting value for our customers, employees, and partners alike.',
    tagline: 'Empowering Connectivity & Enhancing Lives',
  },
};

// Our Values
export const featuresFourAboutTwo: FeaturesProps = {
  id: 'features-four-on-about-two',
  hasBackground: false,
  header: {
    title: 'Guiding Principles: Our Core Values',
    subtitle: 'Foundations for Integrity, Innovation, and Customer-Centricity',
    tagline: 'Values',
  },
  isAfterContent: true,
  columns: 2,
  items: [
    VALUE_ITEMS.INTEGRITY,
    VALUE_ITEMS.INNOVATION,
    VALUE_ITEMS.EXCELLENCE,
    VALUE_ITEMS.COLLABORATION,
    VALUE_ITEMS.CUSTOMER_FOCUS,
    VALUE_ITEMS.COMMUNITY_ENGAGEMENT,
  ],
};

// Our Culture
export const features3About: FeaturesProps = {
  id: 'featuresThree-on-about',
  hasBackground: false,
  columns: 3,
  header: {
    title: 'Foundations of Excellence: Cultivating a Dynamic Culture at East Texas Electronics, LLC.',
    subtitle: 'Cultivating a Dynamic Culture at East Texas Electronics, LLC.',
    tagline: 'culture',
  },
  items: [
    CULTURE_ITEMS.COMMITMENT_TO_EXCELLENCE,
    CULTURE_ITEMS.INNOVATION_AND_ADAPTABILITY,
    CULTURE_ITEMS.TEAM_COLLABORATION,
    CULTURE_ITEMS.CUSTOMER_CENTRIC_APPROACH,
    CULTURE_ITEMS.CONTINUOUS_LEARNING_AND_DEVELOPMENT,
    CULTURE_ITEMS.COMMUNITY_ENGAGEMENT_AND_RESPONSIBILITY,
  ],
};
