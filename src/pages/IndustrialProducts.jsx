import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ArrowRight, ArrowLeft, Cpu, Gauge, Cable, Monitor,
    Power, ToggleRight, Radio, Cog, Zap, Activity, Droplets,
    CheckCircle, Phone, MessageCircle
} from 'lucide-react';

// Fix #3 — Import from shared modules (no more duplication)
import { fadeUp, stagger, staggerSlow } from '../lib/animations';
import { BRAND_LOGOS } from '../lib/brandLogos';
import Reveal from '../components/Reveal';

import controlComponents from '../assets/machines/Industrial Products & Automation Spares/control components.webp';
import encoders from '../assets/machines/Industrial Products & Automation Spares/Encoders.webp';
import connectors from '../assets/machines/Industrial Products & Automation Spares/Industrial Connectors.webp';
import hmi from '../assets/machines/Industrial Products & Automation Spares/Industrial HMI.webp';
import powerSupply from '../assets/machines/Industrial Products & Automation Spares/Industrial Power Supply.webp';
import industrialSwitch from '../assets/machines/Industrial Products & Automation Spares/Industrial-Switch.webp';
import plc from '../assets/machines/Industrial Products & Automation Spares/plc.webp';
import relaysSensor from '../assets/machines/Industrial Products & Automation Spares/Relays sensor.webp';
import servoMotors from '../assets/machines/Industrial Products & Automation Spares/Servo motors.webp';
import vfdDrives from '../assets/machines/Industrial Products & Automation Spares/VFD Drives.webp';
import pressureSensor from '../assets/machines/Industrial Products & Automation Spares/water-pressure-sensor.webp';

import './IndustrialProducts.css';

