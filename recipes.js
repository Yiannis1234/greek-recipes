// Greek Recipes Database and Search Functions

// Array of Greek recipes with details
const recipes = [
    {
        id: 1,
        title: "Χωριάτικη Σαλάτα",
        titleEn: "Greek Salad",
        ingredients: ["ντομάτες", "αγγούρι", "κρεμμύδι", "φέτα", "ελιές", "πιπεριά", "ελαιόλαδο", "ρίγανη"],
        ingredientsEn: ["tomatoes", "cucumber", "onion", "feta cheese", "olives", "pepper", "olive oil", "oregano"],
        difficulty: "easy",
        prepTime: 15,
        cookTime: 0,
        calories: 250,
        servings: 4,
        tags: ["σαλάτα", "χορτοφαγικό"],
        tagsEn: ["salad", "vegetarian"],
        description: "Η κλασική ελληνική σαλάτα με φρέσκα λαχανικά, φέτα και ελιές.",
        descriptionEn: "The classic Greek salad with fresh vegetables, feta cheese and olives.",
        instructions: "1. Κόψτε τις ντομάτες και το αγγούρι σε κύβους.\n2. Κόψτε το κρεμμύδι σε φέτες.\n3. Προσθέστε τη φέτα, τις ελιές και την πιπεριά.\n4. Ραντίστε με ελαιόλαδο και πασπαλίστε με ρίγανη.",
        instructionsEn: "1. Cut the tomatoes and cucumber into cubes.\n2. Slice the onion.\n3. Add the feta cheese, olives and pepper.\n4. Drizzle with olive oil and sprinkle with oregano."
    },
    {
        id: 2,
        title: "Μουσακάς",
        titleEn: "Moussaka",
        ingredients: ["μελιτζάνες", "πατάτες", "κιμάς", "κρεμμύδι", "ντομάτες", "μπεσαμέλ", "τυρί"],
        ingredientsEn: ["eggplants", "potatoes", "ground meat", "onion", "tomatoes", "bechamel sauce", "cheese"],
        difficulty: "medium",
        prepTime: 45,
        cookTime: 60,
        calories: 650,
        servings: 6,
        tags: ["φούρνου", "κρέας"],
        tagsEn: ["baked", "meat"],
        description: "Παραδοσιακός μουσακάς με στρώσεις από μελιτζάνες, πατάτες και κιμά, καλυμμένος με κρεμώδη μπεσαμέλ.",
        descriptionEn: "Traditional moussaka with layers of eggplant, potatoes and ground meat, topped with creamy bechamel sauce.",
        instructions: "1. Τηγανίστε τις μελιτζάνες και τις πατάτες.\n2. Ετοιμάστε τον κιμά με κρεμμύδι και ντομάτα.\n3. Στρώστε τα υλικά σε ταψί.\n4. Καλύψτε με μπεσαμέλ και τυρί.\n5. Ψήστε στους 180°C για 45-60 λεπτά.",
        instructionsEn: "1. Fry the eggplants and potatoes.\n2. Prepare the ground meat with onion and tomato.\n3. Layer the ingredients in a baking dish.\n4. Cover with bechamel sauce and cheese.\n5. Bake at 180°C for 45-60 minutes."
    },
    {
        id: 3,
        title: "Γεμιστά",
        titleEn: "Gemista (Stuffed Vegetables)",
        ingredients: ["ντομάτες", "πιπεριές", "ρύζι", "κρεμμύδι", "μαϊντανός", "δυόσμος", "ελαιόλαδο"],
        ingredientsEn: ["tomatoes", "peppers", "rice", "onion", "parsley", "mint", "olive oil"],
        difficulty: "medium",
        prepTime: 40,
        cookTime: 90,
        calories: 320,
        servings: 6,
        tags: ["φούρνου", "λαδερό", "χορτοφαγικό"],
        tagsEn: ["baked", "olive oil", "vegetarian"],
        description: "Ντομάτες και πιπεριές γεμιστές με αρωματικό ρύζι και μυρωδικά.",
        descriptionEn: "Tomatoes and peppers stuffed with aromatic rice and herbs.",
        instructions: "1. Αδειάστε τις ντομάτες και τις πιπεριές.\n2. Ετοιμάστε τη γέμιση με ρύζι, κρεμμύδι και μυρωδικά.\n3. Γεμίστε τα λαχανικά.\n4. Ψήστε σε μέτριο φούρνο για 90 λεπτά.",
        instructionsEn: "1. Hollow out the tomatoes and peppers.\n2. Prepare the filling with rice, onion and herbs.\n3. Stuff the vegetables.\n4. Bake in a medium oven for 90 minutes."
    },
    {
        id: 4,
        title: "Σπανακόπιτα",
        titleEn: "Spanakopita (Spinach Pie)",
        ingredients: ["σπανάκι", "φέτα", "κρεμμύδι", "αυγά", "φύλλο", "ελαιόλαδο", "άνηθος"],
        ingredientsEn: ["spinach", "feta cheese", "onion", "eggs", "phyllo dough", "olive oil", "dill"],
        difficulty: "medium",
        prepTime: 30,
        cookTime: 45,
        calories: 380,
        servings: 8,
        tags: ["πίτα", "χορτοφαγικό"],
        tagsEn: ["pie", "vegetarian"],
        description: "Παραδοσιακή σπανακόπιτα με τραγανό φύλλο και γέμιση από σπανάκι και φέτα.",
        descriptionEn: "Traditional spinach pie with crispy phyllo and spinach-feta filling.",
        instructions: "1. Μαραίνετε το σπανάκι και το ανακατεύετε με κρεμμύδι, φέτα και άνηθο.\n2. Στρώνετε τα φύλλα με λάδι σε ταψί.\n3. Προσθέτετε τη γέμιση.\n4. Καλύπτετε με φύλλα.\n5. Ψήνετε στους 180°C για 45 λεπτά.",
        instructionsEn: "1. Wilt the spinach and mix with onion, feta and dill.\n2. Layer the phyllo dough with oil in a pan.\n3. Add the filling.\n4. Cover with phyllo sheets.\n5. Bake at 180°C for 45 minutes."
    },
    {
        id: 5,
        title: "Γιουβέτσι",
        titleEn: "Giouvetsi (Meat with Orzo)",
        ingredients: ["κρέας", "κριθαράκι", "ντομάτες", "κρεμμύδι", "σκόρδο", "κανέλα", "γαρύφαλλο"],
        ingredientsEn: ["meat", "orzo pasta", "tomatoes", "onion", "garlic", "cinnamon", "cloves"],
        difficulty: "easy",
        prepTime: 20,
        cookTime: 75,
        calories: 550,
        servings: 6,
        tags: ["ζυμαρικά", "κρέας", "φούρνου"],
        tagsEn: ["pasta", "meat", "baked"],
        description: "Παραδοσιακό γιουβέτσι με κρέας και κριθαράκι μαγειρεμένο σε πλούσια σάλτσα ντομάτας.",
        descriptionEn: "Traditional giouvetsi with meat and orzo pasta cooked in a rich tomato sauce.",
        instructions: "1. Σοτάρετε το κρέας με κρεμμύδι και σκόρδο.\n2. Προσθέστε ντομάτα και μπαχαρικά.\n3. Μεταφέρετε σε γάστρα και προσθέστε νερό.\n4. Προσθέστε το κριθαράκι.\n5. Ψήστε στο φούρνο για 75 λεπτά.",
        instructionsEn: "1. Sauté the meat with onion and garlic.\n2. Add tomato and spices.\n3. Transfer to a baking dish and add water.\n4. Add the orzo pasta.\n5. Bake in the oven for 75 minutes."
    },
    {
        id: 6,
        title: "Τζατζίκι",
        titleEn: "Tzatziki",
        ingredients: ["γιαούρτι", "αγγούρι", "σκόρδο", "ελαιόλαδο", "ξύδι", "άνηθος"],
        ingredientsEn: ["yogurt", "cucumber", "garlic", "olive oil", "vinegar", "dill"],
        difficulty: "easy",
        prepTime: 15,
        cookTime: 0,
        calories: 120,
        servings: 4,
        tags: ["μεζές", "χορτοφαγικό"],
        tagsEn: ["dip", "vegetarian"],
        description: "Δροσερό ντιπ με γιαούρτι, αγγούρι και σκόρδο, ιδανικό συνοδευτικό για πολλά πιάτα.",
        descriptionEn: "Cool dip with yogurt, cucumber and garlic, an ideal accompaniment for many dishes.",
        instructions: "1. Τρίψτε το αγγούρι και στραγγίξτε το καλά.\n2. Αναμείξτε με το γιαούρτι, σκόρδο και άνηθο.\n3. Προσθέστε ελαιόλαδο και ξύδι.\n4. Αφήστε στο ψυγείο για τουλάχιστον 1 ώρα.",
        instructionsEn: "1. Grate the cucumber and drain well.\n2. Mix with yogurt, garlic and dill.\n3. Add olive oil and vinegar.\n4. Leave in the refrigerator for at least 1 hour."
    },
    {
        id: 7,
        title: "Παστίτσιο",
        titleEn: "Pastitsio",
        ingredients: ["μακαρόνια", "κιμάς", "κρεμμύδι", "σκόρδο", "ντομάτες", "μπεσαμέλ", "τυρί", "κανέλα"],
        ingredientsEn: ["pasta", "ground meat", "onion", "garlic", "tomatoes", "bechamel sauce", "cheese", "cinnamon"],
        difficulty: "medium",
        prepTime: 40,
        cookTime: 45,
        calories: 600,
        servings: 8,
        tags: ["ζυμαρικά", "κρέας", "φούρνου"],
        tagsEn: ["pasta", "meat", "baked"],
        description: "Κλασικό ελληνικό πιάτο με στρώσεις από μακαρόνια, σάλτσα κιμά και κρεμώδη μπεσαμέλ.",
        descriptionEn: "Classic Greek dish with layers of pasta, meat sauce and creamy bechamel.",
        instructions: "1. Βράστε τα μακαρόνια σύμφωνα με τις οδηγίες.\n2. Ετοιμάστε τον κιμά με κρεμμύδι, σκόρδο, ντομάτα και κανέλα.\n3. Φτιάξτε τη μπεσαμέλ.\n4. Στρώστε τα μακαρόνια στο ταψί, προσθέστε τον κιμά και από πάνω την μπεσαμέλ.\n5. Πασπαλίστε με τριμμένο τυρί.\n6. Ψήστε στους 180°C για 45 λεπτά μέχρι να ροδίσει.",
        instructionsEn: "1. Cook the pasta according to package instructions.\n2. Prepare the meat sauce with onion, garlic, tomato and cinnamon.\n3. Make the bechamel sauce.\n4. Layer the pasta in a baking dish, add the meat sauce and top with bechamel.\n5. Sprinkle with grated cheese.\n6. Bake at 180°C for 45 minutes until golden."
    },
    {
        id: 8,
        title: "Φασολάδα",
        titleEn: "Fasolada (Bean Soup)",
        ingredients: ["φασόλια", "καρότα", "σέλινο", "κρεμμύδι", "ντομάτες", "ελαιόλαδο", "σκόρδο"],
        ingredientsEn: ["beans", "carrots", "celery", "onion", "tomatoes", "olive oil", "garlic"],
        difficulty: "easy",
        prepTime: 20,
        cookTime: 90,
        calories: 320,
        servings: 6,
        tags: ["σούπα", "χορτοφαγικό", "όσπρια"],
        tagsEn: ["soup", "vegetarian", "legumes"],
        description: "Παραδοσιακή ελληνική σούπα με φασόλια και λαχανικά, θεωρείται το εθνικό φαγητό της Ελλάδας.",
        descriptionEn: "Traditional Greek bean soup with vegetables, considered the national dish of Greece.",
        instructions: "1. Μουλιάστε τα φασόλια για 8 ώρες και στραγγίξτε.\n2. Σοτάρετε κρεμμύδι, καρότα και σέλινο σε ελαιόλαδο.\n3. Προσθέστε τα φασόλια, ντομάτες και νερό.\n4. Βράστε σε χαμηλή φωτιά για 90 λεπτά μέχρι να μαλακώσουν τα φασόλια.\n5. Σερβίρετε με ελαιόλαδο.",
        instructionsEn: "1. Soak the beans for 8 hours and drain.\n2. Sauté onion, carrots and celery in olive oil.\n3. Add beans, tomatoes and water.\n4. Simmer for 90 minutes until beans are tender.\n5. Serve with olive oil."
    },
    {
        id: 9,
        title: "Ντολμαδάκια",
        titleEn: "Dolmades (Stuffed Grape Leaves)",
        ingredients: ["αμπελόφυλλα", "ρύζι", "κρεμμύδι", "μαϊντανός", "δυόσμος", "άνηθος", "λεμόνι", "ελαιόλαδο"],
        ingredientsEn: ["grape leaves", "rice", "onion", "parsley", "mint", "dill", "lemon", "olive oil"],
        difficulty: "medium",
        prepTime: 60,
        cookTime: 45,
        calories: 280,
        servings: 6,
        tags: ["ορεκτικό", "χορτοφαγικό", "μεζές"],
        tagsEn: ["appetizer", "vegetarian", "meze"],
        description: "Αμπελόφυλλα γεμιστά με αρωματικό ρύζι και μυρωδικά, σερβιρισμένα με σάλτσα λεμονιού.",
        descriptionEn: "Grape leaves stuffed with aromatic rice and herbs, served with lemon sauce.",
        instructions: "1. Ζεματίστε τα αμπελόφυλλα.\n2. Ετοιμάστε τη γέμιση με ρύζι, κρεμμύδι και μυρωδικά.\n3. Τυλίξτε μικρή ποσότητα γέμισης σε κάθε φύλλο.\n4. Τοποθετήστε τα ντολμαδάκια σε κατσαρόλα.\n5. Προσθέστε νερό και λεμόνι και μαγειρέψτε για 45 λεπτά.",
        instructionsEn: "1. Blanch the grape leaves.\n2. Prepare the filling with rice, onion and herbs.\n3. Wrap a small amount of filling in each leaf.\n4. Place the dolmades in a pot.\n5. Add water and lemon and cook for 45 minutes."
    },
    {
        id: 10,
        title: "Χταπόδι στα Κάρβουνα",
        titleEn: "Grilled Octopus",
        ingredients: ["χταπόδι", "ελαιόλαδο", "λεμόνι", "ρίγανη", "σκόρδο"],
        ingredientsEn: ["octopus", "olive oil", "lemon", "oregano", "garlic"],
        difficulty: "medium",
        prepTime: 30,
        cookTime: 20,
        calories: 180,
        servings: 4,
        tags: ["θαλασσινά", "σχάρας", "μεζές"],
        tagsEn: ["seafood", "grilled", "meze"],
        description: "Τρυφερό χταπόδι στη σχάρα, αρωματισμένο με ελαιόλαδο και ρίγανη.",
        descriptionEn: "Tender grilled octopus, flavored with olive oil and oregano.",
        instructions: "1. Καθαρίστε και μαλακώστε το χταπόδι (παραδοσιακά χτυπώντας το σε βράχια).\n2. Βράστε το για 40-60 λεπτά μέχρι να μαλακώσει.\n3. Αφήστε το να κρυώσει και κόψτε το σε κομμάτια.\n4. Ψήστε στη σχάρα για 2-3 λεπτά από κάθε πλευρά.\n5. Περιχύστε με ελαιόλαδο, λεμόνι και ρίγανη.",
        instructionsEn: "1. Clean and tenderize the octopus (traditionally by hitting it against rocks).\n2. Boil for 40-60 minutes until tender.\n3. Let it cool and cut into pieces.\n4. Grill for 2-3 minutes per side.\n5. Drizzle with olive oil, lemon and oregano."
    },
    {
        id: 11,
        title: "Σουτζουκάκια",
        titleEn: "Soutzoukakia (Spiced Meatballs)",
        ingredients: ["κιμάς", "σκόρδο", "κύμινο", "κανέλα", "ντομάτες", "κρεμμύδι", "ελαιόλαδο", "κόκκινο κρασί"],
        ingredientsEn: ["ground meat", "garlic", "cumin", "cinnamon", "tomatoes", "onion", "olive oil", "red wine"],
        difficulty: "medium",
        prepTime: 30,
        cookTime: 45,
        calories: 420,
        servings: 6,
        tags: ["κρέας", "μεζές", "πολίτικο"],
        tagsEn: ["meat", "meze", "constantinople"],
        description: "Αρωματικά κεφτεδάκια με μπαχαρικά, μαγειρεμένα σε πλούσια σάλτσα ντομάτας.",
        descriptionEn: "Aromatic meatballs with spices, cooked in a rich tomato sauce.",
        instructions: "1. Αναμείξτε τον κιμά με σκόρδο, κύμινο, κανέλα και τριμμένο ψωμί.\n2. Πλάστε μακρόστενα κεφτεδάκια και τηγανίστε τα ελαφρά.\n3. Σε άλλο τηγάνι, σοτάρετε κρεμμύδι και προσθέστε ντομάτα και κρασί.\n4. Προσθέστε τα κεφτεδάκια στη σάλτσα και σιγοβράστε για 30 λεπτά.",
        instructionsEn: "1. Mix the ground meat with garlic, cumin, cinnamon and breadcrumbs.\n2. Shape into oblong meatballs and lightly fry them.\n3. In another pan, sauté onion and add tomato and wine.\n4. Add the meatballs to the sauce and simmer for 30 minutes."
    },
    {
        id: 12,
        title: "Μπακαλιάρος Σκορδαλιά",
        titleEn: "Fried Cod with Garlic Sauce",
        ingredients: ["μπακαλιάρος", "αλεύρι", "πατάτες", "σκόρδο", "ξύδι", "ελαιόλαδο", "λεμόνι"],
        ingredientsEn: ["cod", "flour", "potatoes", "garlic", "vinegar", "olive oil", "lemon"],
        difficulty: "medium",
        prepTime: 40,
        cookTime: 20,
        calories: 450,
        servings: 4,
        tags: ["ψάρι", "τηγανητό", "παραδοσιακό"],
        tagsEn: ["fish", "fried", "traditional"],
        description: "Παραδοσιακό πιάτο με τηγανητό μπακαλιάρο και σκορδάτο πουρέ πατάτας.",
        descriptionEn: "Traditional dish of fried cod with garlicky potato puree.",
        instructions: "1. Αλατίστε τον μπακαλιάρο και αφήστε τον για 24 ώρες, μετά ξεπλύνετε και στεγνώστε.\n2. Αλευρώστε τον μπακαλιάρο και τηγανίστε μέχρι να χρυσίσει.\n3. Για τη σκορδαλιά, βράστε πατάτες και λιώστε τις.\n4. Προσθέστε σκόρδο, ελαιόλαδο και ξύδι και χτυπήστε μέχρι να γίνει κρεμώδες μείγμα.\n5. Σερβίρετε τον μπακαλιάρο με τη σκορδαλιά και λεμόνι.",
        instructionsEn: "1. Salt the cod and leave it for 24 hours, then rinse and dry.\n2. Flour the cod and fry until golden.\n3. For the garlic sauce, boil potatoes and mash them.\n4. Add garlic, olive oil and vinegar and beat until creamy.\n5. Serve the cod with the garlic sauce and lemon."
    },
    {
        id: 13,
        title: "Κλέφτικο",
        titleEn: "Kleftiko (Slow-Cooked Lamb)",
        ingredients: ["αρνί", "πατάτες", "κρεμμύδι", "ντομάτες", "φέτα", "δεντρολίβανο", "ρίγανη", "σκόρδο", "ελαιόλαδο", "λεμόνι"],
        ingredientsEn: ["lamb", "potatoes", "onion", "tomatoes", "feta cheese", "rosemary", "oregano", "garlic", "olive oil", "lemon"],
        difficulty: "medium",
        prepTime: 30,
        cookTime: 180,
        calories: 550,
        servings: 6,
        tags: ["κρέας", "φούρνου", "γιορτινό"],
        tagsEn: ["meat", "baked", "festive"],
        description: "Αρνί αργοψημένο με πατάτες και μυρωδικά, μαγειρεμένο παραδοσιακά σε πήλινο σκεύος ή λαδόκολλα.",
        descriptionEn: "Slow-cooked lamb with potatoes and herbs, traditionally cooked in clay pot or parchment paper.",
        instructions: "1. Κόψτε το αρνί σε μεγάλα κομμάτια και μαρινάρετε με λάδι, λεμόνι και μυρωδικά για 2 ώρες.\n2. Κόψτε τις πατάτες και τα κρεμμύδια σε χοντρές φέτες.\n3. Βάλτε το κρέας, τις πατάτες, τα κρεμμύδια, ντομάτες και φέτα σε λαδόκολλα ή πήλινο σκεύος.\n4. Προσθέστε μυρωδικά και λίγο νερό.\n5. Κλείστε καλά και ψήστε στους 160°C για 3 ώρες.",
        instructionsEn: "1. Cut the lamb into large pieces and marinate with oil, lemon and herbs for 2 hours.\n2. Cut potatoes and onions into thick slices.\n3. Place the meat, potatoes, onions, tomatoes and feta in parchment paper or clay pot.\n4. Add herbs and a little water.\n5. Seal well and bake at 160°C for 3 hours."
    },
    {
        id: 14,
        title: "Γαλακτομπούρεκο",
        titleEn: "Galaktoboureko (Custard Pie)",
        ingredients: ["φύλλο κρούστας", "γάλα", "σιμιγδάλι", "αυγά", "ζάχαρη", "βανίλια", "βούτυρο", "μέλι", "κανέλα", "λεμόνι"],
        ingredientsEn: ["phyllo pastry", "milk", "semolina", "eggs", "sugar", "vanilla", "butter", "honey", "cinnamon", "lemon"],
        difficulty: "medium",
        prepTime: 45,
        cookTime: 45,
        calories: 380,
        servings: 12,
        tags: ["γλυκό", "επιδόρπιο", "παραδοσιακό"],
        tagsEn: ["dessert", "sweet", "traditional"],
        description: "Παραδοσιακό ελληνικό γλυκό με κρέμα σιμιγδαλιού ανάμεσα σε τραγανά φύλλα, περιχυμένο με αρωματικό σιρόπι.",
        descriptionEn: "Traditional Greek dessert with semolina custard between crispy phyllo sheets, drenched in aromatic syrup.",
        instructions: "1. Φτιάξτε την κρέμα βράζοντας το γάλα με το σιμιγδάλι και προσθέτοντας αυγά, ζάχαρη και βανίλια.\n2. Βουτυρώστε τα φύλλα και στρώστε τα μισά σε ταψί.\n3. Προσθέστε την κρέμα και καλύψτε με τα υπόλοιπα φύλλα.\n4. Ψήστε στους 180°C για 45 λεπτά.\n5. Ετοιμάστε το σιρόπι με νερό, ζάχαρη, μέλι, κανέλα και λεμόνι.\n6. Περιχύστε το ζεστό γλυκό με το κρύο σιρόπι.",
        instructionsEn: "1. Make the custard by boiling milk with semolina and adding eggs, sugar and vanilla.\n2. Butter the phyllo sheets and layer half of them in a pan.\n3. Add the custard and cover with the remaining phyllo.\n4. Bake at 180°C for 45 minutes.\n5. Prepare the syrup with water, sugar, honey, cinnamon and lemon.\n6. Pour the cold syrup over the hot dessert."
    },
    {
        id: 15,
        title: "Σαγανάκι",
        titleEn: "Saganaki (Fried Cheese)",
        ingredients: ["κεφαλοτύρι", "αλεύρι", "ελαιόλαδο", "λεμόνι", "πιπέρι"],
        ingredientsEn: ["kefalotiri cheese", "flour", "olive oil", "lemon", "pepper"],
        difficulty: "easy",
        prepTime: 5,
        cookTime: 5,
        calories: 320,
        servings: 2,
        tags: ["μεζές", "χορτοφαγικό", "ορεκτικό"],
        tagsEn: ["meze", "vegetarian", "appetizer"],
        description: "Κλασικός ελληνικός μεζές με τηγανητό τυρί που σερβίρεται καυτό με λεμόνι.",
        descriptionEn: "Classic Greek meze with fried cheese served hot with lemon.",
        instructions: "1. Κόψτε το κεφαλοτύρι σε χοντρή φέτα.\n2. Αλευρώστε το τυρί και τινάξτε το πλεόνασμα.\n3. Ζεστάνετε λάδι σε τηγάνι και τηγανίστε το τυρί για 2-3 λεπτά από κάθε πλευρά μέχρι να χρυσίσει.\n4. Σερβίρετε αμέσως με φρέσκο λεμόνι.",
        instructionsEn: "1. Cut the kefalotiri cheese into a thick slice.\n2. Flour the cheese and shake off excess.\n3. Heat oil in a pan and fry the cheese for 2-3 minutes per side until golden.\n4. Serve immediately with fresh lemon."
    },
    {
        id: 16,
        title: "Ρεβιθάδα",
        titleEn: "Revithada (Chickpea Stew)",
        ingredients: ["ρεβίθια", "κρεμμύδι", "σκόρδο", "ελαιόλαδο", "δαφνόφυλλα", "λεμόνι", "δεντρολίβανο"],
        ingredientsEn: ["chickpeas", "onion", "garlic", "olive oil", "bay leaves", "lemon", "rosemary"],
        difficulty: "easy",
        prepTime: 20,
        cookTime: 120,
        calories: 300,
        servings: 6,
        tags: ["όσπρια", "χορτοφαγικό", "νηστίσιμο"],
        tagsEn: ["legumes", "vegetarian", "vegan"],
        description: "Παραδοσιακό νησιώτικο πιάτο με ρεβίθια αργοψημένα σε πήλινο σκεύος με αρωματικά.",
        descriptionEn: "Traditional island dish with slow-cooked chickpeas in clay pot with aromatics.",
        instructions: "1. Μουλιάστε τα ρεβίθια για 12 ώρες και στραγγίξτε.\n2. Τοποθετήστε τα ρεβίθια σε πήλινο ή γάστρα με κρεμμύδι και σκόρδο.\n3. Προσθέστε ελαιόλαδο, δαφνόφυλλα, δεντρολίβανο και αλατοπίπερο.\n4. Προσθέστε νερό μέχρι να καλυφθούν και ψήστε στο φούρνο σε χαμηλή θερμοκρασία για 2 ώρες.\n5. Σερβίρετε με φρέσκο λεμόνι και έξτρα ελαιόλαδο.",
        instructionsEn: "1. Soak the chickpeas for 12 hours and drain.\n2. Place the chickpeas in a clay pot or Dutch oven with onion and garlic.\n3. Add olive oil, bay leaves, rosemary and salt and pepper.\n4. Add water to cover and bake in the oven at low temperature for 2 hours.\n5. Serve with fresh lemon and extra olive oil."
    },
    {
        id: 17,
        title: "Κουνέλι Στιφάδο",
        titleEn: "Rabbit Stifado",
        ingredients: ["κουνέλι", "κρεμμυδάκια", "ντομάτες", "σκόρδο", "κανέλα", "γαρύφαλλο", "μπαχάρι", "ξύδι", "κόκκινο κρασί", "ελαιόλαδο"],
        ingredientsEn: ["rabbit", "pearl onions", "tomatoes", "garlic", "cinnamon", "cloves", "allspice", "vinegar", "red wine", "olive oil"],
        difficulty: "medium",
        prepTime: 30,
        cookTime: 90,
        calories: 380,
        servings: 6,
        tags: ["κρέας", "κυνήγι", "μαγειρευτό"],
        tagsEn: ["meat", "game", "stew"],
        description: "Παραδοσιακό χωριάτικο πιάτο με κουνέλι και μικρά κρεμμυδάκια σε πλούσια σάλτσα μπαχαρικών.",
        descriptionEn: "Traditional rustic dish with rabbit and pearl onions in a rich spiced sauce.",
        instructions: "1. Κόψτε το κουνέλι σε μερίδες και μαρινάρετε με κρασί και ξύδι για 2 ώρες.\n2. Σοτάρετε το κρέας σε ελαιόλαδο μέχρι να ροδίσει.\n3. Προσθέστε σκόρδο, ντομάτες, μπαχαρικά και κρασί.\n4. Σιγοβράστε για 45 λεπτά.\n5. Προσθέστε τα κρεμμυδάκια και συνεχίστε το μαγείρεμα για άλλα 45 λεπτά.",
        instructionsEn: "1. Cut the rabbit into portions and marinate with wine and vinegar for 2 hours.\n2. Sauté the meat in olive oil until browned.\n3. Add garlic, tomatoes, spices and wine.\n4. Simmer for 45 minutes.\n5. Add the pearl onions and continue cooking for another 45 minutes."
    },
    {
        id: 18,
        title: "Μπριάμ",
        titleEn: "Briam (Greek Ratatouille)",
        ingredients: ["πατάτες", "κολοκυθάκια", "μελιτζάνες", "ντομάτες", "πιπεριές", "κρεμμύδι", "σκόρδο", "ελαιόλαδο", "ρίγανη"],
        ingredientsEn: ["potatoes", "zucchini", "eggplants", "tomatoes", "peppers", "onion", "garlic", "olive oil", "oregano"],
        difficulty: "easy",
        prepTime: 25,
        cookTime: 60,
        calories: 250,
        servings: 6,
        tags: ["λαχανικά", "χορτοφαγικό", "νηστίσιμο", "φούρνου"],
        tagsEn: ["vegetables", "vegetarian", "vegan", "baked"],
        description: "Νόστιμο πιάτο φούρνου με ανάμεικτα λαχανικά εποχής μαγειρεμένα σε πλούσια σάλτσα ντομάτας.",
        descriptionEn: "Delicious baked dish with mixed seasonal vegetables cooked in a rich tomato sauce.",
        instructions: "1. Κόψτε όλα τα λαχανικά σε στρογγυλές φέτες ή κύβους.\n2. Ανακατέψτε με σκόρδο, ρίγανη, αλάτι, πιπέρι και αρκετό ελαιόλαδο.\n3. Απλώστε σε ένα μεγάλο ταψί.\n4. Ψήστε στους 180°C για περίπου 60 λεπτά, ανακατεύοντας ήπια στα μισά του ψησίματος.",
        instructionsEn: "1. Cut all vegetables into round slices or cubes.\n2. Mix with garlic, oregano, salt, pepper and plenty of olive oil.\n3. Spread in a large baking dish.\n4. Bake at 180°C for about 60 minutes, gently stirring halfway through baking."
    },
    {
        id: 19,
        title: "Μελιτζανοσαλάτα",
        titleEn: "Melitzanosalata (Eggplant Dip)",
        ingredients: ["μελιτζάνες", "σκόρδο", "κρεμμύδι", "πιπεριά φλωρίνης", "μαϊντανός", "ελαιόλαδο", "λεμόνι"],
        ingredientsEn: ["eggplants", "garlic", "onion", "red pepper", "parsley", "olive oil", "lemon"],
        difficulty: "easy",
        prepTime: 15,
        cookTime: 30,
        calories: 180,
        servings: 6,
        tags: ["ορεκτικό", "μεζές", "χορτοφαγικό", "νηστίσιμο"],
        tagsEn: ["appetizer", "meze", "vegetarian", "vegan"],
        description: "Κρεμώδης πάστα από ψητές μελιτζάνες με έντονη καπνιστή γεύση, ιδανική για ορεκτικό.",
        descriptionEn: "Creamy roasted eggplant paste with strong smoky flavor, ideal as an appetizer.",
        instructions: "1. Ψήστε τις μελιτζάνες στη σχάρα ή στο φούρνο μέχρι η φλούδα να καεί και η σάρκα να μαλακώσει.\n2. Αφαιρέστε τη φλούδα και στραγγίξτε το υγρό.\n3. Ψιλοκόψτε το κρεμμύδι, το σκόρδο, την πιπεριά και το μαϊντανό.\n4. Αναμείξτε όλα τα υλικά και προσθέστε ελαιόλαδο και λεμόνι.\n5. Σερβίρετε με ελαιόλαδο από πάνω.",
        instructionsEn: "1. Grill or roast the eggplants until the skin is burnt and the flesh is soft.\n2. Remove the skin and drain the liquid.\n3. Finely chop the onion, garlic, pepper and parsley.\n4. Mix all ingredients and add olive oil and lemon.\n5. Serve with olive oil on top."
    },
    {
        id: 20,
        title: "Μπουγιουρντί",
        titleEn: "Bouyourdi (Baked Feta)",
        ingredients: ["φέτα", "ντομάτες", "πιπεριές", "κρεμμύδι", "καυτερή πιπεριά", "ρίγανη", "ελαιόλαδο"],
        ingredientsEn: ["feta cheese", "tomatoes", "peppers", "onion", "hot pepper", "oregano", "olive oil"],
        difficulty: "easy",
        prepTime: 10,
        cookTime: 25,
        calories: 280,
        servings: 4,
        tags: ["μεζές", "χορτοφαγικό", "φούρνου"],
        tagsEn: ["meze", "vegetarian", "baked"],
        description: "Πικάντικος μεζές με ψητή φέτα, ντομάτες και πιπεριές, σερβιρισμένος καυτός με ψωμί.",
        descriptionEn: "Spicy meze with baked feta, tomatoes and peppers, served hot with bread.",
        instructions: "1. Κόψτε τις ντομάτες, τις πιπεριές και το κρεμμύδι σε μικρά κομμάτια.\n2. Τοποθετήστε ένα μεγάλο κομμάτι φέτας σε πήλινο σκεύος ή μικρό ταψί.\n3. Καλύψτε με τα λαχανικά και πασπαλίστε με ρίγανη.\n4. Περιχύστε με ελαιόλαδο και προσθέστε καυτερή πιπεριά.\n5. Ψήστε στους 200°C για 25 λεπτά μέχρι να λιώσει η φέτα και να μαραθούν τα λαχανικά.",
        instructionsEn: "1. Cut tomatoes, peppers and onion into small pieces.\n2. Place a large piece of feta in a clay pot or small baking dish.\n3. Cover with vegetables and sprinkle with oregano.\n4. Drizzle with olive oil and add hot pepper.\n5. Bake at 200°C for 25 minutes until the feta melts and the vegetables wilt."
    },
    {
        id: 21,
        title: "Μαρουλοσαλάτα",
        titleEn: "Lettuce Salad with Dill",
        ingredients: ["μαρούλι", "φρέσκο κρεμμυδάκι", "άνηθος", "ελαιόλαδο", "λεμόνι", "αλάτι"],
        ingredientsEn: ["lettuce", "spring onion", "dill", "olive oil", "lemon", "salt"],
        difficulty: "easy",
        prepTime: 15,
        cookTime: 0,
        calories: 120,
        servings: 4,
        tags: ["σαλάτα", "χορτοφαγικό", "νηστίσιμο", "ελαφρύ"],
        tagsEn: ["salad", "vegetarian", "vegan", "light"],
        description: "Δροσερή και ελαφριά σαλάτα με τρυφερό μαρούλι, άνηθο και σάλτσα λεμονιού-λαδιού.",
        descriptionEn: "Fresh and light salad with tender lettuce, dill and lemon-oil dressing.",
        instructions: "1. Πλύνετε και στεγνώστε το μαρούλι και κόψτε το σε κομμάτια.\n2. Ψιλοκόψτε τα φρέσκα κρεμμυδάκια και τον άνηθο.\n3. Ανακατέψτε όλα τα υλικά σε ένα μπολ.\n4. Ετοιμάστε τη σάλτσα με ελαιόλαδο, λεμόνι και αλάτι.\n5. Περιχύστε με τη σάλτσα λίγο πριν το σερβίρισμα.",
        instructionsEn: "1. Wash and dry the lettuce and cut it into pieces.\n2. Finely chop the spring onions and dill.\n3. Mix all ingredients in a bowl.\n4. Prepare the dressing with olive oil, lemon and salt.\n5. Drizzle with the dressing just before serving."
    },
    {
        id: 22,
        title: "Κοτόπουλο Λεμονάτο",
        titleEn: "Lemon Chicken",
        ingredients: ["κοτόπουλο", "λεμόνι", "ελαιόλαδο", "ρίγανη", "σκόρδο", "πατάτες", "μουστάρδα"],
        ingredientsEn: ["chicken", "lemon", "olive oil", "oregano", "garlic", "potatoes", "mustard"],
        difficulty: "medium",
        prepTime: 20,
        cookTime: 60,
        calories: 400,
        servings: 6,
        tags: ["κρέας", "φούρνου", "κυρίως πιάτο"],
        tagsEn: ["meat", "baked", "main course"],
        description: "Ζουμερό κοτόπουλο ψημένο με λεμόνι, μυρωδικά και πατάτες σε έναν χυμό που σου τρέχουν τα σάλια.",
        descriptionEn: "Juicy chicken baked with lemon, herbs and potatoes in a mouthwatering sauce.",
        instructions: "1. Τοποθετήστε το κοτόπουλο (κομμένο σε μερίδες) σε ένα ταψί με τις πατάτες.\n2. Ανακατέψτε λεμόνι, μουστάρδα, σκόρδο, ρίγανη και ελαιόλαδο.\n3. Περιχύστε το κοτόπουλο και τις πατάτες με το μείγμα.\n4. Προσθέστε νερό στο ταψί.\n5. Ψήστε στους 180°C για 60 λεπτά, γυρίζοντας το κοτόπουλο στο μέσο του ψησίματος.",
        instructionsEn: "1. Place the chicken (cut into portions) in a baking dish with the potatoes.\n2. Mix lemon, mustard, garlic, oregano and olive oil.\n3. Pour the mixture over the chicken and potatoes.\n4. Add water to the pan.\n5. Bake at 180°C for 60 minutes, turning the chicken halfway through baking."
    },
    {
        id: 23,
        title: "Ταραμοσαλάτα",
        titleEn: "Taramasalata (Fish Roe Dip)",
        ingredients: ["ταραμάς", "ψωμί", "κρεμμύδι", "λεμόνι", "ελαιόλαδο"],
        ingredientsEn: ["fish roe", "bread", "onion", "lemon", "olive oil"],
        difficulty: "medium",
        prepTime: 20,
        cookTime: 0,
        calories: 220,
        servings: 8,
        tags: ["μεζές", "ορεκτικό", "σαρακοστιανό"],
        tagsEn: ["meze", "appetizer", "lenten"],
        description: "Αφράτη και κρεμώδης σαλάτα από χτυπημένο αυγοτάραχο, ιδανική για ορεκτικό με ψωμί ή παξιμάδι.",
        descriptionEn: "Fluffy and creamy dip made from whipped fish roe, ideal as an appetizer with bread or rusks.",
        instructions: "1. Μουλιάστε το ψωμί σε νερό και στραγγίξτε καλά.\n2. Χτυπήστε τον ταραμά με το κρεμμύδι στο μπλέντερ.\n3. Προσθέστε το ψωμί και συνεχίστε το χτύπημα.\n4. Προσθέστε σταδιακά το λεμόνι και το ελαιόλαδο, εναλλάξ, συνεχίζοντας το χτύπημα.\n5. Συνεχίστε μέχρι να γίνει αφράτο και κρεμώδες.\n6. Σερβίρετε με ελαιόλαδο και λίγα μπρικ από πάνω.",
        instructionsEn: "1. Soak the bread in water and drain well.\n2. Blend the fish roe with onion in a blender.\n3. Add the bread and continue blending.\n4. Gradually add lemon and olive oil, alternating, while continuing to blend.\n5. Continue until fluffy and creamy.\n6. Serve with olive oil and a few capers on top."
    },
    {
        id: 24,
        title: "Γιαούρτι με Μέλι και Καρύδια",
        titleEn: "Greek Yogurt with Honey and Walnuts",
        ingredients: ["γιαούρτι", "μέλι", "καρύδια", "κανέλα"],
        ingredientsEn: ["yogurt", "honey", "walnuts", "cinnamon"],
        difficulty: "easy",
        prepTime: 5,
        cookTime: 0,
        calories: 180,
        servings: 2,
        tags: ["επιδόρπιο", "χορτοφαγικό", "πρωινό"],
        tagsEn: ["dessert", "vegetarian", "breakfast"],
        description: "Κλασικό ελληνικό επιδόρπιο με παχύρρευστο γιαούρτι, αρωματικό μέλι και τραγανά καρύδια.",
        descriptionEn: "Classic Greek dessert with thick yogurt, aromatic honey and crunchy walnuts.",
        instructions: "1. Σερβίρετε το γιαούρτι σε μπολ.\n2. Περιχύστε με μέλι.\n3. Πασπαλίστε με χοντροκομμένα καρύδια και λίγη κανέλα.",
        instructionsEn: "1. Serve the yogurt in bowls.\n2. Drizzle with honey.\n3. Sprinkle with coarsely chopped walnuts and a little cinnamon."
    },
    {
        id: 25,
        title: "Λαχανοντολμάδες",
        titleEn: "Stuffed Cabbage Rolls",
        ingredients: ["λάχανο", "ρύζι", "κιμάς", "κρεμμύδι", "μαϊντανός", "άνηθος", "δυόσμος", "λεμόνι", "αυγό"],
        ingredientsEn: ["cabbage", "rice", "ground meat", "onion", "parsley", "dill", "mint", "lemon", "egg"],
        difficulty: "medium",
        prepTime: 45,
        cookTime: 60,
        calories: 350,
        servings: 6,
        tags: ["χειμωνιάτικο", "κυρίως πιάτο", "κρέας"],
        tagsEn: ["winter", "main course", "meat"],
        description: "Χειμωνιάτικο πιάτο με φύλλα λάχανου γεμιστά με ρύζι, κιμά και μυρωδικά, μαγειρεμένα σε σάλτσα αυγολέμονο.",
        descriptionEn: "Winter dish with cabbage leaves stuffed with rice, ground meat and herbs, cooked in egg-lemon sauce.",
        instructions: "1. Ζεματίστε τα φύλλα λάχανου για να μαλακώσουν.\n2. Ετοιμάστε τη γέμιση με ρύζι, κιμά, κρεμμύδι και μυρωδικά.\n3. Τυλίξτε μικρή ποσότητα γέμισης σε κάθε φύλλο λάχανου.\n4. Τοποθετήστε τους ντολμάδες σε κατσαρόλα.\n5. Προσθέστε νερό και μαγειρέψτε για 60 λεπτά.\n6. Ετοιμάστε το αυγολέμονο χτυπώντας αυγό με λεμόνι και προσθέτοντας λίγο από το ζωμό.\n7. Περιχύστε τους ντολμάδες με το αυγολέμονο.",
        instructionsEn: "1. Blanch the cabbage leaves to soften them.\n2. Prepare the filling with rice, ground meat, onion and herbs.\n3. Wrap a small amount of filling in each cabbage leaf.\n4. Place the rolls in a pot.\n5. Add water and cook for 60 minutes.\n6. Prepare the egg-lemon sauce by beating egg with lemon and adding some of the broth.\n7. Pour the egg-lemon sauce over the rolls."
    },
    {
        id: 26,
        title: "Κοτόσουπα Αυγολέμονο",
        titleEn: "Chicken Soup with Egg-Lemon Sauce",
        ingredients: ["κοτόπουλο", "καρότα", "σέλινο", "κρεμμύδι", "ρύζι", "αυγό", "λεμόνι", "άνηθος"],
        ingredientsEn: ["chicken", "carrots", "celery", "onion", "rice", "egg", "lemon", "dill"],
        difficulty: "medium",
        prepTime: 20,
        cookTime: 60,
        calories: 280,
        servings: 6,
        tags: ["σούπα", "χειμωνιάτικο", "κρέας"],
        tagsEn: ["soup", "winter", "meat"],
        description: "Ζεστή και θρεπτική σούπα με κοτόπουλο και λαχανικά, τελειωμένη με την κλασική σάλτσα αυγολέμονο.",
        descriptionEn: "Warm and nutritious soup with chicken and vegetables, finished with the classic egg-lemon sauce.",
        instructions: "1. Βράστε το κοτόπουλο με τα λαχανικά για 45 λεπτά.\n2. Αφαιρέστε το κοτόπουλο, κόψτε το σε κομμάτια και επιστρέψτε το στη σούπα.\n3. Προσθέστε το ρύζι και μαγειρέψτε για 15 λεπτά ακόμα.\n4. Χτυπήστε τα αυγά με το λεμόνι.\n5. Προσθέστε σταδιακά ζεστό ζωμό στο αυγολέμονο ανακατεύοντας συνεχώς.\n6. Προσθέστε το μείγμα στη σούπα ανακατεύοντας απαλά.\n7. Πασπαλίστε με άνηθο και σερβίρετε.",
        instructionsEn: "1. Boil the chicken with the vegetables for 45 minutes.\n2. Remove the chicken, cut it into pieces and return it to the soup.\n3. Add the rice and cook for another 15 minutes.\n4. Beat the eggs with the lemon.\n5. Gradually add hot broth to the egg-lemon mixture, stirring constantly.\n6. Add the mixture to the soup, stirring gently.\n7. Sprinkle with dill and serve."
    },
    {
        id: 27,
        title: "Χορτόπιτα",
        titleEn: "Wild Greens Pie",
        ingredients: ["χόρτα", "σπανάκι", "πράσο", "κρεμμύδι", "άνηθος", "φέτα", "φύλλο", "ελαιόλαδο"],
        ingredientsEn: ["wild greens", "spinach", "leek", "onion", "dill", "feta cheese", "phyllo dough", "olive oil"],
        difficulty: "medium",
        prepTime: 40,
        cookTime: 50,
        calories: 320,
        servings: 8,
        tags: ["πίτα", "χορτοφαγικό", "παραδοσιακό"],
        tagsEn: ["pie", "vegetarian", "traditional"],
        description: "Νόστιμη πίτα με διάφορα άγρια και ήμερα χόρτα, φέτα και αρωματικά, τυλιγμένη σε τραγανό φύλλο.",
        descriptionEn: "Delicious pie with various wild and cultivated greens, feta cheese and herbs, wrapped in crispy phyllo.",
        instructions: "1. Καθαρίστε και βράστε ελαφρά τα χόρτα. Στραγγίξτε καλά.\n2. Σοτάρετε κρεμμύδι και πράσο.\n3. Ανακατέψτε τα χόρτα με το κρεμμύδι, την φέτα, τον άνηθο και το ελαιόλαδο.\n4. Στρώστε τα μισά φύλλα σε ταψί, βουτυρώνοντας το καθένα.\n5. Απλώστε τη γέμιση.\n6. Καλύψτε με τα υπόλοιπα φύλλα, βουτυρώνοντάς τα.\n7. Ψήστε στους 180°C για 50 λεπτά μέχρι να χρυσίσει.",
        instructionsEn: "1. Clean and lightly boil the greens. Drain well.\n2. Sauté onion and leek.\n3. Mix the greens with onion, feta, dill and olive oil.\n4. Layer half the phyllo sheets in a pan, buttering each one.\n5. Spread the filling.\n6. Cover with the remaining phyllo sheets, buttering them.\n7. Bake at 180°C for 50 minutes until golden."
    },
    {
        id: 28,
        title: "Μπαρμπούνια Σαβόρο",
        titleEn: "Red Mullet Savoro Style",
        ingredients: ["μπαρμπούνια", "ξύδι", "σκόρδο", "δάφνη", "σταφίδες", "αλεύρι", "ελαιόλαδο", "ρίγανη"],
        ingredientsEn: ["red mullet", "vinegar", "garlic", "bay leaf", "raisins", "flour", "olive oil", "oregano"],
        difficulty: "medium",
        prepTime: 20,
        cookTime: 25,
        calories: 290,
        servings: 4,
        tags: ["ψάρι", "παραδοσιακό", "νησιώτικο"],
        tagsEn: ["fish", "traditional", "island"],
        description: "Παραδοσιακό πιάτο των Ιονίων με τηγανητά μπαρμπούνια και γλυκόξινη μαρινάδα με σταφίδες και ξύδι.",
        descriptionEn: "Traditional Ionian dish with fried red mullet and sweet and sour marinade with raisins and vinegar.",
        instructions: "1. Καθαρίστε και αλευρώστε τα μπαρμπούνια.\n2. Τηγανίστε τα ψάρια σε καυτό λάδι μέχρι να χρυσίσουν.\n3. Σε άλλο τηγάνι, σοτάρετε το σκόρδο και προσθέστε ξύδι, δάφνη και σταφίδες.\n4. Αφήστε τη σάλτσα να δέσει ελαφρά.\n5. Περιχύστε τα ψάρια με τη σάλτσα και αφήστε τα για λίγες ώρες ή ολονυκτίς.\n6. Σερβίρετε σε θερμοκρασία δωματίου.",
        instructionsEn: "1. Clean and flour the red mullet.\n2. Fry the fish in hot oil until golden.\n3. In another pan, sauté the garlic and add vinegar, bay leaf and raisins.\n4. Let the sauce thicken slightly.\n5. Pour the sauce over the fish and leave for a few hours or overnight.\n6. Serve at room temperature."
    },
    {
        id: 29,
        title: "Κουλούρια Θεσσαλονίκης",
        titleEn: "Thessaloniki Sesame Bread Rings",
        ingredients: ["αλεύρι", "μαγιά", "ζάχαρη", "αλάτι", "σησάμι", "νερό", "ελαιόλαδο"],
        ingredientsEn: ["flour", "yeast", "sugar", "salt", "sesame seeds", "water", "olive oil"],
        difficulty: "medium",
        prepTime: 30,
        cookTime: 20,
        calories: 220,
        servings: 10,
        tags: ["πρωινό", "σνακ", "αρτοσκεύασμα"],
        tagsEn: ["breakfast", "snack", "bakery"],
        description: "Τραγανά κουλούρια με σησάμι, ιδανικά για πρωινό ή σνακ οποιαδήποτε ώρα της ημέρας.",
        descriptionEn: "Crunchy sesame bread rings, ideal for breakfast or a snack any time of day.",
        instructions: "1. Διαλύστε τη μαγιά σε χλιαρό νερό με λίγη ζάχαρη.\n2. Ανακατέψτε το αλεύρι με το αλάτι, το λάδι και το μείγμα μαγιάς.\n3. Ζυμώστε καλά και αφήστε τη ζύμη να φουσκώσει για 1 ώρα.\n4. Κόψτε τη ζύμη σε κομμάτια και πλάστε μακριά κορδόνια.\n5. Διπλώστε τα κορδόνια στη μέση και στρίψτε τα για να σχηματίσετε κουλούρια.\n6. Βουτήξτε σε νερό και πασπαλίστε με σησάμι.\n7. Ψήστε στους 200°C για 20 λεπτά μέχρι να χρυσίσουν.",
        instructionsEn: "1. Dissolve the yeast in lukewarm water with a little sugar.\n2. Mix the flour with salt, oil and the yeast mixture.\n3. Knead well and let the dough rise for 1 hour.\n4. Cut the dough into pieces and shape long cords.\n5. Fold the cords in half and twist them to form rings.\n6. Dip in water and sprinkle with sesame seeds.\n7. Bake at 200°C for 20 minutes until golden."
    },
    {
        id: 30,
        title: "Αρνί Φρικασέ",
        titleEn: "Lamb Fricassee",
        ingredients: ["αρνί", "μαρούλι", "φρέσκο κρεμμυδάκι", "άνηθος", "αυγό", "λεμόνι", "ελαιόλαδο"],
        ingredientsEn: ["lamb", "lettuce", "spring onion", "dill", "egg", "lemon", "olive oil"],
        difficulty: "medium",
        prepTime: 30,
        cookTime: 90,
        calories: 450,
        servings: 6,
        tags: ["κρέας", "πασχαλινό", "παραδοσιακό"],
        tagsEn: ["meat", "easter", "traditional"],
        description: "Παραδοσιακό πασχαλινό πιάτο με αρνί και χόρτα, μαγειρεμένο με αρωματική σάλτσα αυγολέμονο.",
        descriptionEn: "Traditional Easter dish with lamb and greens, cooked with aromatic egg-lemon sauce.",
        instructions: "1. Κόψτε το αρνί σε μερίδες και σοτάρετε μέχρι να ροδίσει.\n2. Προσθέστε τα φρέσκα κρεμμυδάκια και λίγο νερό.\n3. Μαγειρέψτε για 45 λεπτά, μέχρι το κρέας να μαλακώσει.\n4. Προσθέστε το κομμένο μαρούλι και τον άνηθο και συνεχίστε το μαγείρεμα για άλλα 30 λεπτά.\n5. Ετοιμάστε το αυγολέμονο χτυπώντας αυγά με λεμόνι.\n6. Προσθέστε σταδιακά ζεστό ζωμό στο αυγολέμονο και περιχύστε το φαγητό.",
        instructionsEn: "1. Cut the lamb into portions and sauté until browned.\n2. Add the spring onions and a little water.\n3. Cook for 45 minutes, until the meat is tender.\n4. Add the chopped lettuce and dill and continue cooking for another 30 minutes.\n5. Prepare the egg-lemon sauce by beating eggs with lemon.\n6. Gradually add hot broth to the egg-lemon mixture and pour over the food."
    },
    {
        id: 31,
        title: "Γαριδομακαρονάδα",
        titleEn: "Shrimp Pasta",
        ingredients: ["γαρίδες", "σπαγγέτι", "ντομάτες", "σκόρδο", "κρεμμύδι", "ούζο", "μαϊντανός", "ελαιόλαδο"],
        ingredientsEn: ["shrimp", "spaghetti", "tomatoes", "garlic", "onion", "ouzo", "parsley", "olive oil"],
        difficulty: "medium",
        prepTime: 20,
        cookTime: 25,
        calories: 420,
        servings: 4,
        tags: ["ζυμαρικά", "θαλασσινά", "κυρίως πιάτο"],
        tagsEn: ["pasta", "seafood", "main course"],
        description: "Αρωματική μακαρονάδα με γαρίδες, ντομάτα και ούζο, ένα από τα πιο δημοφιλή ελληνικά πιάτα θαλασσινών.",
        descriptionEn: "Aromatic pasta with shrimp, tomato and ouzo, one of the most popular Greek seafood dishes.",
        instructions: "1. Καθαρίστε τις γαρίδες, κρατώντας το κέλυφος για περισσότερη γεύση.\n2. Σοτάρετε κρεμμύδι και σκόρδο σε ελαιόλαδο.\n3. Προσθέστε τις γαρίδες και σοτάρετε για 2 λεπτά.\n4. Προσθέστε το ούζο και αφήστε το να εξατμιστεί.\n5. Προσθέστε ντομάτες και μαγειρέψτε για 10 λεπτά.\n6. Βράστε τα ζυμαρικά, στραγγίστε και ανακατέψτε με τη σάλτσα.\n7. Πασπαλίστε με ψιλοκομμένο μαϊντανό.",
        instructionsEn: "1. Clean the shrimp, keeping the shells for more flavor.\n2. Sauté onion and garlic in olive oil.\n3. Add the shrimp and sauté for 2 minutes.\n4. Add the ouzo and let it evaporate.\n5. Add tomatoes and cook for 10 minutes.\n6. Boil the pasta, drain and mix with the sauce.\n7. Sprinkle with chopped parsley."
    },
    {
        id: 32,
        title: "Ιμάμ Μπαϊλντί",
        titleEn: "Imam Bayildi (Stuffed Eggplants)",
        ingredients: ["μελιτζάνες", "κρεμμύδι", "σκόρδο", "ντομάτες", "μαϊντανός", "κανέλα", "ελαιόλαδο"],
        ingredientsEn: ["eggplants", "onion", "garlic", "tomatoes", "parsley", "cinnamon", "olive oil"],
        difficulty: "medium",
        prepTime: 25,
        cookTime: 75,
        calories: 280,
        servings: 4,
        tags: ["λαδερό", "νηστίσιμο", "λαχανικά", "φούρνου"],
        tagsEn: ["olive oil", "vegan", "vegetables", "baked"],
        description: "Μελιτζάνες γεμιστές με κρεμμύδια και ντομάτες, μαγειρεμένες σε άφθονο ελαιόλαδο, ένα πολίτικο πιάτο γεμάτο αρώματα.",
        descriptionEn: "Eggplants stuffed with onions and tomatoes, cooked in plenty of olive oil, a Constantinople dish full of aromas.",
        instructions: "1. Κόψτε τις μελιτζάνες στη μέση και χαράξτε τη σάρκα.\n2. Αλατίστε και αφήστε τις να βγάλουν τα υγρά τους για 30 λεπτά.\n3. Σοτάρετε κρεμμύδια, σκόρδο και ντομάτες με μπαχαρικά.\n4. Τηγανίστε ελαφρά τις μελιτζάνες.\n5. Γεμίστε τις μελιτζάνες με το μείγμα λαχανικών.\n6. Τοποθετήστε σε ταψί, προσθέστε λίγο νερό και ελαιόλαδο.\n7. Ψήστε στους 180°C για 45 λεπτά, μέχρι να μαλακώσουν οι μελιτζάνες.",
        instructionsEn: "1. Cut the eggplants in half and score the flesh.\n2. Salt them and let them release their juices for 30 minutes.\n3. Sauté onions, garlic and tomatoes with spices.\n4. Lightly fry the eggplants.\n5. Fill the eggplants with the vegetable mixture.\n6. Place in a baking dish, add a little water and olive oil.\n7. Bake at 180°C for 45 minutes, until the eggplants are soft."
    },
    {
        id: 33,
        title: "Ψαρόσουπα",
        titleEn: "Fish Soup",
        ingredients: ["ψάρι", "καρότα", "πατάτες", "σέλινο", "κρεμμύδι", "άνηθος", "λεμόνι", "ελαιόλαδο"],
        ingredientsEn: ["fish", "carrots", "potatoes", "celery", "onion", "dill", "lemon", "olive oil"],
        difficulty: "medium",
        prepTime: 20,
        cookTime: 40,
        calories: 250,
        servings: 6,
        tags: ["σούπα", "θαλασσινά", "ελαφρύ"],
        tagsEn: ["soup", "seafood", "light"],
        description: "Ζεστή και γεμάτη γεύση σούπα με ψάρι και λαχανικά, ιδανική για τις κρύες μέρες του χειμώνα.",
        descriptionEn: "Warm and flavorful soup with fish and vegetables, ideal for cold winter days.",
        instructions: "1. Καθαρίστε και κόψτε το ψάρι σε μεγάλα κομμάτια.\n2. Σοτάρετε το κρεμμύδι σε ελαιόλαδο.\n3. Προσθέστε τα υπόλοιπα λαχανικά κομμένα σε κύβους και σοτάρετε για 5 λεπτά.\n4. Προσθέστε νερό και αλάτι και βράστε για 15 λεπτά.\n5. Προσθέστε το ψάρι και συνεχίστε το βράσιμο για άλλα 15-20 λεπτά.\n6. Πριν το σερβίρισμα, προσθέστε άνηθο και λεμόνι.",
        instructionsEn: "1. Clean and cut the fish into large pieces.\n2. Sauté the onion in olive oil.\n3. Add the remaining vegetables cut into cubes and sauté for 5 minutes.\n4. Add water and salt and boil for 15 minutes.\n5. Add the fish and continue boiling for another 15-20 minutes.\n6. Before serving, add dill and lemon."
    },
    {
        id: 34,
        title: "Μπακλαβάς",
        titleEn: "Baklava",
        ingredients: ["φύλλο κρούστας", "καρύδια", "αμύγδαλα", "φιστίκια", "ζάχαρη", "μέλι", "κανέλα", "γαρύφαλλο", "βούτυρο"],
        ingredientsEn: ["phyllo pastry", "walnuts", "almonds", "pistachios", "sugar", "honey", "cinnamon", "cloves", "butter"],
        difficulty: "hard",
        prepTime: 50,
        cookTime: 45,
        calories: 450,
        servings: 24,
        tags: ["γλυκό", "παραδοσιακό", "γιορτινό"],
        tagsEn: ["dessert", "traditional", "festive"],
        description: "Πλούσιο και γλυκό επιδόρπιο με στρώσεις από φύλλο, καρύδια και σιρόπι μελιού, ένα από τα πιο διάσημα ελληνικά γλυκά.",
        descriptionEn: "Rich and sweet dessert with layers of phyllo, nuts and honey syrup, one of the most famous Greek desserts.",
        instructions: "1. Ανακατέψτε τα ψιλοκομμένα καρύδια με ζάχαρη και κανέλα.\n2. Βουτυρώστε ένα ταψί και στρώστε 6-8 φύλλα κρούστας, βουτυρώνοντας κάθε φύλλο.\n3. Απλώστε λίγη από τη γέμιση.\n4. Επαναλάβετε τις στρώσεις φύλλου και γέμισης, τελειώνοντας με φύλλα.\n5. Κόψτε σε ρόμβους πριν το ψήσιμο.\n6. Ψήστε στους 180°C για 45 λεπτά μέχρι να χρυσίσει.\n7. Ετοιμάστε σιρόπι με νερό, ζάχαρη, μέλι και μπαχαρικά και αφήστε το να κρυώσει.\n8. Περιχύστε τον ζεστό μπακλαβά με το κρύο σιρόπι.",
        instructionsEn: "1. Mix the chopped nuts with sugar and cinnamon.\n2. Butter a baking dish and layer 6-8 phyllo sheets, buttering each sheet.\n3. Spread some of the filling.\n4. Repeat the layers of phyllo and filling, ending with phyllo.\n5. Cut into diamonds before baking.\n6. Bake at 180°C for 45 minutes until golden.\n7. Prepare syrup with water, sugar, honey and spices and let it cool.\n8. Pour the cold syrup over the hot baklava."
    },
    {
        id: 35,
        title: "Γίγαντες Φούρνου",
        titleEn: "Baked Giant Beans",
        ingredients: ["γίγαντες", "κρεμμύδι", "σκόρδο", "καρότα", "σέλερι", "ντομάτες", "πιπεριά", "μαϊντανός", "ελαιόλαδο"],
        ingredientsEn: ["giant beans", "onion", "garlic", "carrots", "celery", "tomatoes", "pepper", "parsley", "olive oil"],
        difficulty: "easy",
        prepTime: 30,
        cookTime: 90,
        calories: 290,
        servings: 6,
        tags: ["όσπρια", "φούρνου", "νηστίσιμο", "παραδοσιακό"],
        tagsEn: ["legumes", "baked", "vegan", "traditional"],
        description: "Κρεμώδεις γίγαντες φασόλια ψημένα σε σάλτσα ντομάτας και μυρωδικά, ένα νόστιμο και χορταστικό πιάτο.",
        descriptionEn: "Creamy giant beans baked in tomato sauce and herbs, a delicious and filling dish.",
        instructions: "1. Μουλιάστε τους γίγαντες για 12 ώρες και βράστε τους μέχρι να μαλακώσουν ελαφρά.\n2. Σοτάρετε κρεμμύδι, σκόρδο, καρότα και σέλερι σε ελαιόλαδο.\n3. Προσθέστε ντομάτες, πιπεριά και μαϊντανό.\n4. Ανακατέψτε τους γίγαντες με τη σάλτσα και μεταφέρετε σε ταψί.\n5. Προσθέστε νερό μέχρι να καλυφθούν ελαφρά.\n6. Ψήστε στους 180°C για 60-90 λεπτά μέχρι οι γίγαντες να μαλακώσουν εντελώς και η σάλτσα να δέσει.",
        instructionsEn: "1. Soak the giant beans for 12 hours and boil them until slightly soft.\n2. Sauté onion, garlic, carrots and celery in olive oil.\n3. Add tomatoes, pepper and parsley.\n4. Mix the beans with the sauce and transfer to a baking dish.\n5. Add water to slightly cover them.\n6. Bake at 180°C for 60-90 minutes until the beans are completely soft and the sauce is thick."
    },
    {
        id: 36,
        title: "Σουπιές με Σπανάκι",
        titleEn: "Cuttlefish with Spinach",
        ingredients: ["σουπιές", "σπανάκι", "κρεμμύδι", "σκόρδο", "άνηθος", "ελαιόλαδο", "λεμόνι"],
        ingredientsEn: ["cuttlefish", "spinach", "onion", "garlic", "dill", "olive oil", "lemon"],
        difficulty: "medium",
        prepTime: 30,
        cookTime: 60,
        calories: 340,
        servings: 4,
        tags: ["θαλασσινά", "κυρίως πιάτο", "παραδοσιακό"],
        tagsEn: ["seafood", "main course", "traditional"],
        description: "Τρυφερές σουπιές μαγειρεμένες με φρέσκο σπανάκι και αρωματικά, ένα αγαπημένο πιάτο της νηστείας.",
        descriptionEn: "Tender cuttlefish cooked with fresh spinach and herbs, a favorite Lenten dish.",
        instructions: "1. Καθαρίστε τις σουπιές και κόψτε τις σε κομμάτια.\n2. Σοτάρετε κρεμμύδι και σκόρδο σε ελαιόλαδο.\n3. Προσθέστε τις σουπιές και μαγειρέψτε για 10 λεπτά.\n4. Προσθέστε το σπανάκι, τον άνηθο και λίγο νερό.\n5. Μαγειρέψτε σε χαμηλή φωτιά για 45-60 λεπτά μέχρι να μαλακώσουν οι σουπιές.\n6. Περιχύστε με λεμόνι πριν το σερβίρισμα.",
        instructionsEn: "1. Clean the cuttlefish and cut into pieces.\n2. Sauté onion and garlic in olive oil.\n3. Add the cuttlefish and cook for 10 minutes.\n4. Add the spinach, dill and a little water.\n5. Cook on low heat for 45-60 minutes until the cuttlefish is tender.\n6. Drizzle with lemon before serving."
    },
    {
        id: 37,
        title: "Φασόλια Γίγαντες Πλακί",
        titleEn: "Giant Beans in Tomato Sauce",
        ingredients: ["φασόλια γίγαντες", "κρεμμύδι", "σκόρδο", "καρότο", "σέλινο", "ντομάτες", "μαϊντανός", "ελαιόλαδο"],
        ingredientsEn: ["giant beans", "onion", "garlic", "carrot", "celery", "tomatoes", "parsley", "olive oil"],
        difficulty: "easy",
        prepTime: 20,
        cookTime: 90,
        calories: 310,
        servings: 6,
        tags: ["όσπρια", "φούρνου", "νηστίσιμο", "λαδερό"],
        tagsEn: ["legumes", "baked", "vegan", "olive oil"],
        description: "Παραδοσιακό ελληνικό πιάτο με γίγαντες φασόλια ψημένα σε πλούσια σάλτσα ντομάτας.",
        descriptionEn: "Traditional Greek dish with giant beans baked in a rich tomato sauce.",
        instructions: "1. Μουλιάστε τα φασόλια για 12 ώρες. Στραγγίξτε και βράστε μέχρι να μαλακώσουν ελαφρά.\n2. Σοτάρετε κρεμμύδι, σκόρδο, καρότο και σέλινο.\n3. Προσθέστε ντομάτες και μαγειρέψτε για 10 λεπτά.\n4. Αναμείξτε τα φασόλια με τη σάλτσα και προσθέστε μαϊντανό.\n5. Μεταφέρετε σε ταψί και ψήστε στους 180°C για 45-60 λεπτά.",
        instructionsEn: "1. Soak the beans for 12 hours. Drain and boil until slightly soft.\n2. Sauté onion, garlic, carrot and celery.\n3. Add tomatoes and cook for 10 minutes.\n4. Mix the beans with the sauce and add parsley.\n5. Transfer to a baking dish and bake at 180°C for 45-60 minutes."
    },
    {
        id: 38,
        title: "Ρεβανί",
        titleEn: "Revani (Semolina Cake)",
        ingredients: ["σιμιγδάλι", "αυγά", "γιαούρτι", "βούτυρο", "ζάχαρη", "ξύσμα λεμονιού", "μπέικιν πάουντερ", "μέλι", "νερό", "κανέλα"],
        ingredientsEn: ["semolina", "eggs", "yogurt", "butter", "sugar", "lemon zest", "baking powder", "honey", "water", "cinnamon"],
        difficulty: "medium",
        prepTime: 20,
        cookTime: 40,
        calories: 320,
        servings: 12,
        tags: ["γλυκό", "παραδοσιακό", "επιδόρπιο"],
        tagsEn: ["dessert", "traditional", "sweet"],
        description: "Αφράτο και ελαφρά υγρό κέικ σιμιγδαλιού περιχυμένο με αρωματικό σιρόπι μελιού.",
        descriptionEn: "Fluffy and slightly moist semolina cake drenched in aromatic honey syrup.",
        instructions: "1. Χτυπήστε το βούτυρο με τη ζάχαρη μέχρι να αφρατέψουν.\n2. Προσθέστε τα αυγά ένα-ένα, το γιαούρτι και το ξύσμα λεμονιού.\n3. Ανακατέψτε το σιμιγδάλι με το μπέικιν πάουντερ και προσθέστε το στο μείγμα.\n4. Ψήστε σε βουτυρωμένο ταψί στους 180°C για 40 λεπτά.\n5. Ετοιμάστε το σιρόπι βράζοντας νερό, ζάχαρη και μέλι.\n6. Περιχύστε το ζεστό κέικ με το κρύο σιρόπι.\n7. Πασπαλίστε με κανέλα.",
        instructionsEn: "1. Beat the butter with sugar until fluffy.\n2. Add the eggs one by one, the yogurt and lemon zest.\n3. Mix the semolina with baking powder and add to the mixture.\n4. Bake in a buttered pan at 180°C for 40 minutes.\n5. Prepare the syrup by boiling water, sugar and honey.\n6. Pour the cold syrup over the hot cake.\n7. Sprinkle with cinnamon."
    },
    {
        id: 39,
        title: "Μανιτάρια Πλευρώτους στη Σχάρα",
        titleEn: "Grilled Oyster Mushrooms",
        ingredients: ["μανιτάρια πλευρώτους", "σκόρδο", "μαϊντανός", "λεμόνι", "ελαιόλαδο", "θυμάρι", "αλάτι", "πιπέρι"],
        ingredientsEn: ["oyster mushrooms", "garlic", "parsley", "lemon", "olive oil", "thyme", "salt", "pepper"],
        difficulty: "easy",
        prepTime: 15,
        cookTime: 10,
        calories: 150,
        servings: 4,
        tags: ["ορεκτικό", "χορτοφαγικό", "σχάρας", "νηστίσιμο"],
        tagsEn: ["appetizer", "vegetarian", "grilled", "vegan"],
        description: "Ζουμερά μανιτάρια πλευρώτους ψημένα στη σχάρα με αρωματικά βότανα και σάλτσα λεμονιού-λαδιού.",
        descriptionEn: "Juicy oyster mushrooms grilled with aromatic herbs and lemon-oil sauce.",
        instructions: "1. Καθαρίστε τα μανιτάρια και κόψτε τα σε μεγάλα κομμάτια.\n2. Ανακατέψτε ελαιόλαδο με λιωμένο σκόρδο, θυμάρι, αλάτι και πιπέρι.\n3. Μαρινάρετε τα μανιτάρια για 15 λεπτά.\n4. Ψήστε στη σχάρα για 3-4 λεπτά από κάθε πλευρά.\n5. Περιχύστε με μείγμα λεμονιού, ελαιόλαδου και ψιλοκομμένου μαϊντανού.",
        instructionsEn: "1. Clean the mushrooms and cut into large pieces.\n2. Mix olive oil with minced garlic, thyme, salt and pepper.\n3. Marinate the mushrooms for 15 minutes.\n4. Grill for 3-4 minutes on each side.\n5. Drizzle with a mixture of lemon, olive oil and chopped parsley."
    },
    {
        id: 40,
        title: "Κεφτέδες με Σάλτσα Αυγολέμονο",
        titleEn: "Meatballs with Egg-Lemon Sauce",
        ingredients: ["κιμάς", "κρεμμύδι", "σκόρδο", "ψωμί", "γάλα", "αυγό", "μαϊντανός", "δυόσμος", "λεμόνι", "αλεύρι"],
        ingredientsEn: ["ground meat", "onion", "garlic", "bread", "milk", "egg", "parsley", "mint", "lemon", "flour"],
        difficulty: "medium",
        prepTime: 30,
        cookTime: 40,
        calories: 380,
        servings: 6,
        tags: ["κρέας", "κυρίως πιάτο", "παραδοσιακό"],
        tagsEn: ["meat", "main course", "traditional"],
        description: "Αφράτοι κεφτέδες με αρωματικά μαγειρεμένοι σε κρεμώδη σάλτσα αυγολέμονο.",
        descriptionEn: "Fluffy meatballs with herbs cooked in a creamy egg-lemon sauce.",
        instructions: "1. Μουλιάστε το ψωμί σε γάλα και στραγγίξτε.\n2. Αναμείξτε τον κιμά με το ψωμί, κρεμμύδι, σκόρδο, μυρωδικά και αυγό.\n3. Πλάστε μικρούς κεφτέδες και αλευρώστε τους.\n4. Τηγανίστε ελαφρά τους κεφτέδες.\n5. Βράστε τους σε ζωμό για 15 λεπτά.\n6. Ετοιμάστε το αυγολέμονο χτυπώντας αυγά με λεμόνι και προσθέτοντας λίγο από το ζωμό.\n7. Προσθέστε το αυγολέμονο στους κεφτέδες και ανακατέψτε απαλά.",
        instructionsEn: "1. Soak the bread in milk and drain.\n2. Mix the ground meat with bread, onion, garlic, herbs and egg.\n3. Shape small meatballs and flour them.\n4. Lightly fry the meatballs.\n5. Boil them in broth for 15 minutes.\n6. Prepare the egg-lemon sauce by beating eggs with lemon and adding some of the broth.\n7. Add the egg-lemon sauce to the meatballs and stir gently."
    },
    {
        id: 41,
        title: "Κοτόσουπα με Τραχανά",
        titleEn: "Chicken Soup with Trahanas",
        ingredients: ["κοτόπουλο", "τραχανάς", "κρεμμύδι", "καρότο", "σέλινο", "λεμόνι", "αυγό", "ελαιόλαδο"],
        ingredientsEn: ["chicken", "trahanas", "onion", "carrot", "celery", "lemon", "egg", "olive oil"],
        difficulty: "easy",
        prepTime: 20,
        cookTime: 60,
        calories: 330,
        servings: 6,
        tags: ["σούπα", "χειμωνιάτικο", "παραδοσιακό"],
        tagsEn: ["soup", "winter", "traditional"],
        description: "Ζεστή και θρεπτική σούπα με κοτόπουλο και παραδοσιακό τραχανά, ιδανική για κρύες χειμωνιάτικες μέρες.",
        descriptionEn: "Warm and nutritious soup with chicken and traditional trahanas, ideal for cold winter days.",
        instructions: "1. Βράστε το κοτόπουλο με κρεμμύδι, καρότο και σέλινο για 45 λεπτά.\n2. Αφαιρέστε το κοτόπουλο, ξεκοκαλίστε το και επιστρέψτε το κρέας στο ζωμό.\n3. Προσθέστε τον τραχανά και μαγειρέψτε για 15-20 λεπτά ακόμα.\n4. Χτυπήστε αυγό με λεμόνι και προσθέστε σταδιακά ζεστό ζωμό.\n5. Αποσύρετε από τη φωτιά και προσθέστε το αυγολέμονο ανακατεύοντας συνεχώς.\n6. Σερβίρετε με φρεσκοτριμμένο πιπέρι και ελαιόλαδο.",
        instructionsEn: "1. Boil the chicken with onion, carrot and celery for 45 minutes.\n2. Remove the chicken, debone it and return the meat to the broth.\n3. Add the trahanas and cook for another 15-20 minutes.\n4. Beat egg with lemon and gradually add hot broth.\n5. Remove from heat and add the egg-lemon mixture, stirring constantly.\n6. Serve with freshly ground pepper and olive oil."
    },
    {
        id: 42,
        title: "Μπακαλιάρος Πλακί",
        titleEn: "Baked Cod with Tomato Sauce",
        ingredients: ["μπακαλιάρος", "κρεμμύδι", "σκόρδο", "ντομάτες", "πιπεριά", "μαϊντανός", "δαφνόφυλλα", "ελαιόλαδο"],
        ingredientsEn: ["cod", "onion", "garlic", "tomatoes", "pepper", "parsley", "bay leaves", "olive oil"],
        difficulty: "medium",
        prepTime: 30,
        cookTime: 45,
        calories: 320,
        servings: 4,
        tags: ["ψάρι", "φούρνου", "παραδοσιακό"],
        tagsEn: ["fish", "baked", "traditional"],
        description: "Παραδοσιακό ελληνικό πιάτο με μπακαλιάρο ψημένο σε σάλτσα ντομάτας με αρωματικά.",
        descriptionEn: "Traditional Greek dish with cod baked in tomato sauce with aromatics.",
        instructions: "1. Αλατίστε τον μπακαλιάρο και αφήστε τον για 20 λεπτά.\n2. Σοτάρετε κρεμμύδι, σκόρδο και πιπεριά σε ελαιόλαδο.\n3. Προσθέστε ντομάτες, δαφνόφυλλα και μαγειρέψτε τη σάλτσα για 15 λεπτά.\n4. Τοποθετήστε τον μπακαλιάρο σε ταψί και καλύψτε με τη σάλτσα.\n5. Ψήστε στους 180°C για 30-40 λεπτά.\n6. Πασπαλίστε με ψιλοκομμένο μαϊντανό πριν το σερβίρισμα.",
        instructionsEn: "1. Salt the cod and leave it for 20 minutes.\n2. Sauté onion, garlic and pepper in olive oil.\n3. Add tomatoes, bay leaves and cook the sauce for 15 minutes.\n4. Place the cod in a baking dish and cover with the sauce.\n5. Bake at 180°C for 30-40 minutes.\n6. Sprinkle with chopped parsley before serving."
    },
    {
        id: 43,
        title: "Σκορδαλιά",
        titleEn: "Skordalia (Garlic Dip)",
        ingredients: ["πατάτες", "σκόρδο", "ξύδι", "ελαιόλαδο", "αμύγδαλα", "ψωμί", "λεμόνι"],
        ingredientsEn: ["potatoes", "garlic", "vinegar", "olive oil", "almonds", "bread", "lemon"],
        difficulty: "easy",
        prepTime: 20,
        cookTime: 20,
        calories: 180,
        servings: 6,
        tags: ["μεζές", "σάλτσα", "νηστίσιμο"],
        tagsEn: ["meze", "sauce", "vegan"],
        description: "Κρεμώδης σκορδάτη σάλτσα από πατάτες ή ψωμί, συνοδευτικό για ψάρια και λαχανικά.",
        descriptionEn: "Creamy garlic sauce made from potatoes or bread, accompaniment for fish and vegetables.",
        instructions: "1. Βράστε τις πατάτες μέχρι να μαλακώσουν και λιώστε τις.\n2. Φτιάξτε ένα πολτό από σκόρδο και αλάτι.\n3. Αν χρησιμοποιείτε αμύγδαλα, αλέστε τα καλά.\n4. Αν χρησιμοποιείτε ψωμί, μουλιάστε το σε νερό και στραγγίξτε καλά.\n5. Αναμείξτε τις πατάτες με το σκόρδο και τα υπόλοιπα υλικά.\n6. Προσθέστε σταδιακά ελαιόλαδο, χτυπώντας συνεχώς μέχρι να γίνει κρεμώδης.\n7. Προσθέστε ξύδι ή λεμόνι για γεύση.",
        instructionsEn: "1. Boil the potatoes until soft and mash them.\n2. Make a paste from garlic and salt.\n3. If using almonds, grind them well.\n4. If using bread, soak it in water and drain well.\n5. Mix the potatoes with garlic and other ingredients.\n6. Gradually add olive oil, beating constantly until creamy.\n7. Add vinegar or lemon for taste."
    },
    {
        id: 44,
        title: "Χοιρινό με Σέλινο Αυγολέμονο",
        titleEn: "Pork with Celery in Egg-Lemon Sauce",
        ingredients: ["χοιρινό", "σέλινο", "κρεμμύδι", "καρότο", "αυγό", "λεμόνι", "ελαιόλαδο", "αλάτι", "πιπέρι"],
        ingredientsEn: ["pork", "celery", "onion", "carrot", "egg", "lemon", "olive oil", "salt", "pepper"],
        difficulty: "medium",
        prepTime: 20,
        cookTime: 90,
        calories: 420,
        servings: 6,
        tags: ["κρέας", "χειμωνιάτικο", "παραδοσιακό"],
        tagsEn: ["meat", "winter", "traditional"],
        description: "Τρυφερό χοιρινό μαγειρεμένο με φρέσκο σέλινο και τελειωμένο με κρεμώδη σάλτσα αυγολέμονο.",
        descriptionEn: "Tender pork cooked with fresh celery and finished with creamy egg-lemon sauce.",
        instructions: "1. Κόψτε το χοιρινό σε μικρά κομμάτια και σοτάρετε σε ελαιόλαδο.\n2. Προσθέστε ψιλοκομμένο κρεμμύδι και καρότο και σοτάρετε για 5 λεπτά.\n3. Προσθέστε νερό και μαγειρέψτε για 60 λεπτά.\n4. Προσθέστε το σέλινο κομμένο σε κομμάτια και συνεχίστε το μαγείρεμα για άλλα 30 λεπτά.\n5. Χτυπήστε τα αυγά με το λεμόνι.\n6. Προσθέστε σταδιακά ζεστό ζωμό στο αυγολέμονο ανακατεύοντας συνεχώς.\n7. Αποσύρετε από τη φωτιά και προσθέστε το αυγολέμονο ανακατεύοντας απαλά.",
        instructionsEn: "1. Cut the pork into small pieces and sauté in olive oil.\n2. Add chopped onion and carrot and sauté for 5 minutes.\n3. Add water and cook for 60 minutes.\n4. Add the celery cut into pieces and continue cooking for another 30 minutes.\n5. Beat the eggs with lemon.\n6. Gradually add hot broth to the egg-lemon mixture, stirring constantly.\n7. Remove from heat and add the egg-lemon sauce, stirring gently."
    },
    {
        id: 45,
        title: "Αγκινάρες α λα Πολίτα",
        titleEn: "Artichokes à la Polita",
        ingredients: ["αγκινάρες", "καρότα", "πατάτες", "κρεμμύδι", "άνηθος", "αρακάς", "λεμόνι", "ελαιόλαδο"],
        ingredientsEn: ["artichokes", "carrots", "potatoes", "onion", "dill", "peas", "lemon", "olive oil"],
        difficulty: "medium",
        prepTime: 45,
        cookTime: 50,
        calories: 280,
        servings: 4,
        tags: ["λαδερό", "νηστίσιμο", "παραδοσιακό", "λαχανικά"],
        tagsEn: ["olive oil dish", "vegan", "traditional", "vegetables"],
        description: "Κλασικό πολίτικο πιάτο με αγκινάρες, λαχανικά και αρωματικά, μαγειρεμένα σε λεμονάτη σάλτσα.",
        descriptionEn: "Classic Constantinople-style dish with artichokes, vegetables and herbs, cooked in a lemony sauce.",
        instructions: "1. Καθαρίστε τις αγκινάρες, κρατώντας μόνο τις καρδιές και τρίψτε με λεμόνι για να μην μαυρίσουν.\n2. Σοτάρετε το κρεμμύδι σε ελαιόλαδο μέχρι να μαλακώσει.\n3. Προσθέστε καρότα, πατάτες κομμένα σε κύβους και τις αγκινάρες.\n4. Προσθέστε νερό, αλάτι, πιπέρι και μαγειρέψτε για 30 λεπτά σε μέτρια φωτιά.\n5. Προσθέστε τον αρακά και μαγειρέψτε για άλλα 15 λεπτά.\n6. Στο τέλος προσθέστε άνηθο και χυμό λεμονιού.\n7. Αφήστε να δέσει η σάλτσα και σερβίρετε ζεστό ή σε θερμοκρασία δωματίου.",
        instructionsEn: "1. Clean the artichokes, keeping only the hearts and rub with lemon to prevent browning.\n2. Sauté the onion in olive oil until soft.\n3. Add carrots, potatoes cut into cubes and the artichokes.\n4. Add water, salt, pepper and cook for 30 minutes over medium heat.\n5. Add the peas and cook for another 15 minutes.\n6. At the end, add dill and lemon juice.\n7. Let the sauce thicken and serve hot or at room temperature."
    },
    {
        id: 46,
        title: "Κουλουράκια Πασχαλινά",
        titleEn: "Easter Cookies",
        ingredients: ["αλεύρι", "βούτυρο", "ζάχαρη", "αυγά", "γάλα", "μαστίχα", "μαχλέπι", "σουσάμι", "αμμωνία", "βανίλια"],
        ingredientsEn: ["flour", "butter", "sugar", "eggs", "milk", "mastic", "mahlepi", "sesame", "ammonium carbonate", "vanilla"],
        difficulty: "medium",
        prepTime: 40,
        cookTime: 20,
        calories: 220,
        servings: 30,
        tags: ["γλυκό", "πασχαλινό", "παραδοσιακό", "κουλουράκια"],
        tagsEn: ["sweet", "Easter", "traditional", "cookies"],
        description: "Αφράτα, αρωματικά κουλουράκια με χαρακτηριστική γεύση μαστίχας και μαχλεπιού, παραδοσιακά για το Πάσχα.",
        descriptionEn: "Fluffy, aromatic cookies with distinctive mastic and mahlepi flavor, traditional for Easter.",
        instructions: "1. Χτυπήστε το βούτυρο με τη ζάχαρη μέχρι να αφρατέψουν.\n2. Προσθέστε τα αυγά ένα-ένα και συνεχίστε το χτύπημα.\n3. Προσθέστε τη βανίλια, τη μαστίχα και το μαχλέπι τριμμένα.\n4. Διαλύστε την αμμωνία σε λίγο γάλα και προσθέστε στο μείγμα.\n5. Προσθέστε σταδιακά το αλεύρι και ζυμώστε μέχρι να έχετε μια εύπλαστη ζύμη.\n6. Πλάστε τα κουλουράκια σε διάφορα σχήματα (πλεξούδες, στριφτά, δαχτυλίδια).\n7. Αλείψτε με αυγό και πασπαλίστε με σουσάμι.\n8. Ψήστε στους 180°C για 20 λεπτά μέχρι να χρυσίσουν.",
        instructionsEn: "1. Beat the butter with sugar until fluffy.\n2. Add the eggs one by one and continue beating.\n3. Add vanilla, ground mastic and mahlepi.\n4. Dissolve the ammonium carbonate in a little milk and add to the mixture.\n5. Gradually add the flour and knead until you have a pliable dough.\n6. Shape the cookies into various forms (braids, twists, rings).\n7. Brush with egg and sprinkle with sesame seeds.\n8. Bake at 180°C for 20 minutes until golden."
    },
    {
        id: 47,
        title: "Τζατζίκι",
        titleEn: "Tzatziki",
        ingredients: ["γιαούρτι", "αγγούρι", "σκόρδο", "ελαιόλαδο", "ξύδι", "άνηθος", "αλάτι", "πιπέρι"],
        ingredientsEn: ["yogurt", "cucumber", "garlic", "olive oil", "vinegar", "dill", "salt", "pepper"],
        difficulty: "easy",
        prepTime: 15,
        cookTime: 0,
        calories: 120,
        servings: 6,
        tags: ["μεζές", "σάλτσα", "ορεκτικό", "γιαούρτι"],
        tagsEn: ["meze", "sauce", "appetizer", "yogurt"],
        description: "Κλασική ελληνική σάλτσα με βάση το γιαούρτι, τέλεια για συνοδευτικό σε πολλά πιάτα.",
        descriptionEn: "Classic Greek yogurt-based sauce, perfect as a side for many dishes.",
        instructions: "1. Τρίψτε το αγγούρι και στραγγίξτε καλά το νερό του.\n2. Λιώστε το σκόρδο με αλάτι σε γουδί.\n3. Αναμείξτε το γιαούρτι με το αγγούρι και το σκόρδο.\n4. Προσθέστε ψιλοκομμένο άνηθο, ελαιόλαδο, ξύδι, αλάτι και πιπέρι.\n5. Αφήστε το τζατζίκι στο ψυγείο για τουλάχιστον 2 ώρες πριν το σερβίρισμα.",
        instructionsEn: "1. Grate the cucumber and drain its water well.\n2. Crush the garlic with salt in a mortar.\n3. Mix the yogurt with cucumber and garlic.\n4. Add chopped dill, olive oil, vinegar, salt and pepper.\n5. Leave the tzatziki in the refrigerator for at least 2 hours before serving."
    },
    {
        id: 48,
        title: "Κουνουπίδι Γιαχνί",
        titleEn: "Braised Cauliflower",
        ingredients: ["κουνουπίδι", "κρεμμύδι", "σκόρδο", "ντομάτες", "πιπέρι", "κύμινο", "μπαχάρι", "ελαιόλαδο"],
        ingredientsEn: ["cauliflower", "onion", "garlic", "tomatoes", "pepper", "cumin", "allspice", "olive oil"],
        difficulty: "easy",
        prepTime: 15,
        cookTime: 40,
        calories: 170,
        servings: 4,
        tags: ["λαδερό", "νηστίσιμο", "λαχανικά", "κατσαρόλας"],
        tagsEn: ["olive oil dish", "vegan", "vegetables", "pot dish"],
        description: "Κουνουπίδι μαγειρεμένο αργά σε πλούσια σάλτσα ντομάτας με αρωματικά μπαχαρικά.",
        descriptionEn: "Cauliflower slowly cooked in rich tomato sauce with aromatic spices.",
        instructions: "1. Κόψτε το κουνουπίδι σε μπουκετάκια και πλύνετε καλά.\n2. Σοτάρετε κρεμμύδι και σκόρδο σε ελαιόλαδο.\n3. Προσθέστε τις ντομάτες και τα μπαχαρικά και μαγειρέψτε για 5 λεπτά.\n4. Προσθέστε το κουνουπίδι, αλάτι, πιπέρι και λίγο νερό αν χρειάζεται.\n5. Μαγειρέψτε σε χαμηλή φωτιά με κλειστό καπάκι για 30-40 λεπτά μέχρι να μαλακώσει το κουνουπίδι.\n6. Η σάλτσα πρέπει να είναι δεμένη και όχι υδαρής στο τέλος.",
        instructionsEn: "1. Cut the cauliflower into florets and wash well.\n2. Sauté onion and garlic in olive oil.\n3. Add the tomatoes and spices and cook for 5 minutes.\n4. Add the cauliflower, salt, pepper and a little water if needed.\n5. Cook on low heat with lid closed for 30-40 minutes until the cauliflower is soft.\n6. The sauce should be thick and not watery at the end."
    },
    {
        id: 49,
        title: "Λουκουμάδες",
        titleEn: "Loukoumades (Greek Honey Puffs)",
        ingredients: ["αλεύρι", "μαγιά", "αλάτι", "ζάχαρη", "νερό", "μέλι", "κανέλα", "καρύδια"],
        ingredientsEn: ["flour", "yeast", "salt", "sugar", "water", "honey", "cinnamon", "walnuts"],
        difficulty: "medium",
        prepTime: 90,
        cookTime: 20,
        calories: 290,
        servings: 8,
        tags: ["γλυκό", "επιδόρπιο", "τηγανητό", "παραδοσιακό"],
        tagsEn: ["dessert", "sweet", "fried", "traditional"],
        description: "Αφράτοι, μικροί, γλυκοί λουκουμάδες, περιχυμένοι με μέλι και πασπαλισμένοι με κανέλα και καρύδια.",
        descriptionEn: "Fluffy, small, sweet honey puffs, drizzled with honey and sprinkled with cinnamon and walnuts.",
        instructions: "1. Διαλύστε τη μαγιά σε χλιαρό νερό με λίγη ζάχαρη.\n2. Αναμείξτε το αλεύρι με αλάτι και προσθέστε το μείγμα της μαγιάς.\n3. Προσθέστε σταδιακά χλιαρό νερό ανακατεύοντας καλά.\n4. Αφήστε τη ζύμη να φουσκώσει για 1 ώρα σε ζεστό μέρος.\n5. Θερμάνετε λάδι σε βαθύ τηγάνι.\n6. Ρίξτε κουταλιές από το μείγμα στο καυτό λάδι και τηγανίστε μέχρι να χρυσίσουν.\n7. Στραγγίξτε σε απορροφητικό χαρτί.\n8. Περιχύστε με ζεστό μέλι και πασπαλίστε με κανέλα και τριμμένα καρύδια.",
        instructionsEn: "1. Dissolve the yeast in lukewarm water with a little sugar.\n2. Mix the flour with salt and add the yeast mixture.\n3. Gradually add lukewarm water, stirring well.\n4. Let the dough rise for 1 hour in a warm place.\n5. Heat oil in a deep pan.\n6. Drop spoonfuls of the mixture into the hot oil and fry until golden.\n7. Drain on absorbent paper.\n8. Drizzle with warm honey and sprinkle with cinnamon and crushed walnuts."
    },
    {
        id: 50,
        title: "Μπουγάτσα",
        titleEn: "Bougatsa (Greek Custard Pie)",
        ingredients: ["φύλλο κρούστας", "γάλα", "σιμιγδάλι", "αυγά", "ζάχαρη", "βούτυρο", "βανίλια", "κανέλα", "ζάχαρη άχνη"],
        ingredientsEn: ["phyllo dough", "milk", "semolina", "eggs", "sugar", "butter", "vanilla", "cinnamon", "powdered sugar"],
        difficulty: "hard",
        prepTime: 30,
        cookTime: 45,
        calories: 380,
        servings: 12,
        tags: ["γλυκό", "πρωινό", "παραδοσιακό", "φούρνου"],
        tagsEn: ["dessert", "breakfast", "traditional", "baked"],
        description: "Παραδοσιακή ελληνική πίτα με φύλλο κρούστας και κρέμα σιμιγδαλιού, πασπαλισμένη με ζάχαρη άχνη και κανέλα.",
        descriptionEn: "Traditional Greek pie with phyllo dough and semolina cream, sprinkled with powdered sugar and cinnamon.",
        instructions: "1. Ετοιμάστε την κρέμα ζεσταίνοντας το γάλα με τη ζάχαρη.\n2. Προσθέστε το σιμιγδάλι και ανακατέψτε μέχρι να πήξει.\n3. Αποσύρετε από τη φωτιά και προσθέστε βανίλια και τα αυγά χτυπημένα.\n4. Βουτυρώστε ένα ταψί και στρώστε μισά φύλλα κρούστας, βουτυρώνοντας κάθε φύλλο.\n5. Απλώστε την κρέμα και καλύψτε με τα υπόλοιπα φύλλα, βουτυρώνοντας πάλι κάθε φύλλο.\n6. Ψήστε στους 180°C για 45 λεπτά μέχρι να χρυσίσει η μπουγάτσα.\n7. Πασπαλίστε με ζάχαρη άχνη και κανέλα όταν κρυώσει.",
        instructionsEn: "1. Prepare the cream by heating milk with sugar.\n2. Add the semolina and stir until thickened.\n3. Remove from heat and add vanilla and beaten eggs.\n4. Butter a baking dish and lay half of the phyllo sheets, buttering each sheet.\n5. Spread the cream and cover with the remaining phyllo sheets, again buttering each sheet.\n6. Bake at 180°C for 45 minutes until the bougatsa is golden.\n7. Sprinkle with powdered sugar and cinnamon when cooled."
    }
];

