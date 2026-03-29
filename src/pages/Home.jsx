import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ArrowRight, ArrowDown, CheckCircle, Phone, MessageCircle,
    Wrench, Shield, Award, Users, TrendingUp, Zap, MapPin, Mail,
    Clock, Car, Bolt, HardHat, Workflow, Cpu, Gauge,
    Monitor, Cog, Cable, Power
} from 'lucide-react';

// Fix #3 — Import from shared modules (no more duplication)
import { fadeUp, fadeIn, stagger, staggerSlow } from '../lib/animations';
import { BRAND_LOGOS } from '../lib/brandLogos';
import Reveal from '../components/Reveal';

import img1 from '../assets/machines/Industrial Products & Automation Spares/plc.webp';
import img2 from '../assets/machines/Industrial Products & Automation Spares/Industrial HMI.webp';
import img5 from '../assets/machines/Industrial Products & Automation Spares/Relays sensor.webp';
import img7 from '../assets/machines/Industrial Products & Automation Spares/control components.webp';
import plcImg from '../assets/machines/Industrial Products & Automation Spares/plc.webp';
import hmiImg from '../assets/machines/Industrial Products & Automation Spares/Industrial HMI.webp';
import vfdImg from '../assets/machines/Industrial Products & Automation Spares/VFD Drives.webp';
import servoImg from '../assets/machines/Industrial Products & Automation Spares/Servo motors.webp';
import sensorImg from '../assets/machines/Industrial Products & Automation Spares/Relays sensor.webp';
import switchImg from '../assets/machines/Industrial Products & Automation Spares/Industrial-Switch.webp';
import controlImg from '../assets/machines/Industrial Products & Automation Spares/control components.webp';
import encoderImg from '../assets/machines/Industrial Products & Automation Spares/Encoders.webp';
import connectorImg from '../assets/machines/Industrial Products & Automation Spares/Industrial Connectors.webp';
import powerSupplyImg from '../assets/machines/Industrial Products & Automation Spares/Industrial Power Supply.webp';
import pressureSensorImg from '../assets/machines/Industrial Products & Automation Spares/water-pressure-sensor.webp';
import pressMachine1 from '../assets/machines/Industrial Products & Automation Spares/press-machine-1.webp';
import pressMachine2 from '../assets/machines/Industrial Products & Automation Spares/press-machine-2.webp';
import pressSpareImg from '../assets/machines/Industrial Products & Automation Spares/Press_spare.webp';
import pressMachineSpareImg from '../assets/machines/Industrial Products & Automation Spares/press_machine-spare.webp';
import './Home.css';

/* ── About Slideshow ── */
const ABOUT_SLIDES = [
    { src: plcImg, alt: 'PLC Controllers', width: 500, height: 500 },
    { src: hmiImg, alt: 'Industrial HMI Panel', blendBg: true, width: 500, height: 500 },
    { src: vfdImg, alt: 'VFD Drives', blendBg: true, width: 500, height: 500 },
    { src: servoImg, alt: 'Servo Motors', blendBg: true, width: 500, height: 500 },
    { src: controlImg, alt: 'Control Components', blendBg: true, width: 500, height: 500 },
    { src: encoderImg, alt: 'Encoders', blendBg: true, width: 500, height: 500 },
    { src: connectorImg, alt: 'Industrial Connectors', blendBg: true, width: 500, height: 500 },
    { src: powerSupplyImg, alt: 'Industrial Power Supply', blendBg: true, width: 500, height: 500 },
    { src: switchImg, alt: 'Industrial Ethernet Switch', blendBg: true, width: 500, height: 500 },
    { src: sensorImg, alt: 'Relays & Sensors', blendBg: true, width: 500, height: 500 },
    { src: pressureSensorImg, alt: 'Pressure Sensor', blendBg: true, width: 500, height: 500 },
];

/* ── Static Data ── */
const STATS = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Industry Clients' },
    { value: '24/7', label: 'Support Available' },
];

