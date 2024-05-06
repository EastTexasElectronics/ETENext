import dynamic from 'next/dynamic';
import { ComponentType, SVGProps } from 'react';


type IconType = {
  [key: string]: ComponentType<SVGProps<SVGSVGElement>> | string;
};

const dynamicIcons: IconType = {
  adjustments: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconAdjustments)),
  appWindow: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconAppWindow)),
  arrowDown: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconArrowDown)),
  arrowDownRight: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconArrowDownRight)),
  arrowsRightLeft: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconArrowsRightLeft)),
  award: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconAward)),
  book: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBook)),
  bulb: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBulb)),
  calendarEvent: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconCalendarEvent)),
  check: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconCheck)),
  chevronDown: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconChevronDown)),
  chevronLeft: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconChevronLeft)),
  chevronRight: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconChevronRight)),
  chevronUp: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconChevronUp)),
  chevronsRight: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconChevronsRight)),
  circlesRelation: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconCirclesRelation)),
  clock: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconClock)),
  cloudCode: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconCloudCode)),
  code: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconCode)),
  codeCircle2: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconCodeCircle2)),
  components: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconComponents)),
  cpu: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconCpu)),
  download: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconDownload)),
  facebook: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBrandFacebook)),
  flame: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconFlame)),
  github: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBrandGithub)),
  google: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBrandGoogle)),
  headset: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconHeadset)),
  heartHandShake: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconHeartHandshake)),
  heartHandshake: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconHeartHandshake)),
  help: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconHelp)),
  helpHexagon: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconHelpHexagon)),
  hipChat: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBrandHipchat)),
  homeEco: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconHomeEco)),
  instagram: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBrandInstagram)),
  linkedin: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBrandLinkedin)),
  listCheck: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconListCheck)),
  mail: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconMail)),
  mapPin: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconMapPin)),
  menu: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconMenu)),
  messages: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconMessages)),
  minus: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconMinus)),
  moon: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconMoon)),
  number1: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconNumber1)),
  network: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconNetwork)),
  number2: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconNumber2)),
  number3: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconNumber3)),
  number4: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconNumber4)),
  number5: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconNumber5)),
  palette: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconPalette)),
  phoneCall: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconPhoneCall)),
  plus: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconPlus)),
  puzzle2: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconPuzzle2)),
  recycle: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconRecycle)),
  rocket: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconRocket)),
  rss: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconRss)),
  scale: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconScale)),
  shieldLock: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconShieldLock)),
  sun: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconSun)),
  tailwind: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBrandTailwind)),
  urgent: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconUrgent)),
  user: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconUser)),
  thumbUp: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconThumbUp)),
  twitter: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBrandTwitter)),
  windows: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconBrandWindows)),
  x: dynamic(() => import('@tabler/icons-react').then((mod) => mod.IconX)),
};
export default dynamicIcons;
