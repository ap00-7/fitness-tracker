const bmiWeightRanges = {
  "147": { "min": 41, "max": 52 },
  "148": { "min": 42, "max": 53 },
  "149": { "min": 43, "max": 54 },
  "150": { "min": 44, "max": 55 },
  "151": { "min": 45, "max": 56 },
  "152": { "min": 46, "max": 57 },
  "153": { "min": 47, "max": 58 },
  "154": { "min": 48, "max": 59 },
  "155": { "min": 49, "max": 60 },
  "156": { "min": 50, "max": 61 },
  "157": { "min": 51, "max": 62 },
  "158": { "min": 52, "max": 63 },
  "159": { "min": 53, "max": 64 },
  "160": { "min": 54, "max": 65 },
  "161": { "min": 55, "max": 66 },
  "162": { "min": 56, "max": 67 },
  "163": { "min": 57, "max": 68 },
  "164": { "min": 58, "max": 69 },
  "165": { "min": 59, "max": 70 },
  "166": { "min": 60, "max": 71 },
  "167": { "min": 61, "max": 72 },
  "168": { "min": 62, "max": 73 },
  "169": { "min": 63, "max": 74 },
  "170": { "min": 64, "max": 75 },
  "171": { "min": 65, "max": 76 },
  "172": { "min": 66, "max": 77 },
  "173": { "min": 67, "max": 78 },
  "174": { "min": 68, "max": 79 },
  "175": { "min": 69, "max": 80 },
  "176": { "min": 70, "max": 81 },
  "177": { "min": 71, "max": 82 },
  "178": { "min": 72, "max": 83 },
  "179": { "min": 73, "max": 84 }
};

function calculateBMI() {
  const height = document.getElementById('height').value; // in cm
  const weight = document.getElementById('weight').value; // in kg
  const age = document.getElementById('age').value; // user age

  // Convert height from cm to meters
  const heightInMeters = height / 100;
  
  // BMI Calculation using the formula for kg and cm
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  
  let message = `Your BMI is ${bmi}. `;
  
  // Get the weight range based on height
  const weightRange = bmiWeightRanges[height];
  
  if (weightRange) {
      if (bmi < 18.5) {
          // Calculate goal weight for BMI 18.5
          const goalWeight = (18.5 * (heightInMeters * heightInMeters)).toFixed(2);
          message += `You are underweight. Aim for a weight between ${weightRange.min} kg and ${weightRange.max} kg for a healthy BMI. To reach a BMI of 18.5, your goal weight should be around ${goalWeight} kg.`;
      } else if (bmi >= 18.5 && bmi <= 24.9) {
          message += `You are in the healthy weight range. Keep maintaining your current weight!`;
      } else {
          // Calculate goal weight for BMI 24.9
          const goalWeight = (24.9 * (heightInMeters * heightInMeters)).toFixed(2);
          message += `You are overweight. Aim for a weight between ${weightRange.min} kg and ${weightRange.max} kg for a healthy BMI. To reach a BMI of 24.9, your goal weight should be around ${goalWeight} kg.`;
      }
  } else {
      message += `No specific data available for your height. Please consult a healthcare professional for guidance.`;
  }

  // Display the result message in the 'result' div
  document.getElementById('result').textContent = message;
}

