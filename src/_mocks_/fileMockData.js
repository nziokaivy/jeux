const mockData = {
successResponse: {
    profileInformation: {
      data: {
        firstName: 'John',
        lastName: 'Doe',
        img: 'dummy.image',
      },
    },
  },
  errorResponse: {
    error: {
      response: {
        data: {
          info: 'No profile',
        },
      },
    },
  },
  AllCreatorsMainState: {
    allCreators: {
      creators: null,
      creatorsError: null,
    },
  },
  AllCreatorsProps: {
    creators: {
      data: {
        name: 'user test',
      },
    },
  },
  creatorDetailsMainState: {
    creatorDetails: {
      creatorDetails: null,
      creatorDetailsError: null,
    },
  },
  creatorDetailsProps: {
    creatorDetails: {
        description: 'ason Graves is a games composer',
        games_count: 52,
        id: 88,
        image_background: "https://media.rawg.io/media/games/81b/81b138691f027ed1f8720758daa0d895.jpg",
        name: "Jason Graves",
      creatorDetailsErrors: null,
      fetchCreatorDetails: jest.fn(),
      match: {
        params: {
          id: '88',
        }
      },
    }
  },

allGamesProps : {
  fetchAllGames: jest.fn(),
  games : {
    results: {
      background_image: "https://media.rawg.io/media/games/81b/81b138691f027ed1f8720758daa0d895.jpg",
      id: 75,
      released:"2013-09-17",
      rating:4.48,
      genres: [
        {
          name: 'Action',
          id: 21,
        }
      ]

    }
  }
},
allGamesMainState: {
  allGames: {
    games: null,
    gamesError: null
  }
},

gamesDetailsMainState: {
  gameDetails: {
    gameDetails: null,
    gamesDetailsError: null
  }
},
gameDetailsProps:{
  fetchGameDetails: jest.fn(),
  gamesDetails: {
    background_image: "https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg",
    description: "<p>Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. <br />\nSimultaneous storytelling from three unique perspectives: <br />\nFollow Michael, ex-criminal living his life of leisure away from the...",
    name: "Grand Theft Auto V",
    rating:4.48,
    genres: [
      {
        id: 34,

      }
    ]
},
},

allStoresMainState: {
  allStores: {
    stores: null,
    storesError: null
  }
},

storesDetailsMainState: {
  storeDetails: {
    storeDetails: null,
    storeDetailsError: null
  }
},

allTagsMainState: {
  allTags: {
   tags: null,
   tagsError: null
  }
},

tagDetailsMainState: {
  tagDetails: {
   tagsDetails: null,
   tagsDetailsError: null
  }
},

}
export default mockData;
