let personExOne: {
    personName: string;
    personAge: number;
    personJobTitle?: string;
    personAddress: {
      streetName: string;
      cityName: string;
    };
  };
  
  personExOne = {
    personName: "Huda",
    personAge: 18,
    personJobTitle: "Software Developer",
    personAddress: {
      streetName: "456 Oak St",
      cityName: "TechCity",
    },
  };
  // And there is yet another method
  let personExTwo: {
    personName: string;
    personAge: number;
    personJobTitle?: string;
    personAddress: {
      streetName: string;
      cityName: string;
    };
  } = {
    personName: "Huda",
    personAge: 18,
    personJobTitle: "Software Developer",
    personAddress: {
      streetName: "456 Oak St",
      cityName: "TechCity",
    },
  };
  
  console.log(personExOne)