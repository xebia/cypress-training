/// <reference types="Cypress" />
describe('exercise 4: Isolation', () => {
    it.only('Replace basic response data', () => {
        // !! Important! intercept BEFORE visit

        // !! with the delay, without the assert, the test passes. so the fixture is served AFTER the delay
        cy.intercept('GET', 'http://localhost:8081/songs', {
            fixture: 'one_song.json',
            statusCode: 200,
            delay: 10000,
        }).as('one_song')
        cy.visit('/')
        cy.wait('@one_song')
        cy.contains('Bangerang')
    })
    it('tests retreiving albums', () => {
        let rnd = Math.random().toString(36).substr(2, 5)
        cy.intercept('GET', 'http://localhost:8081/songs', {
            statusCode: 200,
            body: [
                {
                    id: 1,
                    title: `${rnd}`,
                    artist: 'Nirvana',
                    genre: 'Alternative Rock',
                    album: 'Nevermind',
                    albumImageUrl:
                        'https://is3-ssl.mzstatic.com/image/thumb/Features/d0/cc/62/dj.nanioukp.jpg/268x0w.jpg',
                    youtubeId: 'm-ofL_3EZyE',
                    lyrics: '',
                    tab: '',
                    createdAt: '2018-02-13T12:56:24.432Z',
                    updatedAt: '2018-02-13T12:56:24.432Z',
                },
                {
                    id: 2,
                    title: 'In the blood',
                    artist: 'John Mayer',
                    genre: 'Acoustic Rock',
                    album: 'The Search for Everything',
                    albumImageUrl:
                        'https://images.genius.com/a64eea0c361b6b02f4b7423adf80bb6e.1000x992x1.jpg',
                    youtubeId: 'ob-jS7bqYgI',
                    lyrics: '',
                    tab: '',
                    createdAt: '2018-02-13T12:56:24.432Z',
                    updatedAt: '2018-02-13T12:56:24.432Z',
                },
                {
                    id: 3,
                    title: 'Drop it',
                    artist: '3 Steps Ahead',
                    genre: 'Hardcore',
                    album: 'Drop it',
                    albumImageUrl:
                        'https://img.discogs.com/H7zIgOQXI5e7yXB5---U5n1kOXc=/fit-in/303x301/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-17264-1133778698.jpeg.jpg',
                    youtubeId: 'KB09paeV_aE',
                    lyrics: '',
                    tab: '',
                    createdAt: '2018-02-13T12:56:24.432Z',
                    updatedAt: '2018-02-13T12:56:24.432Z',
                },
                {
                    id: 4,
                    title: "I Ain't Goin' Out Like That",
                    artist: 'Cypress Hill',
                    genre: 'Rap',
                    album: 'Black Sunday',
                    albumImageUrl:
                        'https://upload.wikimedia.org/wikipedia/en/b/ba/Cypress_Hill-Black_Sunday.jpg',
                    youtubeId: 'q7p-ihYOG5s',
                    lyrics: '',
                    tab: '',
                    createdAt: '2018-02-13T12:56:24.432Z',
                    updatedAt: '2018-02-13T12:56:24.432Z',
                },
                {
                    id: 5,
                    title: 'Way of Life',
                    artist: 'Cypress Spring',
                    genre: 'Southern Rock',
                    album: 'Denim XXL',
                    albumImageUrl:
                        'http://averagejoesent.com/wp-content/uploads/sites/4/2017/08/CS_DenimXXL_WOLdeluxe-FINAL-COVER.jpg',
                    youtubeId: 'ZcOYhHDTO28',
                    lyrics: '',
                    tab: '',
                    createdAt: '2018-02-13T12:56:24.432Z',
                    updatedAt: '2018-02-13T12:56:24.432Z',
                },
            ],
        }).as('getSongs')
        cy.visit('/')
        cy.contains(`${rnd}`)
    })
})
