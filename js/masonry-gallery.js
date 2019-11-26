const masonry = new Macy({
    container: '.masonry-gallery',
    mobileFirst: true,
    columns: 1,
    breakAt: {
        500: 2,
        786: 3,
        1200: 4,
    },
    margin: {
        x: 10,
        y: 10,
    }
})
