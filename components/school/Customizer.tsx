"use client";

import { CSSProperties, useEffect, useMemo, useState } from "react";

type Choice = {
  id: string;
  label: string;
};

type CustomColorKey =
  | "primary"
  | "secondary"
  | "cta"
  | "background"
  | "surface"
  | "cards"
  | "hover"
  | "glass"
  | "icons"
  | "decor";

const navigationChoices: Choice[] = [
  { id: "top", label: "Top" },
  { id: "left", label: "Left" },
  { id: "right", label: "Right" },
];

const layoutChoices: Choice[] = [
  { id: "classic", label: "Classic" },
  { id: "modern", label: "Modern" },
  { id: "immersive", label: "Immersive" },
];

const cardChoices: Choice[] = [
  { id: "clean", label: "Clean" },
  { id: "glass", label: "Glass" },
  { id: "soft", label: "Soft" },
];

const motionChoices: Choice[] = [
  { id: "minimal", label: "Minimal" },
  { id: "smooth", label: "Smooth" },
  { id: "dynamic", label: "Dynamic" },
];

const themeChoices: Choice[] = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
];

const colorChoices: Choice[] = [
  { id: "classic", label: "Classic" },
  { id: "vibrant", label: "Vibrant" },
  { id: "elegant", label: "Elegant" },
  { id: "custom", label: "Custom" },
];

const colorParts = {
  navy: ["10", "23", "3F"],
  indigo: ["5B", "4B", "DB"],
  orange: ["F2", "8C", "28"],
  yellow: ["F4", "C5", "42"],
  teal: ["21", "A6", "A1"],
  coral: ["F3", "6F", "5F"],
  cream: ["FF", "F8", "EE"],
  white: ["FF", "FF", "FF"],
  text: ["18", "20", "2A"],
};

const colorFrom = (parts: string[]) => `#${parts.join("")}`;

const classicPalette = {
  "--deep-navy": colorFrom(colorParts.navy),
  "--royal-indigo": colorFrom(colorParts.indigo),
  "--warm-orange": colorFrom(colorParts.orange),
  "--sunshine-yellow": colorFrom(colorParts.yellow),
  "--teal": colorFrom(colorParts.teal),
  "--coral": colorFrom(colorParts.coral),
  "--cream": colorFrom(colorParts.cream),
  "--white": colorFrom(colorParts.white),
  "--dark-text": colorFrom(colorParts.text),
};

const presetPalettes: Record<string, Record<string, string>> = {
  classic: classicPalette,
  vibrant: {
    "--deep-navy": colorFrom(colorParts.indigo),
    "--royal-indigo": colorFrom(colorParts.teal),
    "--warm-orange": colorFrom(colorParts.coral),
    "--sunshine-yellow": colorFrom(colorParts.yellow),
    "--teal": colorFrom(colorParts.teal),
    "--coral": colorFrom(colorParts.orange),
    "--cream": colorFrom(colorParts.cream),
    "--white": colorFrom(colorParts.white),
    "--dark-text": colorFrom(colorParts.text),
  },
  elegant: {
    "--deep-navy": colorFrom(colorParts.navy),
    "--royal-indigo": colorFrom(colorParts.navy),
    "--warm-orange": colorFrom(colorParts.orange),
    "--sunshine-yellow": colorFrom(colorParts.yellow),
    "--teal": colorFrom(colorParts.teal),
    "--coral": colorFrom(colorParts.coral),
    "--cream": colorFrom(colorParts.cream),
    "--white": colorFrom(colorParts.white),
    "--dark-text": colorFrom(colorParts.text),
  },
};

const customColorFields: Array<{
  key: CustomColorKey;
  label: string;
  variable: string;
}> = [
  { key: "primary", label: "Primary", variable: "--deep-navy" },
  { key: "secondary", label: "Secondary", variable: "--royal-indigo" },
  { key: "cta", label: "CTA", variable: "--warm-orange" },
  { key: "background", label: "Background", variable: "--cream" },
  { key: "surface", label: "Surfaces", variable: "--white" },
  { key: "cards", label: "Cards", variable: "--custom-card" },
  { key: "hover", label: "Hover", variable: "--custom-hover" },
  { key: "glass", label: "Glass Tint", variable: "--custom-glass" },
  { key: "icons", label: "Icons", variable: "--teal" },
  { key: "decor", label: "Shapes", variable: "--coral" },
];

const defaultCustomColors: Record<CustomColorKey, string> = {
  primary: classicPalette["--deep-navy"],
  secondary: classicPalette["--royal-indigo"],
  cta: classicPalette["--warm-orange"],
  background: classicPalette["--cream"],
  surface: classicPalette["--white"],
  cards: classicPalette["--white"],
  hover: classicPalette["--warm-orange"],
  glass: classicPalette["--white"],
  icons: classicPalette["--teal"],
  decor: classicPalette["--coral"],
};

