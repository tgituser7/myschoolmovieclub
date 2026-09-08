export const genres = [
  {
    title: "Kids-Oriented Movies",
    desc: "Gentle, age-matched stories that hold a young audience's attention from the first frame.",
  },
  {
    title: "Biographies",
    desc: "The lives of people worth knowing about — scientists, leaders, artists and change-makers.",
  },
  {
    title: "Documentaries",
    desc: "Real places, real history, real science — the world as it is, shown rather than told.",
  },
  {
    title: "Animated Films",
    desc: "Imagination rendered frame by frame, a favourite entry point for younger students.",
  },
  {
    title: "Short Films",
    desc: "Complete stories in a single class period — easy to screen between lessons.",
  },
  {
    title: "Educational Films",
    desc: "Curriculum-linked content that turns a screening into a genuine lesson.",
  },
  {
    title: "Films on Social Causes",
    desc: "Stories that build empathy and awareness around the issues shaping our world.",
  },
  {
    title: "Entertainment Films",
    desc: "Pure enjoyment, reserved for the moments a school simply wants to celebrate.",
  },
] as const;

export const howItWorks = [
  {
    kicker: "Option 01",
    title: "Subscription Package",
    desc: "The school buys or hires a digital screening system and takes an annual service or subscription, unlocking a constantly refreshed library of films and content.",
  },
  {
    kicker: "Option 02",
    title: "Single Movie Tour",
    desc: "No long-term commitment — the school chooses and books one film at a time, screening it as a standalone event whenever it suits the calendar.",
  },
  {
    kicker: "Option 03",
    title: "Bring Your Own Screen",
    desc: "Schools with their own projection system need only purchase curated content boxes to show movies and educational programmes.",
  },
] as const;

export const schedule = [
  { time: "Regular", detail: "Woven into the everyday school week" },
  { time: "Weekends", detail: "A relaxed screening away from the timetable" },
  { time: "Festival Time", detail: "Themed films to mark the season" },
  { time: "Holidays", detail: "Keeping minds engaged during the break" },
  { time: "Lunch Time", detail: "A short feature over the midday hour" },
  { time: "Extra Classes", detail: "Free periods turned into screen time" },
] as const;

export const promotion = [
  { title: "Banners & Posters", desc: "Displayed around the school grounds" },
  { title: "Notice Board", desc: "Screening details posted for all to see" },
  { title: "Circulars", desc: "Sent home by the school administrator" },
  { title: "Standees", desc: "Placed at entrances and corridors" },
  { title: "Word of Mouth", desc: "Students and teachers spreading the word" },
  { title: "Hand Bills", desc: "Handed out ahead of a screening" },
] as const;

export const advantages = [
  {
    title: "News, Discussion & Prizes",
    desc: "My School Movie Club helps organise a school news programme, student interactive sessions, and open discussions that end in prize distribution.",
  },
  {
    title: "Richer Everyday Content",
    desc: "The same system can be used well beyond screening days, bringing more educational content into ordinary classroom time.",
  },
  {
    title: "Workshops in Craft",
    desc: "My School also helps organise workshops in performing arts and filmmaking — letting students create, not just watch.",
  },
] as const;