// Array of common ingredients for autocompletion (Greek-English pairs)
const commonIngredients = [
    {el: "ντομάτες", en: "tomatoes"},
    {el: "αγγούρι", en: "cucumber"},
    {el: "κρεμμύδι", en: "onion"},
    {el: "φέτα", en: "feta cheese"},
    {el: "ελιές", en: "olives"},
    {el: "πιπεριά", en: "pepper"},
    {el: "ελαιόλαδο", en: "olive oil"},
    {el: "ρίγανη", en: "oregano"},
    {el: "μελιτζάνες", en: "eggplants"},
    {el: "πατάτες", en: "potatoes"},
    {el: "κιμάς", en: "ground meat"},
    {el: "μπεσαμέλ", en: "bechamel sauce"},
    {el: "τυρί", en: "cheese"},
    {el: "ρύζι", en: "rice"},
    {el: "μαϊντανός", en: "parsley"},
    {el: "δυόσμος", en: "mint"},
    {el: "σπανάκι", en: "spinach"},
    {el: "αυγά", en: "eggs"},
    {el: "φύλλο", en: "phyllo dough"},
    {el: "άνηθος", en: "dill"},
    {el: "κριθαράκι", en: "orzo pasta"},
    {el: "σκόρδο", en: "garlic"},
    {el: "κανέλα", en: "cinnamon"},
    {el: "γαρύφαλλο", en: "cloves"},
    {el: "γιαούρτι", en: "yogurt"},
    {el: "ξύδι", en: "vinegar"},
    {el: "λεμόνι", en: "lemon"},
    {el: "μακαρόνια", en: "pasta"},
    {el: "καρότα", en: "carrots"},
    {el: "σέλινο", en: "celery"},
    {el: "φασόλια", en: "beans"},
    {el: "αμπελόφυλλα", en: "grape leaves"},
    {el: "χταπόδι", en: "octopus"},
    {el: "κόκκινο κρασί", en: "red wine"},
    {el: "κύμινο", en: "cumin"},
    {el: "μπακαλιάρος", en: "cod fish"},
    {el: "αλεύρι", en: "flour"},
    {el: "αρνί", en: "lamb"},
    {el: "πατάτα", en: "potato"},
    {el: "γαρίδες", en: "shrimp"},
    {el: "ψωμί", en: "bread"},
    {el: "ταραμάς", en: "fish roe"},
    {el: "μέλι", en: "honey"},
    {el: "καρύδια", en: "walnuts"},
    {el: "λάχανο", en: "cabbage"},
    {el: "χοιρινό", en: "pork"},
    {el: "μαρούλι", en: "lettuce"},
    {el: "φρέσκο κρεμμυδάκι", en: "spring onion"},
    {el: "σπαγγέτι", en: "spaghetti"},
    {el: "ούζο", en: "ouzo"},
    {el: "ψάρι", en: "fish"},
    {el: "μπαρμπούνια", en: "red mullet"},
    {el: "δάφνη", en: "bay leaf"},
    {el: "σταφίδες", en: "raisins"},
    {el: "μαγιά", en: "yeast"},
    {el: "ζάχαρη", en: "sugar"},
    {el: "σησάμι", en: "sesame seeds"},
    {el: "πράσο", en: "leek"},
    {el: "χόρτα", en: "wild greens"},
    {el: "σουπιές", en: "cuttlefish"},
    {el: "βούτυρο", en: "butter"},
    {el: "θυμάρι", en: "thyme"},
    {el: "πιπέρι", en: "pepper"},
    {el: "αλάτι", en: "salt"},
    {el: "μουστάρδα", en: "mustard"},
    {el: "μάραθος", en: "fennel"},
    {el: "πλιγούρι", en: "bulgur"},
    {el: "ζιγούρια", en: "suet"},
    {el: "δαφνόφυλλα", en: "bay leaves"},
    {el: "βούτυρο", en: "butter"},
    {el: "μέλι", en: "honey"},
    {el: "ζάχαρη", en: "sugar"},
    {el: "καρύδια", en: "walnuts"},
    {el: "μαρούλι", en: "lettuce"},
    {el: "λάχανο", en: "cabbage"},
    {el: "σιμιγδάλι", en: "semolina"},
    {el: "βανίλια", en: "vanilla"},
    {el: "αγκινάρες", en: "artichokes"},
    {el: "αρακάς", en: "peas"},
    {el: "μαστίχα", en: "mastic"},
    {el: "μαχλέπι", en: "mahlepi"},
    {el: "σουσάμι", en: "sesame"},
    {el: "αμμωνία", en: "ammonium carbonate"},
    {el: "κουνουπίδι", en: "cauliflower"},
    {el: "κύμινο", en: "cumin"},
    {el: "μπαχάρι", en: "allspice"},
    {el: "φύλλο κρούστας", en: "phyllo pastry"},
    {el: "αμύγδαλα", en: "almonds"},
    {el: "φιστίκια", en: "pistachios"},
    {el: "ζάχαρη άχνη", en: "powdered sugar"},
    {el: "γίγαντες", en: "giant beans"},
    {el: "σουπιές", en: "cuttlefish"},
    {el: "πιπεριά φλωρίνης", en: "red pepper"},
    {el: "τραχανάς", en: "trahanas"},
    {el: "γαρίδες", en: "shrimp"},
    {el: "σπαγγέτι", en: "spaghetti"},
    {el: "ούζο", en: "ouzo"},
    {el: "ψάρι", en: "fish"},
    {el: "μπαρμπούνια", en: "red mullet"},
    {el: "δάφνη", en: "bay leaf"},
    {el: "σταφίδες", en: "raisins"},
    {el: "μαγιά", en: "yeast"},
    {el: "ζάχαρη", en: "sugar"},
    {el: "σησάμι", en: "sesame seeds"},
    {el: "πράσο", en: "leek"},
    {el: "χόρτα", en: "wild greens"},
    {el: "σουπιές", en: "cuttlefish"},
    {el: "βούτυρο", en: "butter"},
    {el: "θυμάρι", en: "thyme"},
    {el: "πιπέρι", en: "pepper"},
    {el: "αλάτι", en: "salt"},
    {el: "μουστάρδα", en: "mustard"},
    {el: "μάραθος", en: "fennel"},
    {el: "πλιγούρι", en: "bulgur"},
    {el: "ζιγούρια", en: "suet"},
    {el: "δαφνόφυλλα", en: "bay leaves"},
    {el: "βούτυρο", en: "butter"},
    {el: "μέλι", en: "honey"},
    {el: "ζάχαρη", en: "sugar"},
    {el: "καρύδια", en: "walnuts"},
    {el: "μαρούλι", en: "lettuce"},
    {el: "λάχανο", en: "cabbage"},
    {el: "σιμιγδάλι", en: "semolina"},
    {el: "βανίλια", en: "vanilla"},
    {el: "αγκινάρες", en: "artichokes"},
    {el: "αρακάς", en: "peas"},
    {el: "μαστίχα", en: "mastic"},
    {el: "μαχλέπι", en: "mahlepi"},
    {el: "σουσάμι", en: "sesame"},
    {el: "αμμωνία", en: "ammonium carbonate"},
    {el: "κουνουπίδι", en: "cauliflower"},
    {el: "μπαχάρι", en: "allspice"},
    {el: "φύλλο κρούστας", en: "phyllo pastry"},
    {el: "αμύγδαλα", en: "almonds"},
    {el: "φιστίκια", en: "pistachios"},
    {el: "ζάχαρη άχνη", en: "powdered sugar"},
    {el: "γίγαντες", en: "giant beans"},
    {el: "πιπεριά φλωρίνης", en: "red pepper"},
    {el: "τραχανάς", en: "trahanas"},
    {el: "μανιτάρια", en: "mushrooms"},
    {el: "μανιτάρια πλευρώτους", en: "oyster mushrooms"},
    {el: "καυτερή πιπεριά", en: "hot pepper"},
    {el: "κρέας", en: "meat"},
    {el: "κοτόπουλο", en: "chicken"},
    {el: "βασιλικός", en: "basil"},
    {el: "ανθότυρο", en: "anthotyro cheese"},
    {el: "κεφαλοτύρι", en: "kefalotyri cheese"},
    {el: "γραβιέρα", en: "graviera cheese"},
    {el: "ρεβίθια", en: "chickpeas"},
    {el: "φακές", en: "lentils"},
    {el: "καρπούζι", en: "watermelon"},
    {el: "πεπόνι", en: "melon"},
    {el: "ροδάκινο", en: "peach"},
    {el: "μήλο", en: "apple"},
    {el: "αχλάδι", en: "pear"},
    {el: "φράουλα", en: "strawberry"},
    {el: "μπανάνα", en: "banana"},
    {el: "πορτοκάλι", en: "orange"},
    {el: "λεμόνι", en: "lemon"},
    {el: "κρασί", en: "wine"},
    {el: "μπύρα", en: "beer"},
    {el: "ξύδι μπαλσάμικο", en: "balsamic vinegar"},
    {el: "γαλοπούλα", en: "turkey"},
    {el: "κεράσι", en: "cherry"},
    {el: "σύκο", en: "fig"},
    {el: "σταφύλι", en: "grape"},
    {el: "δαμάσκηνο", en: "plum"},
    {el: "βερίκοκο", en: "apricot"},
    {el: "χταπόδι", en: "octopus"},
    {el: "καλαμάρι", en: "squid"},
    {el: "μύδια", en: "mussels"},
    {el: "γλυκάνισο", en: "anise"},
    {el: "αστεροειδής γλυκάνισος", en: "star anise"},
    {el: "κόλιανδρος", en: "coriander"},
    {el: "πάπρικα", en: "paprika"},
    {el: "κουρκουμάς", en: "turmeric"},
    {el: "πικραμύγδαλο", en: "bitter almond"},
    {el: "φρυγανιά", en: "breadcrumbs"},
    {el: "ντοματοπελτές", en: "tomato paste"},
    {el: "ηλιόσπορος", en: "sunflower seed"},
    {el: "κολοκύθι", en: "zucchini"},
    {el: "κολοκύθα", en: "pumpkin"},
    {el: "φύκι", en: "seaweed"},
    {el: "ρόδι", en: "pomegranate"},
    {el: "σεβίτσε", en: "ceviche"},
    {el: "κρόκος κοζάνης", en: "saffron"}
];

