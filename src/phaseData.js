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
        name: "Lentils",
        category: "Iron-Rich",
        reason: "Replenishes iron lost during menstruation.",
      },
      {
        name: "Red meat (if you eat it)",
        category: "Iron-Rich",
        reason: "Replenishes iron lost during menstruation.",
      },
      {
        name: "Pumpkin seeds",
        category: "Iron-Rich",
        reason: "Replenishes iron lost during menstruation.",
      },
      {
        name: "Dark chocolate",
        category: "Magnesium-rich",
        reason: "Relaxes muscles and eases cramps.",
      },
      {
        name: "Avocados",
        category: "Magnesium-Rich",
        reason: "Support nervous system and reduce irritability.",
      },

      {
        name: "Almonds",
        category: "Magnesium-Rich",
        reason: "Help reduce PMS-related fatigue and tension.",
      },
      {
        name: "Cucumbers",
        category: "Hydrating",
        reason: "Support hydration and reduce bloating.",
      },
      {
        name: "Watermelon",
        category: "Hydrating",
        reason: "Boosts hydration and provides natural sugar for energy.",
      },
      {
        name: "Soups",
        category: "Hydrating",
        reason: "Warm and nourishing; replace lost fluids.",
      },
      {
        name: "Salmon",
        category: "Omega-3",
        reason: "Reduces inflammation and eases menstrual pain.",
      },
      {
        name: "Flaxseeds",
        category: "Omega-3",
        reason: "Help balance estrogen and reduce cramping.",
      },
      {
        name: "Walnuts",
        category: "Omega-3",
        reason: "Support brain function and reduce inflammation.",
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
      { name: "Sugar overload", reason: "Blood sugar crashes=mood crashes" },

      { name: "Alcohol", reason: "Can worsen fatigue and hormonal imbalance" },
    ],

    suggestions: {
      movement: ["Creative tasks", "Strength workouts", "Dance"],
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
        category: "Leafy & Fresh ",
        reason: "Support rising estrogen and provide folate.",
      },
      {
        name: "Fermented foods",
        category: "Gut Support",
        reason: "Promote healthy gut flora for hormone metabolism.",
      },
      {
        name: "Citrus fruits",
        category: "Light & Fresh",
        reason: "Boost vitamin C and collagen production.",
      },
      {
        name: "Eggs",
        category: "Protein",
        reason: "Support follicle development and ovulation.",
      },
      {
        name: "Chicken",
        category: "Protein",
        reason: "Provides lean fuel for growing energy.",
      },
      {
        name: "Quinoa",
        category: "Protein + Complex Carb",
        reason: "Balances blood sugar and energizes the body.",
      },
      {
        name: "Avocado",
        category: "Healthy Fats",
        reason: "Supports hormone creation and brain function.",
      },
      {
        name: "Olive oil",
        category: "Healthy Fats",
        reason: "Anti-inflammatory and supports cellular function.",
      },
      {
        name: "Garlic",
        category: "Prebiotic",
        reason: "Feeds good gut bacteria, supporting detox.",
      },
      {
        name: "Onions",
        category: "Prebiotic",
        reason: "Aid digestion and hormone clearance.",
      },
      {
        name: "Asparagus",
        category: "Prebiotic",
        reason: "Supports liver function and estrogen balance.",
      },
    ],
    avoid: [
      {
        name: "Very heavy meals",
        reason: "Can slow down natural energy boost.",
      },
      {
        name: "Overprocessed carbs",
        reason: "Can dull mental sharpness.",
      },
      {
        name: "Skipping meals",
        reason: "Blood sugar irregularity can throw off the phase boost",
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
        name: "Carrots",
        category: "Raw Veggies",
        reason: "Support estrogen clearance and skin glow.",
      },
      {
        name: "Cucumbers",
        category: "Raw Veggies",
        reason: "Cooling and hydrating for peak energy days.",
      },
      {
        name: "Bell peppers",
        category: "Raw Veggies",
        reason: "Packed with antioxidants to support ovulation.",
      },
      {
        name: "Smoothies",
        category: "Cooling Foods",
        reason: "Support hydration and nutrient absorption.",
      },
      {
        name: "Salads",
        category: "Cooling Foods",
        reason: "Easy to digest and refreshing for the body.",
      },
      {
        name: "Mint tea",
        category: "Cooling Foods",
        reason: "Soothes digestion and reduces body heat.",
      },
      {
        name: "Chickpeas",
        category: "Zinc-Rich",
        reason: "Supports ovulation and hormone production.",
      },
      {
        name: "Cashews",
        category: "Zinc-Rich",
        reason: "Help regulate mood and boost immunity.",
      },
      {
        name: "Pumpkin seeds",
        category: "Zinc-Rich",
        reason: "Essential for hormone signaling during ovulation.",
      },
      {
        name: "Berries",
        category: "Antioxidant-Rich",
        reason: "Protect cells and enhance skin during fertile window.",
      },
      {
        name: "Smoothies",
        category: "Refreshing",
        reason: "Keep energy and hydration up",
      },
    ],
    avoid: [
      {
        name: "Excess dairy",
        reason: "Can mess with mucus consistency (yes, even that 🙈)",
      },
      {
        name: "Inflammatory foods",
        reason: "Fast food, processed meats.",
      },
      {
        name: "Too much spicy food",
        reason: "May overstimulate an already energized phase",
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
        name: "Sweet potatoes",
        category: "Complex Carbs",
        reason: "Support serotonin and reduce cravings.",
      },
      {
        name: "Brown rice",
        category: "Complex Carbs",
        reason: "Stabilizes blood sugar and sustains energy.",
      },
      {
        name: "Oats",
        category: "Complex Carbs",
        reason: "Calm the nervous system and boost fiber intake.",
      },
      {
        name: "Dark chocolate",
        category: "Magnesium-Rich",
        reason: "Helps with PMS symptoms and mood regulation.",
      },
      {
        name: "Leafy greens",
        category: "Magnesium-Rich",
        reason: "Ease tension and reduce irritability.",
      },
      {
        name: "Bananas",
        category: "Magnesium-Rich",
        reason: "Support sleep and prevent bloating.",
      },
      {
        name: "Broccoli",
        category: "Fiber-Rich",
        reason: "Supports detox and hormone clearance.",
      },
      {
        name: "Lentils",
        category: "Fiber-Rich",
        reason: "Help regulate digestion and stabilize mood.",
      },
      {
        name: "Chickpeas",
        category: "B6-Rich",
        reason: "Support progesterone and mood balance.",
      },
      {
        name: "Sunflower seeds",
        category: "B6-Rich",
        reason: "Boost progesterone and reduce PMS.",
      },
    ],
    avoid: [
      {
        name: "Caffeine",
        reason: "Can worsen PMS, irritability.",
      },
      {
        name: "Excess sugar",
        reason: "Mood swings and cravings.",
      },
      { name: "Sodium bombs", reason: "Chips, soy sauce — hello bloat" },

      { name: "Alcohol", reason: "Increases fatigue + mood instability" },
    ],

    suggestions: {
      movement: ["Walks", "Low-impact movement", "Breathwork"],
      clothing: ["Soft joggers", "Layered knits", "Warm socks"],
    },
    oppaNotes: [],
  },
};
