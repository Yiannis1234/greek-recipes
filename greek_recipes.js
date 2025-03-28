// Greek recipe database
const recipes = [
    {
        name: "Μουσακάς",
        ingredients: ["μελιτζάνες", "κιμάς", "πατάτες", "κρεμμύδι", "σκόρδο", "ντομάτες", "καναέλι", "γλυκοκίτρινο", "τυρί", "μπεσαμέλ"],
        instructions: [
            "Ψήστε τις μελιτζάνες και τις πατάτες",
            "Κάντε τη σάλτσα με κιμά",
            "Φτιάξτε τη μπεσαμέλ",
            "Στρώστε τα στρώματα",
            "Ψήστε στον φούρνο"
        ],
        nutrition: "Θερμίδες: 450, Πρωτεΐνες: 25g, Υδατάνθρακες: 35g, Λίπος: 25g",
        categories: ["vegetarian", "gluten-free"],
        prepTime: "40 λεπτά",
        cookTime: "60 λεπτά",
        difficulty: "Μέτρια"
    },
    {
        name: "Γιουβέτσι",
        ingredients: ["αρνίσιο κρέας", "ορζο", "ντομάτες", "κρεμμύδι", "σκόρδο", "καρυκεύματα", "τυρί"],
        instructions: [
            "Ψήστε το κρέας",
            "Προσθέστε το ορζο",
            "Καβουρδίστε τα λαχανικά",
            "Ψήστε στον φούρνο"
        ],
        nutrition: "Θερμίδες: 380, Πρωτεΐνες: 30g, Υδατάνθρακες: 40g, Λίπος: 15g",
        categories: ["gluten-free"],
        prepTime: "30 λεπτά",
        cookTime: "90 λεπτά",
        difficulty: "Μέτρια"
    },
    {
        name: "Σπανακόρυζο",
        ingredients: ["σπανάκι", "ρύζι", "κρεμμύδι", "σκόρδο", "λάδι", "λάιμο", "αλάτι"],
        instructions: [
            "Καβουρδίστε το κρεμμύδι",
            "Προσθέστε το σπανάκι",
            "Βράστε το ρύζι",
            "Ανακατέψτε όλα τα συστατικά"
        ],
        nutrition: "Θερμίδες: 280, Πρωτεΐνες: 8g, Υδατάνθρακες: 45g, Λίπος: 8g",
        categories: ["vegetarian", "vegan", "gluten-free"],
        prepTime: "20 λεπτά",
        cookTime: "30 λεπτά",
        difficulty: "Εύκολη"
    },
    {
        name: "Γιγαντες",
        ingredients: ["φασόλια", "ντομάτες", "κρεμμύδι", "σκόρδο", "λάδι", "μαϊντανό", "αλάτι"],
        instructions: [
            "Μουλιάστε τα φασόλια",
            "Βράστε τα φασόλια",
            "Φτιάξτε τη σάλτσα",
            "Ψήστε στον φούρνο"
        ],
        nutrition: "Θερμίδες: 320, Πρωτεΐνες: 12g, Υδατάνθρακες: 50g, Λίπος: 10g",
        categories: ["vegetarian", "vegan", "gluten-free"],
        prepTime: "120 λεπτά (με το μούλιασμα)",
        cookTime: "60 λεπτά",
        difficulty: "Μέτρια"
    },
    {
        name: "Παστίτσιο",
        ingredients: ["μακαρόνια", "κιμάς", "ντομάτες", "κρεμμύδι", "σκόρδο", "μπεσαμέλ", "τυρί"],
        instructions: [
            "Βράστε τα μακαρόνια",
            "Φτιάξτε τη σάλτσα με κιμά",
            "Φτιάξτε τη μπεσαμέλ",
            "Στρώστε τα στρώματα",
            "Ψήστε στον φούρνο"
        ],
        nutrition: "Θερμίδες: 420, Πρωτεΐνες: 22g, Υδατάνθρακες: 45g, Λίπος: 20g",
        categories: ["vegetarian"],
        prepTime: "40 λεπτά",
        cookTime: "45 λεπτά",
        difficulty: "Μέτρια"
    },
    {
        name: "Χωριάτικη Σαλάτα",
        ingredients: ["ντομάτες", "αγγούρι", "πιπεριά", "κρεμμύδι", "ελιές", "φέτα", "λάδι", "ρίγανη"],
        instructions: [
            "Κόψτε τα λαχανικά σε κύβους",
            "Προσθέστε τη φέτα και τις ελιές",
            "Περιχύστε με ελαιόλαδο",
            "Πασπαλίστε με ρίγανη"
        ],
        nutrition: "Θερμίδες: 210, Πρωτεΐνες: 7g, Υδατάνθρακες: 15g, Λίπος: 15g",
        categories: ["vegetarian", "gluten-free", "low-carb"],
        prepTime: "15 λεπτά",
        cookTime: "0 λεπτά",
        difficulty: "Εύκολη"
    },
    {
        name: "Γεμιστά",
        ingredients: ["ντομάτες", "πιπεριές", "ρύζι", "κρεμμύδι", "μαϊντανός", "λάδι", "μπαχαρικά"],
        instructions: [
            "Αδειάστε τις ντομάτες και τις πιπεριές",
            "Ετοιμάστε το μείγμα ρυζιού",
            "Γεμίστε τα λαχανικά",
            "Ψήστε στον φούρνο"
        ],
        nutrition: "Θερμίδες: 280, Πρωτεΐνες: 5g, Υδατάνθρακες: 35g, Λίπος: 12g",
        categories: ["vegetarian", "vegan", "gluten-free"],
        prepTime: "35 λεπτά",
        cookTime: "60 λεπτά",
        difficulty: "Μέτρια"
    },
    {
        name: "Γιαούρτι με Μέλι",
        ingredients: ["γιαούρτι", "μέλι", "καρύδια", "κανέλα"],
        instructions: [
            "Βάλτε το γιαούρτι σε ένα μπολ",
            "Προσθέστε το μέλι",
            "Πασπαλίστε με τα καρύδια και την κανέλα"
        ],
        nutrition: "Θερμίδες: 200, Πρωτεΐνες: 12g, Υδατάνθρακες: 20g, Λίπος: 8g",
        categories: ["vegetarian", "gluten-free", "low-carb"],
        prepTime: "5 λεπτά",
        cookTime: "0 λεπτά",
        difficulty: "Εύκολη"
    },
    {
        name: "Σουτζουκάκια",
        ingredients: ["κιμάς", "σκόρδο", "κύμινο", "κανέλα", "ντομάτες", "κρεμμύδι", "μαϊντανός", "κρασί"],
        instructions: [
            "Ανακατέψτε τον κιμά με τα μπαχαρικά",
            "Φτιάξτε τα σουτζουκάκια",
            "Τηγανίστε τα ελαφρά",
            "Προσθέστε τη σάλτσα ντομάτας",
            "Σιγοβράστε μέχρι να είναι έτοιμα"
        ],
        nutrition: "Θερμίδες: 350, Πρωτεΐνες: 25g, Υδατάνθρακες: 15g, Λίπος: 20g",
        categories: ["gluten-free", "low-carb"],
        prepTime: "25 λεπτά",
        cookTime: "40 λεπτά",
        difficulty: "Μέτρια"
    },
    {
        name: "Σπανακόπιτα",
        ingredients: ["σπανάκι", "φέτα", "κρεμμύδι", "άνηθο", "αυγά", "φύλλο", "ελαιόλαδο"],
        instructions: [
            "Σοτάρετε το σπανάκι με το κρεμμύδι",
            "Ανακατέψτε με τη φέτα και τα αυγά",
            "Απλώστε τα φύλλα στο ταψί",
            "Προσθέστε τη γέμιση",
            "Ψήστε στον φούρνο μέχρι να ροδίσει"
        ],
        nutrition: "Θερμίδες: 320, Πρωτεΐνες: 12g, Υδατάνθρακες: 30g, Λίπος: 18g",
        categories: ["vegetarian"],
        prepTime: "30 λεπτά",
        cookTime: "45 λεπτά",
        difficulty: "Μέτρια"
    },
    {
        name: "Ντολμαδάκια",
        ingredients: ["αμπελόφυλλα", "ρύζι", "κρεμμύδι", "άνηθος", "μαϊντανός", "δυόσμος", "λεμόνι", "ελαιόλαδο"],
        instructions: [
            "Ετοιμάστε τη γέμιση με ρύζι και μυρωδικά",
            "Ζεματίστε τα αμπελόφυλλα",
            "Τυλίξτε τη γέμιση στα φύλλα",
            "Βράστε σε χαμηλή φωτιά",
            "Σερβίρετε με αυγολέμονο"
        ],
        nutrition: "Θερμίδες: 240, Πρωτεΐνες: 5g, Υδατάνθρακες: 40g, Λίπος: 8g",
        categories: ["vegetarian", "vegan", "gluten-free"],
        prepTime: "45 λεπτά",
        cookTime: "40 λεπτά",
        difficulty: "Δύσκολη"
    },
    {
        name: "Μπακαλιάρος Σκορδαλιά",
        ingredients: ["μπακαλιάρος", "αλεύρι", "σκόρδο", "πατάτες", "ελαιόλαδο", "ξύδι", "λεμόνι"],
        instructions: [
            "Ξαλμυρίστε τον μπακαλιάρο",
            "Παναρίστε και τηγανίστε",
            "Φτιάξτε τη σκορδαλιά με πατάτες και σκόρδο",
            "Σερβίρετε με λεμόνι"
        ],
        nutrition: "Θερμίδες: 400, Πρωτεΐνες: 30g, Υδατάνθρακες: 25g, Λίπος: 22g",
        categories: ["low-carb"],
        prepTime: "120 λεπτά (με το ξαλμύρισμα)",
        cookTime: "20 λεπτά",
        difficulty: "Μέτρια"
    },
    {
        name: "Μπουγάτσα",
        ingredients: ["φύλλο κρούστας", "κρέμα", "γάλα", "σιμιγδάλι", "αυγά", "βούτυρο", "ζάχαρη", "κανέλα"],
        instructions: [
            "Φτιάξτε την κρέμα με γάλα και σιμιγδάλι",
            "Απλώστε τα φύλλα βουτηρωμένα",
            "Προσθέστε την κρέμα ανάμεσα στα φύλλα",
            "Ψήστε μέχρι να χρυσίσει",
            "Πασπαλίστε με ζάχαρη και κανέλα"
        ],
        nutrition: "Θερμίδες: 350, Πρωτεΐνες: 8g, Υδατάνθρακες: 50g, Λίπος: 12g",
        categories: ["vegetarian"],
        prepTime: "30 λεπτά",
        cookTime: "35 λεπτά",
        difficulty: "Μέτρια"
    },
    {
        name: "Φακές Σούπα",
        ingredients: ["φακές", "κρεμμύδι", "καρότο", "σέλινο", "σκόρδο", "ντομάτα", "δάφνη", "ξύδι", "ελαιόλαδο"],
        instructions: [
            "Σοτάρετε τα λαχανικά",
            "Προσθέστε τις φακές και νερό",
            "Σιγοβράστε μέχρι να μαλακώσουν",
            "Προσθέστε ξύδι και ελαιόλαδο"
        ],
        nutrition: "Θερμίδες: 280, Πρωτεΐνες: 15g, Υδατάνθρακες: 45g, Λίπος: 5g",
        categories: ["vegetarian", "vegan", "gluten-free", "low-carb"],
        prepTime: "10 λεπτά",
        cookTime: "45 λεπτά",
        difficulty: "Εύκολη"
    },
    {
        name: "Τζατζίκι",
        ingredients: ["γιαούρτι", "αγγούρι", "σκόρδο", "ελαιόλαδο", "ξύδι", "άνηθος"],
        instructions: [
            "Τρίψτε το αγγούρι και στραγγίξτε το",
            "Ανακατέψτε με το γιαούρτι",
            "Προσθέστε σκόρδο, λάδι και μυρωδικά",
            "Αφήστε το να δέσει στο ψυγείο"
        ],
        nutrition: "Θερμίδες: 150, Πρωτεΐνες: 10g, Υδατάνθρακες: 8g, Λίπος: 10g",
        categories: ["vegetarian", "gluten-free", "low-carb"],
        prepTime: "15 λεπτά",
        cookTime: "0 λεπτά",
        difficulty: "Εύκολη"
    },
    {
        name: "Κεφτεδάκια",
        ingredients: ["κιμάς", "κρεμμύδι", "ψωμί", "μαϊντανός", "δυόσμος", "αυγό", "μπαχαρικά", "ελαιόλαδο"],
        instructions: [
            "Μουλιάστε το ψωμί και στύψτε το",
            "Ανακατέψτε όλα τα υλικά",
            "Πλάστε τους κεφτέδες",
            "Τηγανίστε σε καυτό λάδι"
        ],
        nutrition: "Θερμίδες: 320, Πρωτεΐνες: 22g, Υδατάνθρακες: 15g, Λίπος: 20g",
        categories: ["low-carb"],
        prepTime: "20 λεπτά",
        cookTime: "15 λεπτά",
        difficulty: "Εύκολη"
    },
    {
        name: "Κλέφτικο",
        ingredients: ["αρνίσιο κρέας", "πατάτες", "κρεμμύδι", "σκόρδο", "ντομάτες", "λεμόνι", "ρίγανη", "δενδρολίβανο", "ελαιόλαδο"],
        instructions: [
            "Κόψτε το κρέας σε μερίδες",
            "Ανακατέψτε τα υλικά με τα μπαχαρικά",
            "Τυλίξτε σε λαδόκολλα και αλουμινόχαρτο",
            "Ψήστε αργά στο φούρνο για 3-4 ώρες"
        ],
        nutrition: "Θερμίδες: 420, Πρωτεΐνες: 35g, Υδατάνθρακες: 20g, Λίπος: 25g",
        categories: ["gluten-free", "low-carb"],
        prepTime: "30 λεπτά",
        cookTime: "240 λεπτά",
        difficulty: "Μέτρια"
    },
    {
        name: "Χταπόδι με Κρασί",
        ingredients: ["χταπόδι", "κόκκινο κρασί", "κρεμμύδι", "σκόρδο", "δαφνόφυλλα", "μπαχάρι", "κανέλα", "ελαιόλαδο"],
        instructions: [
            "Καθαρίστε το χταπόδι",
            "Βράστε το ελαφρά και κόψτε σε κομμάτια",
            "Σοτάρετε με τα μυρωδικά",
            "Προσθέστε κρασί και σιγοβράστε μέχρι να μαλακώσει"
        ],
        nutrition: "Θερμίδες: 210, Πρωτεΐνες: 28g, Υδατάνθρακες: 8g, Λίπος: 5g",
        categories: ["gluten-free", "low-carb"],
        prepTime: "25 λεπτά",
        cookTime: "60 λεπτά",
        difficulty: "Μέτρια"
    },
    {
        name: "Ρεβιθάδα Φούρνου",
        ingredients: ["ρεβίθια", "κρεμμύδι", "σκόρδο", "ντομάτα", "ελαιόλαδο", "λεμόνι", "ρίγανη", "δάφνη"],
        instructions: [
            "Μουλιάστε τα ρεβίθια για 12 ώρες",
            "Σοτάρετε κρεμμύδι και σκόρδο",
            "Προσθέστε τα ρεβίθια, ντομάτα και μυρωδικά",
            "Ψήστε στο φούρνο με νερό μέχρι να μαλακώσουν"
        ],
        nutrition: "Θερμίδες: 280, Πρωτεΐνες: 15g, Υδατάνθρακες: 40g, Λίπος: 8g",
        categories: ["vegetarian", "vegan", "gluten-free"],
        prepTime: "30 λεπτά (+ 12 ώρες μούλιασμα)",
        cookTime: "90 λεπτά",
        difficulty: "Εύκολη"
    },
    {
        name: "Γαλακτομπούρεκο",
        ingredients: ["φύλλο κρούστας", "γάλα", "σιμιγδάλι", "αυγά", "ζάχαρη", "βανίλια", "λεμόνι", "κανέλα"],
        instructions: [
            "Φτιάξτε κρέμα με γάλα, σιμιγδάλι και αυγά",
            "Απλώστε φύλλα και γεμίστε με την κρέμα",
            "Ψήστε μέχρι να χρυσίσει",
            "Περιχύστε με σιρόπι ζάχαρης"
        ],
        nutrition: "Θερμίδες: 380, Πρωτεΐνες: 10g, Υδατάνθρακες: 60g, Λίπος: 12g",
        categories: ["vegetarian"],
        prepTime: "40 λεπτά",
        cookTime: "45 λεπτά",
        difficulty: "Μέτρια"
    },
    {
        name: "Μπριάμ",
        ingredients: ["πατάτες", "κολοκύθια", "μελιτζάνες", "ντομάτες", "πιπεριές", "κρεμμύδι", "σκόρδο", "ελαιόλαδο", "μαϊντανό"],
        instructions: [
            "Κόψτε όλα τα λαχανικά σε λεπτές φέτες",
            "Τοποθετήστε σε στρώσεις σε ταψί",
            "Περιχύστε με λάδι και προσθέστε τα μυρωδικά",
            "Ψήστε στο φούρνο μέχρι να μαλακώσουν"
        ],
        nutrition: "Θερμίδες: 220, Πρωτεΐνες: 5g, Υδατάνθρακες: 30g, Λίπος: 10g",
        categories: ["vegetarian", "vegan", "gluten-free", "low-carb"],
        prepTime: "25 λεπτά",
        cookTime: "60 λεπτά",
        difficulty: "Εύκολη"
    },
    {
        name: "Σαρικόπιτα Κρήτης",
        ingredients: ["φύλλο χωριάτικο", "μυζήθρα", "φέτα", "αυγά", "μέλι", "κανέλα", "σουσάμι"],
        instructions: [
            "Ανακατέψτε τα τυριά με αυγά",
            "Απλώστε τα φύλλα σε στρώσεις με λάδι",
            "Προσθέστε τη γέμιση και τυλίξτε σε ρολό",
            "Ψήστε και περιχύστε με μέλι και κανέλα"
        ],
        nutrition: "Θερμίδες: 350, Πρωτεΐνες: 15g, Υδατάνθρακες: 35g, Λίπος: 18g",
        categories: ["vegetarian"],
        prepTime: "30 λεπτά",
        cookTime: "40 λεπτά",
        difficulty: "Μέτρια"
    },
    {
        name: "Παστελι",
        ingredients: ["σουσάμι", "μέλι", "λεμόνι", "αμύγδαλα"],
        instructions: [
            "Καβουρδίστε το σουσάμι",
            "Ζεστάνετε το μέλι",
            "Ανακατέψτε με το σουσάμι και τα αμύγδαλα",
            "Απλώστε σε λαδωμένη επιφάνεια και αφήστε να κρυώσει"
        ],
        nutrition: "Θερμίδες: 280, Πρωτεΐνες: 8g, Υδατάνθρακες: 25g, Λίπος: 18g",
        categories: ["vegetarian", "gluten-free"],
        prepTime: "15 λεπτά",
        cookTime: "10 λεπτά",
        difficulty: "Εύκολη"
    },
    {
        name: "Αρνάκι με Αγκινάρες",
        ingredients: ["αρνίσιο κρέας", "αγκινάρες", "κρεμμύδι", "άνηθος", "λεμόνι", "αυγά", "αλεύρι", "ελαιόλαδο"],
        instructions: [
            "Κόψτε το αρνί σε κομμάτια και τσιγαρίστε",
            "Προσθέστε κρεμμύδι και αγκινάρες",
            "Προσθέστε νερό και σιγοβράστε",
            "Ετοιμάστε αυγολέμονο και προσθέστε το στο τέλος"
        ],
        nutrition: "Θερμίδες: 380, Πρωτεΐνες: 30g, Υδατάνθρακες: 15g, Λίπος: 22g",
        categories: ["gluten-free", "low-carb"],
        prepTime: "30 λεπτά",
        cookTime: "60 λεπτά",
        difficulty: "Μέτρια"
    },
    {
        name: "Σαλάτα Παντζάρια",
        ingredients: ["παντζάρια", "γιαούρτι", "σκόρδο", "καρύδια", "ξύδι", "ελαιόλαδο", "άνηθος"],
        instructions: [
            "Βράστε τα παντζάρια μέχρι να μαλακώσουν",
            "Κόψτε σε κύβους όταν κρυώσουν",
            "Ανακατέψτε το γιαούρτι με σκόρδο και λάδι",
            "Ρίξτε το ντρέσινγκ πάνω στα παντζάρια και προσθέστε καρύδια"
        ],
        nutrition: "Θερμίδες: 180, Πρωτεΐνες: 7g, Υδατάνθρακες: 15g, Λίπος: 12g",
        categories: ["vegetarian", "gluten-free", "low-carb"],
        prepTime: "15 λεπτά",
        cookTime: "40 λεπτά",
        difficulty: "Εύκολη"
    }
];