const SERVICES = [
    { image: img7, title: 'Product Distribution', desc: 'Premium LV switchgears, PLCs, HMIs, servo drives, VFDs, safety devices, and press machine accessories from top global brands.', tag: 'DISTRIBUTION', link: '/industrial-products' },
    { image: img5, title: 'Integration Services', desc: 'End-to-end engineering — PLC program development, SCADA design, servo commissioning, and robot integration.', tag: 'INTEGRATION', link: '#contact' },
    { image: img1, title: 'Panel Manufacturing', desc: 'Custom-designed, tested, and certified electrical control panels for demanding industrial environments. IEC 61439 compliant.', tag: 'MANUFACTURING', link: '#contact' },
    { image: img2, title: 'IIoT & Digital Solutions', desc: 'Connect, monitor, and predict. Real-time condition monitoring, traceability, and predictive maintenance for smart factories.', tag: 'DIGITAL', link: '#contact' },
];

const PRESS_SLIDES = [
    { src: pressMachine1, alt: 'Press Machine', width: 600, height: 440 },
    { src: pressMachine2, alt: 'Press Machine Service', width: 600, height: 440 },
];

const PRESS_BRANDS = ['AIDA Engineering', 'Amada', 'Washino', 'Komatsu', 'Kyori', 'ORII'];
const PRESS_SERVICES = [
    'Mechanical Overhaul',
    'Clutch & Brake System Repair',
    'Feeder Retrofit & Servo Upgrade',
    'Electrical Panel Modernization',
    'PLC & Safety System Upgrade',
    'Imported Spare Parts Supply',
];

// Fix #5 — Store component references instead of pre-rendered JSX elements
const WHY_US = [
    { Icon: Award, iconSize: 28, title: 'Certified Expertise', desc: 'Deep technical certifications across Siemens, Rockwell, Yaskawa and more.' },
    { Icon: Zap, iconSize: 28, title: 'End-to-End Solutions', desc: 'From consultation and supply to integration, installation, and maintenance.' },
    { Icon: Shield, iconSize: 28, title: 'Quality Guaranteed', desc: 'Every panel and project tested to international standards with strict QC.' },
    { Icon: TrendingUp, iconSize: 28, title: '4 Strong Pillars', desc: 'Distribution + Integration + Manufacturing + IIoT — unmatched scope.' },
    { Icon: Users, iconSize: 28, title: 'Dedicated Support', desc: '24/7 helpline and field response for critical machinery downtime.' },
    { Icon: Wrench, iconSize: 28, title: 'Fast Turnaround', desc: 'Rapid project delivery and emergency response for press shop floors.' },
];

const PROCESS_STEPS = [
    { num: '01', title: 'Consultation', desc: 'We analyze your requirements and provide professional recommendations.' },
    { num: '02', title: 'Design & Engineering', desc: 'Optimized solutions using the latest technology for maximum efficiency.' },
    { num: '03', title: 'Material Sourcing', desc: 'High-quality materials from trusted suppliers at competitive prices.' },
    { num: '04', title: 'Fabrication', desc: 'Precision fabrication with strict quality control throughout production.' },
    { num: '05', title: 'Installation', desc: 'Expert setup and commissioning according to exact specifications.' },
    { num: '06', title: 'Quality & Handover', desc: 'Final inspection, documentation, and ongoing support commitment.' },
];

// Fix #5 — Icon components, not pre-rendered JSX
const INDUSTRIES = [
    { Icon: Car, iconSize: 24, title: 'Automotive', desc: 'Press machine retrofits, robotic welding, and end-of-line automation.' },
    { Icon: Bolt, iconSize: 24, title: 'Electronics', desc: 'High-speed PLCs, servo control, and automated testing systems.' },
    { Icon: Zap, iconSize: 24, title: 'Power & Utilities', desc: 'MCCs and PCCs for distribution, metering, and protection.' },
    { Icon: HardHat, iconSize: 24, title: 'Heavy Fabrication', desc: 'Heavy-duty switchgear, press valves, and clutch-brake systems.' },
    { Icon: Workflow, iconSize: 24, title: 'Smart Manufacturing', desc: 'IIoT traceability, condition monitoring, and digital dashboards.' },
];

