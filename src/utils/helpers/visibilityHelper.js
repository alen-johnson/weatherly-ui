export function getVisibilityCategory(visibleKM) {
    if (visibleKM > 10) return { category: "Excellent", message: "No risk" };
    if (visibleKM > 7) return { category: "Good", message: "Low risk" };
    if (visibleKM > 5) return { category: "Average", message: "Moderate risk of harm" };
    if (visibleKM > 2) return { category: "Poor", message: "High risk (caution needed)" };
    if (visibleKM > 1) return { category: "Very Poor", message: "Very high risk" };
    return { category: "Extremely Poor", message: "Dangerous conditions" };
  }
  