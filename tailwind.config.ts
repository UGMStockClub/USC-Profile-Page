// filepath: tailwind.config.ts
import { Config } from 'tailwindcss';
import flowbite from 'flowbite/plugin';

const config: Config = {
    content: [
        "./src/**/*.{html,svelte,ts}",
        "./node_modules/flowbite-svelte/**/*.{html,svelte,ts}"
    ],
    theme: {
        extend: {
            // Add your customizations here.
        },
    },
    plugins: [
        flowbite
    ]
};

export default config;