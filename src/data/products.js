import { v4 as uuidv4 } from "uuid";
import a1 from "../assets/img/products/a1.jpg";
import a2 from "../assets/img/products/a2.jpg";
import a3 from "../assets/img/products/a3.jpg";
import b1 from "../assets/img/products/b1.jpg";
import b2 from "../assets/img/products/b2.jpg";
import b3 from "../assets/img/products/b3.jpg";
import c1 from "../assets/img/products/c1.jpg";
import c2 from "../assets/img/products/c2.jpg";
import c3 from "../assets/img/products/c3.jpg";
import d1 from "../assets/img/products/d1.jpg";
import d2 from "../assets/img/products/d2.jpg";
import d3 from "../assets/img/products/d3.jpg";
import e1 from "../assets/img/products/e1.jpg";
import e2 from "../assets/img/products/e2.jpg";
import e3 from "../assets/img/products/e3.jpg";
import f1 from "../assets/img/products/f1.jpg";
import f2 from "../assets/img/products/f2.jpg";
import f3 from "../assets/img/products/f3.jpg";
import g1 from "../assets/img/products/g1.jpg";
import g2 from "../assets/img/products/g2.jpg";
import g3 from "../assets/img/products/g3.jpg";
import h1 from "../assets/img/products/h1.jpg";
import h2 from "../assets/img/products/h2.jpg";
import h3 from "../assets/img/products/h3.jpg";
import i1 from "../assets/img/products/i1.jpg";
import i2 from "../assets/img/products/i2.jpg";
import i3 from "../assets/img/products/i3.jpg";
import j1 from "../assets/img/products/j1.jpg";
import j2 from "../assets/img/products/j2.jpg";
import j3 from "../assets/img/products/j3.jpg";
import k1 from "../assets/img/products/k1.jpg";
import k2 from "../assets/img/products/k2.jpg";
import k3 from "../assets/img/products/k3.jpg";
import l1 from "../assets/img/products/l1.jpg";
import l2 from "../assets/img/products/l2.jpg";
import l3 from "../assets/img/products/l3.jpg";

const products = [
  {
    id: uuidv4(),
    name: "Boss DS-1W Waza Craft Distortion Pedal",
    price: 124.0,
    features: [
      "A distortion classic, revamped",
      "Updated legendary DS-1W circuit with made in Japan Waza Craftsmanship",
      "Switch between the original DS-1 distortion and a custom mode with fatter tones",
      "Ultra-consistent thanks to a premium buffer that provides a clean, clear tone when bypassed",
    ],
    displayImg: a1,
    galleryImgs: [a2, a3],
  },
  {
    id: uuidv4(),
    name: "NUX Analog Delay",
    price: 37.99,
    features: [
      "Experience a luscious, warm sounding delay effect from the '80s",
      "Sculpt your effect using smooth, easy-to-use controls",
      "100% analog circuit for a smooth, pristine signal",
      "Retain every detail of your guitar's natural tone thanks to a true bypass design",
    ],
    displayImg: b1,
    galleryImgs: [b2, b3],
  },
  {
    id: uuidv4(),
    name: "EarthQuaker Devices Tentacle V2 Octave Up",
    price: 149.0,
    features: [
      "Perform with a momentary or latching operation using flexi switch",
      "Effortless pedalboard integration provided by top mount jacks",
      "A vintage fuzz pedal sound provided by modern recreation",
      "Will fit onto any busy pedal board thanks to compact size",
    ],
    displayImg: c1,
    galleryImgs: [c2, c3],
  },
  {
    id: uuidv4(),
    name: "Boss RC-1 Loop Station",
    price: 105.0,
    features: [
      "Explore your creativity with 12 minutes of recording time",
      "Versatile connectivity with stereo in/out & external footswitch options",
      "Retain and recall your favourite phrases in memory",
      "Highly durable & roadworthy design",
    ],
    displayImg: d1,
    galleryImgs: [d2, d3],
  },
  {
    id: uuidv4(),
    name: "TC Electronic Skysurfer Reverb Pedal",
    price: 45.0,
    features: [
      "Versatile performance with 3 reverb modes",
      "Consistent tone delivered through true bypass",
      "Maximise your pedalboard space thanks to top-mounted jacks",
      "Perfect for regular gigging with compact, durable design",
    ],
    displayImg: e1,
    galleryImgs: [e2, e3],
  },
  {
    id: uuidv4(),
    name: "MXR M148 Micro Chorus Pedal",
    price: 109.0,
    features: [
      "Unleash a range of versatile, rich chorus effects",
      "Intuitive and easy to dial in the chorus sounds you were looking for",
      "Indulge in a warm and authentic analogue tone thanks to bucket brigade technology",
      "Enjoy consistent performance thanks to True Bypass and a heavy-duty switch",
    ],
    displayImg: f1,
    galleryImgs: [f2, f3],
  },
  {
    id: uuidv4(),
    name: "Electro Harmonix Mod 11 Modulation Pedal",
    price: 159.0,
    features: [
      "Powerful modulation in the palm of your hand",
      "Carve your tone using the extensive array of controls",
      "Expand your sound with 11 different modulation types",
      "Take your live shows to new heights",
    ],
    displayImg: g1,
    galleryImgs: [g2, g3],
  },
  {
    id: uuidv4(),
    name: "SubZero Critical Mass Distortion Pedal",
    price: 24.99,
    features: [
      "Thick, powerful distortion with tone-shaping capabilities",
      "Versatile EQ options with the toggle switch",
      "Maintain maximum signal integrity thanks to all-analog circuitry",
      "Solid, consistent performance via robust enclosure and true bypass design",
    ],
    displayImg: h1,
    galleryImgs: [h2, h3],
  },
  {
    id: uuidv4(),
    name: "Wampler EQuator Pedal",
    price: 199.0,
    features: [
      "Powerful 4-band EQ & 2 parametric controls",
      "Excellent tonal shaping provided by intuitive controls",
      "Boost your amp's front end with the high output",
      "High quality USA design and manufacture",
    ],
    displayImg: i1,
    galleryImgs: [i2, i3],
  },
  {
    id: uuidv4(),
    name: "Walrus Audio Lillian Analog Phaser",
    price: 199.0,
    features: [
      "Add flair to your riffs with pristine, powerful phaser effect",
      "Dial in your own tone using intuitive control dials",
      "Get a deep, rich sound with multiple stages of phasing",
      "Take your riffs to the stratosphere at the press of a switch",
    ],
    displayImg: j1,
    galleryImgs: [j2, j3],
  },
  {
    id: uuidv4(),
    name: "MXR M305 Tremolo",
    price: 179.0,
    features: [
      "Fly through historic tremolo effects from classic MXR tremolo to vintage shimmer",
      "Meticulously designed tremolo styles that come packed with must-have features",
      "Perfect for all you guitarists or keys players that use a stereo rig thanks to stereo I/O",
      "Six different tremolo styles and a classic envelope effect to play around with",
    ],
    displayImg: k1,
    galleryImgs: [k2, k3],
  },
  {
    id: uuidv4(),
    name: "Belcat FTN-525 Chromatic Pedal Tuner",
    price: 29.99,
    features: [
      "Heavy duty chromatic tuner",
      "Easy straight-forward tuning thanks to an intuitive display",
      "Preserve your natural tone with a clean bypass option",
      "Compatible with bass guitars thanks to extended range",
    ],
    displayImg: l1,
    galleryImgs: [l2, l3],
  },
];

export default products;
