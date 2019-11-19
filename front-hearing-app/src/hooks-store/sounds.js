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
        count: ''
    },
    2: {
        value: '',
        valid: false,
        count: ''
    },
    3: {
        value: '',
        valid: false,
        count: ''
    },
    4: {
        value: '',
        valid: false,
        count: ''
    },
    5: {
        value: '',
        valid: false,
        count: ''
    },
    6: {
        value: '',
        valid: false,
        count: ''
    },
    Question1: {
        value: '',
        valid: false,
        question: ''
    },
    Question2: {
        value: '',
        valid: false,
        question: ''
    },
    Question3: {
        value: '',
        valid: false,
        question: ''
    },
    Question4: {
        value: '',
        valid: false,
        question: ''
    }
};


export const sounds = {
    test: {
        id: "test",
        link: 1,
        count: 0,
        play: true
    },
    1: {
        id: 250,
        link: 2,
        count: 0,
        play: true,
        sound: "http://imicadio.com/HearingTestApp/assets/audio/250Hz/250_80.ogg"        
    },
    2: {
        id: 500,
        link: 3,
        count: 0,
        play: true,
        sound: "http://imicadio.com/HearingTestApp/assets/audio/500Hz/500_80.ogg"
    },
    3: {
        id: 1000,
        link: 4,
        count: 0,
        play: true,
        sound: "http://imicadio.com/HearingTestApp/assets/audio/1000Hz/1000_80.ogg"
    },
    4: {
        id: 2000,
        link: 5,
        count: 0,
        play: true,
        sound: "http://imicadio.com/HearingTestApp/assets/audio/2000Hz/2000_80.ogg"
    },
    5: {
        id: 4000,
        link: 6,
        count: 0,
        play: true,
        sound: "http://imicadio.com/HearingTestApp/assets/audio/4000Hz/4000_80.ogg"
    },
    6: {
        id: 8000,
        link: 'Question1',
        count: 0,
        play: true,
        sound: "http://imicadio.com/HearingTestApp/assets/audio/8000Hz/8000_80.ogg"
    },
    Question1: {
        question: "Czy masz problem ze zrozumieniem mowy w hałasie np. na ulicy?",
        link: 'Question2',
    },
    Question2: {
        question: "Czy masz problem z usłyszeniem dźwięków ptaków?",
        link: 'Question3',
    },
    Question3: {
        question: "Czy masz problem ze zrozumieniem mowy w hałasie?",
        link: 'Question4',
    },
    Question4: {
        question: "Czy masz problem ze zrozumieniem mowy podczas szeptu?",
        link: '',
    }
};
