"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroShowcaseSplitOverlay from '@/components/sections/hero/HeroShowcaseSplitOverlay';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TeamCardFour from '@/components/sections/team/TeamCardFour';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Users, Zap, Trophy, MessageCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="small"
      sizing="smallSizeLargeTitles"
      background="circleGradient"
      cardStyle="noise"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="outline"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766146965424-2jp7a998.jpg"
          logoAlt="DomFoot"
          brandName="DomFoot"
          button={{
            text: "Join Now",
            href: "contact"
          }}
          className="bg-background border-b border-accent/20"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroShowcaseSplitOverlay
          title="Play Football Like Never Before"
          description="Connect with players, find matches, and grow your game on DomFoot. The ultimate platform for football enthusiasts aged 20-30."
          tags={["Find Matches", "Build Teams", "Connect Players", "Competitive Leagues"]}
          buttons={[
            {
              text: "Get Started Today",
              href: "contact"
            },
            {
              text: "Watch Features",
              href: "features"
            }
          ]}
          showcaseImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766146968636-11cki1vc.jpg"
          showcaseImageAlt="Football pitch action"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766146968636-11cki1vc.jpg"
          imageAlt="Stadium background"
          showDimOverlay={true}
          className="relative overflow-hidden"
          titleClassName="text-5xl font-bold"
          descriptionClassName="text-xl text-foreground/80"
          buttonContainerClassName="flex gap-4"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Why DomFoot Is Your Game Changer. We bring football players together in one powerful community. Connect, compete, and grow with like-minded athletes."
          features={[
            {
              icon: Users,
              title: "Active Community",
              description: "Join thousands of football players and coaches building the ultimate sports network for competitive play."
            },
            {
              icon: Zap,
              title: "Match Finder",
              description: "Discover local matches, tournaments, and league opportunities instantly based on your skill level and preferences."
            },
            {
              icon: Trophy,
              title: "Competitive Leagues",
              description: "Organize and manage seasonal leagues with leaderboards, statistics tracking, and prize management systems."
            },
            {
              icon: MessageCircle,
              title: "Team Communication",
              description: "Built-in messaging and team coordination tools keep players connected before, during, and after matches."
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Everything You Need to Play"
          description="Powerful tools designed specifically for modern football players and team organizers"
          tag="Features"
          features={[
            {
              title: "Smart Match Discovery",
              description: "Find pickup games, league matches, and tournaments in your area. Filter by skill level, time, and location.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766146970603-zueu7s7y.jpg",
              imageAlt: "Player training"
            },
            {
              title: "Player Profiles & Stats",
              description: "Build your football profile showcasing your position, stats, achievements, and playing history for teams to discover.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766146973057-ej783ng0.jpg",
              imageAlt: "Team celebration"
            },
            {
              title: "Team Management",
              description: "Create and manage teams, organize rosters, schedule practices, and track player performance metrics in real-time.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766146974992-6vh0vc4v.jpg",
              imageAlt: "Coaching session"
            }
          ]}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardFour
          title="Meet Our Community Leaders"
          description="Top players and coaches shaping the DomFoot ecosystem"
          textboxLayout="default"
          team={[
            {
              id: "1",
              name: "Marcus Silva",
              role: "Elite Midfielder",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766146976893-l1yqov0c.jpg"
            },
            {
              id: "2",
              name: "Alex Thompson",
              role: "Striker Coach",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766146978779-rxps5twz.jpg"
            },
            {
              id: "3",
              name: "Jordan Martinez",
              role: "Defensive Leader",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766146980140-hhwpsjan.jpg"
            },
            {
              id: "4",
              name: "Chris O'Brien",
              role: "Tournament Organizer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766146981460-f2ikdhj2.jpg"
            },
            {
              id: "5",
              name: "David Petrov",
              role: "Goalkeeper Expert",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766146983660-xo80c0s8.jpg"
            },
            {
              id: "6",
              name: "Luis Santos",
              role: "League Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766146985399-b5ghdpsf.jpg"
            }
          ]}
          animationType="slide-up"
          useInvertedBackground="noInvert"
          speed={35}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="DomFoot completely changed how I find matches and connect with quality players. The community is supportive and the platform makes organizing games incredibly easy."
          rating={5}
          author="Marcus Silva, Professional Player"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766146987215-zt1xpxpu.jpg",
              alt: "Marcus Silva"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766146988981-hsbcj1qt.jpg",
              alt: "Community player"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766146990338-670g49re.jpg",
              alt: "Athlete"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766146991759-33jn3pcc.jpg",
              alt: "Player"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Common Questions"
          description="Everything you need to know about DomFoot and how to get started"
          faqs={[
            {
              id: "1",
              title: "How do I find matches on DomFoot?",
              content: "Use our match discovery tool to browse local games, tournaments, and leagues. Filter by skill level, location, date, and match type. Connect with organizers directly through the platform."
            },
            {
              id: "2",
              title: "Can I create and manage my own team?",
              content: "Absolutely. Create a team profile, invite players, manage rosters, schedule practices, and organize matches. Our team management tools handle all logistics."
            },
            {
              id: "3",
              title: "How are skill levels determined?",
              content: "Players set their own skill level (beginner to professional), and the community votes on accuracy. Your match history and stats help refine your ranking over time."
            },
            {
              id: "4",
              title: "Is DomFoot available in my area?",
              content: "DomFoot is expanding rapidly across regions. Check our coverage map and join the waitlist for your area. Early members get exclusive access to founding events."
            },
            {
              id: "5",
              title: "What are the membership plans?",
              content: "We offer free basic membership with match discovery and profile creation. Premium membership unlocks team management, advanced stats, and tournament organization tools."
            },
            {
              id: "6",
              title: "How do I contact player support?",
              content: "Email support@domfoot.com or use the in-app chat. Our team responds within 24 hours. Premium members get priority support."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766146993117-5k1htuz7.jpg"
          imageAlt="Football match action"
          mediaPosition="right"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Join DomFoot"
          title="Ready to Find Your Next Match?"
          description="Subscribe to DomFoot and get instant access to matches, connect with players in your area, and start building your football legacy today."
          useInvertedBackground="noInvert"
          inputPlaceholder="Enter your email"
          buttonText="Get Access"
          termsText="By joining DomFoot, you agree to our Terms of Service and Privacy Policy. Unsubscribe anytime."
          tagIcon={Zap}
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="DomFoot"
          columns={[
            {
              title: "Product",
              items: [
                {
                  label: "Find Matches",
                  href: "#"
                },
                {
                  label: "Build Teams",
                  href: "#"
                },
                {
                  label: "Tournaments",
                  href: "#"
                },
                {
                  label: "Leaderboards",
                  href: "#"
                }
              ]
            },
            {
              title: "Community",
              items: [
                {
                  label: "Players",
                  href: "#"
                },
                {
                  label: "Coaches",
                  href: "#"
                },
                {
                  label: "Organizers",
                  href: "#"
                },
                {
                  label: "Events",
                  href: "#"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "#"
                },
                {
                  label: "Blog",
                  href: "#"
                },
                {
                  label: "Careers",
                  href: "#"
                },
                {
                  label: "Contact",
                  href: "#"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Help Center",
                  href: "#"
                },
                {
                  label: "Community",
                  href: "#"
                },
                {
                  label: "Status",
                  href: "#"
                },
                {
                  label: "Feedback",
                  href: "#"
                }
              ]
            }
          ]}
          copyrightText="© 2025 DomFoot. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}