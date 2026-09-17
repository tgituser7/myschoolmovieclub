export const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi (NCT)",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
] as const;

export const vlogs = [
  {
    title: "How to Plan a Theatre Show",
    desc: "A practical walkthrough of putting together a school theatre outing, from picking a film to managing the whole class on the day.",
    duration: "8:14",
  },
  {
    title: "What is Digital Cinema?",
    desc: "A beginner-friendly explainer on digital projection and screening formats, and what a school actually needs to get started.",
    duration: "6:45",
  },
  {
    title: "Behind the Scenes of a School Screening",
    desc: "A look at everything that happens before the lights go down — setup, promotion and getting the whole school in the room.",
    duration: "5:20",
  },
  {
    title: "Tips for Acting on Camera",
    desc: "Simple, practical advice for students stepping in front of a camera for the first time in a filmmaking workshop.",
    duration: "7:02",
  },
  {
    title: "How to Judge a Debate Competition",
    desc: "What to look for as a judge — structure, evidence and delivery — for a fair and useful school debate competition.",
    duration: "6:10",
  },
  {
    title: "Setting Up Backstage Sound & Lighting",
    desc: "The basics of sound and lighting setup for a school event, explained for teams with no technical background.",
    duration: "9:33",
  },
] as const;

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

export const movieTypes = [
  {
    title: "Full Length Movies",
    desc: "Feature-length films for a complete screening session, from assembly halls to a classroom double period.",
  },
  {
    title: "Short Films (Inspirational & Motivational)",
    desc: "Quick, powerful stories that spark motivation and inspiration — easy to fit into a single class period.",
  },
  {
    title: "Educational Stories",
    desc: "Curriculum-linked storytelling that turns a screening into a genuine lesson.",
  },
  {
    title: "Tutorial Films",
    desc: "Hands-on how-to content — how to make films, photography workshops, and how to make a documentary.",
  },
] as const;

export const howItWorks = [
  {
    kicker: "Service 01",
    title: "In School Movie",
    desc: "A full-school screening event on your own campus — auditorium or open ground set up with a big screen for the whole student body to watch together.",
  },
  {
    kicker: "Service 02",
    title: "Classroom Movies",
    desc: "Bite-sized screenings played right on a classroom smart TV or projector — an easy way to slot a short educational film between lessons.",
  },
  {
    kicker: "Service 03",
    title: "Theatre Tours",
    desc: "Take the class out for the real thing — a partner cinema outing on the big screen, popcorn included, with a guided discussion afterwards.",
  },
  {
    kicker: "Service 04",
    title: "Village and Agriculture Tours",
    desc: "Hands-on field trips to partner villages and farms — students see crop cycles, traditional farming methods and rural life firsthand.",
  },
  {
    kicker: "Service 05",
    title: "Skill Development Workshops",
    desc: "Hands-on sessions in film making, performance art, acting and film editing",
  },
  {
    kicker: "Service 06",
    title: "Celebrity Management",
    desc: "We help coordinate guest appearances and celebrity visits for school events, screenings and special occasions.",
  },
  {
    kicker: "Service 07",
    title: "Backstage Technical Support",
    desc: "Sound, lighting and projection handled by our crew, so your event runs smoothly from setup to curtain call.",
  },
  {
    kicker: "Service 08",
    title: "Art Competitions",
    desc: "School-wide art competitions that give students a creative outlet and a chance to showcase their work.",
  },
  {
    kicker: "Service 09",
    title: "Movie Making Competitions",
    desc: "Student teams write, shoot and edit their own short films, competing for recognition and prizes.",
  },
  {
    kicker: "Service 10",
    title: "Debate Competitions",
    desc: "Structured debates that build public speaking, critical thinking and confidence in front of an audience.",
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