// Add suggestion functionality
function displayIngredientSuggestions(inputText, language) {
    // Clear any existing suggestions
    const suggestionsContainer = document.getElementById('ingredient-suggestions');
    if (!suggestionsContainer) {
        // Create suggestions container if it doesn't exist
        const container = document.createElement('div');
        container.id = 'ingredient-suggestions';
        container.className = 'suggestions-container';
        const inputContainer = document.querySelector('.ingredients-input-container');
        if (inputContainer) {
            inputContainer.appendChild(container);
        }
    } else {
        suggestionsContainer.innerHTML = '';
    }
    
    if (!document.getElementById('ingredient-suggestions')) {
        console.error("Ingredient suggestions container not found");
        return;
    }
    
    const container = document.getElementById('ingredient-suggestions');
    
    // If input is empty, show more common ingredients as suggestions
    if (!inputText || inputText.trim() === '') {
        // Show more ingredients (20 instead of 5)
        const topIngredients = commonIngredients.slice(0, 20);
        topIngredients.forEach(ing => {
            const value = language === 'el' ? ing.el : ing.en;
            addSuggestionItem(value);
        });
        container.style.display = 'block';
        return;
    }
    
    // Filter ingredients based on input
    const matchingIngredients = commonIngredients.filter(ing => {
        const value = language === 'el' ? ing.el : ing.en;
        return value.toLowerCase().includes(inputText.toLowerCase());
    });
    
    // Limit to 25 results for performance, but still show plenty of options
    const limitedResults = matchingIngredients.slice(0, 25);
    
    if (limitedResults.length > 0) {
        limitedResults.forEach(ing => {
            const value = language === 'el' ? ing.el : ing.en;
            addSuggestionItem(value);
        });
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}

function addSuggestionItem(text) {
    const suggestionsContainer = document.getElementById('ingredient-suggestions');
    if (!suggestionsContainer) return;
    
    const item = document.createElement('div');
    item.className = 'suggestion-item';
    item.textContent = text;
    item.addEventListener('click', function() {
        const input = document.getElementById('ingredient-input');
        if (input) input.value = '';
        
        // Get the addIngredient function from the global scope
        if (typeof window.addIngredient === 'function') {
            window.addIngredient(text);
        } else {
            // Fallback to directly adding to the page
            const selectedIngredientsContainer = document.getElementById('selected-ingredients');
            if (selectedIngredientsContainer) {
                const chip = document.createElement('div');
                chip.className = 'ingredient-chip';
                chip.innerHTML = `
                    <span>${text}</span>
                    <button type="button" class="remove-ingredient" data-ingredient="${text}">
                        <i class="fas fa-times"></i>
                    </button>
                `;
                selectedIngredientsContainer.appendChild(chip);
            }
        }
        
        suggestionsContainer.style.display = 'none';
    });
    suggestionsContainer.appendChild(item);
}

// Search recipes function
function searchRecipes(selectedIngredients, difficultyFilter, timeFilter, language = 'el') {
    // Start with all recipes
    let filteredRecipes = recipes;
    
    // Filter by ingredients if any are selected
    if (selectedIngredients && selectedIngredients.length > 0) {
        filteredRecipes = filteredRecipes.filter(recipe => {
            // Choose the right ingredients array based on language
            const recipeIngredients = language === 'el' ? recipe.ingredients : recipe.ingredientsEn;
            
            return selectedIngredients.some(ingredient => 
                recipeIngredients.some(recipeIngredient => 
                    recipeIngredient.toLowerCase().includes(ingredient.toLowerCase())));
        });
    }
    
    // Filter by difficulty
    if (difficultyFilter && difficultyFilter !== 'all') {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.difficulty === difficultyFilter);
    }
    
    // Filter by time
    if (timeFilter && timeFilter !== 'all') {
        filteredRecipes = filteredRecipes.filter(recipe => {
            const totalTime = recipe.prepTime + recipe.cookTime;
            
            if (timeFilter === 'short') return totalTime < 30;
            if (timeFilter === 'medium') return totalTime >= 30 && totalTime <= 60;
            if (timeFilter === 'long') return totalTime > 60;
            
            return true;
        });
    }
    
    // If no matches found, try a more relaxed search
    if (filteredRecipes.length === 0 && selectedIngredients && selectedIngredients.length > 0) {
        // Calculate similarity scores for each recipe
        const scoredRecipes = recipes.map(recipe => {
            const recipeIngredients = language === 'el' ? recipe.ingredients : recipe.ingredientsEn;
            let matchCount = 0;
            
            // Count matching ingredients
            selectedIngredients.forEach(ingredient => {
                recipeIngredients.forEach(recipeIngredient => {
                    if (recipeIngredient.toLowerCase().includes(ingredient.toLowerCase())) {
                        matchCount++;
                    }
                });
            });
            
            // Calculate similarity score (0-1)
            const score = matchCount / Math.max(1, selectedIngredients.length);
            
            return {
                recipe,
                score
            };
        });
        
        // Sort by score descending
        scoredRecipes.sort((a, b) => b.score - a.score);
        
        // Take top 3 most similar recipes
        filteredRecipes = scoredRecipes.slice(0, 3).map(item => item.recipe);
    }
    
    return {
        recipes: filteredRecipes,
        isRelaxedSearch: filteredRecipes.length > 0 && filteredRecipes.length < recipes.length
    };
}