function SegmentedControl({
  label,
  value,
  choices,
  onChange,
}: {
  label: string;
  value: string;
  choices: Choice[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="customizer-control">
      <span>{label}</span>
      <div className="customizer-segmented">
        {choices.map((choice) => (
          <button
            type="button"
            className={value === choice.id ? "is-active" : ""}
            onClick={() => onChange(choice.id)}
            key={choice.id}>
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Customizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [navigation, setNavigation] = useState("top");
  const [layout, setLayout] = useState("classic");
  const [cardStyle, setCardStyle] = useState("clean");
  const [motion, setMotion] = useState("smooth");
  const [theme, setTheme] = useState("light");
  const [colors, setColors] = useState("classic");
  const [customColors, setCustomColors] = useState(defaultCustomColors);

  const activePalette = useMemo(() => {
    if (colors !== "custom") {
      return presetPalettes[colors] ?? presetPalettes.classic;
    }

    return {
      "--deep-navy": customColors.primary,
      "--royal-indigo": customColors.secondary,
      "--warm-orange": customColors.cta,
      "--sunshine-yellow": classicPalette["--sunshine-yellow"],
      "--teal": customColors.icons,
      "--coral": customColors.decor,
      "--cream": customColors.background,
      "--white": customColors.surface,
      "--dark-text": classicPalette["--dark-text"],
      "--custom-card": customColors.cards,
      "--custom-hover": customColors.hover,
      "--custom-glass": customColors.glass,
    };
  }, [colors, customColors]);

  useEffect(() => {
    const root = document.documentElement;

    root.dataset.nav = navigation;
    root.dataset.layout = layout;
    root.dataset.cards = cardStyle;
    root.dataset.motion = motion;
    root.dataset.theme = theme;
    root.dataset.colors = colors;

    Object.entries(activePalette).forEach(([variable, value]) => {
      root.style.setProperty(variable, value);
    });

    root.style.setProperty("--custom-card", customColors.cards);
    root.style.setProperty("--custom-hover", customColors.hover);
    root.style.setProperty("--custom-glass", customColors.glass);

    return () => {
      delete root.dataset.nav;
      delete root.dataset.layout;
      delete root.dataset.cards;
      delete root.dataset.motion;
      delete root.dataset.theme;
      delete root.dataset.colors;
    };
  }, [
    activePalette,
    cardStyle,
    colors,
    customColors,
    layout,
    motion,
    navigation,
    theme,
  ]);

  const swatchStyle = (value: string) =>
    ({ "--swatch": value }) as CSSProperties;

  return (
    <>
      <button
        type="button"
        className={`customizer-trigger${isOpen ? " is-active" : ""}`}
        aria-label="Open website customizer"
        aria-expanded={isOpen}
        aria-controls="site-customizer"
        onClick={() => setIsOpen(true)}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 4h-7" />
          <path d="M10 4H3" />
          <path d="M21 12h-9" />
          <path d="M8 12H3" />
          <path d="M21 20h-5" />
          <path d="M12 20H3" />
          <path d="M14 2v4" />
          <path d="M8 10v4" />
          <path d="M16 18v4" />
        </svg>
      </button>

      <div
        className={`customizer-backdrop ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(false)}></div>

      <aside
        className={`site-customizer ${isOpen ? "is-open" : ""}`}
        id="site-customizer"
        aria-label="Website customization">
        <div className="customizer-header">
          <div>
            <span>Design System</span>
            <h2>Customize</h2>
          </div>
          <button
            type="button"
            aria-label="Close customizer"
            onClick={() => setIsOpen(false)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <div className="customizer-preview">
          <div className="preview-window">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <strong>Live brand preview</strong>
            <p>Classic keeps the approved school identity unchanged.</p>
          </div>
        </div>

        <div className="customizer-scroll">
          <SegmentedControl
            label="Navigation"
            value={navigation}
            choices={navigationChoices}
            onChange={setNavigation}
          />
          <SegmentedControl
            label="Layout"
            value={layout}
            choices={layoutChoices}
            onChange={setLayout}
          />
          <SegmentedControl
            label="Card Style"
            value={cardStyle}
            choices={cardChoices}
            onChange={setCardStyle}
          />
          <SegmentedControl
            label="Motion"
            value={motion}
            choices={motionChoices}
            onChange={setMotion}
          />
          <SegmentedControl
            label="Theme"
            value={theme}
            choices={themeChoices}
            onChange={setTheme}
          />
          <SegmentedControl
            label="Colors"
            value={colors}
            choices={colorChoices}
            onChange={setColors}
          />

          {colors === "custom" && (
            <div className="custom-color-grid" aria-label="Custom colors">
              {customColorFields.map((field) => (
                <label className="custom-color-field" key={field.key}>
                  <span>{field.label}</span>
                  <input
                    type="color"
                    value={customColors[field.key]}
                    onChange={(event) =>
                      setCustomColors((current) => ({
                        ...current,
                        [field.key]: event.target.value,
                      }))
                    }
                  />
                  <i style={swatchStyle(customColors[field.key])}></i>
                </label>
              ))}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