// All common Greek ingredients for auto-complete and suggestions
const commonIngredients = [
    "μελιτζάνες", "κιμάς", "πατάτες", "κρεμμύδι", "σκόρδο", "ντομάτες", 
    "τυρί", "φέτα", "μπεσαμέλ", "ελιές", "ρύζι", "φασόλια", "σπανάκι",
    "λάδι", "λεμόνι", "αρνίσιο κρέας", "μακαρόνια", "γιαούρτι", "μέλι",
    "κανέλα", "αγγούρι", "πιπεριές", "μαϊντανός", "ρίγανη", "καρύδια",
    "φύλλο", "άνηθος", "δυόσμος", "κύμινο", "αυγά", "αμπελόφυλλα",
    "μπακαλιάρος", "καρότο", "σέλινο", "φακές", "ξύδι", "αλεύρι", 
    "ζάχαρη", "βούτυρο", "σιμιγδάλι", "ορζο", "κρασί", "ψωμί",
    "χταπόδι", "δενδρολίβανο", "παντζάρια", "δαφνόφυλλα", "ρεβίθια",
    "κολοκύθια", "αγκινάρες", "μυζήθρα", "σουσάμι", "αμύγδαλα",
    "μπαχάρι", "βανίλια", "φύλλο χωριάτικο", "φύλλο κρούστας"
];