// Generate HTML for recipe card
function generateRecipeCard(recipe, language = 'el') {
    const title = language === 'el' ? recipe.title : recipe.titleEn;
    const description = language === 'el' ? recipe.description : recipe.descriptionEn;
    const tags = language === 'el' ? recipe.tags : recipe.tagsEn;
    
    // Translations
    const translations = {
        el: {
            difficulty: "Δυσκολία",
            minutes: "λεπτά",
            viewRecipe: "Προβολή Συνταγής",
            easy: "Εύκολο",
            medium: "Μεσαίο", 
            hard: "Δύσκολο"
        },
        en: {
            difficulty: "Difficulty",
            minutes: "minutes",
            viewRecipe: "View Recipe",
            easy: "Easy",
            medium: "Medium",
            hard: "Hard"
        }
    };
    
    // Translate difficulty
    const difficultyText = translations[language][recipe.difficulty];
    
    return `
        <div class="recipe-card" data-id="${recipe.id}">
            <div class="recipe-image">
                <i class="fas fa-utensils"></i>
            </div>
            <div class="recipe-content">
                <h3 class="recipe-title">${title}</h3>
                <div class="recipe-info">
                    <span><i class="fas fa-clock"></i> ${recipe.prepTime + recipe.cookTime} ${translations[language].minutes}</span>
                    <span><i class="fas fa-signal"></i> ${translations[language].difficulty}: ${difficultyText}</span>
                </div>
                <p class="recipe-description">${description}</p>
                <div class="recipe-tags">
                    ${tags.map(tag => `<span class="recipe-tag">${tag}</span>`).join('')}
                </div>
                <button class="recipe-button" onclick="showRecipeDetails(${recipe.id})">${translations[language].viewRecipe}</button>
            </div>
        </div>
    `;
}

