export function getUvDetails(index) {
    if (index < 0 || isNaN(index)) {
        return { risk: "Unknown", message: "Invalid UV index" };
    }

    if (index < 2) {
        return { risk: "Low", message: "No protection needed"};
    } else if (index < 5) {
        return { risk: "Moderate", message: "Wear sunglasses, use SPF 30+ sunscreen"};
    } else if (index < 7) {
        return { risk: "High", message: "Cover skin, use SPF 30+, stay in shade"};
    } else if (index <= 10) {
        return { risk: "Very High", message: "Minimize sun exposure, use SPF 50+"};
    } else {
        return { risk: "Extreme", message: "Avoid sun exposure, wear protective clothing"};
    }
};


export function getUvImage(index) {
    if (index <= 2) return "/lowUv.png";       
    if (index <= 5) return "/moderateUv.png";  
    if (index <= 7) return "/highUv.png";      
    if (index <= 10) return "/veryhighUv.png";
    return "/extremeUv.png";                    
  }
    