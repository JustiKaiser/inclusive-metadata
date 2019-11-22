//go to playcode.io to test the javascript
//referenced in test.html

//Homosaurus v1 jsonld, letters A and H only
//"skos:altLabel" edits reflect current LCSH, not judgments on alternative terms
let homosaurus = {
  //begin As
  "AIDS activists" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "AIDS activists",
    "@type": "skos:Concept",
    "dc:identifier": "AIDSActivists",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //added from LCSH
    "skos:altLabel" : {
      "@id": "AIDS activists"
    },
    "skos:broader": {
      "@id": "activists"
    },
    "skos:hasTopConcept": {
      "@id": "activists"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "AIDS activists",
    "skos:related": [
      {
        "@id": "AIDS Organisations"
      },
      {
        "@id": "HIV/AIDS"
      }
    ]
  },
  "AIDS awareness": {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "AIDS awareness",
    "@type": "skos:Concept",
    "dc:identifier": "AIDSAwareness",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "AIDS awareness"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "AIDS awareness",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/redRibbons"
    }
  },
  "AIDS education" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "AIDS education",
    "@type": "skos:Concept",
    "dc:identifier": "AIDSEducation",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //added LCSH term
    "skos:altLabel" : "AIDS education",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/provisionOfInformation"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/provisionOfInformation"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "AIDS education",
    "skos:related": {
      "@id": "HIV/AIDS"
    }
  },
  "AIDS information centres": {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "AIDS education",
    "@type": "skos:Concept",
    "dc:identifier": "AIDSEducation",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/provisionOfInformation"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/provisionOfInformation"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "AIDS education",
    "skos:related": {
      "@id": "HIV/AIDS"
    }
  },
  "AIDS organisations": {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "AIDS organisations",
    "@type": "skos:Concept",
    "dc:identifier": "AIDSOrganisations",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:altLabel": "AIDS organizations",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/organisations"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/organisations"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "AIDS organisations",
    "skos:related": [
      {
        "@id": "AIDS periodicals"
      },
      {
        "@id": "AIDS activists"
      },
      {
        "@id": "HIV/AIDS"
      }
    ]
  },
  "AIDS periodicals": {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "AIDS periodicals",
    "@type": "skos:Concept",
    "dc:identifier": "AIDSPeriodicals",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/press"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/media"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "AIDS periodicals",
    "skos:related": [
      {
        "@id": "AIDS organisations"
      },
      {
        "@id": "HIV/AIDS"
      }
    ]
  },
  "AIDS phobia": {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "AIDS phobia",
    "@type": "skos:Concept",
    "dc:identifier": "AIDSPhobia",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:altLabel": [
    // "fear of AIDS",
    "AIDSphobia"
    ],
    "skos:broader": [
      {
        "@id": "http://homosaurus.org/terms/discrimination"
      },
      {
        "@id": "http://homosaurus.org/terms/http://homosaurus.org/terms/phobias"
      }
    ],
    "skos:hasTopConcept": [
      {
        "@id": "http://homosaurus.org/terms/discrimination"
      },
      {
        "@id": "http://homosaurus.org/terms/moodDisorders"
      }
    ],
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "AIDS phobia",
    "skos:related": {
      "@id": "HIV/AIDS"
    }
  },
  "ARC" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "ARC",
    "@type": "skos:Concept",
    "dc:identifier": "ARC",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //"skos:altLabel": "AIDS related complex",
    //edited for hyphen, from LCSH
    "skos:altLabel": "AIDS-related complex",
    "skos:broader": {
      "@id": "HIV/AIDS"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/medicalDisorders"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "ARC"
  },
  "ableism" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/ableism",
    "@type": "skos:Concept",
    "dc:identifier": "ableism",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:altLabel": "http://homosaurus.org/terms/discrimination against people with disabilities",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/discrimination"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/discrimination"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "ableism",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/peopleWithDisabilities"
    }
  },
  "aboriginals" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/aboriginals",
    "@type": "skos:Concept",
    "dc:identifier": "aboriginals",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to include "skos:altLabel" from LCSH
    "skos:altLabel": "Aboriginal Australians",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/indigenousPeoples"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/indigenousPeoples"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "aboriginals",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/sistergirls"
    }
  },
  "abortion" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/abortion",
    "@type": "skos:Concept",
    "dc:identifier": "abortion",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/medicalInterventions"
    },
    "skos:hasTopConcept": {
      "@id": "therapies"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "abortion",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/pregnancy"
      },
      {
        "@id": "http://homosaurus.org/terms/contraception"
      }
    ]
  },
  "abuse" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/abuse",
    "@type": "skos:Concept",
    "dc:identifier": "abuse",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/http://homosaurus.org/terms/violence"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/http://homosaurus.org/terms/violence"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/sexualAbuse"
      },
      {
        "@id": "http://homosaurus.org/terms/verbalAbuse"
      }
    ],
    "skos:prefLabel": "abuse"
  },
  "academic disciplines" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "academic disciplines",
    "@type": "skos:Concept",
    "dc:identifier": "academicDisciplines",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "academic disciplines"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/sexology"
      },
      {
        "@id": "http://homosaurus.org/terms/ethnicStudies"
      },
      {
        "@id": "http://homosaurus.org/terms/disabilityStudies"
      },
      {
        "@id": "http://homosaurus.org/terms/genderStudies"
      },
      {
        "@id": "http://homosaurus.org/terms/gerontology"
      },
      {
        "@id": "humanities"
      },
      {
        "@id": "http://homosaurus.org/terms/dissertations"
      },
      {
        "@id": "http://homosaurus.org/terms/socialAndBehaviouralSciences"
      },
      {
        "@id": "http://homosaurus.org/terms/naturalSciences"
      },
      {
        "@id": "healthSciences"
      }
    ],
    "skos:prefLabel": "academic disciplines",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/research"
      },
      {
        "@id": "http://homosaurus.org/terms/theories"
      }
    ]
  },
  "academic education" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/academicEducation",
    "@type": "skos:Concept",
    "dc:identifier": "academicEducation",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/education"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/education"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "academic education",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/universities"
    }
  },
  "academics" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "academics",
    "@type": "skos:Concept",
    "dc:identifier": "academics",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "academics"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/theologians"
      },
      {
        "@id": "http://homosaurus.org/terms/mathematicians"
      },
      {
        "@id": "http://homosaurus.org/terms/sociologists"
      },
      {
        "@id": "http://homosaurus.org/terms/sexologists"
      },
      {
        "@id": "http://homosaurus.org/terms/philosophers"
      },
      {
        "@id": "http://homosaurus.org/terms/biologists"
      },
      {
        "@id": "http://homosaurus.org/terms/physicists"
      },
      {
        "@id": "historians"
      },
      {
        "@id": "http://homosaurus.org/terms/psychologists"
      }
    ],
    "skos:prefLabel": "academics"
  },
  "acceptance" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "acceptance",
    "@type": "skos:Concept",
    "dc:identifier": "acceptance",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "attitudes"
    },
    "skos:hasTopConcept": {
      "@id": "attitudes"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "acceptance"
  },
  "action campaigns" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "action campaigns",
    "@type": "skos:Concept",
    "dc:identifier": "actionCampaigns",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/directAction"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/directAction"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/boycotts"
      },
      {
        "@id": "http://homosaurus.org/terms/demonstrations"
      }
    ],
    "skos:prefLabel": "action campaigns",
    "skos:related": [
      {
        "@id": "action committees"
      },
      {
        "@id": "activists"
      },
      {
        "@id": "advertising campaigns"
      }
    ]
  },
  "action committees" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "action committees",
    "@type": "skos:Concept",
    "dc:identifier": "actionCommittees",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //"skos:altLabel": "action groups",
    "skos:hasTopConcept": {
      "@id": "action committees"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "action committees",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/socialMovements"
      },
      {
        "@id": "action campaigns"
      }
    ]
  },
  "activists" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "activists",
    "@type": "skos:Concept",
    "dc:identifier": "activists",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:altLabel": "political activists",
    "skos:hasTopConcept": {
      "@id": "activists"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "AIDS activists"
    },
    "skos:prefLabel": "activists",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/militancy"
      },
      {
        "@id": "action campaigns"
      }
    ]
  },
  "actors" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "actors",
    "@type": "skos:Concept",
    "dc:identifier": "actors",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "rdfs:comment": "gender-neutral usage",
    //"skos:altLabel": [
      //"players",
      //"actresses",
    //],
    "skos:broader": {
      "@id": "arts and entertainment occupations"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/occupations"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "http://homosaurus.org/terms/pornStars"
    },
    "skos:prefLabel": "actors",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/casting"
      },
      {
        "@id": "http://homosaurus.org/terms/plays"
      },
      {
        "@id": "http://homosaurus.org/terms/television"
      },
      {
        "@id": "http://homosaurus.org/terms/film"
      }
    ]
  },
  "addictions" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "addictions",
    "@type": "skos:Concept",
    "dc:identifier": "addictions",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "addictions"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/gamblingAddiction"
      },
      {
        "@id": "http://homosaurus.org/terms/substanceAbuse"
      },
      {
        "@id": "http://homosaurus.org/terms/sexualAddiction"
      },
      {
        "@id": "http://homosaurus.org/terms/smoking"
      }
    ],
    "skos:prefLabel": "addictions",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/eatingDisorders"
    }
  },
  "adjustment" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/adjustment",
    "@type": "skos:Concept",
    "dc:identifier": "adjustment",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "rdfs:comment": "of an individual to his/her circumstances",
    //"skos:altLabel": "adaptive behaviour",
    //edited for additional LCSH terms belowa
    "skos:altLabel": ["Adjustment (Psychology)",
        "Adaptability (Psychology)"
        ],
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/defenceMechanisms"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/personalCharacteristics"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "adjustment",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/copingBehaviour"
    }
  },
  "administrative assistants" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "administrative assistants",
    "@type": "skos:Concept",
    "dc:identifier": "administrativeAssistants",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "administrative occupations"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/occupations"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "administrative assistants"
  },
  "administrative law" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/administrativeLaw",
    "@type": "skos:Concept",
    "dc:identifier": "administrativeLaw",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/law"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/law"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "administrative law"
  },
  "administrative occupations" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "administrative occupations",
    "@type": "skos:Concept",
    "dc:identifier": "administrativeOccupations",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/occupations"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/occupations"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "administrative assistants"
    },
    "skos:prefLabel": "administrative occupations"
  },
  "adolescence" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/adolescence",
    "@type": "skos:Concept",
    "dc:identifier": "adolescence",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/phasesOfLife"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/phasesOfLife"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "adolescence",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/youth"
    }
  },
  "adoption" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "adoption",
    "@type": "skos:Concept",
    "dc:identifier": "adoption",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "adoption"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "adoption",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/fosterParents"
      },
      {
        "@id": "http://homosaurus.org/terms/fosterChildren"
      },
      {
        "@id": "http://homosaurus.org/terms/personalAndFamilyLaw"
      },
      {
        "@id": "http://homosaurus.org/terms/fosterFamilies"
      }
    ]
  },
  "adoptive parents" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/adoptiveParents",
    "@type": "skos:Concept",
    "dc:identifier": "adoptiveParents",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/parents"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/familyMembers"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "adoptive parents",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/fosterParents"
      },
      {
        "@id": "http://homosaurus.org/terms/socialParenthood"
      }
    ]
  },
  "adult education" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/adultEducation",
    "@type": "skos:Concept",
    "dc:identifier": "adultEducation",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "education"
    },
    "skos:hasTopConcept": {
      "@id": "education"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "http://homosaurus.org/terms/citizenshipEducation"
    },
    "skos:prefLabel": "adult education",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/socioculturalEducation"
    }
  },
  "adulthood" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "adulthood",
    "@type": "skos:Concept",
    "dc:identifier": "adulthood",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/phasesOfLife"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/phasesOfLife"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "adulthood",
    "skos:related": {
      "@id": "adults"
    }
  },
  "adultism" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "adultism",
    "@type": "skos:Concept",
    "dc:identifier": "adultism",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "rdfs:comment": "http://homosaurus.org/terms/discrimination against young people",
    "skos:broader": {
      "@id": "age discrimination"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/discrimination"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "adultism",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/youth"
    }
  },
  "adults" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "adults",
    "@type": "skos:Concept",
    "dc:identifier": "adults",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to include LCSH
    "skos:altLabel" : "Adulthood",
    "skos:broader": {
      "@id": "age groups"
    },
    "skos:hasTopConcept": {
      "@id": "age groups"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/olderPeople"
      },
      {
        "@id": "http://homosaurus.org/terms/twentysomethings"
      },
      {
        "@id": "http://homosaurus.org/terms/thirtysomethings"
      },
      {
        "@id": "http://homosaurus.org/terms/middleAge"
      }
    ],
    "skos:prefLabel": "adults",
    "skos:related": {
      "@id": "adulthood"
    }
  },
  "adventistm" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/adventistm",
    "@type": "skos:Concept",
    "dc:identifier": "adventistm",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //"skos:altLabel": "seventh-day adventism",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/protestantism"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/religions"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "adventistm"
  },
  "adventure stories" : 
  {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/adventureStories",
    "@type": "skos:Concept",
    "dc:identifier": "adventureStories",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/fiction"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/literature"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "adventure stories"
  },
  "advertisements" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "advertisements",
    "@type": "skos:Concept",
    "dc:identifier": "advertisements",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:altLabel": 
    //edited to reflect LCSH term [
     // "adverts",
     // "ads",
     // "commercials"
    //],
    "Advertising",
    "skos:broader": {
      "@id": "advertising"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/communication"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/deathNotices"
      },
      {
        "@id": "http://homosaurus.org/terms/personals"
      },
      {
        "@id": "advertising campaigns"
      }
    ],
    "skos:prefLabel": "advertisements",
    "skos:related": [
      {
        "@id": "press"
      },
      {
        "@id": "advertising campaigns"
      }
    ]
  },
  "advertising" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "advertising",
    "@type": "skos:Concept",
    "dc:identifier": "advertising",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/massCommunication"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/communication"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "advertisements"
    },
    "skos:prefLabel": ["advertising"],
    "skos:related": [
      {
        "@id": "advertising practices"
      },
      {
        "@id": "http://homosaurus.org/terms/e-commerce"
      }
    ]
  },
  "advertising campaigns" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "advertising campaigns",
    "@type": "skos:Concept",
    "dc:identifier": "advertisingCampaigns",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "advertisements"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/communication"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "advertising campaigns",
    "skos:related": [
      {
        "@id": "advertisements"
      },
      {
        "@id": "action campaigns"
      }
    ]
  },
  "aesthetics" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/aesthetics",
    "@type": "skos:Concept",
    "dc:identifier": "aesthetics",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "rdfs:comment": "branch of philosophy dealing with the nature of beauty, art, and taste, and with the creation and appreciation of beauty ",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/philosophy"
    },
    "skos:hasTopConcept": {
      "@id": "academic disciplines"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "aesthetics"
  },
  "affirmative action" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/affirmativeAction",
    "@type": "skos:Concept",
    "dc:identifier": "affirmativeAction",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "rdfs:comment": "preferential hiring of qualified minority candidates",
    //edited to include LCSH term
    "skos:altLabel": "Affirmative action programs",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/discrimination"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/discrimination"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "affirmative action",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/personnelManagement"
    }
  },
  "african cultures" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/africanCultures",
    "@type": "skos:Concept",
    "dc:identifier": "africanCultures",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/cultures"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/cultures"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "african cultures"
  },
  "african religions" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/africanReligions",
    "@type": "skos:Concept",
    "dc:identifier": "africanReligions",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to include "skos:altLabel" LCSH terms
    "skos:altLabel": "Religions--African influences",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/religions"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/religions"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "african religions"
  },
  "african-americans" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/african-americans",
    "@type": "skos:Concept",
    "dc:identifier": "african-americans",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to include LCSH term
    "skos:altLabel" : "African Americans",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/blackPeople"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/ethnicGroups"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "african-americans"
  },
  "afro-antillians" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "afro-antillians",
    "@type": "skos:Concept",
    "dc:identifier": "afro-antillians",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "afro-caribbeans"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/ethnicGroups"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "afro-antillians"
  },
  "afro-asians" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/afro-asians",
    "@type": "skos:Concept",
    "dc:identifier": "afro-asians",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/blackPeople"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/ethnicGroups"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "afro-asians"
  },
  "afro-canadians" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/afro-canadians",
    "@type": "skos:Concept",
    "dc:identifier": "afro-canadians",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/blackPeople"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/ethnicGroups"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "afro-canadians"
  },
  "afro-caribbeans" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "afro-caribbeans",
    "@type": "skos:Concept",
    "dc:identifier": "afro-caribbeans",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/blackPeople"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/ethnicGroups"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "afro-surinamese"
      },
      {
        "@id": "afro-antillians"
      }
    ],
    "skos:prefLabel": "afro-caribbeans"
  },
  "afro-latin americans" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/afro-latinAmericans",
    "@type": "skos:Concept",
    "dc:identifier": "afro-latinAmericans",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to include "skos:altLabel" LCSH term
    "skos:altLabel": "Blacks--Latin America",
    "skos:broader": [
      {
        "@id": "http://homosaurus.org/terms/latinos"
      },
      {
        "@id": "http://homosaurus.org/terms/blackPeople"
      }
    ],
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/ethnicGroups"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "afro-latin americans"
  },
  "afro-surinamese" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "afro-surinamese",
    "@type": "skos:Concept",
    "dc:identifier": "afro-surinamese",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "afro-caribbeans"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/ethnicGroups"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "afro-surinamese"
  },
  "age" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "age",
    "@type": "skos:Concept",
    "dc:identifier": "age",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "age"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "age",
    "skos:related": [
      {
        "@id": "ageOfConsent"
      },
      {
        "@id": "age discrimination"
      },
      {
        "@id": "http://homosaurus.org/terms/intergenerationalRelationships"
      }
    ]
  },
  "age discrimination" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "age discrimination",
    "@type": "skos:Concept",
    "dc:identifier": "ageDiscrimination",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/discrimination"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/discrimination"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "ageism"
      },
      {
        "@id": "adultism"
      }
    ],
    "skos:prefLabel": "age discrimination",
    "skos:related": [
      {
        "@id": "age"
      },
      {
        "@id": "age groups"
      }
    ]
  },
  "age groups" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "age groups",
    "@type": "skos:Concept",
    "dc:identifier": "ageGroups",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "age groups"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "adults"
      },
      {
        "@id": "http://homosaurus.org/terms/youth"
      },
      {
        "@id": "http://homosaurus.org/terms/minors"
      }
    ],
    "skos:prefLabel": "age groups",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/phasesOfLife"
      },
      {
        "@id": "age discrimination"
      }
    ]
  },
  "age of consent" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "ageOfConsent",
    "@type": "skos:Concept",
    "dc:identifier": "ageOfConsent",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "ageOfConsent"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "age of consent",
    "skos:related": [
      {
        "@id": "age"
      },
      {
        "@id": "http://homosaurus.org/terms/sexualOffencesLaws"
      },
      {
        "@id": "http://homosaurus.org/terms/minors"
      },
      {
        "@id": "http://homosaurus.org/terms/intergenerationalRelationships"
      }
    ]
  },
  "ageism" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "ageism",
    "@type": "skos:Concept",
    "dc:identifier": "ageism",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "rdfs:comment": "http://homosaurus.org/terms/discrimination against older people",
    "skos:broader": {
      "@id": "age discrimination"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/discrimination"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "ageism"
  },
  "ageplay" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "ageplay",
    "@type": "skos:Concept",
    "dc:identifier": "ageplay",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "rdfs:comment": "roleplaying, usually sexual, in which one adult takes on the role of a child while the other takes on that of an older authority figure",
    //"skos:altLabel": "age play",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/roleplay"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/roleplay"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "ageplay"
  },
  "aggression" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "aggression",
    "@type": "skos:Concept",
    "dc:identifier": "aggression",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "rdfs:comment": "use only for feelings of aggression",
    //edited to include LCSH term
    "skos:altLabel" : "Agressiveness",
    "skos:hasTopConcept": {
      "@id": "aggression"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "http://homosaurus.org/terms/bullying"
    },
    "skos:prefLabel": "aggression",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/violence"
    }
  },
  "agricultural occupations" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/agriculturalOccupations",
    "@type": "skos:Concept",
    "dc:identifier": "agriculturalOccupations",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to include LCSH term
    "skos:altLabel" : "Agricultural laborers",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/occupations"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/occupations"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/cowboys"
      },
      {
        "@id": "http://homosaurus.org/terms/cowgirls"
      },
      {
        "@id": "http://homosaurus.org/terms/farmers"
      }
    ],
    "skos:prefLabel": "agricultural occupations"
  },
  "air force" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/airForce",
    "@type": "skos:Concept",
    "dc:identifier": "airForce",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to include LCSH term
    "skos:altLabel" : "Air forces",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/military"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/publicServices"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "air force"
  },
  "airline personnel" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/airlinePersonnel",
    "@type": "skos:Concept",
    "dc:identifier": "airlinePersonnel",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/transportationOccupations"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/occupations"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "airline personnel"
  },
  "alcohol" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "alcohol",
    "@type": "skos:Concept",
    "dc:identifier": "alcohol",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/drugs"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/drugs"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "alcohol",
    "skos:related": {
      "@id": "alcoholism"
    }
  },
  "alcoholism" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "alcoholism",
    "@type": "skos:Concept",
    "dc:identifier": "alcoholism",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/substanceAbuse"
    },
    "skos:hasTopConcept": {
      "@id": "addictions"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "alcoholism",
    "skos:related": {
      "@id": "alcohol"
    }
  },
  "alimony" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/alimony",
    "@type": "skos:Concept",
    "dc:identifier": "alimony",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/supportLiability"
    },
    "skos:hasTopConcept": {
      "@id": "human rights"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "alimony"
  },
  "allergies" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/allergies",
    "@type": "skos:Concept",
    "dc:identifier": "allergies",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to include LCSH term
    "skos:altLabel" : "Allergy",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/physicalDisorders"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/medicalDisorders"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "allergies"
  },
  "allies" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "allies",
    "@type": "skos:Concept",
    "dc:identifier": "allies",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "allies"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "allies",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/directAction"
      },
      {
        "@id": "http://homosaurus.org/terms/gay-straightAlliances"
      },
      {
        "@id": "http://homosaurus.org/terms/solidarity"
      }
    ]
  },
  "alternative medicine" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "alternative medicine",
    "@type": "skos:Concept",
    "dc:identifier": "alternativeMedicine",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "rdfs:comment": "any healing practice that does not fall within the realm of conventional medicine",
    "skos:broader": {
      "@id": "therapies"
    },
    "skos:hasTopConcept": {
      "@id": "therapies"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/witchcraft"
      },
      {
        "@id": "http://homosaurus.org/terms/meditation"
      },
      {
        "@id": "http://homosaurus.org/terms/traditionalMedicine"
      },
      {
        "@id": "healing"
      },
      {
        "@id": "homeopathy"
      },
      {
        "@id": "http://homosaurus.org/terms/tantra"
      }
    ],
    "skos:prefLabel": "alternative medicine"
  },
  "alternative punishments" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "alternative punishments",
    "@type": "skos:Concept",
    "dc:identifier": "alternativePunishments",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to include LCSH term
    //"skos:altLabel": "alternative sanctions",
    "skos:altLabel": "Alternatives to imprisonment",
    "skos:hasTopConcept": {
      "@id": "alternative punishments"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "alternative punishments",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/legalProcess"
      },
      {
        "@id": "http://homosaurus.org/terms/criminalLaw"
      },
      {
        "@id": "http://homosaurus.org/terms/imprisonment"
      }
    ]
  },
  "amazons" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "amazons",
    "@type": "skos:Concept",
    "dc:identifier": "amazons",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "rdfs:comment": "nation of all-female warriors in Greek mythology and Classical antiquity; from the Early Modern period, their name has become a term for woman warriors in general",
    "skos:hasTopConcept": {
      "@id": "amazons"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "amazons",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/mythology"
    }
  },
  "american cultures" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/americanCultures",
    "@type": "skos:Concept",
    "dc:identifier": "americanCultures",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/cultures"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/cultures"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/latinAmericanCultures"
      },
      {
        "@id": "http://homosaurus.org/terms/nativeAmericanCultures"
      },
      {
        "@id": "http://homosaurus.org/terms/northAmericanCultures"
      }
    ],
    "skos:prefLabel": "american cultures"
  },
  "anal cancer" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/analCancer",
    "@type": "skos:Concept",
    "dc:identifier": "analCancer",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/cancer"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/medicalDisorders"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "anal cancer"
  },
  "anal intercourse" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "anal intercourse",
    "@type": "skos:Concept",
    "dc:identifier": "analIntercourse",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to reflect LCSH term
    //"skos:altLabel": "butt fucking",
    "skos:altLabel" : "Anal sex",
    "skos:broader": [
      {
        "@id": "http://homosaurus.org/terms/phallicSex"
      },
      {
        "@id": "anal sex"
      }
    ],
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/sexualPractices"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "anal intercourse"
  },
  "anal sex" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "anal sex",
    "@type": "skos:Concept",
    "dc:identifier": "analSex",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/sexualPractices"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/sexualPractices"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/fisting"
      },
      {
        "@id": "http://homosaurus.org/terms/barebacking"
      },
      {
        "@id": "http://homosaurus.org/terms/rimming"
      },
      {
        "@id": "anal intercourse"
      },
      {
        "@id": "http://homosaurus.org/terms/poopSex"
      }
    ],
    "skos:prefLabel": "anal sex",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/enemas"
    }
  },
  "anarchism" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/anarchism",
    "@type": "skos:Concept",
    "dc:identifier": "anarchism",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": [
      {
        "@id": "http://homosaurus.org/terms/politicalMovements"
      },
      {
        "@id": "http://homosaurus.org/terms/politicalSystems"
      }
    ],
    "skos:hasTopConcept": [
      {
        "@id": "http://homosaurus.org/terms/politicalMovements"
      },
      {
        "@id": "http://homosaurus.org/terms/politicalSystems"
      }
    ],
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "anarchism"
  },
  "androgyny" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "androgyny",
    "@type": "skos:Concept",
    "dc:identifier": "androgyny",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to include LCSH term
    "skos:altLabel" : "Androgyny (Psychology)",
    "skos:hasTopConcept": {
      "@id": "androgyny"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "androgyny",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/genderIdentity"
      },
      {
        "@id": "http://homosaurus.org/terms/intersex"
      },
      {
        "@id": "http://homosaurus.org/terms/femininity"
      },
      {
        "@id": "http://homosaurus.org/terms/genderRole"
      },
      {
        "@id": "http://homosaurus.org/terms/gender"
      },
      {
        "@id": "http://homosaurus.org/terms/masculinity"
      },
      {
        "@id": "http://homosaurus.org/terms/genderBending"
      }
    ]
  },
  "anglicanism" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/anglicanism",
    "@type": "skos:Concept",
    "dc:identifier": "anglicanism",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:altLabel": [
      "episcopal church",
      "church of england"
    ],
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/christianity"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/religions"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "anglicanism"
  },
  "animal sexual behaviour" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "animalsexualBehaviour",
    "@type": "skos:Concept",
    "dc:identifier": "animalSexualBehaviour",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to reflect LCSH term
    //"skos:altLabel": "animal sexuality",
    "skos:altLabel" : "Sexual behavior in animals",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/sexuality"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/eroticism"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "animal sexual behaviour",
    "skos:related": {
      "@id": "animals"
    }
  },
  "animals" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "animals",
    "@type": "skos:Concept",
    "dc:identifier": "animals",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "animals"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "http://homosaurus.org/terms/pets"
    },
    "skos:prefLabel": "animals",
    "skos:related": [
      {
        "@id": "animalsexualBehaviour"
      },
      {
        "@id": "http://homosaurus.org/terms/zoophilia"
      }
    ]
  },
  "animated film" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/animatedFilm",
    "@type": "skos:Concept",
    "dc:identifier": "animatedFilm",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to include LCSH term
    "skos:altLabel" : "Animated films",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/film"
    },
    "skos:hasTopConcept": [
      {
        "@id": "arts"
      },
      {
        "@id": "media"
      }
    ],
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "animated film"
  },
  "anonymous complaints" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "anonymous complaints",
    "@type": "skos:Concept",
    "dc:identifier": "anonymousComplaints",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "anonymous complaints"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "anonymous complaints",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/prosecutionPolicy"
    }
  },
  "anonymous sex" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "anonymous sex",
    "@type": "skos:Concept",
    "dc:identifier": "anonymousSex",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to include LCSH term
    "skos:altLabel" : "Sex",
    "skos:hasTopConcept": {
      "@id": "anonymous sex"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "anonymous sex",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/sexualRelationships"
      },
      {
        "@id": "http://homosaurus.org/terms/sexLocations"
      },
      {
        "@id": "http://homosaurus.org/terms/casualSex"
      },
      {
        "@id": "http://homosaurus.org/terms/cruising"
      },
      {
        "@id": "http://homosaurus.org/terms/sexuality"
      }
    ]
  },
  "anorexia nervosa" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/anorexiaNervosa",
    "@type": "skos:Concept",
    "dc:identifier": "anorexiaNervosa",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/eatingDisorders"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/eatingDisorders"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "anorexia nervosa"
  },
  "anthologies" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "anthologies",
    "@type": "skos:Concept",
    "dc:identifier": "anthologies",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "anthologies"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "anthologies",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/literature"
    }
  },
  "anthropology" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "anthropology",
    "@type": "skos:Concept",
    "dc:identifier": "anthropology",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/socialAndBehaviouralSciences"
    },
    "skos:hasTopConcept": {
      "@id": "academic disciplines"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "archeology"
    },
    "skos:prefLabel": "anthropology"
  },
  "anthroposophy" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/anthroposophy",
    "@type": "skos:Concept",
    "dc:identifier": "anthroposophy",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/philosophiesOfLife"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/philosophiesOfLife"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "anthroposophy"
  },
  "anti-discrimination law" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/anti-discriminationLaw",
    "@type": "skos:Concept",
    "dc:identifier": "anti-discriminationLaw",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to include LCSH term
    //"skos:altLabel": "equal treatment act",
    "skos:altLabel" : "http://homosaurus.org/terms/discrimination -- law and legislation",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/law"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/law"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "anti-discrimination law",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/discrimination"
    }
  },
  "anti-fascism" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "anti-fascism",
    "@type": "skos:Concept",
    "dc:identifier": "anti-fascism",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to include LCSH term
    "skos:altLabel" : "Anti-fascist movements",
    "skos:hasTopConcept": {
      "@id": "anti-fascism"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "anti-fascism",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/fascism"
    }
  },
  "anti-feminism" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "anti-feminism",
    "@type": "skos:Concept",
    "dc:identifier": "anti-feminism",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "anti-feminism"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "anti-feminism",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/feminism"
    }
  },
  "anti-gay http://homosaurus.org/terms/violence" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/anti-gayhttp://homosaurus.org/terms/violence",
    "@type": "skos:Concept",
    "dc:identifier": "anti-gayhttp://homosaurus.org/terms/violence",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to include LCSH term
    "skos:altLabel" : "Gays -- http://homosaurus.org/terms/violence against",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/violence"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/violence"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "anti-gay http://homosaurus.org/terms/violence",
    "skos:related": {
      "@id": "hate crimes"
    }
  },
  "anti-lesbian http://homosaurus.org/terms/violence" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/anti-lesbianhttp://homosaurus.org/terms/violence",
    "@type": "skos:Concept",
    "dc:identifier": "anti-lesbianhttp://homosaurus.org/terms/violence",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //"skos:altLabel": "lesbian bashing",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/violence"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/violence"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "anti-lesbian http://homosaurus.org/terms/violence",
    "skos:related": {
      "@id": "hate crimes"
    }
  },
  "anti-racism" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "anti-racism",
    "@type": "skos:Concept",
    "dc:identifier": "anti-racism",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "anti-racism"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "anti-racism",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/racism"
    }
  },
  "anti-semitism" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/anti-semitism",
    "@type": "skos:Concept",
    "dc:identifier": "anti-semitism",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to reflect LCSH term
    //"skos:altLabel": "anti-jewish attitudes",
    "skos:altLabel" : "Antisemitism",
    "skos:broader": [
      {
        "@id": "http://homosaurus.org/terms/discrimination"
      },
      {
        "@id": "http://homosaurus.org/terms/ethnicRelations"
      }
    ],
    "skos:hasTopConcept": [
      {
        "@id": "http://homosaurus.org/terms/discrimination"
      },
      {
        "@id": "http://homosaurus.org/terms/socialProcesses"
      }
    ],
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "anti-semitism",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/jews"
    }
  },
  "anti-transgender violence" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/anti-transgender/violence",
    "@type": "skos:Concept",
    "dc:identifier": "anti-transgender",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to include LCSH term
    "skos:altLabel" : "Transgender people -- violence against",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/violence"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/violence"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "anti-transgender violence",
    "skos:related": [
      {
        "@id": "hate crimes"
      },
      {
        "@id": "http://homosaurus.org/terms/transgenderPeople"
      }
    ]
  },
  "apartheid" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "apartheid",
    "@type": "skos:Concept",
    "dc:identifier": "apartheid",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/ethnicRelations"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/socialProcesses"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "apartheid",
    "skos:related": {
      "@id": "homelands"
    }
  },
  "appearance" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/appearance",
    "@type": "skos:Concept",
    "dc:identifier": "appearance",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/physicalCharacteristics"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/personalCharacteristics"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "http://homosaurus.org/terms/bodyAdornments"
    },
    "skos:prefLabel": "appearance",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/beautyStandards"
      },
      {
        "@id": "http://homosaurus.org/terms/bodyImage"
      },
      {
        "@id": "http://homosaurus.org/terms/clothing"
      }
    ]
  },
  "apps" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/apps",
    "@type": "skos:Concept",
    "dc:identifier": "apps",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "rdfs:comment": "software applications, usually designed to run on smartphones and tablet computers",
    "skos:altLabel": [
      //"mobile applications",
      "mobile apps"
    ],
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/telecommunication"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/communication"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "apps"
  },
  "aquatic sports" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/aquaticSports",
    "@type": "skos:Concept",
    "dc:identifier": "aquaticSports",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "rdfs:comment": "swimming, sailing, etc.",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/sports"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/sports"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "aquatic sports"
  },
  "archeology" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "archeology",
    "@type": "skos:Concept",
    "dc:identifier": "archeology",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:altLabel": "archaeology",
    "skos:broader": [
      {
        "@id": "anthropology"
      },
      {
        "@id": "history"
      }
    ],
    "skos:hasTopConcept": {
      "@id": "academic disciplines"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "archeology"
  },
  "architecture" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "ARChitecture",
    "@type": "skos:Concept",
    "dc:identifier": "architecture",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/visualArts"
    },
    "skos:hasTopConcept": {
      "@id": "arts"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/landscapeArchitecture"
      },
      {
        "@id": "http://homosaurus.org/terms/interiorDesign"
      }
    ],
    "skos:prefLabel": "architecture"
  },
  "archives" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "archives",
    "@type": "skos:Concept",
    "dc:identifier": "archives",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/informationServices"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/informationServices"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/womensArchives"
      },
      {
        "@id": "http://homosaurus.org/terms/lesbianArchives"
      },
      {
        "@id": "http://homosaurus.org/terms/gayArchives"
      },
      {
        "@id": "http://homosaurus.org/terms/transgenderArchives"
      }
    ],
    "skos:prefLabel": "archives",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/digitisation"
      },
      {
        "@id": "http://homosaurus.org/terms/libraries"
      },
      {
        "@id": "archivists"
      }
    ]
  },
  "archivists" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "archivists",
    "@type": "skos:Concept",
    "dc:identifier": "archivists",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/serviceOccupations"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/occupations"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "archivists",
    "skos:related": {
      "@id": "archives"
    }
  },
  "army" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/army",
    "@type": "skos:Concept",
    "dc:identifier": "army",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to reflect LCSH term
    //"skos:altLabel": "ground forces",
    "skos:altLabel" : "Armies",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/military"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/publicServices"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "army",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/soldiers"
    }
  },
  "arranged marriage" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/arrangedMarriage",
    "@type": "skos:Concept",
    "dc:identifier": "arrangedMarriage",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/marriage"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/livingArrangements"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "arranged marriage",
    "skos:related": {
      "@id": "heterosexual marriage"
    }
  },
  "arrests" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/arrests",
    "@type": "skos:Concept",
    "dc:identifier": "arrests",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to reflect LCSH term
    "skos:altLabel" : "Arrest",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/detention"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/detention"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "arrests",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/police"
    }
  },
  "arson" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/arson",
    "@type": "skos:Concept",
    "dc:identifier": "arson",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/crimes"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/crimes"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "arson",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/vandalism"
    }
  },
  "art galleries" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/artGalleries",
    "@type": "skos:Concept",
    "dc:identifier": "artGalleries",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to reflect LCSH term
    "skos:altLabel" : "Art museums",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/businesses"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/businesses"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "art galleries",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/exhibitions"
      },
      {
        "@id": "http://homosaurus.org/terms/visualArts"
      }
    ]
  },
  "art history" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "art history",
    "@type": "skos:Concept",
    "dc:identifier": "artHistory",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to reflect LCSH term
    "skos:altLabel" : "Art -- History",
    "skos:broader": {
      "@id": "humanities"
    },
    "skos:hasTopConcept": {
      "@id": "academic disciplines"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "art history",
    "skos:related": {
      "@id": "arts"
    }
  },
  "art movements" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "art movements",
    "@type": "skos:Concept",
    "dc:identifier": "artMovements",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "art movements"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/modernism"
      },
      {
        "@id": "http://homosaurus.org/terms/surrealism"
      },
      {
        "@id": "http://homosaurus.org/terms/popArt"
      },
      {
        "@id": "http://homosaurus.org/terms/dadaism"
      },
      {
        "@id": "http://homosaurus.org/terms/symbolism"
      },
      {
        "@id": "http://homosaurus.org/terms/decadentism"
      }
    ],
    "skos:prefLabel": "art movements",
    "skos:related": [
      {
        "@id": "arts"
      },
      {
        "@id": "http://homosaurus.org/terms/culturalMovements"
      }
    ]
  },
  "artificial insemination" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/artificialInsemination",
    "@type": "skos:Concept",
    "dc:identifier": "artificialInsemination",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to reflect LCSH term
    //"skos:altLabel": "donor insemination",
    "skos:altLabel" : "Artificial insemination, Human",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/insemination"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/insemination"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "http://homosaurus.org/terms/self-insemination"
    },
    "skos:prefLabel": "artificial insemination",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/spermBanks"
      },
      {
        "@id": "http://homosaurus.org/terms/biotechnology"
      },
      {
        "@id": "http://homosaurus.org/terms/spermDonors"
      }
    ]
  },
  "artists" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "artists",
    "@type": "skos:Concept",
    "dc:identifier": "artists",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "arts and entertainment occupations"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/occupations"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "artists",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/visualArts"
    }
  },
  "arts" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "arts",
    "@type": "skos:Concept",
    "dc:identifier": "arts",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "arts"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/film"
      },
      {
        "@id": "http://homosaurus.org/terms/performingArts"
      },
      {
        "@id": "http://homosaurus.org/terms/videos"
      },
      {
        "@id": "http://homosaurus.org/terms/visualArts"
      }
    ],
    "skos:prefLabel": "arts",
    "skos:related": [
      {
        "@id": "arts and entertainment occupations"
      },
      {
        "@id": "http://homosaurus.org/terms/popularCulture"
      },
      {
        "@id": "http://homosaurus.org/terms/representation"
      },
      {
        "@id": "art movements"
      },
      {
        "@id": "http://homosaurus.org/terms/literature"
      },
      {
        "@id": "http://homosaurus.org/terms/reception"
      },
      {
        "@id": "art history"
      },
      {
        "@id": "http://homosaurus.org/terms/erotica"
      }
    ]
  },
  "arts and entertainment occupations" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "arts and entertainment occupations",
    "@type": "skos:Concept",
    "dc:identifier": "artsAndEntertainmentOccupations",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //"skos:altLabel": "arts- and entertainment related occupations",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/occupations"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/occupations"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/conductors"
      },
      {
        "@id": "artists"
      },
      {
        "@id": "http://homosaurus.org/terms/fashionDesigners"
      },
      {
        "@id": "http://homosaurus.org/terms/impresarios"
      },
      {
        "@id": "http://homosaurus.org/terms/producers"
      },
      {
        "@id": "http://homosaurus.org/terms/photographicModels"
      },
      {
        "@id": "http://homosaurus.org/terms/writers"
      },
      {
        "@id": "http://homosaurus.org/terms/musicians"
      },
      {
        "@id": "http://homosaurus.org/terms/discJockeys"
      },
      {
        "@id": "http://homosaurus.org/terms/directors"
      },
      {
        "@id": "hosts"
      },
      {
        "@id": "actors"
      },
      {
        "@id": "http://homosaurus.org/terms/choreographers"
      },
      {
        "@id": "http://homosaurus.org/terms/photographers"
      },
      {
        "@id": "http://homosaurus.org/terms/dancers"
      }
    ],
    "skos:prefLabel": "arts and entertainment occupations",
    "skos:related": {
      "@id": "arts"
    }
  },
  "asceticism" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/asceticism",
    "@type": "skos:Concept",
    "dc:identifier": "asceticism",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/philosophiesOfLife"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/philosophiesOfLife"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "asceticism"
  },
  "asexuality" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/asexuality",
    "@type": "skos:Concept",
    "dc:identifier": "asexuality",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to include LCSH term
    "skos:altLabel" : "Asexuality (sexual orientation)",
    "rdfs:comment": "lack of sexual attraction to others or the lack of interest in sex",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/sexualOrientation"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/sexualOrientation"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "asexuality"
  },
  "asian cultures" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/asianCultures",
    "@type": "skos:Concept",
    "dc:identifier": "asianCultures",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:altLabel": "oriental cultures",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/cultures"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/cultures"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "asian cultures"
  },
  "asian religions" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "asian religions",
    "@type": "skos:Concept",
    "dc:identifier": "asianReligions",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to reflect LCSH term
    //"skos:altLabel": "oriental religions",
    "skos:altLabel" : "Asia -- Religion",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/religions"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/religions"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/confucianism"
      },
      {
        "@id": "hinduism"
      },
      {
        "@id": "http://homosaurus.org/terms/shintoism"
      },
      {
        "@id": "http://homosaurus.org/terms/taoism"
      }
    ],
    "skos:prefLabel": "asian religions"
  },
  "asian studies" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/asianStudies",
    "@type": "skos:Concept",
    "dc:identifier": "asianStudies",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/ethnicStudies"
    },
    "skos:hasTopConcept": {
      "@id": "academic disciplines"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "asian studies"
  },
  "assassins" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/assassins",
    "@type": "skos:Concept",
    "dc:identifier": "assassins",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //"skos:altLabel": "hit men",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/murderers"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/violence"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "http://homosaurus.org/terms/deathSquads"
    },
    "skos:prefLabel": "assassins"
  },
  "assertiveness" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/assertiveness",
    "@type": "skos:Concept",
    "dc:identifier": "assertiveness",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //edited to reflect LCSH term
    "skos:altLabel" : "Assertiveness (Psychology)",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/psychologicalCharacteristics"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/personalCharacteristics"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "assertiveness"
  },
  "assigned gender" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/assignedGender",
    "@type": "skos:Concept",
    "dc:identifier": "assignedGender",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "rdfs:comment": "gender, either girl or boy, that parents and culture give to a child based on the child's sex",
    //"skos:altLabel": [
    //  "birth gender",
    //  "gender assigned at birth",
    //  "sex assignment"
    //],
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/gender"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/gender"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "assigned gender",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/stealth"
      },
      {
        "@id": "http://homosaurus.org/terms/birthCertificateAmendments"
      },
      {
        "@id": "http://homosaurus.org/terms/transitioning"
      }
    ]
  },
  "astrology" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/astrology",
    "@type": "skos:Concept",
    "dc:identifier": "astrology",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/occultism"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/philosophiesOfLife"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "astrology"
  },
  "asylum migration" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/asylumMigration",
    "@type": "skos:Concept",
    "dc:identifier": "asylumMigration",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/migration"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/migration"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "asylum migration",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/refugeeCentres"
      },
      {
        "@id": "http://homosaurus.org/terms/refugees"
      },
      {
        "@id": "http://homosaurus.org/terms/immigrationPolicy"
      }
    ]
  },
  "atheism" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/atheism",
    "@type": "skos:Concept",
    "dc:identifier": "atheism",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/philosophiesOfLife"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/philosophiesOfLife"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "atheism",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/religions"
    }
  },
  "attitudes" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "attitudes",
    "@type": "skos:Concept",
    "dc:identifier": "attitudes",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "attitudes"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/solidarity"
      },
      {
        "@id": "hate"
      },
      {
        "@id": "http://homosaurus.org/terms/marianismo"
      },
      {
        "@id": "http://homosaurus.org/terms/prejudices"
      },
      {
        "@id": "acceptance"
      },
      {
        "@id": "http://homosaurus.org/terms/ethnocentrism"
      },
      {
        "@id": "humour"
      },
      {
        "@id": "http://homosaurus.org/terms/tolerance"
      },
      {
        "@id": "http://homosaurus.org/terms/nationalism"
      },
      {
        "@id": "http://homosaurus.org/terms/machismo"
      },
      {
        "@id": "heterosexism"
      },
      {
        "@id": "http://homosaurus.org/terms/militancy"
      },
      {
        "@id": "http://homosaurus.org/terms/intolerance"
      },
      {
        "@id": "http://homosaurus.org/terms/multiculturalism"
      },
      {
        "@id": "http://homosaurus.org/terms/opinions"
      }
    ],
    "skos:prefLabel": "attitudes",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/socialProcesses"
      },
      {
        "@id": "http://homosaurus.org/terms/emotions"
      },
      {
        "@id": "http://homosaurus.org/terms/psychologicalCharacteristics"
      },
      {
        "@id": "http://homosaurus.org/terms/psychologicalProcesses"
      },
      {
        "@id": "http://homosaurus.org/terms/socialNorms"
      },
      {
        "@id": "http://homosaurus.org/terms/politicalCorrectness"
      }
    ]
  },
  "audiovisual media" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/audiovisualMedia",
    "@type": "skos:Concept",
    "dc:identifier": "audiovisualMedia",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "media"
    },
    "skos:hasTopConcept": {
      "@id": "media"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/cartoons"
      },
      {
        "@id": "http://homosaurus.org/terms/film"
      },
      {
        "@id": "http://homosaurus.org/terms/photographs"
      },
      {
        "@id": "http://homosaurus.org/terms/DVDs"
      },
      {
        "@id": "http://homosaurus.org/terms/videos"
      },
      {
        "@id": "http://homosaurus.org/terms/radio"
      },
      {
        "@id": "http://homosaurus.org/terms/postcards"
      },
      {
        "@id": "http://homosaurus.org/terms/posters"
      },
      {
        "@id": "http://homosaurus.org/terms/television"
      }
    ],
    "skos:prefLabel": "audiovisual media",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/videoOnDemand"
    }
  },
  "autism spectrum disorders" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/autismSpectrumDisorders",
    "@type": "skos:Concept",
    "dc:identifier": "autismSpectrumDisorders",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //"skos:altLabel": "autism",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/developmentalDisabilities"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/disabilities"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "autism spectrum disorders"
  },
  "autobiographies" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/autobiographies",
    "@type": "skos:Concept",
    "dc:identifier": "autobiographies",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    //"skos:altLabel": "memoirs",
    "skos:broader": [
      {
        "@id": "http://homosaurus.org/terms/personalPapers"
      },
      {
        "@id": "http://homosaurus.org/terms/biographies"
      }
    ],
    "skos:hasTopConcept": [
      {
        "@id": "http://homosaurus.org/terms/personalPapers"
      },
      {
        "@id": "http://homosaurus.org/terms/lifeStories"
      }
    ],
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "autobiographies",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/diaries"
      },
      {
        "@id": "http://homosaurus.org/terms/oralHistory"
      }
    ]
  },
  "autoerotic asphyxiation" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/autoeroticAsphyxiation",
    "@type": "skos:Concept",
    "dc:identifier": "autoeroticAsphyxiation",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:altLabel": [
      //"hypoxyphilia",
      //"strangulation sex",
      //"asphyxiophilia",
      "autoerotic asphyxia"
    ],
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/sexualPractices"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/sexualPractices"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "autoerotic asphyxiation"
  },
  "autonomy" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/autonomy",
    "@type": "skos:Concept",
    "dc:identifier": "autonomy",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "rdfs:comment": "the capacity of a rational individual to make an informed, un-coerced decision",
    "skos:altLabel": "independence",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/psychologicalCharacteristics"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/personalCharacteristics"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "autonomy"
  },
  "aversion therapy" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/aversionTherapy",
    "@type": "skos:Concept",
    "dc:identifier": "aversionTherapy",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "rdfs:comment": "behavior modification therapy displacing pleasant associations evoked by homosexuality with unpleasant ones (in the form of electric shocks or nausea-inducing drug) in order to shift the subject's homosexual orientation to a heterosexual one",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/behaviouralTherapy"
    },
    "skos:hasTopConcept": {
      "@id": "therapies"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "aversion therapy",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/sexualReorientation"
    }
  },
  "aviation" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/aviation",
    "@type": "skos:Concept",
    "dc:identifier": "aviation",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/transport"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/transport"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "aviation"
  },
  "awards" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "awards",
    "@type": "skos:Concept",
    "dc:identifier": "awards",
    "dc:issued": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-25",
      "@type": "xsd:date"
    },
    "skos:altLabel": "distinctions",
    "skos:hasTopConcept": {
      "@id": "awards"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/commemorativePlaques"
      },
      {
        "@id": "http://homosaurus.org/terms/literaryAwards"
      }
    ],
    "skos:prefLabel": "awards",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/streetNames"
    }
  },
  //end of As
  //begin Hs
  "HIV tests" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "HIV tests",
    "@type": "skos:Concept",
    "dc:identifier": "HIVTests",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/medicalExaminations"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/examinations"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "HIV tests",
    "skos:related": {
      "@id": "HIV/AIDS"
    }
  },
  "HIV\-negativePeople" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "HIV\-negative people",
    "@type": "skos:Concept",
    "dc:identifier": "HIV-negativePeople",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "HIV-seronegative people",
    "skos:hasTopConcept": {
      "@id": "HIV\-negative people"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "HIV\-negative people",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/serodiscordantCouples"
      },
      {
        "@id": "HIV\-positive people"
      },
      {
        "@id": "HIV/AIDS"
      },
      {
        "@id": "http://homosaurus.org/terms/serostatus"
      }
    ]
  },
  //problem here, without quotes hyphen acts as minus sign
  "HIV\-positivePeople" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "HIV\-positive people",
    "@type": "skos:Concept",
    "dc:identifier": "HIV-positivePeople",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "HIV\-seropositive people",
    "skos:hasTopConcept": {
      "@id": "HIV\-positive people"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "HIV-positive people",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/serodiscordantCouples"
      },
      {
        "@id": "HIV\-negative people"
      },
      {
        "@id": "HIV/AIDS"
      },
      {
        "@id": "http://homosaurus.org/terms/serostatus"
      }
    ]
  },
  "HIV/AIDS" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "HIV/AIDS",
    "@type": "skos:Concept",
    "dc:identifier": "HIVAIDS",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": [
      "gay-related immuno-deficiency",
      //"AIDS",
      "AIDS (Disease)",
      "acquired immune deficiency syndrome",
      "GRIDS"
    ],
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/STDs"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/medicalDisorders"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "ARC"
    },
    "skos:prefLabel": "HIV/AIDS",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/serodiscordantCouples"
      },
      {
        "@id": "http://homosaurus.org/terms/redRibbons"
      },
      {
        "@id": "AIDS education"
      },
      {
        "@id": "AIDS phobia"
      },
      {
        "@id": "HIV\-negative people"
      },
      {
        "@id": "AIDS information centres"
      },
      {
        "@id": "AIDS periodicals"
      },
      {
        "@id": "AIDS organisations"
      },
      {
        "@id": "AIDS activists"
      },
      {
        "@id": "HIV tests"
      },
      {
        "@id": "http://homosaurus.org/terms/buddyCare"
      },
      {
        "@id": "http://homosaurus.org/terms/passiveImmuneTherapy"
      },
      {
        "@id": "http://homosaurus.org/terms/seroconversion"
      },
      {
        "@id": "http://homosaurus.org/terms/serostatus"
      },
      {
        "@id": "HIV\-positive people"
      },
      {
        "@id": "http://homosaurus.org/terms/combinationTherapy"
      }
    ]
  },
  "haemophilia" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/haemophilia",
    "@type": "skos:Concept",
    "dc:identifier": "haemophilia",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "hemophilia",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/physicalDisorders"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/medicalDisorders"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "haemophilia"
  },
  "hairdressers" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/hairdressers",
    "@type": "skos:Concept",
    "dc:identifier": "hairdressers",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/serviceOccupations"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/occupations"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "hairdressers"
  },
  "halloween" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/halloween",
    "@type": "skos:Concept",
    "dc:identifier": "halloween",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/events"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/gatherings"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "halloween"
  },
  "handball" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/handball",
    "@type": "skos:Concept",
    "dc:identifier": "handball",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/ballGames"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/sports"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "handball"
  },
  "handbooks" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/handbooks",
    "@type": "skos:Concept",
    "dc:identifier": "handbooks",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": [
      {
        "@id": "http://homosaurus.org/terms/referenceSources"
      },
      {
        "@id": "http://homosaurus.org/terms/books"
      }
    ],
    "skos:hasTopConcept": [
      {
        "@id": "http://homosaurus.org/terms/referenceSources"
      },
      {
        "@id": "http://homosaurus.org/terms/books"
      }
    ],
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "handbooks",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/teachingMaterials"
    }
  },
  "handkerchief codes" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/handkerchiefCodes",
    "@type": "skos:Concept",
    "dc:identifier": "handkerchiefCodes",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "rdfs:comment": "a color-coded system to indicate preferred sexual fetishes and whether persons are a top/dominant or bottom/submissive",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/symbols"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/symbols"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "handkerchief codes",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/sexualPractices"
      },
      {
        "@id": "http://homosaurus.org/terms/sexualRoles"
      }
    ]
  },
  "happiness" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/happiness",
    "@type": "skos:Concept",
    "dc:identifier": "happiness",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/emotions"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/personalCharacteristics"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "happiness"
  },
  "harassment" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/harassment",
    "@type": "skos:Concept",
    "dc:identifier": "harassment",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "rdfs:comment": "covers a wide range of behaviours of an offensive nature; it is commonly understood as behaviour intended to      disturb or upset, and it is      characteristically repetitive; in the legal sense, it is intentional behaviour which is found threatening or disturbing",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/psychologicalviolence"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/violence"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "http://homosaurus.org/terms/sexualHarassment"
    },
    "skos:prefLabel": "harassment",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/discrimination"
      },
      {
        "@id": "http://homosaurus.org/terms/bullying"
      },
      {
        "@id": "http://homosaurus.org/terms/stalking"
      }
    ]
  },
  "hard drugs" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "hard drugs",
    "@type": "skos:Concept",
    "dc:identifier": "hardDrugs",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/drugs"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/drugs"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/ecstasy"
      },
      {
        "@id": "http://homosaurus.org/terms/methamphetamines"
      },
      {
        "@id": "http://homosaurus.org/terms/cocaine"
      },
      {
        "@id": "heroin"
      }
    ],
    "skos:prefLabel": "hard drugs"
  },
  "harems" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "harems",
    "@type": "skos:Concept",
    "dc:identifier": "harems",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "harems"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "harems",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/polygamy"
    }
  },
  "hate" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "hate",
    "@type": "skos:Concept",
    "dc:identifier": "hate",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "hatred",
    "skos:broader": [
      {
        "@id": "attitudes"
      },
      {
        "@id": "http://homosaurus.org/terms/emotions"
      }
    ],
    "skos:hasTopConcept": [
      {
        "@id": "attitudes"
      },
      {
        "@id": "http://homosaurus.org/terms/personalCharacteristics"
      }
    ],
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/misogyny"
      },
      {
        "@id": "http://homosaurus.org/terms/misandry"
      }
    ],
    "skos:prefLabel": "hate",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/phobias"
      },
      {
        "@id": "hate speech"
      },
      {
        "@id": "hate crimes"
      },
      {
        "@id": "http://homosaurus.org/terms/victimsOfHateCrimes"
      },
      {
        "@id": "hate groups"
      },
      {
        "@id": "http://homosaurus.org/terms/violence"
      }
    ]
  },
  "hate crimes" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "hate crimes",
    "@type": "skos:Concept",
    "dc:identifier": "hateCrimes",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "bias-related crimes",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/crimes"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/crimes"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "hate crimes",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/anti-lesbianViolence"
      },
      {
        "@id": "http://homosaurus.org/terms/anti-transgenderViolence"
      },
      {
        "@id": "http://homosaurus.org/terms/anti-gayViolence"
      },
      {
        "@id": "hate speech"
      },
      {
        "@id": "http://homosaurus.org/terms/victimsOfHateCrimes"
      },
      {
        "@id": "hate groups"
      },
      {
        "@id": "hate"
      }
    ]
  },
  "hate groups" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "hate groups",
    "@type": "skos:Concept",
    "dc:identifier": "hate groups",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "hate groups"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "hate groups",
    "skos:related": [
      {
        "@id": "hate"
      },
      {
        "@id": "hate speech"
      },
      {
        "@id": "hate crimes"
      }
    ]
  },
  "hate speech" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "hate speech",
    "@type": "skos:Concept",
    "dc:identifier": "hate speech",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": [
      "group libel",
      "group defamation",
      "defamation against groups"
    ],
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/psychologicalViolence"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/violence"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "hate speech",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/defamationCampaigns"
      },
      {
        "@id": "hate"
      },
      {
        "@id": "http://homosaurus.org/terms/verbalAbuse"
      },
      {
        "@id": "hate crimes"
      },
      {
        "@id": "hate groups"
      }
    ]
  },
  "heads of state" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/headsOfState",
    "@type": "skos:Concept",
    "dc:identifier": "headsOfState",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/politicalOccupations"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/occupations"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "heads of state",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/nationalGovernment"
    }
  },
  "healing" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "healing",
    "@type": "skos:Concept",
    "dc:identifier": "healing",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "alternative medicine"
    },
    "skos:hasTopConcept": {
      "@id": "therapies"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "healing"
  },
  "health" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "health",
    "@type": "skos:Concept",
    "dc:identifier": "health",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "health"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/mentalHealth"
      },
      {
        "@id": "http://homosaurus.org/terms/sexualHealth"
      },
      {
        "@id": "http://homosaurus.org/terms/diet"
      },
      {
        "@id": "http://homosaurus.org/terms/physicalHealth"
      }
    ],
    "skos:prefLabel": "health",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/qualityOfLife"
      },
      {
        "@id": "http://homosaurus.org/terms/nutrition"
      },
      {
        "@id": "http://homosaurus.org/terms/medicalDisorders"
      },
      {
        "@id": "healthCare"
      },
      {
        "@id": "health education"
      },
      {
        "@id": "hygiene"
      }
    ]
  },
  "health advice centres" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "healthAdviceCentres",
    "@type": "skos:Concept",
    "dc:identifier": "healthAdviceCentres",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "health counseling centres",
    "skos:broader": {
      "@id": "healthCareCentres"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/centres"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "health advice centres"
  },
  "health care" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "healthCare",
    "@type": "skos:Concept",
    "dc:identifier": "healthCare",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "medical care",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/care"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/care"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/medicine"
      },
      {
        "@id": "http://homosaurus.org/terms/physicalHealthCare"
      },
      {
        "@id": "http://homosaurus.org/terms/nursing"
      },
      {
        "@id": "http://homosaurus.org/terms/mentalHealthCare"
      },
      {
        "@id": "home care"
      },
      {
        "@id": "http://homosaurus.org/terms/terminalCare"
      }
    ],
    "skos:prefLabel": "health care",
    "skos:related": [
      {
        "@id": "healthCareCentres"
      },
      {
        "@id": "http://homosaurus.org/terms/occupationsInHealthCareAndSocialCare"
      },
      {
        "@id": "http://homosaurus.org/terms/socialServiceOrganisations"
      },
      {
        "@id": "health"
      },
      {
        "@id": "http://homosaurus.org/terms/prevention"
      },
      {
        "@id": "http://homosaurus.org/terms/patients"
      }
    ]
  },
  "health care centres" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "healthCareCentres",
    "@type": "skos:Concept",
    "dc:identifier": "healthCareCentres",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/centres"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/centres"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "healthAdviceCentres"
    },
    "skos:prefLabel": "health care centres",
    "skos:related": {
      "@id": "healthCare"
    }
  },
  "health education" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "health education",
    "@type": "skos:Concept",
    "dc:identifier": "health education",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/provisionOfInformation"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/provisionOfInformation"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "health education",
    "skos:related": {
      "@id": "health"
    }
  },
  "health insurance" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "healthInsurance",
    "@type": "skos:Concept",
    "dc:identifier": "healthInsurance",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": [
      "national health services",
      "medical insurance"
    ],
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/insurance"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/insurance"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "health insurance",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/socialLaw"
    }
  },
  "health sciences" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "healthSciences",
    "@type": "skos:Concept",
    "dc:identifier": "healthSciences",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "academic disciplines"
    },
    "skos:hasTopConcept": {
      "@id": "academic disciplines"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/medicine"
      },
      {
        "@id": "http://homosaurus.org/terms/biotechnology"
      },
      {
        "@id": "http://homosaurus.org/terms/epidemiology"
      }
    ],
    "skos:prefLabel": "healthSciences"
  },
  "hearing impairments" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/hearingImpairments",
    "@type": "skos:Concept",
    "dc:identifier": "hearingImpairments",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "hearing disorders",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/physicalDisabilities"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/disabilities"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "http://homosaurus.org/terms/deafness"
    },
    "skos:prefLabel": "hearing impairments",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/peopleWithHearingImpairments"
    }
  },
  "hebephilia" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/hebephilia",
    "@type": "skos:Concept",
    "dc:identifier": "hebephilia",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "rdfs:comment": "refers to a primary or exclusive sexual interest in individuals in the early years of puberty (generally ages 11-14, though onset of puberty may vary)",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/sexualOrientation"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/sexualOrientation"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "hebephilia",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/ephebophilia"
      },
      {
        "@id": "http://homosaurus.org/terms/intergenerationalRelationships"
      }
    ]
  },
  "help lines" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/helpLines",
    "@type": "skos:Concept",
    "dc:identifier": "helpLines",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": [
      "hotlines",
      "switchboards"
    ],
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/counseling"
    },
    "skos:hasTopConcept": [
      {
        "@id": "academic disciplines"
      },
      {
        "@id": "http://homosaurus.org/terms/care"
      }
    ],
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "http://homosaurus.org/terms/childrensHelpLines"
    },
    "skos:prefLabel": "help lines",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/telecommunication"
      },
      {
        "@id": "http://homosaurus.org/terms/socialCare"
      }
    ]
  },
  "hepatitis" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/hepatitis",
    "@type": "skos:Concept",
    "dc:identifier": "hepatitis",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/STDs"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/medicalDisorders"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "hepatitis"
  },
  "heredity" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/heredity",
    "@type": "skos:Concept",
    "dc:identifier": "heredity",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "ancestry",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/personalCharacteristics"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/personalCharacteristics"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "heredity",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/genetics"
      },
      {
        "@id": "http://homosaurus.org/terms/genes"
      },
      {
        "@id": "http://homosaurus.org/terms/etiology"
      }
    ]
  },
  "heresy" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/heresy",
    "@type": "skos:Concept",
    "dc:identifier": "heresy",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/theology"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/theology"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "heresy"
  },
  "heroin" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "heroin",
    "@type": "skos:Concept",
    "dc:identifier": "heroin",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "hard drugs"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/drugs"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "heroin"
  },
  "herpes" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/herpes",
    "@type": "skos:Concept",
    "dc:identifier": "herpes",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/STDs"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/medicalDisorders"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "herpes",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/genitalUlcers"
    }
  },
  "herstory" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "herstory",
    "@type": "skos:Concept",
    "dc:identifier": "herstory",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "rdfs:comment": "women's history (recapturing what has been omitted from mainstream historical treatments)",
    "skos:broader": {
      "@id": "humanities"
    },
    "skos:hasTopConcept": {
      "@id": "academic disciplines"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "herstory",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/womensStudies"
      },
      {
        "@id": "history"
      }
    ]
  },
  "heteronormativity" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "heteronormativity",
    "@type": "skos:Concept",
    "dc:identifier": "heteronormativity",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "heterosexual norms",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/socialNorms"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/socialNorms"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "heteronormativity",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/normalisation"
      },
      {
        "@id": "homonormativity"
      },
      {
        "@id": "heterosexism"
      }
    ]
  },
  "heterosexism" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "heterosexism",
    "@type": "skos:Concept",
    "dc:identifier": "heterosexism",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "heterocentrism",
    "skos:broader": {
      "@id": "attitudes"
    },
    "skos:hasTopConcept": {
      "@id": "attitudes"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "heterosexism",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/biphobia"
      },
      {
        "@id": "homophobia"
      },
      {
        "@id": "http://homosaurus.org/terms/lesbophobia"
      },
      {
        "@id": "http://homosaurus.org/terms/transphobia"
      },
      {
        "@id": "heteronormativity"
      },
      {
        "@id": "heterosexuality"
      },
      {
        "@id": "http://homosaurus.org/terms/sexism"
      }
    ]
  },
  "hetersexualBoys" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "heterosexual boys",
    "@type": "skos:Concept",
    "dc:identifier": "heterosexualBoys",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "straight boys",
    "skos:broader": [
      {
        "@id": "heterosexual youth"
      },
      {
        "@id": "http://homosaurus.org/terms/boys"
      }
    ],
    "skos:hasTopConcept": [
      {
        "@id": "heterosexuals"
      },
      {
        "@id": "age groups"
      },
      {
        "@id": "http://homosaurus.org/terms/boys"
      }
    ],
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "heterosexual boys"
  },
  "heterosexual feminism" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/heterosexualFeminism",
    "@type": "skos:Concept",
    "dc:identifier": "heterosexualFeminism",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/feminism"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/feminism"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "heterosexual feminism",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/lesbianFeminism"
    }
  },
  "heterosexual girls" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "heterosexual girls",
    "@type": "skos:Concept",
    "dc:identifier": "heterosexualGirls",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "straight girls",
    "skos:broader": [
      {
        "@id": "http://homosaurus.org/terms/girls"
      },
      {
        "@id": "heterosexual youth"
      }
    ],
    "skos:hasTopConcept": [
      {
        "@id": "http://homosaurus.org/terms/girls"
      },
      {
        "@id": "heterosexuals"
      },
      {
        "@id": "age groups"
      }
    ],
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "heterosexual girls"
  },
  "heterosexual identity" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "heterosexual identity",
    "@type": "skos:Concept",
    "dc:identifier": "heterosexualIdentity",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/sexualIdentity"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/personalCharacteristics"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "heterosexual identity",
    "skos:related": {
      "@id": "heterosexuals"
    }
  },
  "heterosexual marriage" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "heterosexual marriage",
    "@type": "skos:Concept",
    "dc:identifier": "heterosexualMarriage",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/marriage"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/livingArrangements"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "heterosexual marriage",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/arrangedMarriage"
    }
  },
  "heterosexual men" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "heterosexual men",
    "@type": "skos:Concept",
    "dc:identifier": "heterosexualMen",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "straight men",
    "skos:broader": [
      {
        "@id": "http://homosaurus.org/terms/men"
      },
      {
        "@id": "heterosexuals"
      }
    ],
    "skos:hasTopConcept": [
      {
        "@id": "http://homosaurus.org/terms/men"
      },
      {
        "@id": "heterosexuals"
      }
    ],
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "heterosexual men"
  },
  "heterosexual women" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "heterosexual women",
    "@type": "skos:Concept",
    "dc:identifier": "heterosexualWomen",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "straight women",
    "skos:broader": [
      {
        "@id": "http://homosaurus.org/terms/women"
      },
      {
        "@id": "heterosexuals"
      }
    ],
    "skos:hasTopConcept": [
      {
        "@id": "http://homosaurus.org/terms/women"
      },
      {
        "@id": "heterosexuals"
      }
    ],
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "heterosexual women"
  },
  "heterosexual youth" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "heterosexual youth",
    "@type": "skos:Concept",
    "dc:identifier": "heterosexualYouth",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "straight youth",
    "skos:broader": [
      {
        "@id": "heterosexuals"
      },
      {
        "@id": "http://homosaurus.org/terms/youth"
      }
    ],
    "skos:hasTopConcept": [
      {
        "@id": "heterosexuals"
      },
      {
        "@id": "age groups"
      }
    ],
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "heterosexual boys"
      },
      {
        "@id": "heterosexual girls"
      }
    ],
    "skos:prefLabel": "heterosexual youth"
  },
  "heterosexuality" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "heterosexuality",
    "@type": "skos:Concept",
    "dc:identifier": "heterosexuality",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/sexualOrientation"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/sexualOrientation"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "heterosexuality",
    "skos:related": [
      {
        "@id": "heterosexuals"
      },
      {
        "@id": "homosexuality"
      },
      {
        "@id": "heterosexism"
      }
    ]
  },
  "heterosexuals" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "heterosexuals",
    "@type": "skos:Concept",
    "dc:identifier": "heterosexuals",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": [
      "heterosexual people",
      "straight people"
    ],
    "skos:hasTopConcept": {
      "@id": "heterosexuals"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "heterosexual women"
      },
      {
        "@id": "heterosexual men"
      },
      {
        "@id": "heterosexual youth"
      }
    ],
    "skos:prefLabel": "heterosexuals",
    "skos:related": [
      {
        "@id": "heterosexual identity"
      },
      {
        "@id": "heterosexuality"
      }
    ]
  },
  "heterosociality" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "heterosociality",
    "@type": "skos:Concept",
    "dc:identifier": "heterosociality",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "rdfs:comment": "non-sexual relations with the opposite sex",
    "skos:altLabel": [
      "heterosocial bonds",
      "heterosexual social relationships"
    ],
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/relationships"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/relationships"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "heterosociality",
    "skos:related": {
      "@id": "homosociality"
    }
  },
  "higher education" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/higherEducation",
    "@type": "skos:Concept",
    "dc:identifier": "higherEducation",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "education"
    },
    "skos:hasTopConcept": {
      "@id": "education"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "higher education"
  },
  hijras : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/hijras",
    "@type": "skos:Concept",
    "dc:identifier": "hijras",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "rdfs:comment": "Indian and Pakistani gender variant people who adopt feminine gender identity, expression, and roles;       considered a third sex, they are perceived as neither male nor female;many are involved in sex work",
    "skos:altLabel": [
      "khwaja saraa",
      "khasuaa",
      "kinnar"
    ],
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/genderMinorities"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/genderMinorities"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "hijras",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/eunuchs"
    }
  },
  hinduism : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "hinduism",
    "@type": "skos:Concept",
    "dc:identifier": "hinduism",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "asian religions"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/religions"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "hinduism"
  },
  "hip hop music" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/hipHopMusic",
    "@type": "skos:Concept",
    "dc:identifier": "hipHopMusic",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/popMusic"
    },
    "skos:hasTopConcept": {
      "@id": "arts"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "hip hop music"
  },
  "historians" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "historians",
    "@type": "skos:Concept",
    "dc:identifier": "historians",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "academics"
    },
    "skos:hasTopConcept": {
      "@id": "academics"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "historians",
    "skos:related": {
      "@id": "history"
    }
  },
  "historical literature" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/historicalLiterature",
    "@type": "skos:Concept",
    "dc:identifier": "historicalLiterature",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/fiction"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/literature"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "historical literature"
  },
  "historical periods" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "historical periods",
    "@type": "skos:Concept",
    "dc:identifier": "historicalPeriods",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "historical periods"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "historical periods",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/future"
      },
      {
        "@id": "history"
      }
    ]
  },
  "history" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "history",
    "@type": "skos:Concept",
    "dc:identifier": "history",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "historical studies",
    "skos:broader": {
      "@id": "humanities"
    },
    "skos:hasTopConcept": {
      "@id": "academic disciplines"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/oralHistory"
      },
      {
        "@id": "archeology"
      }
    ],
    "skos:prefLabel": "history",
    "skos:related": [
      {
        "@id": "historical periods"
      },
      {
        "@id": "historians"
      },
      {
        "@id": "herstory"
      },
      {
        "@id": "http://homosaurus.org/terms/biographies"
      }
    ]
  },
  "hobbies" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/hobbies",
    "@type": "skos:Concept",
    "dc:identifier": "hobbies",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "avocations",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/leisureActivities"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/leisureActivities"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "hobbies"
  },
  "holism" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/holism",
    "@type": "skos:Concept",
    "dc:identifier": "holism",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/philosophiesOfLife"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/philosophiesOfLife"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "holism"
  },
  "home care" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "home care",
    "@type": "skos:Concept",
    "dc:identifier": "homeCare",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "healthCare"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/care"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "http://homosaurus.org/terms/buddyCare"
    },
    "skos:prefLabel": "home care"
  },
  "homelands" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "homelands",
    "@type": "skos:Concept",
    "dc:identifier": "homelands",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "bantustans",
    "skos:hasTopConcept": {
      "@id": "homelands"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "homelands",
    "skos:related": {
      "@id": "apartheid"
    }
  },
  "homeless people" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "homeless people",
    "@type": "skos:Concept",
    "dc:identifier": "homelessPeople",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": [
      "tramps",
      "homeless",
      "bag ladies",
      "street people"
    ],
    "skos:hasTopConcept": {
      "@id": "homeless people"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "homeless people",
    "skos:related": {
      "@id": "homelessness"
    }
  },
  "homelessness" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "homelessness",
    "@type": "skos:Concept",
    "dc:identifier": "homelessness",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "housing"
    },
    "skos:hasTopConcept": {
      "@id": "housing"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "homelessness",
    "skos:related": {
      "@id": "homeless people"
    }
  },
  "homeopathy" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "homeopathy",
    "@type": "skos:Concept",
    "dc:identifier": "homeopathy",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "alternative medicine"
    },
    "skos:hasTopConcept": {
      "@id": "therapies"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "homeopathy"
  },
  "homomonuments" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/homomonuments",
    "@type": "skos:Concept",
    "dc:identifier": "homomonuments",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/symbols"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/symbols"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "homomonuments",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/memorials"
    }
  },
  "homonormativity" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "homonormativity",
    "@type": "skos:Concept",
    "dc:identifier": "homonormativity",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "homosexual norms",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/socialNorms"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/socialNorms"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "homonormativity",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/normalisation"
      },
      {
        "@id": "heteronormativity"
      }
    ]
  },
  "homophobia" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "homophobia",
    "@type": "skos:Concept",
    "dc:identifier": "homophobia",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "rdfs:comment": "fear, mistrust or hatred of gay men ",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/discrimination"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/discrimination"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "http://homosaurus.org/terms/internalisedHomophobia"
    },
    "skos:prefLabel": "homophobia",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/biphobia"
      },
      {
        "@id": "http://homosaurus.org/terms/phobias"
      },
      {
        "@id": "http://homosaurus.org/terms/lesbophobia"
      },
      {
        "@id": "http://homosaurus.org/terms/transphobia"
      },
      {
        "@id": "http://homosaurus.org/terms/bullying"
      },
      {
        "@id": "heterosexism"
      }
    ]
  },
  "homosexuality" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "homosexuality",
    "@type": "skos:Concept",
    "dc:identifier": "homosexuality",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/sexualOrientation"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/sexualOrientation"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "http://homosaurus.org/terms/ritualHomosexuality"
    },
    "skos:prefLabel": "homosexuality",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/bisexuality"
      },
      {
        "@id": "http://homosaurus.org/terms/lesbianism"
      },
      {
        "@id": "http://homosaurus.org/terms/gayMen"
      },
      {
        "@id": "heterosexuality"
      }
    ]
  },
  "homosociality" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "homosociality",
    "@type": "skos:Concept",
    "dc:identifier": "homosociality",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "rdfs:comment": "same-sex relationships that are not of a romantic or sexual nature, such as friendship, mentorship, or others",
    "skos:altLabel": "homosocial bonds",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/relationships"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/relationships"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/girlsFriendships"
      },
      {
        "@id": "http://homosaurus.org/terms/boysFriendships"
      },
      {
        "@id": "http://homosaurus.org/terms/womensFriendships"
      },
      {
        "@id": "http://homosaurus.org/terms/mensFriendships"
      }
    ],
    "skos:prefLabel": "homosociality",
    "skos:related": {
      "@id": "heterosociality"
    }
  },
  "honour killings" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/honourKillings",
    "@type": "skos:Concept",
    "dc:identifier": "honourKillings",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "honor killings",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/murders"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/murders"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "honour killings"
  },
  "hormone therapy" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "hormone therapy",
    "@type": "skos:Concept",
    "dc:identifier": "hormoneTherapy",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": [
      "cross-gender hormone therapy",
      "hormone reassignment therapy",
      "hormone replacement therapy "
    ],
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/medication"
    },
    "skos:hasTopConcept": {
      "@id": "therapies"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "hormone therapy",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/DES"
      },
      {
        "@id": "hormones"
      }
    ]
  },
  "hormones" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "hormones",
    "@type": "skos:Concept",
    "dc:identifier": "hormones",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "rdfs:comment": "as part of the body; for hormones as medication USE hormone therapy",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/physicalCharacteristics"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/personalCharacteristics"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "hormones",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/pubertyBlockers"
      },
      {
        "@id": "hormone therapy"
      }
    ]
  },
  "hospitality industry" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "hospitality industry",
    "@type": "skos:Concept",
    "dc:identifier": "hospitalityIndustry",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "hotel and catering industry ",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/industries"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/industries"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/discos"
      },
      {
        "@id": "http://homosaurus.org/terms/pubs"
      },
      {
        "@id": "http://homosaurus.org/terms/restaurants"
      },
      {
        "@id": "http://homosaurus.org/terms/bars"
      },
      {
        "@id": "http://homosaurus.org/terms/guestHouses"
      },
      {
        "@id": "http://homosaurus.org/terms/baths"
      },
      {
        "@id": "hotels"
      },
      {
        "@id": "http://homosaurus.org/terms/resorts"
      }
    ],
    "skos:prefLabel": "hospitality industry",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/darkRooms"
    }
  },
  "hospitals" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/hospitals",
    "@type": "skos:Concept",
    "dc:identifier": "hospitals",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/institutionalCareFacilities"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/institutionalCareFacilities"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "hospitals",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/nursing"
    }
  },
  "hosts" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "hosts",
    "@type": "skos:Concept",
    "dc:identifier": "hosts",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "emcees",
    "skos:broader": {
      "@id": "arts and entertainment occupations"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/occupations"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "hosts",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/television"
      },
      {
        "@id": "http://homosaurus.org/terms/radio"
      }
    ]
  },
  "hotels" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "hotels",
    "@type": "skos:Concept",
    "dc:identifier": "hotels",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "hospitality industry"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/industries"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "hotels",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/tourism"
    }
  },
  "house music" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/houseMusic",
    "@type": "skos:Concept",
    "dc:identifier": "houseMusic",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/popMusic"
    },
    "skos:hasTopConcept": {
      "@id": "arts"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "house music",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/discos"
    }
  },
  "household work" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/householdWork",
    "@type": "skos:Concept",
    "dc:identifier": "householdWork",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": [
      "housekeeping",
      "housework"
    ],
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/labour"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/labour"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "household work",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/genderSegregationInLabour"
    }
  },
  "housing" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "housing",
    "@type": "skos:Concept",
    "dc:identifier": "housing",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "residences",
    "skos:hasTopConcept": {
      "@id": "housing"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "housingForOlderPeople"
      },
      {
        "@id": "homelessness"
      }
    ],
    "skos:prefLabel": "housing",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/squattersMovement"
      },
      {
        "@id": "http://homosaurus.org/terms/caravanDwellers"
      },
      {
        "@id": "http://homosaurus.org/terms/institutionalCareFacilities"
      },
      {
        "@id": "housingAssociations"
      },
      {
        "@id": "http://homosaurus.org/terms/livingArrangements"
      }
    ]
  },
  "housing associations" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "housingAssociations",
    "@type": "skos:Concept",
    "dc:identifier": "housingAssociations",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/organisations"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/organisations"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "housing associations",
    "skos:related": {
      "@id": "housing"
    }
  },
  "housing for older people" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "housingForOlderPeople",
    "@type": "skos:Concept",
    "dc:identifier": "housingForOlderPeople",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": [
      "homes for the elderly",
      "senior housing",
      "elder housing"
    ],
    "skos:broader": {
      "@id": "housing"
    },
    "skos:hasTopConcept": {
      "@id": "housing"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "http://homosaurus.org/terms/retirementHomes"
    },
    "skos:prefLabel": "housing for older people",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/olderPeople"
      },
      {
        "@id": "http://homosaurus.org/terms/nursingHomes"
      }
    ]
  },
  "human geography" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/humanGeography",
    "@type": "skos:Concept",
    "dc:identifier": "humanGeography",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": "social geography",
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/socialAndBehaviouralSciences"
    },
    "skos:hasTopConcept": {
      "@id": "academic disciplines"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "human geography"
  },
  "human papilloma virus" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/humanPapillomaVirus",
    "@type": "skos:Concept",
    "dc:identifier": "humanPapillomaVirus",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": [
      "HPV",
      "human papillomavirus"
    ],
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/STDs"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/medicalDisorders"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "human papilloma virus",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/genitalWarts"
    }
  },
  "human reproduction" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "human reproduction",
    "@type": "skos:Concept",
    "dc:identifier": "humanReproduction",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "human reproduction"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "pregnancy"
    },
    "skos:prefLabel": "human reproduction",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/insemination"
      },
      {
        "@id": "contraception"
      },
      {
        "@id": "http://homosaurus.org/terms/surrogateMothers"
      }
    ]
  },
  "human rights" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "human rights",
    "@type": "skos:Concept",
    "dc:identifier": "humanRights",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "human rights"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/childrensRights"
      },
      {
        "@id": "http://homosaurus.org/terms/constitutionalRights"
      },
      {
        "@id": "http://homosaurus.org/terms/civilRights"
      },
      {
        "@id": "http://homosaurus.org/terms/LGBTIRights"
      }
    ],
    "skos:prefLabel": "human rights",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/terms/europeanCommission"
      },
      {
        "@id": "http://homosaurus.org/terms/universalDeclarationOfHumanRights"
      },
      {
        "@id": "human rightsOrganisations"
      },
      {
        "@id": "http://homosaurus.org/terms/europeanConventionOnHumanRights"
      },
      {
        "@id": "http://homosaurus.org/terms/rightToDie"
      }
    ]
  },
  "human rights organisations" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "human rightsOrganisations",
    "@type": "skos:Concept",
    "dc:identifier": "humanRightsOrganisations",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": [
      "civil rights organizations",
      "civil rights organisations",
      "human rights organizations"
    ],
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/organisations"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/organisations"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "human rights organisations",
    "skos:related": {
      "@id": "human rights"
    }
  },
  "humanism" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/humanism",
    "@type": "skos:Concept",
    "dc:identifier": "humanism",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/philosophiesOfLife"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/philosophiesOfLife"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "humanism"
  },
  "humanities" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "humanities",
    "@type": "skos:Concept",
    "dc:identifier": "humanities",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "academic disciplines"
    },
    "skos:hasTopConcept": {
      "@id": "academic disciplines"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": [
      {
        "@id": "http://homosaurus.org/terms/musicology"
      },
      {
        "@id": "http://homosaurus.org/terms/literaryTheory"
      },
      {
        "@id": "herstory"
      },
      {
        "@id": "http://homosaurus.org/terms/culturalStudies"
      },
      {
        "@id": "http://homosaurus.org/terms/linguistics"
      },
      {
        "@id": "http://homosaurus.org/terms/theatreStudies"
      },
      {
        "@id": "art history"
      },
      {
        "@id": "history"
      },
      {
        "@id": "http://homosaurus.org/terms/philosophy"
      },
      {
        "@id": "http://homosaurus.org/terms/legalStudies"
      },
      {
        "@id": "http://homosaurus.org/terms/religiousStudies"
      },
      {
        "@id": "http://homosaurus.org/terms/filmStudies"
      },
      {
        "@id": "http://homosaurus.org/terms/semiotics"
      }
    ],
    "skos:prefLabel": "humanities"
  },
  "humour" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "humour",
    "@type": "skos:Concept",
    "dc:identifier": "humour",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "attitudes"
    },
    "skos:hasTopConcept": {
      "@id": "attitudes"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "humour",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/camp"
    }
  },
  "hygiene" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "hygiene",
    "@type": "skos:Concept",
    "dc:identifier": "hygiene",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:hasTopConcept": {
      "@id": "hygiene"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:narrower": {
      "@id": "http://homosaurus.org/terms/bodyCare"
    },
    "skos:prefLabel": "hygiene",
    "skos:related": {
      "@id": "health"
    }
  },
  "hypersexuality" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/hypersexuality",
    "@type": "skos:Concept",
    "dc:identifier": "hypersexuality",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:altLabel": [
      "nymphomania",
      "satyriasis"
    ],
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/sexualAddiction"
    },
    "skos:hasTopConcept": {
      "@id": "addictions"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "hypersexuality",
    "skos:related": {
      "@id": "http://homosaurus.org/terms/sexuality"
    }
  },
  "hysteria" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/terms/hysteria",
    "@type": "skos:Concept",
    "dc:identifier": "hysteria",
    "dc:issued": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2015-11-27",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/terms/neuroticDisorders"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/terms/moodDisorder"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "hysteria"
  }
  //end of Hs
};

