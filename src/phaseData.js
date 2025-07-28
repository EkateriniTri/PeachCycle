export const phaseData = {
  menstruation: {
    name: "🔴 Menstruation",
    range: [1, 5],
    description: "Time to rest and reflect.",
    food: [
      {
        name: "Spinach",
        category: "Iron-Rich",
        reason: "Replenishes iron lost during menstruation.",
      },
      {
        name: "Dark Chocolate",
        category: "Magnesium-Rich",
        reason: "Helps reduce cramps and boosts mood.",
      },
    ],
    avoid: [
      {
        name: "Caffeine",
        reason: "May increase cramps and irritabilitty.",
      },
      {
        name: "Salty snacks",
        reason: "Can worsen bloating.",
      },
    ],

    suggestions: {
      movement: ["Creative tasks", "Strength workouts", ",Dance"],
      clothing: ["Linen, Pastels", "Breathable activewear"],
    },
    oppaNotes: [],
  },

  follicular: {
    name: "🌱 Follicular Phase",
    range: [6, 12],
    description: "What excites me right now?",
    food: [
      {
        name: "Fresh greens",
        category: "Leafy",
        reason: "Support estrogen production",
      },
      {
        name: "Fermented foods",
        category: "Gut health",
        reason: "Support digestion and hormones",
      },
    ],
    suggestions: {
      movement: ["Creative tasks", "Strength workouts", "Dance"],
      clothing: ["Linen", "Pastels", "Breathable activewear"],
    },
    oppaNotes: [],
  },

  ovulation: {
    name: "🔥 Ovulation Phase",
    range: [13, 16],
    description: "Where do I feel most alive?",
    food: [
      {
        name: "Raw veggies",
        category: "Cooling",
        reason: "Support detoxification",
      },
      {
        name: "Smoothies",
        category: "Refreshing",
        reason: "Keep energy and hydration up",
      },
    ],
    suggestions: {
      movement: ["HIIT", "Running", "Group classes"],
      clothing: ["Silk", "Fitted styles", "Fun accessories"],
    },
    oppaNotes: [],
  },

  luteal: {
    name: "🌕 Luteal Phase",
    range: [17, 28],
    description: "What do I need to feel supported today?",
    food: [
      {
        name: "Dark chocolate",
        category: "Magnesium-rich",
        reason: "Eases PMS and boosts mood",
      },
      {
        name: "Roasted veggies",
        category: "Warm foods",
        reason: "Support slower digestion",
      },
    ],
    suggestions: {
      movement: ["Walks", ",Low-impact movement", "Breathwork"],
      clothing: ["Soft joggers", "Layered knits", "Warm socks"],
    },
    oppaNotes: [],
  },
};
