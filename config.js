// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Em",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💘",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['♡', '🤍', '❤️‍🔥', '💗', '💓'],  // Heart emojis
        bears: ['🦁', '🐢']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "would you love me if i was a snail?🐌",                                    // First interaction
            yesBtn: "yes",                                             // Text for "Yes" button
            noBtn: "no",                                               // Text for "No" button
            secretAnswer: "i'd love you and i like you duhh <4"           // Secret hover message
        },
        second: {
            text: "on a scale of 3 to 35 how much do you love me?",                          // For the love meter
            startText: "this much🤔",                                   // Text before the percentage
            nextBtn: "next"                                         // Text for the next button
        },
        third: {
            text: "will you please be my Valentine this year? 💐", // The big question!
            yesBtn: "yes!",                                             // Text for "Yes" button
            noBtn: "...no"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much?? i love you that much too hehe 🥰🚀",  // Shows when they go past 5000%
        high: "🥹",              // Shows when they go past 1000%
        normal: "And beyond! :P"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "first love day with my lovely valentine<4444",
        message: "that was a close one, phew! i'll see u soon, 4 dayssss mwah",
        emojis: "💘😋🙂‍↕️😽🥰🥹❣️"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dpyebxu3q/video/upload/v1770104930/love_you_anyway_-_the_mari%CC%81as_lyrics_vdesjr.mp3", // Music streaming URL
        startText: "play that shiz!💃🏻🕺🏿",        // Button text to start music
        stopText: "-- hollup 🫣",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 