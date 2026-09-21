/**
 * Run: node --experimental-strip-types src/lib/public-profile.selftest.ts
 */
import assert from "node:assert/strict";

import {
  PUBLIC_PROFILE_KEYS,
  appUserProfileUrl,
  landingStaticPathWins,
  parsePublicProfile,
  publicSlugError,
  referrerClass,
} from "./public-profile.ts";

assert.equal(publicSlugError("jacekkusiak"), null);
assert.equal(publicSlugError("Jacek"), null);
assert.equal(publicSlugError("privacy"), "RESERVED_SLUG");
assert.equal(publicSlugError("support"), "RESERVED_SLUG");
assert.equal(publicSlugError("a b"), "INVALID_SLUG");

assert.equal(landingStaticPathWins("/privacy"), true);
assert.equal(landingStaticPathWins("/support"), true);
assert.equal(landingStaticPathWins("/"), true);
assert.equal(landingStaticPathWins("/jacekkusiak"), false);

const card = parsePublicProfile({
  user_id: "u1",
  public_slug: "jacekkusiak",
  display_name: "Jacek Kusiak",
  avatar_url: "https://cdn.example/a.jpg",
  profession_title: "Investor",
  company: "Konexa",
  region: "Mazowieckie",
  industries: ["stock_crypto"],
  public_web_bio: "Investor",
  is_verified: true,
  is_founder: false,
  is_ambassador: true,
  phone: "+48111",
  contact_email: "a@b.c",
  linkedin_url: "https://linkedin.com/in/x",
  looking_for_text: "secret",
});
assert.ok(card);
assert.equal(card?.display_name, "Jacek Kusiak");
assert.equal("phone" in (card as object), false);
assert.equal("contact_email" in (card as object), false);
assert.equal("linkedin_url" in (card as object), false);
assert.equal("looking_for_text" in (card as object), false);
assert.equal(
  PUBLIC_PROFILE_KEYS.every((key) => key in (card as object)),
  true,
);

assert.equal(parsePublicProfile({ phone: "1", display_name: "A" }), null);
assert.equal(
  appUserProfileUrl("abc"),
  "https://app.konexa.space/user/abc",
);
assert.equal(referrerClass(""), "direct");
assert.equal(referrerClass("https://www.google.com/search"), "search");

console.log("public-profile.selftest: ok");
