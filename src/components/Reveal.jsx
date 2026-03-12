/* ── Shared Reveal Component ──
   Uses Framer Motion whileInView (internal observer pooling)
   instead of per-instance useInView to reduce IntersectionObserver count.
*/
import { motion } from 'framer-motion';
import { stagger } from '../lib/animations';

export default function Reveal({ children, className, as = 'div', variants = stagger, ...props }) {
    const Tag = motion[as] ?? motion.div;
    return (
        <Tag
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={variants}
            className={className}
            {...props}
        >
            {children}
        </Tag>
    );
}