let selectedIngredients = [];
let dietaryPreferences = [];
let difficultyFilter = "all";
let timeFilter = "all";
let sortingOption = "default";

// Initialize the app by setting up event listeners
function initApp() {
    // Add keypress event to allow adding ingredients with Enter key
    document.getElementById('ingredient-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addIngredient();
            e.preventDefault();
        }
    });
    
    // Set up autocomplete for ingredients
    updateIngredientsDatalist();
    
    // Add subtle parallax effect to welcome images
    document.querySelectorAll('.welcome-image').forEach(img => {
        img.addEventListener('mousemove', e => {
            const { left, top, width, height } = img.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            
            img.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg) scale(1.05)`;
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
        });
    });
}

// Call initApp when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApp);

function startRecipeGenerator() {
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('input-screen').classList.add('active');
    playTransitionSound();
    
    // Add smooth scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateIngredientsDatalist() {
    const datalist = document.getElementById('ingredient-suggestions');
    datalist.innerHTML = '';
    
    // Add only ingredients that haven't been selected yet
    const availableIngredients = commonIngredients.filter(
        ingredient => !selectedIngredients.includes(ingredient)
    );
    
    availableIngredients.forEach(ingredient => {
        const option = document.createElement('option');
        option.value = ingredient;
        datalist.appendChild(option);
    });
}

function addIngredient() {
    const input = document.getElementById('ingredient-input');
    const ingredient = input.value.trim().toLowerCase();
    
    if (ingredient && !selectedIngredients.includes(ingredient)) {
        selectedIngredients.push(ingredient);
        updateSelectedIngredients();
        input.value = '';
        updateIngredientsDatalist();
        playSelectionSound();
        
        // Show a brief highlight on the ingredient section
        const section = document.querySelector('.ingredients-section');
        section.classList.add('highlight');
        setTimeout(() => {
            section.classList.remove('highlight');
        }, 300);
    }
}

function quickAddIngredient(ingredient) {
    if (!selectedIngredients.includes(ingredient)) {
        selectedIngredients.push(ingredient);
        updateSelectedIngredients();
        updateIngredientsDatalist();
        playSelectionSound();
        
        // Add animation to the selected chip
        const chips = document.querySelectorAll('.ingredient-chip');
        const selectedChip = Array.from(chips).find(chip => 
            chip.textContent.trim().toLowerCase().includes(ingredient.toLowerCase())
        );
        
        if (selectedChip) {
            selectedChip.classList.add('selected-flash');
            setTimeout(() => {
                selectedChip.classList.remove('selected-flash');
            }, 500);
        }
    }
}

function removeIngredient(ingredient) {
    selectedIngredients = selectedIngredients.filter(i => i !== ingredient);
    updateSelectedIngredients();
    updateIngredientsDatalist();
    playSelectionSound();
}

function updateSelectedIngredients() {
    const container = document.getElementById('selected-ingredients');
    container.innerHTML = '';
    
    if (selectedIngredients.length === 0) {
        container.innerHTML = '<p class="empty-message"><i class="fas fa-info-circle"></i> Δεν έχετε επιλέξει συστατικά ακόμη</p>';
        return;
    }
    
    selectedIngredients.forEach((ingredient, index) => {
        const tag = document.createElement('div');
        tag.className = 'ingredient-tag';
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.innerHTML = `
            <i class="fas fa-utensil-spoon"></i> ${ingredient}
            <button onclick="removeIngredient('${ingredient}')"><i class="fas fa-times"></i></button>
        `;
        container.appendChild(tag);
        
        // Add fade-in animation
        setTimeout(() => {
            tag.style.opacity = '1';
        }, 10);
    });
}

function getSelectedPreferences() {
    const checkboxes = document.querySelectorAll('.preference-option input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(checkbox => checkbox.value);
}

function setDifficultyFilter(difficulty) {
    difficultyFilter = difficulty;
    
    // Update active class
    document.querySelectorAll('.difficulty-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (difficulty !== 'all') {
        document.querySelector(`.difficulty-filter.${difficulty}`).classList.add('active');
    }
}

function setTimeFilter(time) {
    timeFilter = time;
    
    // Update active class
    document.querySelectorAll('.time-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (time !== 'all') {
        document.querySelector(`.time-filter[data-time="${time}"]`).classList.add('active');
    }
}

function setSortingOption(option) {
    sortingOption = option;
    
    // Update active class
    document.querySelectorAll('.sort-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.querySelector(`.sort-button[data-sort="${option}"]`).classList.add('active');
    
    // If we're on the results screen, re-sort the displayed recipes
    if (document.getElementById('results-screen').classList.contains('active')) {
        const matchingRecipes = findMatchingRecipes();
        displayRecipes(matchingRecipes);
    }
}

function generateRecipes() {
    dietaryPreferences = getSelectedPreferences();
    const matchingRecipes = findMatchingRecipes();
    displayRecipes(matchingRecipes);
    playCompletionSound();
}

function findMatchingRecipes() {
    let filteredRecipes = recipes.filter(recipe => {
        // Check if recipe matches dietary preferences
        const matchesPreferences = dietaryPreferences.length === 0 || 
            dietaryPreferences.every(pref => recipe.categories.includes(pref));
        
        // Check if recipe contains at least one selected ingredient
        const matchesIngredients = selectedIngredients.length === 0 || 
            selectedIngredients.some(ingredient => 
                recipe.ingredients.some(i => i.includes(ingredient))
            );
        
        // Check difficulty filter
        const matchesDifficulty = difficultyFilter === 'all' || 
            (difficultyFilter === 'easy' && recipe.difficulty === 'Εύκολη') ||
            (difficultyFilter === 'medium' && recipe.difficulty === 'Μέτρια') ||
            (difficultyFilter === 'hard' && recipe.difficulty === 'Δύσκολη');
        
        // Check time filter
        let matchesTime = true;
        if (timeFilter !== 'all') {
            const cookTimeMinutes = parseInt(recipe.cookTime) || 0;
            
            if (timeFilter === 'quick' && cookTimeMinutes > 30) matchesTime = false;
            if (timeFilter === 'medium' && (cookTimeMinutes <= 30 || cookTimeMinutes > 60)) matchesTime = false;
            if (timeFilter === 'long' && cookTimeMinutes <= 60) matchesTime = false;
        }
        
        return matchesPreferences && matchesIngredients && matchesDifficulty && matchesTime;
    });
    
    // Sort recipes based on sorting option
    if (sortingOption === 'alphabetical') {
        filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortingOption === 'prep-time') {
        filteredRecipes.sort((a, b) => {
            const aTime = parseInt(a.prepTime) || 0;
            const bTime = parseInt(b.prepTime) || 0;
            return aTime - bTime;
        });
    } else if (sortingOption === 'cook-time') {
        filteredRecipes.sort((a, b) => {
            const aTime = parseInt(a.cookTime) || 0;
            const bTime = parseInt(b.cookTime) || 0;
            return aTime - bTime;
        });
    } else if (sortingOption === 'difficulty') {
        const difficultyOrder = { 'Εύκολη': 1, 'Μέτρια': 2, 'Δύσκολη': 3 };
        filteredRecipes.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
    } else if (sortingOption === 'calories') {
        filteredRecipes.sort((a, b) => {
            const aCalories = parseInt(a.nutrition.match(/\d+/)[0]) || 0;
            const bCalories = parseInt(b.nutrition.match(/\d+/)[0]) || 0;
            return aCalories - bCalories;
        });
    }
    
    return filteredRecipes;
}

function displayRecipes(matchingRecipes) {
    document.getElementById('input-screen').classList.remove('active');
    document.getElementById('results-screen').classList.add('active');
    
    const container = document.getElementById('recipes-container');
    container.innerHTML = '';
    
    if (matchingRecipes.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>Δεν βρέθηκαν συνταγές με τα συστατικά που επιλέξατε.</p>
                <p>Δοκιμάστε να προσθέσετε περισσότερα συστατικά ή να αλλάξετε τις προτιμήσεις σας.</p>
            </div>
        `;
        return;
    }
    
    matchingRecipes.forEach((recipe, index) => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        const difficultyClass = recipe.difficulty === 'Εύκολη' ? 'easy' :
                             recipe.difficulty === 'Μέτρια' ? 'medium' : 'hard';
        
        // Get category icons
        const categoryIcons = getCategoryIcons(recipe.categories);
        
        card.innerHTML = `
            <div class="recipe-header-text">
                <h3>${recipe.name}</h3>
                <div class="recipe-categories">
                    ${categoryIcons}
                </div>
            </div>
            <div class="recipe-meta">
                <div class="meta-item" title="Χρόνος προετοιμασίας">
                    <i class="fas fa-clock"></i> ${recipe.prepTime || '30 λεπτά'}
                </div>
                <div class="meta-item" title="Χρόνος μαγειρέματος">
                    <i class="fas fa-fire"></i> ${recipe.cookTime || '45 λεπτά'}
                </div>
                <div class="meta-item difficulty ${difficultyClass}" title="Δυσκολία">
                    <i class="fas fa-chart-line"></i> ${recipe.difficulty || 'Μέτρια'}
                </div>
            </div>
            <div class="ingredients">
                <strong><i class="fas fa-list"></i> Συστατικά:</strong> ${recipe.ingredients.join(', ')}
            </div>
            <div class="instructions">
                <strong><i class="fas fa-tasks"></i> Οδηγίες:</strong>
                <ol>
                    ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
            <div class="nutrition">
                <strong><i class="fas fa-heartbeat"></i> Διατροφική Αξία:</strong> ${recipe.nutrition}
            </div>
        `;
        
        container.appendChild(card);
        
        // Add card hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
        
        // Stagger animation for recipe cards
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * 150));
    });
    
    // Scroll to top of results
    setTimeout(() => {
        const resultsTop = document.getElementById('results-screen').offsetTop;
        window.scrollTo({ top: resultsTop, behavior: 'smooth' });
    }, 300);
}

