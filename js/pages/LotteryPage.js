// import React, { useState, useEffect } from 'react'
// import { TopNavBar, Icon, Button } from './common'

// --- CSS Keyframes (Golden Lightning & Shimmer) ---
const keyframes = {
  // Intense golden shimmer for buttons and bars
  goldShimmer: `
    @keyframes goldShimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  `,
  // Rapid flickering for lightning effects
  lightningFlicker: `
    @keyframes lightningFlicker {
      0%, 100% { opacity: 0.8; filter: brightness(1); }
      10% { opacity: 1; filter: brightness(1.3) drop-shadow(0 0 10px #fff); }
      20% { opacity: 0.8; filter: brightness(1.1); }
      30% { opacity: 1; filter: brightness(1.4) drop-shadow(0 0 15px #ffd700); }
      40% { opacity: 0.9; filter: brightness(1); }
    }
  `,
  // Jagged electrical flow animation for progress bar
  lightningBarAnim: `
    @keyframes lightningBarAnim {
        0% { background-position: 0% 0%; }
        100% { background-position: 100% 0%; }
    }
  `,
  // Floating sparkles
  sparkleFloat: `
    @keyframes sparkleFloat {
      0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
      50% { transform: translateY(-10px) scale(1.2); opacity: 1; }
    }
  `,
  // Pulse for the whole card border
  goldenPulse: `
    @keyframes goldenPulse {
      0% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.6), inset 0 0 10px rgba(255, 223, 0, 0.4); }
      50% { box-shadow: 0 0 40px rgba(255, 215, 0, 1), inset 0 0 25px rgba(255, 255, 255, 0.6); border-color: #fff; }
      100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.6), inset 0 0 10px rgba(255, 223, 0, 0.4); }
    }
  `
}

// --- Theme Colors (Luxury Gold Palette) ---
const goldenTheme = {
    bgGradient: 'radial-gradient(circle at 50% 10%, #fff1c1 0%, #d4af37 60%, #b8860b 100%)', // Bright center to rich gold edge
    primaryGold: '#ffd700', // Bright yellow gold
    richGold: '#d4af37', // Classic metallic gold
    darkGold: '#b8860b', // Deep bronze gold
    accentWhite: '#ffffff', // For highlights
    textDark: '#3a2a10', // Dark brown for readability against gold
    textLight: '#fffce0', // Light cream for text on dark gold
    cardBgGradient: 'linear-gradient(135deg, #e6c200 0%, #ffd700 30%, #fff8d1 50%, #e6c200 70%, #b8860b 100%)', // Molten gold look
    glassGoldBg: 'rgba(255, 215, 0, 0.15)', // Semi-transparent gold
    intenseGoldGlow: '0 0 25px rgba(255, 215, 0, 0.8), 0 0 10px rgba(255, 255, 255, 0.6)',
}