document.getElementById('calculate-bmi').addEventListener('click', function(e) {
  e.preventDefault();
  // Get user inputs
  const username = document.getElementById('username').value;
  const age = parseInt(document.getElementById('age').value);
  const height = parseInt(document.getElementById('height').value); // height in cm
  const weight = parseInt(document.getElementById('weight').value); // weight in kg

  // Calculate BMI
  const heightInMeters = height / 100; // Convert height to meters
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2); // BMI formula

  // Generate suggestion based on BMI
  let suggestion = '';
  let exercisePlan = [];
  let dietPlan = [];

  if (bmi < 18.5) {
    suggestion = 'You are underweight. Consider increasing your calorie intake and focus on muscle-building exercises. The healthy range of BMI falls under 18.5 to 24.9. If you wish to gain some weight click next to follow exercise and diet plan.';
    exercisePlan = [
      "Phase 1: Month 1-3 (Foundation and Strength Building): Focus on full-body strength workouts, learning proper form, and lifting progressively heavier weights.",
      "Phase 2: Month 4-6 (Hypertrophy and Strength Focus): Increase volume, target muscle growth with a split routine, and progressively overload muscles.",
      "Phase 3: Month 7-9 (Advanced Strength and Muscle Building): Focus on advanced strength and hypertrophy, continuing with progressive overload.",
      "Phase 4: Month 10-12 (Power and Strength with Focus on Conditioning): Peak strength, power, and conditioning. Incorporate compound lifts and maintain muscle mass with moderate cardio."
    ];
    dietPlan = [
      "Phase 1: Month 1-3 (Caloric Surplus and High Protein Intake): Increase your calories by 300-500 per day, aim for high-protein foods.",
      "Phase 2: Month 4-6 (Increased Caloric Intake and Muscle Growth): Increase your calories by 500-700 above maintenance to support muscle growth.",
      "Phase 3: Month 7-9 (Optimize Muscle Recovery and Maintain Surplus): Focus on recovery with high-protein meals, mass gainer supplements if necessary.",
      "Phase 4: Month 10-12 (Final Muscle Gain and Conditioning): Maintain high calories, balancing carbs, proteins, and fats for muscle preservation."
    ];
  } else if (bmi >= 18.5 && bmi < 24.9) {
    suggestion = 'You have a healthy weight. Maintain a balanced diet and keep exercising regularly. If you wish to maintain the same result click next to follow exercise and diet plan.';
    exercisePlan = [
      "Phase 1: Month 1-3 (Fat Loss and Strength Building): Focus on building strength while initiating fat loss with full-body workouts and moderate cardio.",
      "Phase 2: Month 4-6 (Increased Intensity and Cardio): Increase intensity, build lean muscle, and burn fat with more cardio.",
      "Phase 3: Month 7-9 (Advanced Strength and Fat Loss): Focus on increasing strength, conditioning, and fat loss with compound lifts and HIIT.",
      "Phase 4: Month 10-12 (Fat Loss and Power Training): Continue strength training while focusing on fat loss, including HIIT and maintaining muscle mass."
    ];
    dietPlan = [
      "Phase 1: Month 1-3 (Calorie Deficit and Nutrient-Dense Meals): Focus on a caloric deficit with nutrient-dense meals, prioritizing protein.",
      "Phase 2: Month 4-6 (Maintain Deficit and Focus on Protein): Keep caloric intake 300-500 below maintenance, focusing on protein and fiber.",
      "Phase 3: Month 7-9 (Increase Protein for Muscle Maintenance): Maintain calorie deficit but increase protein to preserve muscle mass.",
      "Phase 4: Month 10-12 (Focus on Lean Muscle Preservation): Continue eating in a calorie deficit, with an emphasis on high protein and moderate carbs."
    ];
  } else {
    suggestion = 'You are overweight. Consider a balanced diet and incorporating more cardio exercises into your routine. The healthy range of BMI falls under 18.5 to 24.9. If you wish to lose some weight click next to follow exercise and diet plan.';
    exercisePlan = [
      "Phase 1: Month 1-3 (Fat Loss and Strength Building): Focus on full-body workouts to burn fat while building strength.",
      "Phase 2: Month 4-6 (Increased Intensity and Cardio): Focus on increasing cardio intensity and muscle-building exercises.",
      "Phase 3: Month 7-9 (Advanced Strength and Fat Loss): Combine compound lifts with HIIT for fat loss and muscle preservation.",
      "Phase 4: Month 10-12 (Fat Loss and Power Training): Focus on fat loss and power lifting with a combination of HIIT and strength training."
    ];
    dietPlan = [
      "Phase 1: Month 1-3 (Calorie Deficit and Nutrient-Dense Meals): Aim for a caloric deficit with nutrient-dense meals, high in protein.",
      "Phase 2: Month 4-6 (Maintain Deficit and Focus on Protein): Keep a calorie deficit, increase protein, and focus on healthy fats.",
      "Phase 3: Month 7-9 (Increase Protein for Muscle Maintenance): Maintain a deficit while prioritizing protein to preserve muscle.",
      "Phase 4: Month 10-12 (Focus on Lean Muscle Preservation): Continue in a calorie deficit with a focus on high-protein meals."
    ];
  }

  // Display BMI result and suggestions
  document.getElementById('bmi-result').innerText = `Hello ${username}, your BMI is: ${bmi}`;
  document.getElementById('suggestion').innerText = suggestion;

  // Hide form and show result
  hideAllContainers();
  document.getElementById('result-container').style.display = 'block';

  // Store exercise and diet plan for later use
  window.exercisePlan = exercisePlan;
  window.dietPlan = dietPlan;
});

function hideAllContainers() {
  // Hide all containers
  document.querySelector('.form-container').style.display = 'none';
  document.getElementById('result-container').style.display = 'none';
  document.getElementById('plan-container').style.display = 'none';
  document.getElementById('plan-details-container').style.display = 'none';
}

function goBack() {
  // Reset the layout and show the form page properly
  hideAllContainers();
  document.querySelector('.form-container').style.display = 'flex';  // Use 'flex' to ensure it's properly aligned
}

function goBackToPlan() {
  // Reset the layout and show the plan selection page properly
  hideAllContainers();
  document.getElementById('plan-container').style.display = 'flex';  // Make sure it's aligned
}

function goHome() {
  // Reset and go to the home page
  hideAllContainers();
  document.querySelector('.form-container').style.display = 'flex';  // Use 'flex' for consistent alignment
}

function goToNext() {
  // Hide result and show plan options
  hideAllContainers();
  document.getElementById('plan-container').style.display = 'flex'; // Make sure it's aligned correctly
}


function showPlan(duration) {
  // Show the corresponding plan based on the selected duration
  let exerciseText = '';
  let dietText = '';

  if (duration === 'week') {
    exerciseText = window.exercisePlan.slice(0, 4).join('<br><br>');
    dietText = window.dietPlan.slice(0, 4).join('<br><br>');
  } else if (duration === 'month') {
    exerciseText = window.exercisePlan.slice(0, 12).join('<br><br>');
    dietText = window.dietPlan.slice(0, 12).join('<br><br>');
  } else {
    exerciseText = window.exercisePlan.join('<br><br>');
    dietText = window.dietPlan.join('<br><br>');
  }

  document.getElementById('duration-plan').innerHTML = `
    <h3>Exercise Plan</h3>
    <p>${exerciseText}</p>
    <h3>Diet Plan</h3>
    <p>${dietText}</p>
  `;
  hideAllContainers();
  document.getElementById('plan-details-container').style.display = 'block';
}
