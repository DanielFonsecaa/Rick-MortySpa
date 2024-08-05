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
        path: `/e/id`,
        controller: "singleEpisodeController"
    }
};