function collect(){
    var itemListRelated = [];
    var itemListBroader = [];
    var itemListNarrower = [];
    var itemListAlt = [];
    var n = event.target.innerText
    //collect "skos:prefLabel" terms
    if (homosaurus[n]){
      document.getElementById("preferred").innerHTML = homosaurus[n]["skos:prefLabel"]
    }
    //collect "skos:related" terms
    if(homosaurus[n]){
      if(homosaurus[n]["skos:related"].length > 1){
        for (i = 0; i < homosaurus[n]["skos:related"].length; i ++){
          var p = document.createElement('P')
          p.innerHTML = homosaurus[n]["skos:related"][i]["@id"]
          p.addEventListener("onclick", collect)
          itemListRelated.push(p);
        }
      } else {var p = document.createElement('P')
        p.innerHTML = homosaurus[n]["skos:related"]["@id"]
        p.addEventListener("onclick", collect)
        itemListRelated.push(p);}
    } else {var p = document.createElement('P')
        p.innerHTML = ""
        itemListRelated.push(p);
      }
    document.getElementById("related").innerHTML = ''
    itemListRelated.forEach((x)=>{
      document.getElementById("related").append(x)
    })
    //collect "skos:broader" terms
    if(homosaurus[n]){
      if(homosaurus[n]["skos:broader"].length > 1){
        for (i = 0; i < homosaurus[n]["skos:broader"].length; i ++){
          var p = document.createElement('P')
          p.innerHTML = homosaurus[n]["skos:broader"][i]["@id"]
          p.addEventListener("onclick", collect)
          itemListBroader.push(p);
        }
      } else {var p = document.createElement('P')
        p.innerHTML = homosaurus[n]["skos:broader"]["@id"]
        p.addEventListener("onclick", collect)
        itemListBroader.push(p);}
    } else {var p = document.createElement('P')
        p.innerHTML = ""
        itemListBroader.push(p);
      }
    document.getElementById("broader").innerHTML = ''
    itemListBroader.forEach((x)=>{
      document.getElementById("broader").append(x)
    })
    //collect "skos:narrower" terms
    if(homosaurus[n]){
      if(homosaurus[n]["skos:narrower"].length > 1){
        for (i = 0; i < homosaurus[n]["skos:narrower"].length; i ++){
          var p = document.createElement('P')
          p.innerHTML = homosaurus[n]["skos:narrower"][i]["@id"]
          p.addEventListener("onclick", collect)
          itemListNarrower.push(p);
        }
      } else {var p = document.createElement('P')
        p.innerHTML = homosaurus[n]["skos:narrower"]["@id"]
        p.addEventListener("onclick", collect)
        itemListNarrower.push(p);}
    } else {var p = document.createElement('P')
        p.innerHTML = ""
        itemListNarrower.push(p);
      }
    document.getElementById("narrower").innerHTML = ''
    itemListNarrower.forEach((x)=>{
      document.getElementById("narrower").append(x)
    })
    //collect "skos:altLabel" terms
    if(homosaurus[n]){
      if(homosaurus[n]["skos:altLabel"].length > 1){
        for (i = 0; i < homosaurus[n]["skos:altLabel"].length; i ++){
          var p = document.createElement('P')
          var newN = homosaurus[n]["skos:altLabel"][i].replace(/ /g,'+')
          p.innerHTML = "<a href=\"https://iucat.iu.edu/?utf8=&#10004;&search_field=subject&q=" + newN + '\">' + homosaurus[n]["skos:altLabel"][i] + "</a>"
          //p.addEventListener("onclick", search)
          itemListAlt.push(p);
        }
      } else {var p = document.createElement('P')
      var singleN = homosaurus[n]["skos:altLabel"].replace(/ /g,'+')
      p.innerHTML = "<a href=\"https://iucat.iu.edu/?utf8=&#10004;&search_field=subject&q=" + singleN + '\">' + homosaurus[n]["skos:altLabel"] + "</a>"
        //p.addEventListener("onclick", collect)
        itemListAlt.push(p);}
    } else {var p = document.createElement('P')
        p.innerHTML = ""
        itemListAlt.push(p);
      }
    document.getElementById("alt").innerHTML = ''
    itemListAlt.forEach((x)=>{
      document.getElementById("alt").append(x)
    })
}

function search(){
  var n = event.target.innerText
  var newN = n.replace(/ /g,'+')
  var hRef = '"https://iucat.iu.edu/?utf8=&#10004;&search_field=subject&q=' + newN + '"'
  window.location.replace(hRef);
}