function getCategoryIcons(categories) {
    const iconMap = {
        'vegetarian': '<span class="category-icon vegetarian" title="Χορτοφαγική"><i class="fas fa-seedling"></i></span>',
        'vegan': '<span class="category-icon vegan" title="Νηστίσιμη"><i class="fas fa-leaf"></i></span>',
        'gluten-free': '<span class="category-icon gluten-free" title="Χωρίς γλουτένη"><i class="fas fa-bread-slice"></i></span>',
        'low-carb': '<span class="category-icon low-carb" title="Χαμηλή σε υδατάνθρακες"><i class="fas fa-weight"></i></span>'
    };
    
    return categories.map(category => iconMap[category] || '').join('');
}

function restartGenerator() {
    selectedIngredients = [];
    dietaryPreferences = [];
    document.getElementById('selected-ingredients').innerHTML = '';
    document.querySelectorAll('.preference-option input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    document.getElementById('results-screen').classList.remove('active');
    document.getElementById('welcome-screen').classList.add('active');
    updateIngredientsDatalist();
    playTransitionSound();
    
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Sound effects
function playTransitionSound() {
    const audio = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU');
    audio.play().catch(() => {});
}

function playSelectionSound() {
    const audio = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU');
    audio.play().catch(() => {});
}

function playCompletionSound() {
    const audio = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU');
    audio.play().catch(() => {});
} 