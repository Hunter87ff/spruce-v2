import { Music, Trophy, Shield, Users, Command, Ticket } from 'lucide-react';
import configs from './config.json';

export const features = [
    {
      icon: <Trophy className="w-6 h-6 " />,
      title: "Tournament Management",
      description: "Organize and manage esports tournaments with ease. Create tournaments, assign role, and manage groups seamlessly."
    },
    {
      icon: <Command className="w-6 h-6 " />,
      title: "Scrim Management",
      description: "Schedule and coordinate practice matches. Find scrims, manage teams, and track performance."
    },
    {
      icon: <Music className="w-6 h-6 " />,
      title: "Music System",
      description: "High-quality music playback with playlist support, queue management, and filters."
    },
    {
      icon: <Shield className="w-6 h-6 " />,
      title: "Moderation Tools",
      description: "Keep your server safe with advanced moderation features including auto-mod, warning system, and detailed logs."
    },
    {
      icon: <Users className="w-6 h-6 " />,
      title: "Role Management",
      description: "Automated role assignment, custom role menus, and advanced permission management."
    },
    {
      icon: <Ticket className="w-6 h-6 " />,
      title: "Ticketing System",
      description: "Handle support requests efficiently with an advanced ticketing system including categories and staff management."
    }
  ];

export const footerSections = {
    // features: {
    //   title: 'Features',
    //   links: [
    //     'Tournament System',
    //     'Scrim Management',
    //     'Music Player',
    //     'Moderation',
    //     'Role Management',
    //     'Ticketing'
    //   ]
    // },
    resources: {
        title: 'Resources',
        links: [
            { name: 'Documentation', url: '#' },
            { name: 'Status', url: '#' },
            { name: 'Change Log', url: '#' },
            { name: 'Blog', url: '#' }
        ]
    },
    company: {
        title: 'Company',
        links: [
            { name: 'About Us', url: '/about' },
            { name: 'Terms of Service', url: '/terms' },
            { name: 'Privacy Policy', url: '/privacy' },
            { name: 'Contact', url: '#' }
        ]
    },
    support: {
        title: 'Support',
        links: [
            { name: 'Help Center', url: configs.SUPPORT_SERVER },
            { name: 'Community', url: configs.SUPPORT_SERVER },
            { name: 'Server Templates', url: '#' },
            { name: 'FAQ', url: '#' },
        ]
    }
};


