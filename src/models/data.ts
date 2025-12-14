// export const serviceCategories = [
//   { value: "hair", label: "Hair" },
//   { value: "makeup", label: "Makeup" },
//   { value: "nails", label: "Nails" },
//   { value: "lashes", label: "Lashes" },
//   { value: "brows", label: "Brows" },
//   { value: "skincare", label: "Skincare / Facials" },
//   { value: "spa", label: "Spa & Massage" },
//   { value: "barbing", label: "Barbing / Men’s Grooming" },
//   { value: "waxing", label: "Waxing" },
//   { value: "body_treatments", label: "Body Treatments" },
//   { value: "hair_removal", label: "Laser Hair Removal" },
//   { value: "tattoo", label: "Temporary Tattoos / Henna" },
//   { value: "piercing", label: "Piercing" },
//   { value: "teeth_whitening", label: "Teeth Whitening" },
//   { value: "aesthetics", label: "Aesthetic Procedures" }, 
//   { value: "fitness_wellness", label: "Fitness & Wellness" },
//   { value: "styling", label: "Styling / Wardrobe" },
//   { value: "consultation", label: "Beauty Consultation" },
//   { value: "other", label: "Other" }
// ];

export type ServiceCategoryKey = keyof typeof serviceCategories;


export const serviceCategories  ={
    HAIR: {
        id: 1,
        name:"Hair",
        color: "#4b81cc",
        pastelColor: "#eef8fe"
    },
    MAKEUP: {
        id: 2,
        name:"Makeup",
        color: "#ff7f50",
        pastelColor: "#fff0e6"
    },
    NAILS: {
        id: 3,
        name:"Nails",
       color: '#3B82F6', 
       pastelColor: '#DBEAFE'
    },
    WIGS: {
        id: 4,
        name:"Wigs",
        color: "#EF4444",
        pastelColor: "#FEE2E2"
    },
    LASHES: {
        id: 5,
        name:"Lashes",
        color: "#8B5CF6",
        pastelColor: "#EDE9FE"
    },
    BROWS: {
        id: 6,
        name:"Brows",
        color: "#14B8A6",
        pastelColor: "#CCFBF1"
    },
    SKINCARE: {
        id: 7,
        name:"Skincare",
        color: "#EC4899",
        pastelColor: "#FCE7F3"
    },
    BEAUTY_CONSULTATION: {
        id: 8,
        name:"Beauty Consultation",
        color: "#F59E0B",
        pastelColor: "#FEF3C7"

    },
    SPA:{
        id: 38,
        name:"Spa & Massage",
        color: "#F59E0B",
        pastelColor: "#FEF3C7"
    },
    BARBING: {
        id: 9,
        name:"Barbing / Men’s Grooming",
        color: "#F59E0B",
        pastelColor: "#FEF3C7"
    },
    WAXING: {
        id: 10,
        name:"Waxing",
        color: "#F59E0B",
        pastelColor: "#FEF3C7"
    },
    BODY_TREATMENTS: {
        id: 11,
        name:"Body Treatments",
        color: "#F59E0B",
        pastelColor: "#FEF3C7"
    },
    HAIR_REMOVAL: {
        id: 12,
        name:"Laser Hair Removal",
        color: "#F59E0B",
        pastelColor: "#FEF3C7"
    },
    TATTOO: {
        id: 13,
        name:"Temporary Tattoos / Henna",
        color: "#F59E0B",
        pastelColor: "#FEF3C7"
    },
    PIERCING: {
        id: 14,
        name:"Piercing",
        color: "#F59E0B",
        pastelColor: "#FEF3C7"
    },
    TEETH_WHITENING: {
        id: 15,
        name:"Teeth Whitening",
        color: "#F59E0B",
        pastelColor: "#FEF3C7"
    },
    AESTHETICS: {
        id: 16,
        name:"Aesthetic Procedures",
        color: "#F59E0B",
        pastelColor: "#FEF3C7"
    },
    FITNESS_WELLNESS: {
        id: 17,
        name:"Fitness & Wellness",
        color: "#F59E0B",
        pastelColor: "#FEF3C7"
    },
    STYLING: {
        id: 18,
        name:"Styling / Wardrobe",
        color: "#F59E0B",
        pastelColor: "#FEF3C7"
    },
    CONSULTATION: {
        id: 19,
        name:"Beauty Consultation",
        color: "#F59E0B",
        pastelColor: "#FEF3C7"
    },
    OTHER: {
        id: 19,
        name:"Other",
        color: "#6B7280",
        pastelColor: "#F3F4F6"
    },   
}
