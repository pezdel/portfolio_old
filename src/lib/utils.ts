import type { Skills } from './types'

export const options = {
    rewind: true,
    gap: '.25rem',
    autoplay: true,
    arrows: false,
    height: '6rem',
    width: '5rem',
    speed: 300,
    interval: 2000,
};

export const skills: Skills[] = [
    { name: 'Typescript', icon: 'vscode-icons:file-type-typescript-official' },
    { name: 'Sveltekit', icon: 'devicon:svelte' },
    { name: 'React', icon: 'skill-icons:react-dark' },
    { name: 'Golang', icon: 'skill-icons:golang' },
    { name: 'Python', icon: 'logos:python' },
    { name: 'Postgres', icon: 'logos:postgresql' }
];


import pezdelImg from '$lib/static/pezdel.png';
export const pezdelInfo = {
    img: pezdelImg,
    name: 'Pezdel.com',
    link: 'https://www.pezdel.com',
    // github: 'https://github.com/pezdel/pezdel',
    details: 'Pezdel.com allows you to search timeseries data by patterns, rather than dates.',
    tech: [
        { name: 'SvelteKit', icon: 'devicon:svelte' },
        { name: 'Golang', icon: 'skill-icons:golang' },
        { name: 'Python', icon: 'logos:python' },
        { name: 'Supabase', icon: 'skill-icons:supabase-dark' },
        { name: 'Stripe', icon: 'logos:stripe' }
    ]
};

import pomoImg from '$lib/static/pomo.png';
export const pomoInfo = {
    img: pomoImg,
    name: 'Pomo-clone',
    link: 'https://pomo-clone.vercel.app/',
    github: 'https://github.com/pezdel/pomo-clone',
    details: ' A clone of pomodoro.io while learning web development.',
    tech: [
        { name: 'React', icon: 'skill-icons:react-dark' },
        { name: 'TailwindCss', icon: 'devicon:tailwindcss' },
    ]
};

import portfolioImg from '$lib/static/portfolio.png';
export const portfolioInfo = {
    img: portfolioImg,
    name: 'Portfolio',
    link: '/',
    github: 'https://github.com/pezdel/portfolio',
    details: 'This portfolio website.',
    tech: [
        { name: 'SvelteKit', icon: 'devicon:svelte' },
        { name: 'TailwindCss', icon: 'devicon:tailwindcss' },
    ]
};