/* ── Products Data ──
   Fix #5 — Icon stored as component reference, not pre-rendered JSX
   Fix #12 — width/height added to all images for CLS prevention
*/
const PRODUCTS = [
    {
        image: plc,
        title: 'PLC (Programmable Logic Controllers)',
        desc: 'High-performance PLCs from Siemens, Mitsubishi, Delta, and Omron for precise industrial process control and automation.',
        Icon: Cpu, iconSize: 24,
        tag: 'AUTOMATION',
        features: ['Multi-brand support', 'High-speed processing', 'Modular I/O expansion', 'Industrial communication protocols'],
        width: 400, height: 300,
    },
    {
        image: hmi,
        title: 'Industrial HMI Panels',
        desc: 'Touchscreen human-machine interfaces for intuitive operator control, real-time monitoring, and SCADA visualization.',
        Icon: Monitor, iconSize: 24,
        tag: 'INTERFACE',
        blendBg: true,
        features: ['Multi-touch displays', 'SCADA integration', 'Remote monitoring', 'Customizable dashboards'],
        width: 400, height: 300,
    },
    {
        image: vfdDrives,
        title: 'VFD Drives',
        desc: 'Variable frequency drives for precise motor speed control, energy efficiency, and smooth operation across all industrial applications.',
        Icon: Gauge, iconSize: 24,
        tag: 'DRIVES',
        blendBg: true,
        features: ['Energy savings up to 50%', 'Soft start/stop', 'Built-in PID control', 'Multi-motor management'],
        width: 400, height: 300,
    },
    {
        image: servoMotors,
        title: 'Servo Motors & Drives',
        desc: 'High-precision servo systems from Yaskawa, Delta, and Mitsubishi for positioning, robotics, and high-speed automation.',
        Icon: Cog, iconSize: 24,
        tag: 'MOTION CONTROL',
        blendBg: true,
        features: ['Sub-micron accuracy', 'High torque density', 'Fast response time', 'Integrated encoder feedback'],
        width: 400, height: 300,
    },
    {
        image: controlComponents,
        title: 'Control Components',
        desc: 'Push buttons, selector switches, indicator lights, and control panel accessories from Schneider Electric, Siemens, and ABB.',
        Icon: ToggleRight, iconSize: 24,
        tag: 'COMPONENTS',
        blendBg: true,
        features: ['IP65/IP67 rated', 'LED indicators', 'Emergency stop switches', 'Modular design'],
        width: 400, height: 300,
    },
    {
        image: encoders,
        title: 'Encoders',
        desc: 'Rotary and linear encoders for precise position and speed feedback in CNC machines, robotics, and conveyor systems.',
        Icon: Radio, iconSize: 24,
        tag: 'SENSING',
        blendBg: true,
        features: ['Incremental & absolute', 'High resolution', 'Shock & vibration resistant', 'Industrial-grade housing'],
        width: 400, height: 300,
    },
    {
        image: connectors,
        title: 'Industrial Connectors',
        desc: 'Heavy-duty connectors and cable assemblies for reliable power and signal transmission in harsh industrial environments.',
        Icon: Cable, iconSize: 24,
        tag: 'CONNECTIVITY',
        blendBg: true,
        features: ['IP68 waterproof', 'High current capacity', 'Quick disconnect', 'EMI shielding'],
        width: 400, height: 300,
    },
    {
        image: powerSupply,
        title: 'Industrial Power Supply',
        desc: 'DIN-rail mount switching power supplies with wide input range, overcurrent protection, and high MTBF for mission-critical systems.',
        Icon: Power, iconSize: 24,
        tag: 'POWER',
        blendBg: true,
        features: ['24V/48V DC output', '150% peak load', 'Short circuit protection', 'Wide temperature range'],
        width: 400, height: 300,
    },
    {
        image: industrialSwitch,
        title: 'Industrial Ethernet Switches',
        desc: 'Managed and unmanaged industrial switches for reliable factory-floor networking, Profinet, and EtherNet/IP communication.',
        Icon: Activity, iconSize: 24,
        tag: 'NETWORKING',
        blendBg: true,
        features: ['Gigabit speeds', 'Redundant ring topology', 'DIN-rail mounting', 'Wide temp operation'],
        width: 400, height: 300,
    },
    {
        image: relaysSensor,
        title: 'Relays & Sensors',
        desc: 'Industrial relays, proximity sensors, photoelectric sensors, and safety devices for automated detection and control circuits.',
        Icon: Zap, iconSize: 24,
        tag: 'DETECTION',
        blendBg: true,
        features: ['Proximity & photoelectric', 'Safety-rated relays', 'Long sensing range', 'IO-Link compatible'],
        width: 400, height: 300,
    },
    {
        image: pressureSensor,
        title: 'Pressure Sensors',
        desc: 'Precision pressure transmitters and sensors for hydraulic, pneumatic, and process control applications with analog/digital output.',
        Icon: Droplets, iconSize: 24,
        tag: 'MEASUREMENT',
        blendBg: true,
        features: ['0.1% accuracy', 'Stainless steel housing', '4-20mA / 0-10V output', 'Hazardous area certified'],
        width: 400, height: 300,
    },
];

