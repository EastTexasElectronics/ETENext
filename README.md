<div align="center" id="top"> 
  <!-- You can add a representative image or gif of the application here -->
  <img src="/src/assets/images/Brand Kit/Logo Files/Logo_White_Blue/Logo_White_Blue.png" alt="ETE LOGO" />

  &#xa0;
</div>

<h1 align="center">East Texas Electronics - NextJS 14 App</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/EastTexasElectronics/ETENext?color=56BEB8">
  <img alt="Github language count" src="https://img.shields.io/github/languages/count/EastTexasElectronics/ETENext?color=56BEB8">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/EastTexasElectronics/ETENext?color=56BEB8">
  <img alt="License" src="https://img.shields.io/github/license/EastTexasElectronics/ETENext?color=56BEB8">
</p>

## About ##

East Texas Electronics is a cutting-edge Next.js application designed to showcase the best in modern web development. Leveraging Next.js 14's App Routing.

## Features ##

User authentication with Clerk;\
Responsive UI with Tailwind CSS;\
Real-time data fetching using Prisma;

## Technologies ##

This project utilizes the following technologies:

- [Next.js](https://nextjs.org/) (Version 14)
- [Clerk](https://clerk.dev/) for authentication
- [Prisma](https://www.prisma.io/) as the database ORM
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [TypeScript](https://www.typescriptlang.org/) for type-safe code

(Plus all other technologies listed in the package summary at the bottom)

## Requirements ##

Before you begin, ensure you have both [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/) installed on your machine.

## Starting ##

```bash
# Clone this project
$ git clone https://github.com/EastTexasElectronics/ETENext

# Navigate to the project directory
$ cd east_texas_electronics

# Install dependencies
$ npm install

# Start the development server
$ npm run dev

# The server will launch on <http://localhost:3000>
```

### EnvInfo

```
**System:**
- OS: Windows 11 10.0.22631
- CPU: (16) x64 11th Gen Intel(R) Core(TM) i7-11700K @ 3.60GHz
- Memory: 22.91 GB / 31.81 GB 

**Binaries:**
- Node: 20.12.2
- npm: 10.5.2

**Browsers:**
- Edge: Chromium (124.0.2478.51)
- Internet Explorer: 11.0.22621.3527

**npmPackages:**
- @auth/prisma-adapter: ^1.6.0 => 1.6.0
- @clerk/nextjs: ^5.0.2 => 5.0.2
- @prisma/client: ^5.12.1 => 5.13.0
- @tabler/icons-react: ^2.46.0 => 2.47.0
- @tailwindcss/typography: ^0.5.10 => 0.5.12
- @types/markdown-it: ^13.0.7 => 13.0.7
- @types/node: 20.11.5 => 20.11.5
- @types/react: 18.2.48 => 18.2.48
- @types/react-big-calendar: ^1.8.9 => 1.8.9
- @types/react-dom: 18.2.18 => 18.2.18
- @vercel/analytics: ^1.2.2 => 1.2.2
- @vercel/speed-insights: ^1.0.10 => 1.0.10
- autoprefixer: ^10.4.17 => 10.4.19
- date-fns: ^3.6.0 => 3.6.0
- eslint: 8.56.0 => 8.56.0
- eslint-config-next: ^14.1.0 => 14.2.3
- gray-matter: ^4.0.3 => 4.0.3
- markdown-it: ^14.1.0 => 14.1.0
- next: ^14.1.0 => 14.2.3
- next-auth: ^5.0.0-beta.16 => 5.0.0-beta.16
- next-sitemap: ^4.2.3 => 4.2.3
- next-themes: ^0.2.1 => 0.2.1
- nodemailer: ^6.9.13 => 6.9.13
- postcss: ^8.4.33 => 8.4.38
- prettier: 3.2.4 => 3.2.4
- prettier-plugin-tailwindcss: 0.5.11 => 0.5.11
- prisma: ^5.12.1 => 5.13.0
- react: ^18.2.0 => 18.2.0
- react-big-calendar: ^1.11.6 => 1.11.6
- react-dom: ^18.2.0 => 18.2.0
- sharp: ^0.33.2 => 0.33.3
- tailwind-merge: ^2.2.0 => 2.3.0
- tailwindcss: ^3.4.1 => 3.4.3
- typescript: ^5.3.3 => 5.4.5
- vercel: ^34.1.1 => 34.1.2
```
##  License ##

This project is under the Proprietary License. For more details, see the [LICENSE](LICENSE.md) file.

Made with love by <a href="https://github.com/EastTexasElectronics" target="_blank">Robert Havelaar</a> using the TailNext template.

Credit to https://cruip.com/creating-a-sliding-text-animation-with-tailwind-css/

TODO LIST:
Fix Speed Insights Hydration error
Fix word scrolling on home hero


```
ETENext
├─ app
│  ├─ (blog)
│  │  ├─ blog
│  │  │  └─ page.tsx
│  │  └─ [slug]
│  │     └─ page.jsx
│  ├─ (dashboards)
│  │  └─ user-dashboard
│  │     └─ page.tsx
│  ├─ (legal)
│  │  ├─ privacy
│  │  │  └─ page.tsx
│  │  └─ terms
│  │     └─ page.tsx
│  ├─ (pages)
│  │  ├─ about
│  │  │  └─ page.tsx
│  │  ├─ appointment
│  │  │  └─ page.tsx
│  │  ├─ careers
│  │  │  └─ page.tsx
│  │  ├─ contact
│  │  │  └─ page.tsx
│  │  ├─ faqs
│  │  │  └─ page.tsx
│  │  ├─ pricing
│  │  │  └─ page.tsx
│  │  └─ services
│  │     ├─ data-recovery
│  │     │  └─ page.tsx
│  │     ├─ e-waste-recycling
│  │     │  └─ page.tsx
│  │     ├─ it-support
│  │     │  └─ page.tsx
│  │     ├─ page.tsx
│  │     ├─ repairs
│  │     │  └─ page.tsx
│  │     └─ software-website-app-development
│  │        └─ page.tsx
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ loading.tsx
│  ├─ page.tsx
│  ├─ sign-in
│  │  └─ [[...sign-in]]
│  │     └─ page.tsx
│  └─ sign-up
│     └─ [[...sign-up]]
│        └─ page.tsx
├─ components.json
├─ LICENSE.md
├─ middleware.ts
├─ next-sitemap.config.js
├─ next.config.js
├─ package.json
├─ postcss.config.js
├─ prisma
│  └─ schema.prisma
├─ public
│  └─ favicon.ico
├─ README.md
├─ src
│  ├─ assets
│  │  ├─ iconSVG
│  │  │  ├─ google.svg
│  │  │  ├─ microsoft.svg
│  │  │  ├─ repairIcon.svg
│  │  │  ├─ spinner.svg
│  │  │  ├─ supportIcon.svg
│  │  │  ├─ techSupportIcon.svg
│  │  │  └─ webDevIcon.svg
│  │  ├─ images
│  │  │  ├─ .gitkeep
│  │  │  ├─ aboutHero.webp
│  │  │  ├─ Brand Kit
│  │  │  │  ├─ Brand Guidelines.pdf
│  │  │  │  ├─ Logo Files
│  │  │  │  │  ├─ 3D Logo Mockup.jpg
│  │  │  │  │  ├─ Logo_Black
│  │  │  │  │  │  ├─ Logo_Black.ai
│  │  │  │  │  │  ├─ Logo_Black.eps
│  │  │  │  │  │  ├─ Logo_Black.jpg
│  │  │  │  │  │  ├─ Logo_Black.pdf
│  │  │  │  │  │  ├─ Logo_Black.png
│  │  │  │  │  │  ├─ Logo_Black.psd
│  │  │  │  │  │  └─ Logo_Black.svg
│  │  │  │  │  ├─ Logo_Blue_White
│  │  │  │  │  │  ├─ Logo_Blue_White.ai
│  │  │  │  │  │  ├─ Logo_Blue_White.eps
│  │  │  │  │  │  ├─ Logo_Blue_White.jpg
│  │  │  │  │  │  ├─ Logo_Blue_White.pdf
│  │  │  │  │  │  ├─ Logo_Blue_White.png
│  │  │  │  │  │  ├─ Logo_Blue_White.psd
│  │  │  │  │  │  └─ Logo_Blue_White.svg
│  │  │  │  │  ├─ Logo_White_Black
│  │  │  │  │  │  ├─ Logo_White_Black.ai
│  │  │  │  │  │  ├─ Logo_White_Black.eps
│  │  │  │  │  │  ├─ Logo_White_Black.jpg
│  │  │  │  │  │  ├─ Logo_White_Black.pdf
│  │  │  │  │  │  ├─ Logo_White_Black.png
│  │  │  │  │  │  ├─ Logo_White_Black.psd
│  │  │  │  │  │  └─ Logo_White_Black.svg
│  │  │  │  │  └─ Logo_White_Blue
│  │  │  │  │     ├─ Logo_White_Blue.ai
│  │  │  │  │     ├─ Logo_White_Blue.eps
│  │  │  │  │     ├─ Logo_White_Blue.jpg
│  │  │  │  │     ├─ Logo_White_Blue.pdf
│  │  │  │  │     ├─ Logo_White_Blue.png
│  │  │  │  │     ├─ Logo_White_Blue.psd
│  │  │  │  │     └─ Logo_White_Blue.svg
│  │  │  │  └─ Social Media Kit
│  │  │  │     ├─ Etsy
│  │  │  │     │  ├─ 1_Etsy Cover Image.jpg
│  │  │  │     │  ├─ 1_Etsy Profile Image.jpg
│  │  │  │     │  ├─ 1_Etsy Shop Banner.jpg
│  │  │  │     │  └─ 1_Etsy Shop Icon.jpg
│  │  │  │     ├─ Facebook
│  │  │  │     │  ├─ 1_Facebook Cover Image.jpg
│  │  │  │     │  └─ 1_Facebook Profile Image.jpg
│  │  │  │     ├─ Instagram
│  │  │  │     │  └─ 1_Instagram Profile Image.jpg
│  │  │  │     ├─ LinkedIn
│  │  │  │     │  ├─ 1_LinkedIn Background Photo.jpg
│  │  │  │     │  ├─ 1_LinkedIn Company Logo 300x300.jpg
│  │  │  │     │  ├─ 1_LinkedIn Company Logo 400x400.jpg
│  │  │  │     │  └─ 1_LinkedIn Cover Photo.jpg
│  │  │  │     ├─ Pinterest
│  │  │  │     │  └─ 1_Pinterest Profile Image.jpg
│  │  │  │     ├─ Twitter
│  │  │  │     │  ├─ 1_Twitter Header Image.jpg
│  │  │  │     │  └─ 1_Twitter Profile Image.jpg
│  │  │  │     └─ Youtube
│  │  │  │        ├─ 1_Youtube Cover Image.jpg
│  │  │  │        └─ 1_Youtube Profile Image.jpg
│  │  │  ├─ dataHero.png
│  │  │  ├─ dataPrivacy.png
│  │  │  ├─ defaultBlogImage.png
│  │  │  ├─ heroSoftware.png
│  │  │  ├─ homeHeroImg.png
│  │  │  ├─ itSupportHero.png
│  │  │  ├─ recyclingHero.png
│  │  │  ├─ repairPrivacy.png
│  │  │  ├─ repairQuality.png
│  │  │  ├─ SEO.png
│  │  │  ├─ UnderConstruction.gif
│  │  │  └─ welcomeRobot.webp
│  │  └─ styles
│  │     ├─ base.css
│  │     ├─ Hero.module.css
│  │     └─ theme-image.module.css
│  ├─ components
│  │  ├─ atoms
│  │  │  ├─ BackgroundBeams.tsx
│  │  │  ├─ BackgroundGradient.tsx
│  │  │  ├─ BookingButton.tsx
│  │  │  ├─ BookingModalButton.tsx
│  │  │  ├─ CookieBanner.tsx
│  │  │  ├─ FlipTooltip.tsx
│  │  │  ├─ Icons.tsx
│  │  │  ├─ LearnMoreButton.tsx
│  │  │  ├─ Logo.tsx
│  │  │  ├─ TextGenerateEffect.tsx
│  │  │  ├─ ThemeProviders.tsx
│  │  │  ├─ Toast.tsx
│  │  │  ├─ ToggleDarkMode.tsx
│  │  │  └─ ToggleMenu.tsx
│  │  ├─ common
│  │  │  ├─ Background.tsx
│  │  │  ├─ BookingCTA.tsx
│  │  │  ├─ BreadCrumbs.tsx
│  │  │  ├─ Collapse.tsx
│  │  │  ├─ CookieSettings.tsx
│  │  │  ├─ CTA.tsx
│  │  │  ├─ DividerLine.tsx
│  │  │  ├─ Dropdown.tsx
│  │  │  ├─ FileUpload.tsx
│  │  │  ├─ Form.tsx
│  │  │  ├─ Headline.tsx
│  │  │  ├─ ItemGrid.tsx
│  │  │  ├─ ItemTeam.tsx
│  │  │  ├─ ItemTestimonial.tsx
│  │  │  ├─ RequestModal.tsx
│  │  │  ├─ ScheduleForm.tsx
│  │  │  ├─ Timeline.tsx
│  │  │  └─ WidgetWrapper.tsx
│  │  ├─ ui
│  │  │  ├─ aspect-ratio.tsx
│  │  │  ├─ button.tsx
│  │  │  ├─ card.tsx
│  │  │  ├─ checkbox.tsx
│  │  │  ├─ combo-box.tsx
│  │  │  ├─ command.tsx
│  │  │  ├─ dialog.tsx
│  │  │  ├─ dropdown-menu.tsx
│  │  │  ├─ input.tsx
│  │  │  ├─ menubar.tsx
│  │  │  ├─ navigation-menu.tsx
│  │  │  ├─ pagination.tsx
│  │  │  ├─ popover.tsx
│  │  │  ├─ scroll-area.tsx
│  │  │  ├─ select.tsx
│  │  │  ├─ separator.tsx
│  │  │  ├─ switch.tsx
│  │  │  ├─ table.tsx
│  │  │  ├─ tabs.tsx
│  │  │  ├─ textarea.tsx
│  │  │  └─ tooltip.tsx
│  │  └─ widgets
│  │     ├─ Announcement.tsx
│  │     ├─ BookingModal.tsx
│  │     ├─ Calender.tsx
│  │     ├─ CalenderLarge.tsx
│  │     ├─ CallToAction.tsx
│  │     ├─ CallToAction2.tsx
│  │     ├─ CompanyDetails.tsx
│  │     ├─ Comparison.tsx
│  │     ├─ Contact.tsx
│  │     ├─ Content.tsx
│  │     ├─ CookieConsent.tsx
│  │     ├─ CPortalHeader.tsx
│  │     ├─ DigitalAssets.tsx
│  │     ├─ FAQs.tsx
│  │     ├─ FAQs2.tsx
│  │     ├─ FAQs3.tsx
│  │     ├─ FAQs4.tsx
│  │     ├─ Features.tsx
│  │     ├─ Features2.tsx
│  │     ├─ Features4.tsx
│  │     ├─ Footer.tsx
│  │     ├─ Header.tsx
│  │     ├─ Hero.tsx
│  │     ├─ Hero2.tsx
│  │     ├─ HomeHero.tsx
│  │     ├─ NewsletterCTA.tsx
│  │     ├─ Pricing.tsx
│  │     ├─ Pricing2.tsx
│  │     ├─ RequestFeed.tsx
│  │     ├─ ResponsiveCardGrid.tsx
│  │     ├─ ScheduleManager.tsx
│  │     ├─ ServiceCards.tsx
│  │     ├─ SignInForm.tsx
│  │     ├─ SocialProof.tsx
│  │     ├─ Stats.tsx
│  │     ├─ Steps.tsx
│  │     ├─ Tabs.tsx
│  │     ├─ Team.tsx
│  │     ├─ Team2.tsx
│  │     ├─ Testimonials.tsx
│  │     ├─ Testimonials2.tsx
│  │     ├─ UnderConstruction.tsx
│  │     └─ UserDetailsForm.tsx
│  ├─ config.js
│  ├─ content
│  │  ├─ .gitkeep
│  │  ├─ blog
│  │  │  ├─ emerging-tech-trends.md
│  │  │  ├─ home-automation-101.md
│  │  │  ├─ how-to-pick-a-laptop.md
│  │  │  ├─ how-to-protect-your-devices-from-cyber-threats.md
│  │  │  ├─ maximizing-productivity-with-dual-monitors.md
│  │  │  ├─ password-managers.md
│  │  │  ├─ recycling-disposing-electronics-responsibly.md
│  │  │  ├─ the-benefits-of-renewable-enegery-in-electronics.md
│  │  │  ├─ the-evolution-of-gaming-consoles.md
│  │  │  ├─ the-importance-of-regular-data-backups.md
│  │  │  └─ tips-for-optimizing-home-offices.md
│  │  ├─ privacy
│  │  │  └─ privacy.md
│  │  └─ terms
│  │     └─ terms.md
│  ├─ prisma
│  │  └─ schema.prisma
│  ├─ shared
│  │  ├─ data
│  │  │  ├─ global.data.tsx
│  │  │  ├─ loaderFile.js
│  │  │  └─ pages
│  │  │     ├─ about.data.tsx
│  │  │     ├─ contact.data.tsx
│  │  │     ├─ dataRecovery.data.tsx
│  │  │     ├─ eWasteRecycling.data.tsx
│  │  │     ├─ faqs.data.tsx
│  │  │     ├─ home.data.tsx
│  │  │     ├─ itServices.data.tsx
│  │  │     ├─ pricing.data.tsx
│  │  │     ├─ repairServices.data.tsx
│  │  │     ├─ services.data.tsx
│  │  │     └─ softwareWebsiteAppDevelopment.data.tsx
│  │  └─ types.d.ts
│  └─ utils
│     ├─ constants
│     │  ├─ constants.ts
│     │  ├─ descriptions.ts
│     │  ├─ seoKeywords.ts
│     │  ├─ text.ts
│     │  ├─ titles.ts
│     │  └─ urls.ts
│     ├─ db.ts
│     ├─ formatContactInfo.tsx
│     ├─ hooks
│     │  ├─ useCollapse.tsx
│     │  └─ useWindowSize.tsx
│     ├─ permalinks.js
│     ├─ posts.js
│     └─ utils.ts
├─ tailwind.config.js
├─ tailwind.config.ts
├─ tsconfig.json
└─ vscode.tailwind.json

```