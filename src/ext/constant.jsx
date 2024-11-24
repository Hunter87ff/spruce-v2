import { Music, Trophy, Shield, Users, Command, Ticket } from 'lucide-react';


export const features = [
    {
      icon: <Trophy className="w-6 h-6 text-indigo-500" />,
      title: "Tournament Management",
      description: "Organize and manage esports tournaments with ease. Create brackets, track scores, and manage participants seamlessly."
    },
    {
      icon: <Command className="w-6 h-6 text-indigo-500" />,
      title: "Scrim Management",
      description: "Schedule and coordinate practice matches. Find scrims, manage teams, and track performance."
    },
    {
      icon: <Music className="w-6 h-6 text-indigo-500" />,
      title: "Music System",
      description: "High-quality music playback with playlist support, queue management, and filters."
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-500" />,
      title: "Moderation Tools",
      description: "Keep your server safe with advanced moderation features including auto-mod, warning system, and detailed logs."
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: "Role Management",
      description: "Automated role assignment, custom role menus, and advanced permission management."
    },
    {
      icon: <Ticket className="w-6 h-6 text-indigo-500" />,
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
            { name: 'API Reference', url: '#' },
            { name: 'Status', url: '#' },
            { name: 'Change Log', url: '#' },
            { name: 'Roadmap', url: '#' },
            { name: 'Blog', url: '#' }
        ]
    },
    company: {
        title: 'Company',
        links: [
            { name: 'About Us', url: '/about' },
            { name: 'Terms of Service', url: '#' },
            { name: 'Privacy Policy', url: '#' },
            { name: 'Cookie Policy', url: '#' },
            { name: 'Contact', url: '#' }
        ]
    },
    support: {
        title: 'Support',
        links: [
            { name: 'Help Center', url: '#' },
            { name: 'Community', url: '#' },
            { name: 'Server Templates', url: '#' },
            { name: 'FAQ', url: '#' },
            { name: 'Premium Support', url: '#' }
        ]
    }
};


