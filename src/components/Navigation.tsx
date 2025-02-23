import { motion } from "framer-motion";
import { Briefcase, User, Lightning, EnvelopeSimple } from '@phosphor-icons/react';

const navItems = [
  { 
    name: 'Projects', 
    href: '#projects', 
    icon: (props: any) => <Briefcase weight="light" {...props} />
  },
  { 
    name: 'About', 
    href: '#about', 
    icon: (props: any) => <User weight="light" {...props} />
  },
  { 
    name: 'Skills', 
    href: '#skills', 
    icon: (props: any) => <Lightning weight="light" {...props} />
  },
  { 
    name: 'Contact', 
    href: '#contact', 
    icon: (props: any) => <EnvelopeSimple weight="light" {...props} />
  }
];

interface NavigationProps {
  isFixed: boolean;
  activeSection: string;
}

export default function Navigation({ isFixed, activeSection }: NavigationProps) {
  return (
    <nav className={`w-full backdrop-blur-xl z-50 transition-all duration-300
      ${isFixed ? 'fixed top-0 left-0 border-b border-white/10 bg-background/80' : 'relative bg-white/5'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex items-center justify-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className={`flex items-center gap-2 px-5 py-4 transition-all duration-300
                    ${isActive 
                      ? 'text-white font-medium bg-white/10' 
                      : 'text-white/50 hover:text-white hover:bg-white/5'}
                    relative group`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  <item.icon 
                    className={`w-5 h-5 transition-all duration-300
                      ${isActive ? 'text-primary' : 'group-hover:text-primary'}`}
                    strokeWidth={1.5}
                  />
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
