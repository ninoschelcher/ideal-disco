import { fields } from "@keystatic/core";

import { about } from "./about";
import { contact } from "./contact";
import { cta } from "./cta";
import { faq } from "./faq";
import { features } from "./features";
import { hero } from "./hero";
import { imageText } from "./image-text";
import { pricing } from "./pricing";
import { profile } from "./profile";
import { steps } from "./steps";
import { text } from "./text";
import { timeline } from "./timeline";

// Page-builder blocks matching the Oradoro design. Each block renders through
// src/sections/. Backgrounds alternate automatically, so editors don't pick
// colors.
export const sections = fields.blocks(
  {
    hero,
    profile,
    features,
    steps,
    pricing,
    about,
    imageText,
    timeline,
    faq,
    contact,
    cta,
    text,
  },
  { label: "Secties" },
);
