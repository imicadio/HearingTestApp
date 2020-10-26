export const tone = {
    // 1 - dźwiek kwalifikujący słuch
    1: {
        id: "measurement",
        link: "sound=250hz",
        count: 0,
        play: true
    },
    // 250, 500, {...}, 8000 - częstotliwość dźwięków. Od najniższej do najwyższej  
    2: {
        id: 250,
        link: "sound=500hz",
        count: 0,
        play: true,
        sound: "http://imicadio.com/HearingTestApp/assets/audio/250Hz/250_80.ogg"        
    },
    3: { 
        id: 500,
        link: "sound=1000hz",
        count: 0,
        play: true,
        sound: "http://imicadio.com/HearingTestApp/assets/audio/500Hz/500_80.ogg"
    },
    4: {
        id: 1000,
        link: "sound=2000hz",
        count: 0,
        play: true,
        sound: "http://imicadio.com/HearingTestApp/assets/audio/1000Hz/1000_80.ogg"
    },
    5: {
        id: 2000,
        link: "sound=4000hz",
        count: 0,
        play: true,
        sound: "http://imicadio.com/HearingTestApp/assets/audio/2000Hz/2000_80.ogg"
    },
    6: {
        id: 4000,
        link: "sound=8000hz",
        count: 0,
        play: true,
        sound: "http://imicadio.com/HearingTestApp/assets/audio/4000Hz/4000_80.ogg"
    },
    7: {
        id: 8000,
        link: 'question=1',
        count: 0,
        play: true,
        sound: "http://imicadio.com/HearingTestApp/assets/audio/8000Hz/8000_80.ogg"
    },
    question1: {
        question: "Czy masz problem ze zrozumieniem mowy w hałasie np. na ulicy?",
        link: 'question=2',
    },
    question2: {
        question: "Czy masz problem z usłyszeniem dźwięków ptaków?",
        link: 'question=3',
    },
    question3: {
        question: "Czy masz problem ze zrozumieniem mowy w hałasie?",
        link: 'question=4',
    },
    question4: {
        question: "Czy masz problem ze zrozumieniem mowy podczas szeptu?",
        link: 'Summary',
    }
};

export const forms = {
    home: {
        value: '',
        valid: false
    },
    test: {
        value: '',
        valid: false
    },
    1: {
        value: '',
        valid: false,
        count: null
    },
    2: {
        value: '',
        valid: false,
        count: null
    },
    3: {
        value: '',
        valid: false,
        count: null
    },
    4: {
        value: '',
        valid: false,
        count: null
    },
    5: {
        value: '',
        valid: false,
        count: null
    },
    6: {
        value: '',
        valid: false,
        count: null
    },
    Question1: {
        value: '',
        valid: false,
        count: null
    },
    Question2: {
        value: '',
        valid: false,
        count: null
    },
    Question3: {
        value: '',
        valid: false,
        count: null
    },
    Question4: {
        value: '',
        valid: false,
        count: null
    }
};