// Fix #5 — Icon components, not pre-rendered JSX
const PRODUCT_HIGHLIGHTS = [
    { image: plcImg, title: 'PLC Controllers', Icon: Cpu, iconSize: 20, desc: 'Siemens, Delta, Omron & Mitsubishi PLCs', width: 400, height: 300 },
    { image: hmiImg, title: 'HMI Panels', Icon: Monitor, iconSize: 20, desc: 'Touchscreen operator interfaces', blendBg: true, width: 400, height: 300 },
    { image: vfdImg, title: 'VFD Drives', Icon: Gauge, iconSize: 20, desc: 'Motor speed control & energy savings', blendBg: true, width: 400, height: 300 },
    { image: servoImg, title: 'Servo Motors', Icon: Cog, iconSize: 20, desc: 'High-precision motion control', blendBg: true, width: 400, height: 300 },
    { image: sensorImg, title: 'Relays & Sensors', Icon: Zap, iconSize: 20, desc: 'Industrial detection & safety', blendBg: true, width: 400, height: 300 },
    { image: switchImg, title: 'Ethernet Switches', Icon: Cable, iconSize: 20, desc: 'Factory-floor networking', blendBg: true, width: 400, height: 300 },
    { image: pressSpareImg, title: 'Press Spare Parts', Icon: Cog, iconSize: 20, desc: 'OEM & aftermarket press components', blendBg: true, width: 400, height: 300 },
    { image: pressMachineSpareImg, title: 'Press Machine Spares', Icon: Wrench, iconSize: 20, desc: 'Clutch, brake & feeder spares', blendBg: true, width: 400, height: 300 },
];

