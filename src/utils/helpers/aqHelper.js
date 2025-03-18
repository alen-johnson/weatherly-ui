export function getAqDetails(category) {
    switch (category) {
        case "Good":
            return "Air quality is excellent!";
        case "Moderate":
            return "Air quality is acceptable, but sensitive individuals should limit outdoor activity.";
        case "Unhealthy for Sensitive Groups":
            return "People with respiratory issues should reduce prolonged outdoor exertion.";
        case "Unhealthy":
            return "Everyone may experience health effects. Limit outdoor activities.";
        case "Very Unhealthy":
            return "Serious health risks. Wear a mask and stay indoors if possible.";
        case "Hazardous":
            return "Emergency conditions! Everyone should avoid outdoor exposure and wear protective gear.";
        default:
            return "No air quality data available.";
    }
};


export function getAqImage(category) {
    switch (category) {
        case "Good":
            return "/goodAQ.png";
        case "Moderate":
            return "/moderateAQ.png";
        case "Unhealthy for Sensitive Groups":
            return "/unhealthySensAQ.png";
        case "Unhealthy":
            return "/unhealthyAQ.png";
        case "Very Unhealthy":
            return "/veryUnhealthyAQ.png";
        case "Hazardous":
            return "/hazardousAQ.png";
    }
}