// --- Styles ---
const styles = {
  pageContainer: {
    paddingTop: 0,
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    background: 'url(./lotteryPage.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: goldenTheme.textDark,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: '"SF Pro Display", "Roboto", sans-serif'
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    opacity: 0.15,
    // Circuit and hex patterns overlaid with a gold tint
    backgroundImage: `
        linear-gradient(to right, rgba(255,215,0,0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,215,0,0.1) 1px, transparent 1px),
        radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4) 0%, transparent 10%)
    `,
    backgroundSize: '40px 40px, 40px 40px, cover',
    pointerEvents: 'none',
    zIndex: 0,
    mixBlendMode: 'overlay'
  },
  topNavBar: {
    background: 'transparent',
    borderBottom: 'none',
    paddingTop: '10px',
    zIndex: 10
  },
  navTitle: {
    color: goldenTheme.textDark,
    fontWeight: '900',
    fontSize: '22px',
    letterSpacing: '1px',
    // Gold text effect
    background: `linear-gradient(to bottom, ${goldenTheme.richGold}, ${goldenTheme.textDark})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: `drop-shadow(0 2px 2px rgba(0,0,0,0.2))`
  },
  // --- Selectors (Polished Gold Buttons) ---
  selectorContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    background: `linear-gradient(145deg, #fff8d1, #e6c200)`,
    padding: '6px 12px',
    borderRadius: '20px',
    border: `2px solid ${goldenTheme.white}`,
    boxShadow: `0 4px 10px rgba(184, 134, 11, 0.4), inset 0 2px 5px rgba(255,255,255,0.8)`,
    color: goldenTheme.textDark,
    fontWeight: '800',
    cursor: 'pointer',
  },
  networkIcon: {
    width: '24px', height: '24px', borderRadius: '12px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '12px', fontWeight: 'bold', color: goldenTheme.textDark,
    background: `linear-gradient(to bottom right, #fff, ${goldenTheme.primaryGold})`,
    boxShadow: `0 2px 5px rgba(0,0,0,0.2)`,
    border: '1px solid #fff'
  },
  dropdownMenu: {
    position: 'absolute', top: '120%', right: 0,
    background: `linear-gradient(to bottom, #fff1c1, #d4af37)`,
    border: `2px solid ${goldenTheme.accentWhite}`,
    borderRadius: '16px', padding: '6px', width: '140px', zIndex: 100,
    boxShadow: `0 10px 30px rgba(58, 42, 16, 0.5), 0 0 20px rgba(255, 215, 0, 0.4)`
  },
  dropdownItem: (isActive) => ({
    padding: '10px', display: 'flex', alignItems: 'center', gap: '10px',
    borderRadius: '12px', cursor: 'pointer',
    background: isActive ? `linear-gradient(90deg, rgba(255,255,255,0.6), transparent)` : 'transparent',
    border: isActive ? `1px solid ${goldenTheme.accentWhite}` : '1px solid transparent',
    fontWeight: isActive ? '800' : '600',
    color: goldenTheme.textDark,
    transition: 'all 0.2s'
  }),
  myButton: {
    display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer',
    background: `linear-gradient(145deg, #e6c200, #b8860b)`,
    padding: '6px 12px', borderRadius: '20px',
    color: goldenTheme.textLight, fontWeight: '800',
    border: `2px solid ${goldenTheme.richGold}`,
    boxShadow: `0 4px 10px rgba(0,0,0,0.3), inset 0 1px 3px rgba(255,255,255,0.4)`,
    textShadow: '0 1px 2px rgba(0,0,0,0.3)'
  },

  // --- MAIN POOL CARD (THE GOLDEN THUNDER BLOCK) ---
  poolCardContainer: (isFull) => ({
    margin: '15px 20px',
    position: 'relative',
    borderRadius: '26px',
    // Molten Gold Background (Procedural CSS)
    background: `
      radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 20%),
      radial-gradient(circle at 50% 50%, #e6c200 0%, #d4af37 40%, #b8860b 70%, #5c4004 100%)
    `,
    // Thick, glowing gold border
    border: `3px solid ${goldenTheme.accentWhite}`,
    // Intense electrical glow
    boxShadow: isFull 
        ? `0 0 60px ${goldenTheme.primaryGold}, 0 0 100px ${goldenTheme.accentWhite}, inset 0 0 50px ${goldenTheme.primaryGold}` // Explosion
        : `0 20px 50px -10px rgba(184, 134, 11, 0.6), ${goldenTheme.intenseGoldGlow}, inset 0 0 30px rgba(255, 215, 0, 0.4)`,
    transition: 'all 0.3s ease-in-out',
    overflow: 'hidden',
    // Pulse animation for the whole card
    animation: `goldenPulse 3s infinite ease-in-out`
  }),
  // Background electrical effect texture (Enhanced for Molten look)
  poolCardLightningBg: {
    position: 'absolute', top:0, left:0, right:0, bottom:0,
    // Molten texture simulation + Lightning
    backgroundImage: `
      url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E"),
      linear-gradient(135deg, rgba(255,215,0,0.4) 0%, transparent 50%, rgba(255,215,0,0.4) 100%)
    `,
    backgroundBlendMode: 'overlay',
    zIndex: 1,
  },
  // Extra lightning layer
  lightningOverlay: {
    position: 'absolute', top:0, left:0, right:0, bottom:0,
    backgroundImage: `
      repeating-linear-gradient(45deg, transparent 0%, transparent 48%, rgba(255,255,255,0.8) 50%, transparent 52%, transparent 100%),
      repeating-linear-gradient(-45deg, transparent 0%, transparent 48%, rgba(255,215,0,0.6) 50%, transparent 52%, transparent 100%)
    `,
    backgroundSize: '200% 200%',
    animation: 'shimmerSmooth 5s infinite linear, lightningFlicker 2s infinite alternate',
    mixBlendMode: 'color-dodge',
    zIndex: 2,
    opacity: 0.7
  },
  poolCardInner: {
    padding: '26px',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 2,
    // Engraved gold texture overlay
    backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.6) 0%, transparent 60%)',
  },
  // Crypto Watermarks (Engraved Gold Style)
  poolCardBackgroundIcon: (symbol, style) => ({
    position: 'absolute', ...style,
    fontSize: '150px', opacity: 0.25, fontWeight: '900', 
    color: goldenTheme.darkGold,
    filter: 'drop-shadow(0 2px 3px rgba(255,255,255,0.7)) drop-shadow(0 -2px 3px rgba(0,0,0,0.2))', // Engraved effect
    zIndex: 0, pointerEvents: 'none',
    transform: `${style.transform || ''} scale(1.2)`
  }),
  poolCardTitle: {
    fontSize: '18px', opacity: 1, marginBottom: '12px', fontWeight: '900',
    letterSpacing: '3px', color: '#000', textAlign: 'center',
    textShadow: `0 1px 0 rgba(255,255,255,0.6)`,
    position: 'relative', zIndex: 1,
    textTransform: 'uppercase',
    background: 'rgba(255,255,255,0.25)',
    padding: '4px 16px',
    borderRadius: '20px',
    display: 'inline-block',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  poolCardAmount: {
    fontSize: '52px', fontWeight: '900', fontFamily: 'monospace',
    display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '8px',
    // Dark text for better contrast on gold
    color: '#3a2a10',
    textShadow: `0 1px 0 rgba(255,255,255,0.5)`,
    filter: `drop-shadow(0 2px 4px rgba(0,0,0,0.2))`,
    position: 'relative', zIndex: 1
  },
  poolCardTarget: {
    fontSize: '20px', opacity: 0.9, fontWeight: '800', color: goldenTheme.textDark,
    textShadow: '0 1px 1px rgba(255,255,255,0.5)'
  },

  // --- JAGGED LIGHTNING PROGRESS BAR ---
  progressBarContainer: {
    height: '24px',
    background: 'rgba(58, 42, 16, 0.6)', // Darker channel to make lightning pop
    borderRadius: '12px', margin: '25px 0 15px',
    position: 'relative', overflow: 'hidden',
    border: `2px solid ${goldenTheme.richGold}`,
    boxShadow: 'inset 0 3px 8px rgba(0,0,0,0.4), 0 0 10px rgba(255, 215, 0, 0.3)',
    zIndex: 1
  },
  progressBarLightning: (percent, isFull) => ({
    width: `${percent}%`,
    height: '100%',
    borderRadius: '10px',
    // Complex jagged gradient to simulate lightning bolts
    backgroundImage: `
      linear-gradient(to bottom, #fff 0%, #ffd700 30%, #fff 50%, #ffd700 70%, #fff 100%),
      repeating-linear-gradient(45deg, transparent 0%, transparent 5%, rgba(255,255,255,0.8) 5%, rgba(255,215,0,0.9) 7%, transparent 7%, transparent 15%)
    `,
    backgroundSize: '100% 100%, 50px 100%',
    // Fast, jittery animation only when full (simulating the "week of flashing")
    animation: isFull 
        ? 'lightningBarAnim 0.3s infinite linear, lightningFlicker 0.5s infinite alternate' 
        : 'lightningBarAnim 2s infinite linear', // Slower flow when not full
    // Intense Glowing Filter
    boxShadow: `0 0 25px ${goldenTheme.primaryGold}, 0 0 10px #fff, inset 0 0 50px #fff`,
    filter: 'brightness(1.2)',
    transition: 'width 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)',
    display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '10px'
  }),
  progressText: {
    fontSize: '13px', fontWeight: '900', color: goldenTheme.textDark,
    textShadow: `0 0 5px #fff, 0 0 10px ${goldenTheme.primaryGold}`,
    zIndex: 2
  },
  countdown: {
    textAlign: 'center', fontSize: '14px', fontWeight: '800', color: goldenTheme.textDark,
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
    marginTop: '15px',
    textShadow: '0 1px 2px rgba(255,255,255,0.6)',
    position: 'relative', zIndex: 1
  },
  historyButton: {
    position: 'absolute', top: '20px', right: '20px', width: '40px', height: '40px',
    background: `linear-gradient(135deg, #fff, ${goldenTheme.primaryGold})`, borderRadius: '12px',
    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
    border: `2px solid #fff`,
    boxShadow: `0 5px 15px rgba(184, 134, 11, 0.4), ${goldenTheme.intenseGoldGlow}`, zIndex: 10, 
    color: goldenTheme.textDark,
    fontSize: '22px'
  },

  // --- Betting Section (Polished Gold Plate) ---
  bettingCard: {
    margin: '15px 20px',
    // Polished Gold Plate look with darker overlay to match image
    background: `
      repeating-linear-gradient(90deg, 
        rgba(184, 134, 11, 0.4) 0px, 
        rgba(230, 194, 0, 0.3) 1px, 
        rgba(184, 134, 11, 0.4) 2px, 
        rgba(255, 248, 209, 0.1) 3px),
      linear-gradient(160deg, rgba(0,0,0,0.4) 0%, rgba(58, 42, 16, 0.6) 100%)
    `,
    borderRadius: '20px', padding: '20px',
    border: `2px solid ${goldenTheme.richGold}`,
    boxShadow: `0 10px 30px rgba(0,0,0,0.3), inset 0 0 20px rgba(255, 215, 0, 0.1), 0 0 15px rgba(255, 215, 0, 0.2)`,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    backdropFilter: 'blur(5px)' // Frosted glass effect
  },
  bettingTitle: {
    textAlign: 'left', fontSize: '16px', fontWeight: '900',
    color: goldenTheme.primaryGold, // Brighter gold
    textTransform: 'uppercase', letterSpacing: '1px',
    textShadow: `0 1px 2px rgba(0,0,0,0.5)`,
    marginBottom: '5px'
  },
  // Wrapper for Input + Payment Info
  bettingRow: {
    display: 'flex',
    gap: '15px',
    alignItems: 'stretch'
  },
  inputContainer: {
    flex: 1,
    background: 'rgba(0,0,0,0.2)', // Darker inner
    border: `2px solid ${goldenTheme.primaryGold}`, // Bright gold border
    borderRadius: '12px', 
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: `0 0 10px rgba(255, 215, 0, 0.2)`
  },
  inputField: {
    background: 'transparent', border: 'none', color: '#fff',
    padding: '10px', width: '100%', textAlign: 'center', outline: 'none',
    fontSize: '28px', fontWeight: '800', fontFamily: 'monospace',
    textShadow: `0 1px 2px rgba(0,0,0,0.8)`
  },
  paymentInfoBox: {
    flex: 1.2,
    textAlign: 'right', 
    background: 'rgba(0,0,0,0.3)', // Darker box
    padding: '10px 15px', borderRadius: '12px', 
    border: `1px solid rgba(255,255,255,0.1)`,
    display: 'flex', flexDirection: 'column', justifyContent: 'center'
  },
  paymentLabel: { fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginBottom: '2px', fontWeight: '600', textTransform:'uppercase' },
  paymentAmount: { fontSize: '24px', fontWeight: '900', color: '#fff', textShadow: `0 1px 2px rgba(0,0,0,0.5)` },
  paymentCurrency: { fontSize: '14px', fontWeight: '700', color: goldenTheme.primaryGold, marginLeft:'4px' },
  gasEstimate: { fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' },

  // --- Go Button (Molten Gold Ingot - Refined) ---
  goButton: {
    width: '100%', height: '56px', borderRadius: '14px',
    // Realistic gold ingot gradient
    background: `linear-gradient(to bottom, #fff7cc 0%, #ffd700 20%, #ffbf00 50%, #b8860b 95%, #8b6508 100%)`,
    backgroundSize: '100% 100%',
    border: 'none',
    // Highlighting borders
    boxShadow: `
      0 5px 15px rgba(0,0,0,0.4),
      inset 0 1px 0 rgba(255,255,255,0.8),
      inset 0 -2px 0 rgba(139, 101, 8, 0.5)
    `,
    fontSize: '20px', fontWeight: '900', color: '#5c4004', // Dark brown text like engraved gold
    textShadow: '0 1px 0 rgba(255,255,255,0.4)',
    cursor: 'pointer',
    position: 'relative', overflow: 'hidden',
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  },
  
  // --- Monthly Jackpot (Solid Gold Bar) ---
  monthlyBar: {
    margin: '20px 20px 30px',
    // Realistic gold bar gradient with rays
    background: `
      repeating-conic-gradient(from 0deg at 50% 100%, 
        rgba(255,215,0,0.1) 0deg, 
        rgba(255,215,0,0.1) 15deg, 
        transparent 15deg, 
        transparent 30deg),
      linear-gradient(to right, #b8860b 0%, #e6c200 20%, #fff 50%, #e6c200 80%, #b8860b 100%)
    `,
    borderRadius: '18px', padding: '18px 24px', color: goldenTheme.textDark,
    boxShadow: `0 15px 40px rgba(184, 134, 11, 0.5), ${goldenTheme.intenseGoldGlow}, inset 0 2px 10px rgba(255,255,255,0.9)`,
    border: `3px solid #fff`,
    textAlign: 'center', position: 'relative', overflow: 'hidden'
  },
  monthlyIconContainer: { background: `linear-gradient(135deg, #fff, ${goldenTheme.primaryGold})`, borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', boxShadow: `0 5px 15px rgba(184, 134, 11, 0.4)`, color: goldenTheme.textDark, border:'2px solid #fff' },
  monthlyTitle: { fontSize: '12px', fontWeight: '900', opacity: 0.9, textTransform: 'uppercase', color: goldenTheme.textDark, letterSpacing:'1px' },
  monthlyAmount: { fontWeight: '900', fontSize: '22px', color: goldenTheme.textDark, textShadow: `0 1px 2px rgba(255,255,255,0.8), 0 0 15px ${goldenTheme.primaryGold}` },
  monthlyCountdownContainer: { background: 'rgba(255,255,255,0.5)', borderRadius: '10px', padding: '6px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', border: `2px solid #fff`, boxShadow:'inset 0 2px 5px rgba(0,0,0,0.05)'},
  monthlyCountdownLabel: { fontSize: '13px', fontWeight: '800', opacity: 0.8, color: goldenTheme.textDark },
  monthlyCountdownTime: { fontSize: '14px', fontWeight: '900', fontFamily: 'monospace', color: goldenTheme.textDark },

  // --- Modals (Bright Gold Theme) ---
  modalOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(58, 42, 16, 0.7)', zIndex: 200, backdropFilter: 'blur(15px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' },
  modalContent: { background: `linear-gradient(to bottom, #fff 0%, #fff1c1 100%)`, borderRadius: '26px 26px 0 0', padding: '26px', maxHeight: '70vh', minHeight: '50vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', animation: 'slideUp 0.3s ease', boxShadow: '0 -10px 60px rgba(184, 134, 11, 0.6)', borderTop: `4px solid ${goldenTheme.richGold}`, color: goldenTheme.textDark },
  modalTitle: { fontSize: '22px', fontWeight: '900', color: goldenTheme.textDark, textShadow: `0 1px 2px rgba(255,255,255,0.8)` },
  closeButton: { padding: '8px', cursor: 'pointer', color: goldenTheme.textDark, background: 'rgba(184, 134, 11, 0.2)', borderRadius: '50%', border: `2px solid ${goldenTheme.richGold}` },
  tabContainer: { display: 'flex', background: 'rgba(184, 134, 11, 0.1)', padding: '6px', borderRadius: '16px', marginBottom: '24px', border: `2px solid ${goldenTheme.richGold}` },
  tabItem: (isActive) => ({ flex: 1, textAlign: 'center', padding: '12px 0', color: isActive ? goldenTheme.textDark : 'rgba(58, 42, 16, 0.6)', background: isActive ? `linear-gradient(to bottom, #fff, #ffd700)` : 'transparent', borderRadius: '12px', cursor: 'pointer', fontWeight: '800', fontSize: '15px', transition: 'all 0.2s', border: isActive ? '2px solid #fff' : '2px solid transparent', opacity: isActive ? 1 : 0.8, boxShadow: isActive ? '0 4px 10px rgba(184, 134, 11, 0.3)' : 'none' }),
  recordItem: { background: `linear-gradient(145deg, #fff, #fff1c1)`, padding: '16px', borderRadius: '18px', border: `2px solid rgba(184, 134, 11, 0.3)`, marginBottom: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' },
  recordAmountTag: { color: goldenTheme.textDark, fontWeight: '900', background: `linear-gradient(to right, #ffd700, #e6c200)`, padding: '4px 12px', borderRadius: '10px', fontSize: '13px', boxShadow: `0 2px 8px rgba(184, 134, 11, 0.4)`, border:'1px solid #fff' },
  recordTime: { color: 'rgba(58, 42, 16, 0.6)', fontSize: '13px', fontWeight: '600' },
  recordNums: { fontSize: '16px', color: goldenTheme.textDark, fontFamily: 'monospace', letterSpacing: '2px', fontWeight: '800' },
  emptyState: { textAlign: 'center', padding: '40px 20px', color: 'rgba(58, 42, 16, 0.6)' },
  emptyStateIcon: { fontSize: '60px', marginBottom: '15px', opacity: 1, filter: `drop-shadow(0 0 15px ${goldenTheme.primaryGold})`, color: goldenTheme.richGold },
  ruleContainer: { color: goldenTheme.textDark, fontSize: '14px', lineHeight: '1.8', background: 'rgba(184, 134, 11, 0.1)', padding: '22px', borderRadius: '20px', border: `2px solid ${goldenTheme.richGold}` },
  ruleTitle: { fontSize: '18px', fontWeight: '900', marginBottom: '14px', color: goldenTheme.textDark },
  ruleHighlight: { fontWeight: '900', color: goldenTheme.richGold, textDecoration: 'underline' },
  historyWinTag: { color: goldenTheme.textDark, fontWeight: '900', background: `linear-gradient(to right, #fff, #ffd700)`, padding: '6px 14px', borderRadius: '10px', fontSize: '13px', boxShadow: `0 4px 10px rgba(184, 134, 11, 0.4)`, border:'2px solid #fff' },
  historyWinAmount: { fontWeight: '900', color: goldenTheme.richGold, fontSize: '20px', textShadow: `0 1px 2px rgba(255,255,255,0.8), 0 0 15px ${goldenTheme.primaryGold}` }
}


window.LotteryPage = function LotteryPage({ onBack, onToast }) {
  const { useState, useEffect } = React
  // ... (State and Effects remain exactly the same as before)
  const [network, setNetwork] = useState('ETH')
  const [currency, setCurrency] = useState('USDT')
  
  const [poolAmount, setPoolAmount] = useState(85.50)
  const targetAmount = 100.00
  const [monthlyPool, setMonthlyPool] = useState(2450.00)
  
  const [customCount, setCustomCount] = useState('1')
  const [showNetSelect, setShowNetSelect] = useState(false)
  const [showCurrencySelect, setShowCurrencySelect] = useState(false)
  
  const [myRecords, setMyRecords] = useState([])
  const [tab, setTab] = useState('record')
  const [showMineModal, setShowMineModal] = useState(false)
  const [showHistoryModal, setShowHistoryModal] = useState(false)
  const [historyTab, setHistoryTab] = useState('grand')
  
  const [dailyCountdown, setDailyCountdown] = useState('')
  const [monthlyCountdown, setMonthlyCountdown] = useState('')

  // Inject new keyframes
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = Object.values(keyframes).join('\n');
    document.head.appendChild(styleSheet);
    return () => {
        document.head.removeChild(styleSheet);
    };
}, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const tomorrow = new Date(now)
      tomorrow.setHours(24, 0, 0, 0)
      const diffDaily = tomorrow - now
      const h = Math.floor(diffDaily / 3600000)
      const m = Math.floor((diffDaily % 3600000) / 60000)
      const s = Math.floor((diffDaily % 60000) / 1000)
      setDailyCountdown(`${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`)

      const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1)
      nextMonth.setHours(0, 0, 0, 0)
      const diffMonthly = nextMonth - now
      const dMonth = Math.floor(diffMonthly / (1000 * 60 * 60 * 24))
      const hMonth = Math.floor((diffMonthly % (1000 * 60 * 60 * 24)) / 3600000)
      const mMonth = Math.floor((diffMonthly % 3600000) / 60000)
      const sMonth = Math.floor((diffMonthly % 60000) / 1000)
      setMonthlyCountdown(`${dMonth}天 ${hMonth.toString().padStart(2,'0')}:${mMonth.toString().padStart(2,'0')}:${sMonth.toString().padStart(2,'0')}`)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const ticketPrice = 1.00 
  const networks = [
    { id: 'ETH', name: 'Ethereum', icon: 'Ξ' },
    { id: 'BTC', name: 'Bitcoin', icon: '₿' },
    { id: 'PLANET', name: 'Planet', icon: 'P' }
  ]
  const currentNetObj = networks.find(n => n.id === network)

  useEffect(() => {
    if (network === 'ETH') {
      if (!['USDT', 'ETH'].includes(currency)) setCurrency('USDT')
    } else if (network === 'BTC') setCurrency('BTC')
    else if (network === 'PLANET') setCurrency('H')
  }, [network])

  useEffect(() => {
    const t = setInterval(() => {
      setPoolAmount(prev => prev + 0.5)
    }, 2000)
    return () => clearInterval(t)
  }, [])

  const handleBuy = () => {
    const count = parseInt(customCount) || 0
    if (!count || count <= 0) return
    if(onToast) onToast(`成功购买 ${count} 注，祝您暴富！`)
    
    const newRecord = {
      id: Date.now(), time: new Date().toLocaleTimeString(), amount: count, currency: currency,
      nums: Array(count).fill(0).map(() => Math.floor(Math.random() * 1000000).toString().padStart(6, '0'))
    }
    setMyRecords(prev => [newRecord, ...prev])
    setPoolAmount(prev => prev + count * ticketPrice * 2) 
  }

  const rawProgress = (poolAmount / targetAmount) * 100
  const displayPercent = Math.min(rawProgress, 100).toFixed(1)
  const isPoolFull = rawProgress >= 100

  const NetworkSelector = (
    <div style={{position:'relative'}}>
      <div onClick={()=>setShowNetSelect(!showNetSelect)} style={styles.selectorContainer}>
        <div style={styles.networkIcon}>{currentNetObj.icon}</div>
        <Icon name="down" size={12} style={{color: goldenTheme.textDark}} />
      </div>
      {showNetSelect && (
        <>
          <div style={{position:'fixed', top:0, left:0, right:0, bottom:0, zIndex:99}} onClick={()=>setShowNetSelect(false)}></div>
          <div style={styles.dropdownMenu}>
             {networks.map(n => (
               <div key={n.id} onClick={()=>{setNetwork(n.id); setShowNetSelect(false)}} style={styles.dropdownItem(network === n.id)}>
                 <div style={styles.networkIcon}>{n.icon}</div>
                 <div style={{fontWeight:'800'}}>{n.name}</div>
               </div>
             ))}
          </div>
        </>
      )}
    </div>
  )

  return (
    <div className="content-padded" style={styles.pageContainer}>
      <div style={styles.backgroundPattern}></div>
      <TopNavBar 
        title={<span style={styles.navTitle}>链上夺宝</span>}
        onBack={onBack} 
        right={NetworkSelector}
        style={styles.topNavBar}
        iconColor={goldenTheme.textDark}
      />
      
      <div style={{flex: 1, overflowY: 'auto', paddingBottom: '40px', zIndex: 1}}>
        
        {/* Header Control Row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
          padding: '10px 20px 10px', fontSize:'14px', color: goldenTheme.textDark, fontWeight:'700'
        }}>
          <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
            <span style={{opacity:1, textShadow: '0 0 5px #fff, 0 0 10px #fff'}}>当前奖池:</span>
            {network === 'ETH' ? (
              <div style={{position:'relative'}}>
                <div onClick={()=>setShowCurrencySelect(!showCurrencySelect)} style={styles.selectorContainer}>
                   {currency} <Icon name="down" size={12} style={{color: goldenTheme.textDark}} />
                </div>
                {showCurrencySelect && (
                  <>
                    <div style={{position:'fixed', top:0, left:0, right:0, bottom:0, zIndex:99}} onClick={()=>setShowCurrencySelect(false)}></div>
                    <div style={{...styles.dropdownMenu, left:0, width:'100px'}}>
                       {['USDT', 'ETH'].map(c => (
                         <div key={c} onClick={()=>{setCurrency(c); setShowCurrencySelect(false)}} style={styles.dropdownItem(currency === c)}>
                           <span>{c}</span>
                         </div>
                       ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div style={styles.selectorContainer}>{currency}</div>
            )}
          </div>
          <div onClick={()=>setShowMineModal(true)} style={styles.myButton}>
            <Icon name="user" size={16} style={{color: goldenTheme.textLight}} /> 我的
          </div>
        </div>

        {/* --- MAIN POOL CARD (THE GOLDEN THUNDER BLOCK) --- */}
        <div style={styles.poolCardContainer(isPoolFull)}>
           <div style={styles.poolCardLightningBg}></div>
           <div style={styles.poolCardInner}>
             {/* Background Crypto Watermarks (Engraved Gold) */}
             <div style={styles.poolCardBackgroundIcon('₿', {top:'-20px', right:'-10px', transform:'rotate(20deg)'})}>₿</div>
             <div style={styles.poolCardBackgroundIcon('Ξ', {bottom:'-30px', left:'-10px', transform:'rotate(-20deg)', fontSize:'120px'})}>Ξ</div>
             
             <div style={{textAlign:'center', marginBottom:'10px', position:'relative', zIndex:2}}>
                 <div style={styles.poolCardTitle}>JACKPOT POOL</div>
                 <div style={styles.poolCardAmount}>
                   <span>{Math.floor(poolAmount)}</span>
                   <span style={styles.poolCardTarget}>/ {Math.floor(targetAmount)} {currency}</span>
                 </div>
               
               {/* JAGGED LIGHTNING PROGRESS BAR */}
               <div style={styles.progressBarContainer}>
                  <div style={styles.progressBarLightning(Math.min(rawProgress, 100), isPoolFull)}>
                  </div>
               </div>
               <div style={{display:'flex', justifyContent:'space-between', fontSize:'13px', fontWeight:'800', color: goldenTheme.textDark, marginTop:'6px', textShadow:'0 1px 1px rgba(255,255,255,0.5)'}}>
                  <span>0%</span>
                  <span style={{color: goldenTheme.richGold, fontSize:'15px'}}>{displayPercent}%</span>
                  <span>100%</span>
               </div>

               <div style={styles.countdown}>
                 <Icon name="time" size={16} style={{color: goldenTheme.textDark}} /> 距离开奖: {dailyCountdown}
               </div>
             </div>

             <div onClick={()=>setShowHistoryModal(true)} style={styles.historyButton}>
               <span style={{fontSize:'22px'}}>🏆</span>
             </div>
           </div>
        </div>

        {/* Betting Section - Polished Gold Plate */}
        <div style={styles.bettingCard}>
           <div style={styles.bettingTitle}>Ticket Station</div>
           
           <div style={styles.bettingRow}>
             {/* Input Section */}
             <div style={styles.inputContainer}>
               <input 
                 type="number" 
                 value={customCount} 
                 onChange={e=>setCustomCount(e.target.value)} 
                 style={styles.inputField}
               />
             </div>

             {/* Payment Info Section */}
             <div style={styles.paymentInfoBox}>
               <div style={styles.paymentLabel}>PAYMENT TOTAL</div>
               <div style={styles.paymentAmount}>
                {(parseInt(customCount)||0 * ticketPrice).toFixed(2)} <span style={styles.paymentCurrency}>{currency}</span>
              </div>
               <div style={styles.gasEstimate}>Est. Gas: 0.0002 {network === 'ETH' ? 'ETH' : (network === 'BTC' ? 'BTC' : 'H')}</div>
             </div>
           </div>

           <Button onClick={handleBuy} style={styles.goButton}>
             <span style={{position:'relative', zIndex:1}}>立即参与 GO!</span>
             {/* Intense shimmer overlay */}
             <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', background:'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)', animation:'goldShimmer 1.5s infinite linear', backgroundSize:'200% 100%', mixBlendMode:'overlay'}}></div>
           </Button>
        </div>

        {/* Monthly Jackpot - Solid Gold Bar */}
        <div style={styles.monthlyBar}>
           <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'14px', marginBottom:'14px'}}>
             <div style={styles.monthlyIconContainer}>🏆</div>
             <div style={{textAlign:'left'}}>
               <div style={styles.monthlyTitle}>Monthly Super Prize</div>
               <div style={styles.monthlyAmount}>已累积: ${monthlyPool.toLocaleString()}</div>
             </div>
           </div>
           <div style={styles.monthlyCountdownContainer}>
              <div style={styles.monthlyCountdownLabel}>距离开奖:</div>
              <div style={styles.monthlyCountdownTime}>{monthlyCountdown}</div>
           </div>
           <div style={{position:'absolute', top:'5px', left:'10px', fontSize:'14px', opacity:0.8}}>✨</div>
           <div style={{position:'absolute', bottom:'5px', right:'10px', fontSize:'16px', opacity:0.8}}>✨</div>
        </div>
      </div>

      {/* Modals (Bright Gold Theme) */}
      {showMineModal && (
        <div style={styles.modalOverlay} onClick={(e)=>{if(e.target===e.currentTarget) setShowMineModal(false)}}>
           <div style={styles.modalContent}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'24px'}}>
                <div style={styles.modalTitle}>我的 ChainLotto</div>
                <div onClick={()=>setShowMineModal(false)} style={styles.closeButton}><Icon name="close" size={20} /></div>
              </div>
              <div style={styles.tabContainer}>
                {['record', 'history', 'rule'].map(t => (
                  <div key={t} onClick={()=>setTab(t)} style={styles.tabItem(tab === t)}>
                    {t === 'record' ? '我的记录' : (t === 'history' ? '中奖历史' : '规则说明')}
                  </div>
                ))}
              </div>
              <div style={{flex:1, overflowY:'auto'}}>
                {tab === 'record' && (
                  <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
                    {myRecords.length === 0 && (
                      <div style={styles.emptyState}>
                        <div style={styles.emptyStateIcon}>🎫</div>
                        <div style={{fontWeight:'800'}}>暂无购票记录</div>
                      </div>
                    )}
                    {myRecords.map(r => (
                      <div key={r.id} style={styles.recordItem}>
                          <div style={{display:'flex', justifyContent:'space-between', marginBottom:'8px', alignItems:'center'}}>
                            <span style={styles.recordTime}>{r.time}</span>
                            <span style={styles.recordAmountTag}>{r.amount} 注</span>
                          </div>
                          <div style={styles.recordNums}>{r.nums.join(', ')}</div>
                      </div>
                    ))}
                  </div>
                )}
                {tab === 'history' && (<div style={styles.emptyState}><div style={styles.emptyStateIcon}>⏳</div><div style={{fontWeight:'800'}}>暂无历史开奖数据</div></div>)}
                {tab === 'rule' && (
                  <div style={styles.ruleContainer}>
                    <h4 style={styles.ruleTitle}>📜 游戏规则</h4>
                    <p style={{marginBottom:'10px'}}>1. 当奖池累计金额达到目标金额（如 100 USDT）时，将自动触发开奖。若当日未达标，奖池自动滚存至次日。</p>
                    <p style={{marginBottom:'10px'}}>2. 奖金分配：<span style={styles.ruleHighlight}>一等奖(40%)</span>, <span style={styles.ruleHighlight}>二等奖(30%)</span>, <span style={styles.ruleHighlight}>三等奖(15%)</span>, <span style={styles.ruleHighlight}>月底大奖(10%)</span>, <span style={styles.ruleHighlight}>创世分红(5%)</span>。</p>
                    <p>3. 公平性：开奖由链上随机数生成，公开透明。</p>
                  </div>
                )}
              </div>
           </div>
        </div>
      )}
      {showHistoryModal && (
        <div style={styles.modalOverlay} onClick={(e)=>{if(e.target===e.currentTarget) setShowHistoryModal(false)}}>
           <div style={styles.modalContent}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'24px'}}>
                <div style={styles.modalTitle}>🏆 历史中奖</div>
                <div onClick={()=>setShowHistoryModal(false)} style={styles.closeButton}><Icon name="close" size={20} /></div>
              </div>
              <div style={styles.tabContainer}>
                {['grand', 'daily'].map(t => (
                  <div key={t} onClick={()=>setHistoryTab(t)} style={styles.tabItem(historyTab === t)}>
                    {t === 'grand' ? '积累大奖' : '每日开奖'}
                  </div>
                ))}
              </div>
              <div style={{flex:1, overflowY:'auto'}}>
                 <div style={styles.emptyState}>
                   <div style={styles.emptyStateIcon}>🏛️</div>
                   <div style={{fontWeight:'800', fontSize:'18px'}}>暂无大奖诞生</div>
                   <div style={{fontWeight:'600', opacity:0.7, marginTop:'8px'}}>大奖奖池正在火热累积中！</div>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  )
}

// export default LotteryPage