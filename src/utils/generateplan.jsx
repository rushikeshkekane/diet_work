// src/utils/generatePlan.js

const generatePlan = (data) => {
  const bmi = (data.weight / ((data.height / 100) ** 2)).toFixed(1);
  const dietType = (data.diet || '').toLowerCase().trim();
  const goal = (data.goal || '').toLowerCase().trim();

  let recommendation = '';
  let foodItems = [];

  console.log('User Diet Preference:', dietType);
  console.log('User Goal:', goal);
  console.log('User BMI:', bmi);

  // 🟡 BMI-Based Recommendation
  if (bmi < 18.5) {
    recommendation = '⚠️ Underweight – You need high-protein meals and supplements to build weight.';
    foodItems = getUnderweightFoods(dietType);
  } else if (bmi >= 25) {
    recommendation = '⚠️ Overweight – You need a low-carb, high-fiber diet with lean protein support.';
    foodItems = getOverweightFoods(dietType);
  } else {
    recommendation = '✅ Normal BMI – Maintain a balanced, nutritious diet with optional supplements.';
    foodItems = getHealthyWeightFoods(dietType);
  }

  // 🔵 Goal-Based Additions
  const goalNote = getGoalNote(goal);
  recommendation += ` ${goalNote}`;

  return {
    name: data.name,
    bmi,
    recommendation,
    foodItems,
  };
};

// 🔸 Helper: Underweight Food Plan
const getUnderweightFoods = (diet) => {
  switch (diet) {
    case 'non-vegetarian':
      return ['🍗 Chicken', '🥚 Eggs', '🐟 Fish', '🥛 Milk', '🍞 Bread', '💪 Whey Protein Powder'];
    case 'vegan':
      return ['🌱 Tofu', '🥜 Nuts', '🍌 Bananas', '🍚 Brown Rice', '💪 Plant-based Protein Powder'];
    default:
      return ['🥛 Milk', '🍚 Rice', '🥜 Peanut Butter', '🥚 Eggs (optional)', '💪 Casein Protein Powder'];
  }
};

// 🔸 Helper: Overweight Food Plan
const getOverweightFoods = (diet) => {
  switch (diet) {
    case 'non-vegetarian':
      return ['🍗 Grilled Chicken', '🥦 Broccoli', '🍎 Apple', '🐟 Fish', '💪 Lean Whey Protein (Isolate)'];
    case 'vegan':
      return ['🥗 Salads', '🥑 Avocados', '🍓 Berries', '🌰 Seeds', '💪 Pea Protein Powder (Unsweetened)'];
    default:
      return ['🥬 Leafy Greens', '🍓 Fruits', '🥛 Low-fat Yogurt', '🍲 Lentils', '💪 Slimming Protein Shake (Low-carb)'];
  }
};

// 🔸 Helper: Healthy Weight Food Plan
const getHealthyWeightFoods = (diet) => {
  switch (diet) {
    case 'non-vegetarian':
      return ['🍗 Chicken', '🐟 Fish', '🍚 Brown Rice', '🥗 Salad', '💪 Whey or Casein Protein (Post-workout)'];
    case 'vegan':
      return ['🥗 Kale Salad', '🍚 Quinoa', '🥜 Almonds', '🍊 Oranges', '💪 Vegan Protein Blend'];
    default:
      return ['🍚 Brown Rice', '🥛 Milk', '🥗 Spinach', '🍎 Fruits', '💪 Balanced Protein Shake'];
  }
};

// 🔸 Helper: Goal Note
const getGoalNote = (goal) => {
  switch (goal) {
    case 'weight_loss':
      return '🥗 Goal: Weight Loss – Prioritize calorie control and high-fiber intake.';
    case 'weight_gain':
      return '🥩 Goal: Weight Gain – Increase protein, healthy fats, and complex carbs.';
    case 'maintain_weight':
      return '🧘 Goal: Maintain – Focus on portion control and consistency.';
    default:
      return '';
  }
};

export default generatePlan;