// Show recipe details
function showRecipeDetails(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    const currentLanguage = window.currentLanguage || 'el';
    const title = currentLanguage === 'el' ? recipe.title : recipe.titleEn;
    const ingredients = currentLanguage === 'el' ? recipe.ingredients : recipe.ingredientsEn;
    const instructions = currentLanguage === 'el' ? recipe.instructions : recipe.instructionsEn;
    
    // Get difficulty text based on language
    let difficultyText;
    if (currentLanguage === 'el') {
        switch(recipe.difficulty) {
            case 'easy': difficultyText = 'Εύκολο'; break;
            case 'medium': difficultyText = 'Μεσαίο'; break;
            case 'hard': difficultyText = 'Δύσκολο'; break;
            default: difficultyText = recipe.difficulty;
        }
    } else {
        switch(recipe.difficulty) {
            case 'easy': difficultyText = 'Easy'; break;
            case 'medium': difficultyText = 'Medium'; break;
            case 'hard': difficultyText = 'Hard'; break;
            default: difficultyText = recipe.difficulty;
        }
    }
    
    // Set modal title and details
    const modalTitle = document.getElementById('modalTitle');
    if (modalTitle) modalTitle.textContent = title;
    
    // Set time information
    const modalTime = document.getElementById('modalTime');
    if (modalTime) {
        const minutesText = currentLanguage === 'el' ? 'λεπτά' : 'minutes';
        modalTime.textContent = `${recipe.prepTime + recipe.cookTime} ${minutesText}`;
    }
    
    // Set difficulty level
    const modalDifficulty = document.getElementById('modalDifficulty');
    if (modalDifficulty) modalDifficulty.textContent = difficultyText;
    
    // Set servings
    const modalServings = document.getElementById('modalServings');
    const servingsText = currentLanguage === 'el' ? 'Μερίδες' : 'Servings';
    if (modalServings) modalServings.textContent = `${servingsText}: ${recipe.servings}`;
    
    // Set calories
    const modalCalories = document.getElementById('modalCalories');
    const caloriesText = currentLanguage === 'el' ? 'Θερμίδες' : 'Calories';
    if (modalCalories) modalCalories.textContent = `${caloriesText}: ${recipe.calories}`;
    
    // Populate the ingredients list
    const ingredientsList = document.getElementById('modalIngredients');
    if (ingredientsList) {
        ingredientsList.innerHTML = '';
        ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });
    }
    
    // Populate the instructions
    const instructionsElement = document.getElementById('modalInstructions');
    if (instructionsElement) instructionsElement.textContent = instructions;
    
    // Show the modal
    const modal = document.getElementById('recipeModal');
    if (modal) modal.style.display = 'flex';
    
    console.log('Recipe details displayed for:', title);
}

// Get ingredient translation
function getIngredientTranslation(ingredient, targetLanguage) {
    const found = commonIngredients.find(item => 
        item.el.toLowerCase() === ingredient.toLowerCase() || 
        item.en.toLowerCase() === ingredient.toLowerCase()
    );
    
    if (found) {
        return targetLanguage === 'el' ? found.el : found.en;
    }
    
    return ingredient; // Return original if no translation found
}

// Export functions for use in HTML
window.searchRecipes = searchRecipes;
window.generateRecipeCard = generateRecipeCard;
window.getIngredientTranslation = getIngredientTranslation;
window.recipes = recipes;
window.commonIngredients = commonIngredients;
window.displayIngredientSuggestions = displayIngredientSuggestions;
window.addSuggestionItem = addSuggestionItem;
window.showRecipeDetails = showRecipeDetails; 