/* ── JSON-LD ── */
const JSON_LD = {
    '@context': 'https://schema.org',
    '@graph': [{
        '@type': 'Organization',
        name: 'Mtech Solutions',
        description: 'Industrial Automation Solution Provider, System Integrator, and Panel Manufacturer.',
        url: 'https://www.mtechsolutions.com',
        telephone: '+91-98765-43210',
        email: 'Mtechsolutions1993@gmail.com',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'No. 229, Gandhinagar, Thogarapalli',
            addressLocality: 'Bargur',
            addressRegion: 'Tamil Nadu',
            postalCode: '635203',
            addressCountry: 'IN',
        },
    }],
};

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
const Home = () => {
    const [aboutSlideIndex, setAboutSlideIndex] = useState(0);
    const aboutTotal = ABOUT_SLIDES.length;

    const [pressSlideIndex, setPressSlideIndex] = useState(0);
    const pressTotal = PRESS_SLIDES.length;

    /* ── Contact Form State ── */
    const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
    const [submitStatus, setSubmitStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

    const nextAbout = useCallback(() => setAboutSlideIndex(i => (i + 1) % aboutTotal), [aboutTotal]);
    const nextPress = useCallback(() => setPressSlideIndex(i => (i + 1) % pressTotal), [pressTotal]);

    useEffect(() => {
        const id = setInterval(nextAbout, 3000);
        return () => clearInterval(id);
    }, [nextAbout]);

    useEffect(() => {
        const id = setInterval(nextPress, 4000);
        return () => clearInterval(id);
    }, [nextPress]);

    /* ── Clear URL hash on mount so refresh starts at top ── */
    useEffect(() => {
        if (window.location.hash) {
            history.replaceState(null, '', window.location.pathname);
        }
    }, []);

    // Fix #6 — memoized with useCallback
    const scrollToSection = useCallback((e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    /* ── Contact Form Handlers — Fix #4 ── */
    const handleChange = useCallback((e) => {
        const { id, value } = e.target;
        setFormState(prev => ({ ...prev, [id]: value }));
    }, []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        setSubmitStatus('sending');
        try {
            const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(formState),
            });
            if (res.ok) {
                setSubmitStatus('sent');
                setFormState({ name: '', email: '', company: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch {
            setSubmitStatus('error');
        }
    }, [formState]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
            />

            <main className="home" id="main-content">

                {/* ═══════════════════════════════
                    HERO
                ═══════════════════════════════ */}
                <section className="hero" id="hero" aria-label="Hero">
                    <div className="hero__bg" aria-hidden="true" />
                    <div className="hero__grid" aria-hidden="true" />

                    <motion.div
                        className="hero__content"
                        initial="hidden"
                        animate="visible"
                        variants={staggerSlow}
                    >
                        <motion.div className="hero__label" variants={fadeUp}>
                            <span className="hero__dot" />
                            Trusted across Tamil Nadu
                        </motion.div>

                        <motion.h1 className="hero__title" variants={fadeUp}>
                            Industrial Automation<br />
                            <span className="hero__title-accent">&amp; Integration Experts</span>
                        </motion.h1>

                        <motion.p className="hero__subtitle" variants={fadeUp}>
                            We deliver end-to-end industrial automation — PLC/HMI/SCADA integration,
                            press machine retrofits, panel manufacturing, and IIoT solutions for
                            manufacturing plants across India.
                        </motion.p>

                        <motion.div className="hero__tags" variants={fadeUp}>
                            {['PLC / HMI / SCADA', 'PRESS MACHINES', 'PANEL MFG', 'IIoT'].map(tag => (
                                <span className="hero__tag" key={tag}>{tag}</span>
                            ))}
                        </motion.div>

                        <motion.div className="hero__actions" variants={fadeUp}>
                            <a href="#contact" className="btn btn-gold" onClick={(e) => scrollToSection(e, 'contact')}>
                                Get a Quote
                            </a>
                            <a href="#services" className="btn btn-ghost" onClick={(e) => scrollToSection(e, 'services')}>
                                Our Services <ArrowRight size={16} />
                            </a>
                        </motion.div>

                        <motion.div className="hero__stats" variants={fadeUp}>
                            {STATS.map(({ value, label }, i) => (
                                <div className="hero__stat" key={label}>
                                    <span className="hero__stat-value">{value}</span>
                                    <span className="hero__stat-label">{label}</span>
                                    {i < STATS.length - 1 && <span className="hero__stat-divider" />}
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="hero__scroll"
                            variants={fadeIn}
                            onClick={(e) => scrollToSection(e, 'about')}
                        >
                            <span>SCROLL</span>
                            <ArrowDown size={16} className="hero__scroll-arrow" />
                        </motion.div>
                    </motion.div>
                </section>

                {/* ═══════════════════════════════
                    ABOUT
                ═══════════════════════════════ */}
                <section className="about section" id="about" aria-labelledby="about-heading">
                    <div className="container">
                        <Reveal className="about__grid">
                            <div className="about__image-col">
                                <motion.div className="about__image-wrapper" variants={fadeUp}>
                                    <div className="about__slideshow">
                                        {/* Fix #9 — Only render active + adjacent slides (saves ~15-30MB decoded memory) */}
                                        {ABOUT_SLIDES.map((slide, i) => {
                                            const dist = Math.abs(i - aboutSlideIndex);
                                            const wrapDist = Math.min(dist, aboutTotal - dist);
                                            if (wrapDist > 1) return null;
                                            return (
                                                <img
                                                    key={i}
                                                    src={slide.src}
                                                    alt={slide.alt}
                                                    width={slide.width}
                                                    height={slide.height}
                                                    className={`about__slide${i === aboutSlideIndex ? ' active' : ''}${slide.blendBg ? ' about__slide--blend' : ''}`}
                                                    loading={i === 0 ? 'eager' : 'lazy'}
                                                    decoding="async"
                                                />
                                            );
                                        })}
                                        <div className="about__slide-dots">
                                            {ABOUT_SLIDES.map((_, i) => (
                                                <button
                                                    key={i}
                                                    className={`about__slide-dot${i === aboutSlideIndex ? ' active' : ''}`}
                                                    onClick={() => setAboutSlideIndex(i)}
                                                    aria-label={`Go to slide ${i + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="about__badge">
                                        <span className="about__badge-num">15+</span>
                                        <span className="about__badge-text">Years</span>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="about__text-col">
                                <motion.span className="section-label" variants={fadeUp}>ABOUT US</motion.span>
                                <motion.h2 id="about-heading" variants={fadeUp}>
                                    Excellence in Automation &amp; Industrial Solutions
                                </motion.h2>
                                <motion.p variants={fadeUp}>
                                    Founded in 2010 in Krishnagiri, Tamil Nadu, <strong>Mtech Solutions</strong> is
                                    a full-spectrum industrial automation company built on four integrated pillars —
                                    product distribution, system integration, panel manufacturing, and IIoT digital solutions.
                                </motion.p>
                                <motion.p variants={fadeUp}>
                                    With partnerships with global brands like Siemens, Yaskawa, and Schneider Electric,
                                    we deliver turnkey solutions that reduce downtime, improve quality, and drive
                                    operational efficiency.
                                </motion.p>
                                <motion.ul className="about__checklist" variants={fadeUp}>
                                    {[
                                        'Multi-brand certified engineers',
                                        'Mechanical & electrical press machine expertise',
                                        'ISO-compliant panel manufacturing',
                                        'Retrofit-compatible IIoT deployment',
                                        '24/7 emergency support & field response',
                                    ].map(item => (
                                        <li key={item}>
                                            <CheckCircle size={16} aria-hidden="true" />
                                            {item}
                                        </li>
                                    ))}
                                </motion.ul>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* ═══════════════════════════════
                    SERVICES
                ═══════════════════════════════ */}
                <section className="services section" id="services" aria-labelledby="services-heading">
                    <div className="container">
                        <Reveal className="services__header text-center">
                            <motion.span className="section-label" variants={fadeUp}>WHAT WE DO</motion.span>
                            <motion.h2 id="services-heading" variants={fadeUp}>Our Comprehensive Services</motion.h2>
                            <motion.p className="section-desc" variants={fadeUp}>
                                From PLC/HMI/SCADA integration and press machine retrofits to panel manufacturing
                                and IIoT solutions — complete industrial automation under one roof.
                            </motion.p>
                        </Reveal>

                        <Reveal className="services__grid">
                            {SERVICES.map(({ title, desc, tag, link }) => (
                                <motion.article className="service-card service-card--no-image" key={title} variants={fadeUp}>
                                    <div className="service-card__body">
                                        <span className="service-card__tag">{tag}</span>
                                        <h3>{title}</h3>
                                        <p>{desc}</p>
                                        {link.startsWith('/') ? (
                                            <Link to={link} className="service-card__link">
                                                Learn more <ArrowRight size={14} />
                                            </Link>
                                        ) : (
                                            <a href={link} className="service-card__link" onClick={(e) => scrollToSection(e, link.replace('#', ''))}>
                                                Learn more <ArrowRight size={14} />
                                            </a>
                                        )}
                                    </div>
                                </motion.article>
                            ))}
                        </Reveal>
                    </div>
                </section>

                {/* ═══════════════════════════════
                    WHY CHOOSE US
                ═══════════════════════════════ */}
                <section className="why section" id="why-us" aria-labelledby="why-heading">
                    <div className="container">
                        <Reveal className="why__header text-center">
                            <motion.span className="section-label" variants={fadeUp}>WHY MTECH</motion.span>
                            <motion.h2 id="why-heading" variants={fadeUp}>Why Choose Mtech Solutions</motion.h2>
                            <motion.p className="section-desc" variants={fadeUp}>
                                Combining expertise, quality, and dedication to deliver exceptional results.
                            </motion.p>
                        </Reveal>

                        <Reveal className="why__grid">
                            {/* Fix #5 — Render Icon component in JSX, not stored JSX element */}
                            {WHY_US.map(({ Icon, iconSize, title, desc }) => (
                                <motion.div className="why-card" key={title} variants={fadeUp}>
                                    <div className="why-card__icon"><Icon size={iconSize} /></div>
                                    <h3 className="why-card__title">{title}</h3>
                                    <p className="why-card__desc">{desc}</p>
                                </motion.div>
                            ))}
                        </Reveal>
                    </div>
                </section>

                {/* ═══════════════════════════════
                    PROCESS
                ═══════════════════════════════ */}
                <section className="process section" id="process" aria-labelledby="process-heading">
                    <div className="container">
                        <Reveal className="process__header text-center">
                            <motion.span className="section-label" variants={fadeUp}>HOW WE WORK</motion.span>
                            <motion.h2 id="process-heading" variants={fadeUp}>Our Work Process</motion.h2>
                            <motion.p className="section-desc" variants={fadeUp}>
                                A streamlined, quality-focused process to deliver exceptional automation solutions.
                            </motion.p>
                        </Reveal>

                        <Reveal className="process__grid">
                            {PROCESS_STEPS.map(({ num, title, desc }) => (
                                <motion.div className="process-card" key={num} variants={fadeUp}>
                                    <span className="process-card__num">{num}</span>
                                    <h3>{title}</h3>
                                    <p>{desc}</p>
                                </motion.div>
                            ))}
                        </Reveal>
                    </div>
                </section>

                {/* ═══════════════════════════════
                    PRESS MACHINES
                ═══════════════════════════════ */}
                <section className="press section" id="press-machines" aria-labelledby="press-heading">
                    <div className="container">
                        <Reveal className="press__grid">
                            <div className="press__content">
                                <motion.span className="section-label section-label--light" variants={fadeUp}>SPECIALTY</motion.span>
                                <motion.h2 id="press-heading" variants={fadeUp}>
                                    Press Machine Service &amp; Retrofit
                                </motion.h2>
                                <motion.p className="press__desc" variants={fadeUp}>
                                    Specialized mechanical overhaul, clutch &amp; brake system repair, feeder
                                    upgrades, and electrical panel modernization for all major Japanese and
                                    European press machine brands.
                                </motion.p>
                                <motion.div className="press__brands" variants={fadeUp}>
                                    {PRESS_BRANDS.map(b => (
                                        <span className="press__brand" key={b}>{b}</span>
                                    ))}
                                </motion.div>
                                <motion.ul className="press__features" variants={fadeUp}>
                                    {PRESS_SERVICES.map(s => (
                                        <li key={s}>
                                            <CheckCircle size={15} aria-hidden="true" />
                                            {s}
                                        </li>
                                    ))}
                                </motion.ul>
                            </div>
                            <motion.div className="press__slideshow" variants={fadeUp}>
                                {PRESS_SLIDES.map((slide, i) => (
                                    <img
                                        key={i}
                                        src={slide.src}
                                        alt={slide.alt}
                                        width={slide.width}
                                        height={slide.height}
                                        className={`press__slide${i === pressSlideIndex ? ' active' : ''}`}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                ))}
                                <div className="press__dots">
                                    {PRESS_SLIDES.map((_, i) => (
                                        <button
                                            key={i}
                                            className={`press__dot${i === pressSlideIndex ? ' active' : ''}`}
                                            onClick={() => setPressSlideIndex(i)}
                                            aria-label={`Go to press slide ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </Reveal>
                    </div>
                </section>

                {/* ═══════════════════════════════
                    INDUSTRIAL PRODUCTS
                ═══════════════════════════════ */}
                <section className="industrial-products section" id="industrial-products" aria-labelledby="industrial-products-heading">
                    <div className="container">
                        <Reveal className="industrial-products__header text-center">
                            <motion.span className="section-label" variants={fadeUp}>OUR PRODUCTS</motion.span>
                            <motion.h2 id="industrial-products-heading" variants={fadeUp}>
                                Industrial Products &amp; Automation Spares
                            </motion.h2>
                            <motion.p className="section-desc" variants={fadeUp}>
                                Authorized distribution of premium automation components — PLCs, HMIs,
                                VFDs, servo drives, sensors, and more from world-leading brands.
                            </motion.p>
                        </Reveal>

                        <Reveal className="industrial-products__grid">
                            {/* Fix #5, #12 — Icon components + width/height on all images */}
                            {PRODUCT_HIGHLIGHTS.map(({ image, title, Icon, iconSize, desc, blendBg, width, height }) => (
                                <motion.div className="ip-card" key={title} variants={fadeUp}>
                                    <div className="ip-card__image-wrap">
                                        <img
                                            src={image}
                                            alt={title}
                                            width={width}
                                            height={height}
                                            className={`ip-card__image${blendBg ? ' ip-card__image--blend' : ''}`}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="ip-card__overlay" />
                                    </div>
                                    <div className="ip-card__body">
                                        <div className="ip-card__icon"><Icon size={iconSize} /></div>
                                        <h3>{title}</h3>
                                        <p>{desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </Reveal>

                        <Reveal className="industrial-products__cta text-center">
                            <motion.div variants={fadeUp}>
                                <Link to="/industrial-products" className="btn btn-gold">
                                    View All Products <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        </Reveal>
                    </div>
                </section>

                {/* ═══════════════════════════════
                    INDUSTRIES
                ═══════════════════════════════ */}
                <section className="industries section" id="industries" aria-labelledby="industries-heading">
                    <div className="container">
                        <Reveal className="industries__header text-center">
                            <motion.span className="section-label" variants={fadeUp}>SECTORS</motion.span>
                            <motion.h2 id="industries-heading" variants={fadeUp}>Industries We Serve</motion.h2>
                            <motion.p className="section-desc" variants={fadeUp}>
                                Delivering specialized automation solutions across diverse industrial sectors.
                            </motion.p>
                        </Reveal>

                        <Reveal className="industries__grid">
                            {/* Fix #5 — Icon components */}
                            {INDUSTRIES.map(({ Icon, iconSize, title, desc }) => (
                                <motion.div className="industry-card" key={title} variants={fadeUp}>
                                    <div className="industry-card__icon"><Icon size={iconSize} /></div>
                                    <h3>{title}</h3>
                                    <p>{desc}</p>
                                </motion.div>
                            ))}
                        </Reveal>
                    </div>
                </section>

                {/* ═══════════════════════════════
                    PARTNERSHIPS
                ═══════════════════════════════ */}
                <section className="partners section" id="partners" aria-labelledby="partners-heading">
                    <div className="container">
                        <Reveal className="partners__header text-center">
                            <motion.span className="section-label section-label--light" variants={fadeUp}>PARTNERSHIPS</motion.span>
                            <motion.h2 id="partners-heading" variants={fadeUp}>Global Brands. Deep Local Expertise.</motion.h2>
                            <motion.p className="section-desc section-desc--light" variants={fadeUp}>
                                Authorised to supply, integrate, and support products from the world&apos;s
                                leading industrial automation manufacturers.
                            </motion.p>
                        </Reveal>

                        <Reveal className="partners__grid">
                            {/* Fix #12 — loading=lazy + decoding=async on brand logos */}
                            {BRAND_LOGOS.map(({ src, name }) => (
                                <motion.div className="partner-logo-card" key={src} variants={fadeUp}>
                                    <img
                                        src={src}
                                        alt={name}
                                        className="partner-logo-card__image"
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

                {/* ═══════════════════════════════
                    CONTACT
                ═══════════════════════════════ */}
                <section className="contact section" id="contact" aria-labelledby="contact-heading">
                    <div className="container">
                        <Reveal className="contact__header text-center">
                            <motion.span className="section-label" variants={fadeUp}>GET IN TOUCH</motion.span>
                            <motion.h2 id="contact-heading" variants={fadeUp}>Contact Us</motion.h2>
                            <motion.p className="section-desc" variants={fadeUp}>
                                Ready to upgrade your industrial automation or need emergency press machine support?
                            </motion.p>
                        </Reveal>

                        <Reveal className="contact__grid">
                            <motion.div className="contact__form-card" variants={fadeUp}>
                                <h3>Send us a Message</h3>
                                {/* Fix #4 — Form now has onSubmit handler + controlled inputs */}
                                <form className="contact__form" onSubmit={handleSubmit} noValidate>
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="form-input"
                                            placeholder="Enter your name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-input"
                                            placeholder="Enter your email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="company">Company</label>
                                        <input
                                            type="text"
                                            id="company"
                                            className="form-input"
                                            placeholder="Your company name"
                                            value={formState.company}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            rows="5"
                                            className="form-input"
                                            placeholder="How can we help you?"
                                            value={formState.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    {/* Fix #13 — Removed inline style={width:100%}, using CSS class instead */}
                                    <button
                                        type="submit"
                                        className="btn btn-gold contact__submit"
                                        disabled={submitStatus === 'sending'}
                                    >
                                        {submitStatus === 'sending' ? 'Sending…' :
                                            submitStatus === 'sent' ? '✔ Message Sent!' :
                                                <>Submit Request <ArrowRight size={16} /></>}
                                    </button>
                                    {submitStatus === 'error' && (
                                        <p className="contact__form-error">
                                            Something went wrong. Please <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">WhatsApp us</a> directly.
                                        </p>
                                    )}
                                    {submitStatus === 'sent' && (
                                        <p className="contact__form-success">
                                            Thank you! We&apos;ll get back to you within 24 hours.
                                        </p>
                                    )}
                                </form>
                            </motion.div>

                            <motion.div className="contact__info" variants={fadeUp}>
                                <div className="contact__info-items">
                                    <div className="contact__info-item">
                                        <div className="contact__info-icon"><MapPin size={20} /></div>
                                        <div>
                                            <h4>Office &amp; Works</h4>
                                            <p>No. 229, Gandhinagar, Thogarapalli,<br />Bargur, Krishnagiri – 635203, TN</p>
                                        </div>
                                    </div>
                                    <div className="contact__info-item">
                                        <div className="contact__info-icon"><Phone size={20} /></div>
                                        <div>
                                            <h4>Phone</h4>
                                            <p><a href="tel:+919876543210" style={{ color: 'inherit' }}>+91 98765 43210</a></p>
                                            <p><a href="tel:+919943542980" style={{ color: 'inherit' }}>+91 99435 42980</a></p>
                                        </div>
                                    </div>
                                    <div className="contact__info-item">
                                        <div className="contact__info-icon"><Mail size={20} /></div>
                                        <div>
                                            <h4>Email</h4>
                                            <p><a href="mailto:Mtechsolutions1993@gmail.com" style={{ color: 'inherit' }}>Mtechsolutions1993@gmail.com</a></p>
                                        </div>
                                    </div>
                                    <div className="contact__info-item">
                                        <div className="contact__info-icon"><Clock size={20} /></div>
                                        <div>
                                            <h4>Business Hours</h4>
                                            <p>Mon – Sat: 8 AM – 6 PM<br />Emergency: 24/7</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact__whatsapp">
                                    <h4>Instant Support via WhatsApp</h4>
                                    <p>Connect with our engineering team for fast response.</p>
                                    <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                                        <MessageCircle size={18} /> Message on WhatsApp
                                    </a>
                                </div>
                            </motion.div>
                        </Reveal>
                    </div>
                </section>

                {/* ═══════════════════════════════
                    CTA
                ═══════════════════════════════ */}
                <section className="cta" aria-label="Call to action">
                    <div className="container">
                        <Reveal className="cta__content text-center" variants={staggerSlow}>
                            <motion.h2 variants={fadeUp}>Ready to Start Your Project?</motion.h2>
                            <motion.p variants={fadeUp}>
                                Talk to our engineers today. Get a free consultation and quote
                                for your specific automation requirement.
                            </motion.p>
                            <motion.div className="cta__actions" variants={fadeUp}>
                                <a href="#contact" className="btn btn-gold" onClick={(e) => scrollToSection(e, 'contact')}>
                                    Get Free Quote <ArrowRight size={16} />
                                </a>
                                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="btn btn-ghost">
                                    <MessageCircle size={16} /> WhatsApp Us
                                </a>
                            </motion.div>
                        </Reveal>
                    </div>
                </section>

            </main>
        </>
    );
};

export default Home;