const IndustrialProducts = () => {
    return (
        <main className="products-page">

            {/* ── Hero Banner ── */}
            <section className="products-hero" aria-label="Products hero">
                <div className="products-hero__bg" aria-hidden="true" />
                <div className="products-hero__grid" aria-hidden="true" />
                <motion.div
                    className="products-hero__content"
                    initial="hidden"
                    animate="visible"
                    variants={staggerSlow}
                >
                    <motion.div className="products-hero__breadcrumb" variants={fadeUp}>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Industrial Products</span>
                    </motion.div>
                    <motion.h1 className="products-hero__title" variants={fadeUp}>
                        Industrial Products<br />
                        <span className="products-hero__accent">&amp; Automation Spares</span>
                    </motion.h1>
                    <motion.p className="products-hero__subtitle" variants={fadeUp}>
                        Premium industrial automation components from world-leading manufacturers.
                        PLCs, HMIs, VFDs, servo drives, sensors, and more — all backed by
                        expert technical support and competitive pricing.
                    </motion.p>
                    <motion.div className="products-hero__stats" variants={fadeUp}>
                        <div className="products-hero__stat">
                            <span className="products-hero__stat-value">11+</span>
                            <span className="products-hero__stat-label">Product Categories</span>
                        </div>
                        <span className="products-hero__stat-divider" />
                        <div className="products-hero__stat">
                            <span className="products-hero__stat-value">{BRAND_LOGOS.length}+</span>
                            <span className="products-hero__stat-label">Global Brands</span>
                        </div>
                        <span className="products-hero__stat-divider" />
                        <div className="products-hero__stat">
                            <span className="products-hero__stat-value">24/7</span>
                            <span className="products-hero__stat-label">Technical Support</span>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ── Products Grid ── */}
            <section className="products-catalog section" id="catalog" aria-labelledby="catalog-heading">
                <div className="container">
                    <Reveal className="products-catalog__header text-center">
                        <motion.span className="section-label" variants={fadeUp}>OUR PRODUCTS</motion.span>
                        <motion.h2 id="catalog-heading" variants={fadeUp}>Complete Automation Product Range</motion.h2>
                        <motion.p className="section-desc" variants={fadeUp}>
                            Authorized distribution of industrial automation components from top global brands.
                            Every product is backed by our technical expertise and after-sales support.
                        </motion.p>
                    </Reveal>

                    <Reveal className="products-catalog__grid">
                        {/* Fix #5, #12 — Icon components + width/height on all images */}
                        {PRODUCTS.map(({ image, title, desc, Icon, iconSize, tag, features, blendBg, width, height }) => (
                            <motion.article className="product-card" key={title} variants={fadeUp}>
                                <div className="product-card__image-wrap">
                                    <img
                                        src={image}
                                        alt={title}
                                        width={width}
                                        height={height}
                                        className={`product-card__image${blendBg ? ' product-card__image--blend' : ''}`}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="product-card__overlay" />
                                    <span className="product-card__tag">{tag}</span>
                                </div>
                                <div className="product-card__body">
                                    <div className="product-card__icon"><Icon size={iconSize} /></div>
                                    <h3 className="product-card__title">{title}</h3>
                                    <p className="product-card__desc">{desc}</p>
                                    <ul className="product-card__features">
                                        {features.map(f => (
                                            <li key={f}>
                                                <CheckCircle size={13} aria-hidden="true" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href="https://wa.me/919876543210"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="product-card__enquiry"
                                    >
                                        Enquire Now <ArrowRight size={14} />
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </Reveal>
                </div>
            </section>

            {/* ── Brands ── */}
            <section className="products-brands section" aria-labelledby="brands-heading">
                <div className="container">
                    <Reveal className="products-brands__header text-center">
                        <motion.span className="section-label section-label--light" variants={fadeUp}>AUTHORIZED DISTRIBUTOR</motion.span>
                        <motion.h2 id="brands-heading" variants={fadeUp}>Trusted Global Brands</motion.h2>
                        <motion.p className="section-desc section-desc--light" variants={fadeUp}>
                            We are authorized to supply genuine products from the world&apos;s
                            leading industrial automation manufacturers.
                        </motion.p>
                    </Reveal>

                    <Reveal className="products-brands__grid">
                        {BRAND_LOGOS.map(({ src, name }) => (
                            <motion.div className="brand-logo-card" key={src} variants={fadeUp}>
                                <img
                                    src={src}
                                    alt={name}
                                    className="brand-logo-card__image"
                                    loading="lazy"
                                    decoding="async"
                                    width={160}
                                    height={80}
                                />
                            </motion.div>
                        ))}
                    </Reveal>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="products-cta section" aria-label="Call to action">
                <div className="container">
                    <Reveal className="products-cta__content text-center" variants={staggerSlow}>
                        <motion.h2 variants={fadeUp}>Need Industrial Automation Products?</motion.h2>
                        <motion.p variants={fadeUp}>
                            Get competitive pricing on genuine automation components with expert
                            technical support. Request a quote or talk to our engineers today.
                        </motion.p>
                        <motion.div className="products-cta__actions" variants={fadeUp}>
                            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="btn btn-gold">
                                <MessageCircle size={16} /> Get a Quote on WhatsApp
                            </a>
                            <Link to="/" className="btn btn-ghost">
                                <ArrowLeft size={16} /> Back to Home
                            </Link>
                        </motion.div>
                    </Reveal>
                </div>
            </section>

        </main>
    );
};

export default IndustrialProducts;
