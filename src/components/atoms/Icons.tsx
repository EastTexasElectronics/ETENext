import dynamic from 'next/dynamic';
import { ComponentType, SVGProps } from 'react';
import microsoftColor from '~/assets/iconSVG/microsoft.svg';
import googleColor from '~/assets/iconSVG/google.svg';
import repairIcon from '~/assets/iconSVG/repairIcon.svg';
import techSupportIcon from '~/assets/iconSVG/techSupportIcon.svg';
import webDevIcon from '~/assets/iconSVG/webDevIcon.svg';

// String type for SVG paths
type IconType = {
  [key: string]: ComponentType<SVGProps<SVGSVGElement>> | string;
};


// Dynamic imports for icons
const dynamicIcons: IconType = {
  twitter: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBrandTwitter)),
  github: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBrandGithub)),
  windows: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBrandWindows)),
  google: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBrandGoogle)),
  sun: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconSun)),
  moon: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconMoon)),
  menu: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconMenu)),
  x: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconX)),
  chevronDown: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconChevronDown)),
  chevronUp: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconChevronUp)),
  check: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconCheck)),
  chevronRight: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconChevronRight)),
  minus: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconMinus)),
  arrowDownRight: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconArrowDownRight)),
  plus: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconPlus)),
  rss: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconRss)),
  chevronLeft: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconChevronLeft)),
  facebook: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBrandFacebook)),
  instagram: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBrandInstagram)),
  adjustments: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconAdjustments)),
  award: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconAward)),
  book: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBook)),
  linkedin: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBrandLinkedin)),
  bulb: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBulb)),
  circlesRelation: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconCirclesRelation)),
  clock: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconClock)),
  flame: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconFlame)),
  heartHandshake: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconHeartHandshake)),
  homeEco: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconHomeEco)),
  mail: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconMail)),
  mapPin: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconMapPin)),
  number1: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconNumber1)),
  number2: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconNumber2)),
  number3: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconNumber3)),
  number4: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconNumber4)),
  number5: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconNumber5)),
  palette: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconPalette)),
  phoneCall: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconPhoneCall)),
  puzzle2: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconPuzzle2)),
  scale: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconScale)),
  thumbUp: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconThumbUp)),
  user: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconUser)),
  headset: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconHeadset)),
  help: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconHelp)),
  messages: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconMessages)),
  arrowDown: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconArrowDown)),
  arrowsRightLeft: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconArrowsRightLeft)),
  tailwind: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBrandTailwind)),
  components: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconComponents)),
  download: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconDownload)),
  listCheck: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconListCheck)),
  rocket: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconRocket)),
  calendarEvent: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconCalendarEvent)),
  chevronsRight: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconChevronsRight)),
  urgent: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconUrgent)),
  heartHandShake: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconHeartHandshake)),
  codeCircle2: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconCodeCircle2)),
  cpu: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconCpu)),
  // Static icons
  microsoftColor,
  googleColor,
  repairIcon,
  techSupportIcon,
  webDevIcon,
};
export default dynamicIcons;
