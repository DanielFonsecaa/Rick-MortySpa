export default {
    home: {
        path: '/',
        controller: 'homeController'
    },
    currentPath: {
        path: '',
        controller: ''
    },
    episode: {
        path: '/episode',
        controller: 'episodeController'
    },
    character: {
        path: '/character',
        controller: 'characterController'
    },
    location: {
        path: '/location',
        controller: 'locationController'
    },
    singleEpisode: {
        path: `/e/\[0-9]+`,
        controller: "singleEpisodeController"
    },
    singleLocation: {
        path: `/l/\[0-9]+`,
        controller: "singleLocationController"
    },
    singleCharacter: {
        path: `/c/\[0-9]+`,
        controller: "singleCharacterController"
    }
};
