/* ── Shared Framer Motion Animation Variants ── */

export const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
};

export const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

export const staggerSlow = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};
