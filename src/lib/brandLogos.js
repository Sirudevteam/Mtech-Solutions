/* ── Shared Brand Logos — computed once at module level ── */

const partnerLogoModules = import.meta.glob('../assets/machines/logos/*.webp', {
    eager: true,
    import: 'default',
});

const toBrandName = (filePath) => {
    const filename = filePath.split('/').pop() ?? '';
    const basename = filename
        .replace(/(\.[^.]+)+$/, '')
        .replace(/[_-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    return basename ? basename.charAt(0).toUpperCase() + basename.slice(1) : 'Brand';
};

export const BRAND_LOGOS = Object.entries(partnerLogoModules)
    .map(([path, src]) => ({ src, name: toBrandName(path) }))
    .sort((a, b) => a.name.localeCompare(b.name));
