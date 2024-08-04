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
    singleLocation: {
        path: `/location/1`,
        controller: 'singleLocationController' 
    }
};
