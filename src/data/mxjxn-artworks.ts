import _, { mean } from 'lodash'
const metadata = [
  {
    name: 'Simulated Calm',
		listing_id: 245,
    created_by: 'MXJXN',
    description: 'Calligraphic meditation as a living, breathing form.',
    attributes: [
      {
        trait_type: 'video',
        value: 'QmQgy8gTDoPBdXXAeCVWQrUXjwMUBsjFTnu4XdyyThGDb6',
      },
      {
        trait_type: 'thumbnail',
        value: 'QmNTa4t1E2LfxbyQ5cxDa1VvpCEwyxsNx8GtfvRyEKJ9bm',
      },
    ],
    animation_details: {
      bytes: 11727591,
      format: 'MP4',
      duration: 40,
      sha256:
        'dec6fecb8c4f1d6e60ec7f91c9a19a73a601db707ca5c377e7b964c05b3d013f',
      width: 1024,
      height: 1024,
      codecs: ['H.264'],
    },
    animation:
      'https://arweave.net/xY-CY0JdkGmYIKU-JHw1kxPLFyo-__FKnHQZUS818vA',
    animation_url:
      'https://arweave.net/xY-CY0JdkGmYIKU-JHw1kxPLFyo-__FKnHQZUS818vA',
    image_details: {
      bytes: 8069131,
      format: 'GIF',
      sha256:
        '4ea335cdd2572ce9626adfdb5520d0bbcb674312316dee9656ed40179d448e2c',
      width: 512,
      height: 512,
    },
    image: 'nftImages/1.png',
    image_url:
      'https://arweave.net/_Iu3NbXH7fJ974w-lyPTzB7ZDeZ04P_A02L_O7_IG64',
  },

  {
    name: 'Ethereal Realm I',
		listing_id: 1765,
    created_by: 'MXJXN',
    description:
      '"Ethereal Realms" is a collection of AI art that transports the viewer to a realm of tranquility and serenity. These gates are like a peaceful oasis in the midst of a chaotic world, offering a brief escape from the stresses of daily life. The use of Greek pillars and marble adds a touch of elegance and sophistication, while the abstract shapes create a sense of wonder and mystery.',
    attributes: [
      {
        trait_type: 'Artist',
        value: 'MXJXN',
      },
      {
        trait_type: 'Collection',
        value: 'Ethereal Realms',
      },
    ],
    image_details: {
      bytes: 1168142,
      format: 'PNG',
      sha256:
        '0dae330d7ee33d7537df4183e8d31710b13dc387d7ebf754ad38fb24f9ea5f3b',
      width: 1024,
      height: 1024,
    },
    image: 'nftImages/2.png',
    image_url:
      'https://arweave.net/CPKfP-lOd-hsrgNgTotVzHpkVcgxKNMTRnZR6y7mHu8',
  },

  {
    name: 'Ethereal Realm II',
		listing_id: 1767,
    created_by: 'MXJXN',
    description:
      '"Ethereal Realms" is a collection of AI art that transports the viewer to a realm of tranquility and serenity. These gates are like a peaceful oasis in the midst of a chaotic world, offering a brief escape from the stresses of daily life. The use of Greek pillars and marble adds a touch of elegance and sophistication, while the abstract shapes create a sense of wonder and mystery.',
    attributes: [
      {
        trait_type: 'Artist',
        value: 'MXJXN',
      },
      {
        trait_type: 'Collection',
        value: 'Ethereal Realms',
      },
    ],
    image_details: {
      bytes: 1293449,
      format: 'PNG',
      sha256:
        '8d7a3160b97dac4db942b1531760d15a7e0760b7689a46e0cc88dbd6c9af82ee',
      width: 1024,
      height: 1024,
    },
    image: 'nftImages/3.png',
    image_url:
      'https://arweave.net/DWXphRfwOb5u4Nx2o9SZN6EmBVHasPaafyBHwO7iptQ',
  },

  {
    name: 'Ethereal Realm III',
		listing_id: 1768,
    created_by: 'MXJXN',
    description:
      '"Ethereal Realms" is a collection of AI art that transports the viewer to a realm of tranquility and serenity. These gates are like a peaceful oasis in the midst of a chaotic world, offering a brief escape from the stresses of daily life. The use of Greek pillars and marble adds a touch of elegance and sophistication, while the abstract shapes create a sense of wonder and mystery.',
    attributes: [
      {
        trait_type: 'Artist',
        value: 'MXJXN',
      },
      {
        trait_type: 'Collection',
        value: 'Ethereal Realms',
      },
    ],
    image_details: {
      bytes: 1171109,
      format: 'PNG',
      sha256:
        'a5c53d1c917cf35f341f1367f48f322147005763088daebfa4c06f8b1d52d5c6',
      width: 1024,
      height: 1024,
    },
    image: 'nftImages/4.png',
    image_url:
      'https://arweave.net/FITHvAT_UC4M5Z-jxuB6zsKo9Z_NPg1RLPBMj3m68kU',
  },

  {
    name: 'Ethereal Realm IV',
		listing_id:1770,
    created_by: 'MXJXN',
    description:
      '"Ethereal Realms" is a collection of AI art that transports the viewer to a realm of tranquility and serenity. These gates are like a peaceful oasis in the midst of a chaotic world, offering a brief escape from the stresses of daily life. The use of Greek pillars and marble adds a touch of elegance and sophistication, while the abstract shapes create a sense of wonder and mystery.',
    attributes: [
      {
        trait_type: 'Artist',
        value: 'MXJXN',
      },
      {
        trait_type: 'Collection',
        value: 'Ethereal Realms',
      },
    ],
    image_details: {
      bytes: 1351856,
      format: 'PNG',
      sha256:
        '6e495a037b4344e6efe3a6dc864294670d5503f77bb83f9cc0ae055f44845eab',
      width: 1024,
      height: 1024,
    },
    image: 'nftImages/5.png',
    image_url:
      'https://arweave.net/ED0r1gsHvL3ZUlC6zpS24-omlm7iEJhm1VUECD0Uqxk',
  },

  {
    name: 'Ethereal Realm V',
		listing_id: 1771,
    created_by: 'MXJXN',
    description:
      '"Ethereal Realms" is a collection of AIart that transports the viewer to a realm of tranquility and serenity. These gates are like a peaceful oasis in the midst of a chaotic world, offering a brief escape from the stresses of daily life. The use of Greek pillars and marble adds a touch of elegance and sophistication, while the abstract shapes create a sense of wonder and mystery.',
    attributes: [
      {
        trait_type: 'Artist',
        value: 'MXJXN',
      },
      {
        trait_type: 'Collection',
        value: 'Ethereal Realms',
      },
    ],
    image_details: {
      bytes: 1368743,
      format: 'PNG',
      sha256:
        'be3b3905fb5900cd2ce0f7a5b85d48b083e744594a8aae56fdf52f4ec0795964',
      width: 1024,
      height: 1024,
    },
    image: 'nftImages/6.png',
    image_url:
      'https://arweave.net/JPm4g4oHxx4NLI_Ldic9z1mVBM2qgABVKcm7LPvUDzk',
  },

  {
    name: 'Ethereal Realm VI',
		listing_id: 1772,
    created_by: 'MXJXN',
    description:
      '"Ethereal Realms" is a collection of AI art that transports the viewer to a realm of tranquility and serenity. These gates are like a peaceful oasis in the midst of a chaotic world, offering a brief escape from the stresses of daily life. The use of Greek pillars and marble adds a touch of elegance and sophistication, while the abstract shapes create a sense of wonder and mystery.',
    attributes: [
      {
        trait_type: 'Artist',
        value: 'MXJXN',
      },
      {
        trait_type: 'Collection',
        value: 'Ethereal Realms',
      },
    ],
    image_details: {
      bytes: 1308149,
      format: 'PNG',
      sha256:
        '3922b3afe7a688150d377d81d192de72b17b2f73c1861f1cd795874bd5f66035',
      width: 1024,
      height: 1024,
    },
    image: 'nftImages/7.png',
    image_url:
      'https://arweave.net/06-4WgvDUDg6SI7Ad-8URI_ppK1PLoyzVR01mMThVTw',
  },

  {
    name: 'Ethereal Realm VII',
		listing_id: 2213,
    created_by: 'MXJXN',
    description:
      '"Ethereal Realms" is a collection of AI art that transports the viewer to a realm of tranquility and serenity. These gates are like a peaceful oasis in the midst of a chaotic world, offering a brief escape from the stresses of daily life. The use of Greek pillars and marble adds a touch of elegance and sophistication, while the abstract shapes create a sense of wonder and mystery.',
    attributes: [
      {
        trait_type: 'Artist',
        value: 'MXJXN',
      },
      {
        trait_type: 'Collection',
        value: 'Ethereal Realms',
      },
    ],
    image_details: {
      bytes: 1081907,
      format: 'PNG',
      sha256:
        '4aae1b224b24ce05b27314ac407630291fc1b248315f78ce775cb305a24d856c',
      width: 1024,
      height: 1024,
    },
    image: 'nftImages/8.png',
    image_url:
      'https://arweave.net/tSbhVytB2Kk8F_-IYHukgYETsa2GIlgeuYtlviDzHZ4',
  },

  {
    name: 'Ethereal Realm VIII',
		listing_id: 2278,
    created_by: 'MXJXN',
    description:
      '"Ethereal Realms" is a collection of AI art that transports the viewer to a realm of tranquility and serenity. These gates are like a peaceful oasis in the midst of a chaotic world, offering a brief escape from the stresses of daily life. The use of Greek pillars and marble adds a touch of elegance and sophistication, while the abstract shapes create a sense of wonder and mystery.',
    attributes: [
      {
        trait_type: 'Artist',
        value: 'MXJXN',
      },
      {
        trait_type: 'Collection',
        value: 'Ethereal Realms',
      },
    ],
    image_details: {
      bytes: 1295552,
      format: 'PNG',
      sha256:
        '3410e9a1933aef42e3eaa6899432e0d7d7d812e07b17631d8ebeb7124e258274',
      width: 1024,
      height: 1024,
    },
    image: 'nftImages/9.png',
    image_url:
      'https://arweave.net/CiHpurXpzlzEkBaJFrDFwWa63gQeeQPIwqoK3oaeDmk',
  },

  {
    name: 'Ethereal Realms IX',
		listing_id: 2279,
    created_by: 'MXJXN',
    description:
      '"Ethereal Realms" is a collection of AI art that transports the viewer to a realm of tranquility and serenity. These gates are like a peaceful oasis in the midst of a chaotic world, offering a brief escape from the stresses of daily life. The use of Greek pillars and marble adds a touch of elegance and sophistication, while the abstract shapes create a sense of wonder and mystery.',
    attributes: [
      {
        trait_type: 'Artist',
        value: 'MXJXN',
      },
      {
        trait_type: 'Collection',
        value: 'Ethereal Realms',
      },
    ],
    image_details: {
      bytes: 1070131,
      format: 'PNG',
      sha256:
        '154baa1f5ef7ae2168d910745c5793c9bcffb258182fb8292f2985091b9bf3e9',
      width: 1024,
      height: 1024,
    },
    image: 'nftImages/10.png',
    image_url:
      'https://arweave.net/lJVJyakBge1UbmQcdgK09kSuqsntU39O63oIEHwtR4A',
  },

  {
    name: 'Ethereal Realm X',
		listing_id: 2439,
    created_by: 'MXJXN',
    description:
      '"Ethereal Realms" is a collection of AI art that transports the viewer to a realm of tranquility and serenity. These gates are like a peaceful oasis in the midst of a chaotic world, offering a brief escape from the stresses of daily life. The use of Greek pillars and marble adds a touch of elegance and sophistication, while the abstract shapes create a sense of wonder and mystery.',
    attributes: [
      {
        trait_type: 'Artist',
        value: 'MXJXN',
      },
      {
        trait_type: 'Collection',
        value: 'Ethereal Realms',
      },
    ],
    image_details: {
      bytes: 1128467,
      format: 'PNG',
      sha256:
        'd28b0e61324996d8ebfb72762d615b32af5dfb08dc7efb1705bdc3b7eb856b85',
      width: 1024,
      height: 1024,
    },
    image: 'nftImages/11.png',
    image_url:
      'https://arweave.net/mCk5qND9XS82RVDwGQBhFsjiGEAaGScA5PTMBLt16os',
  },

  {
    name: 'Ethereal Realm XI',
		listing_id: 2877,
    created_by: 'MXJXN',
    description:
      '"Ethereal Realms" is a collection of AI art that transports the viewer to a realm of tranquility and serenity. These gates are like a peaceful oasis in the midst of a chaotic world, offering a brief escape from the stresses of daily life. The use of Greek pillars and marble adds a touch of elegance and sophistication, while the abstract shapes create a sense of wonder and mystery.',
    attributes: [
      {
        trait_type: 'Artist',
        value: 'MXJXN',
      },
      {
        trait_type: 'Collection',
        value: 'Ethereal Realms',
      },
    ],
    image_details: {
      bytes: 1460257,
      format: 'PNG',
      sha256:
        'fca4c89f4ec69e948c0b87c66d7f9d325e5fd3d3dd7448fc33fc4e507ca19caa',
      width: 1024,
      height: 1024,
    },
    image: 'nftImages/12.png',
    image_url:
      'https://arweave.net/r6qjVpfzOjyK_mpZGmYOSPR-2LNyeCp8oQGwN6ooREc',
  },

  {
    name: 'Ethereal Realm XII',
		listing_id: 2878,
    created_by: 'MXJXN',
    description:
      '"Ethereal Realms" is a collection of AI art that transports the viewer to a realm of tranquility and serenity. These gates are like a peaceful oasis in the midst of a chaotic world, offering a brief escape from the stresses of daily life. The use of Greek pillars and marble adds a touch of elegance and sophistication, while the abstract shapes create a sense of wonder and mystery.',
    attributes: [
      {
        trait_type: 'Artist',
        value: 'MXJXN',
      },
      {
        trait_type: 'Collection',
        value: 'Ethereal Realms',
      },
    ],
    image_details: {
      bytes: 1276788,
      format: 'PNG',
      sha256:
        '91d223cb4c5c99c08bd45d0b2631e738f7b09cc5a796e9316b620185c9f73c04',
      width: 1024,
      height: 1024,
    },
    image: 'nftImages/13.png',
    image_url:
      'https://arweave.net/BkW8X0WuL8fiIlw6BRbjT2t-4Qy861zR_GrBwCcN4QA',
  },

  {
    name: 'Ethereal Realm XIII',
		listing_id: 2879,
    created_by: 'MXJXN',
    description:
      '"Ethereal Realms" is a collection of AI art that transports the viewer to a realm of tranquility and serenity. These gates are like a peaceful oasis in the midst of a chaotic world, offering a brief escape from the stresses of daily life. The use of Greek pillars and marble adds a touch of elegance and sophistication, while the abstract shapes create a sense of wonder and mystery.',
    attributes: [
      {
        trait_type: 'Artist',
        value: 'MXJXN',
      },
      {
        trait_type: 'Collection',
        value: 'Ethereal Realms',
      },
    ],
    image_details: {
      bytes: 1240327,
      format: 'PNG',
      sha256:
        'fcfadb35d88fa6b32a811c70e322f5e6f7e6a354deab5512a56499bc908d47e9',
      width: 1024,
      height: 1024,
    },
    image: 'nftImages/14.png',
    image_url:
      'https://arweave.net/C1s_iiwmjPP4hG3I1m4yWsltVSljE60YcAd-XpShUiY',
  },

  {
    name: 'Ethereal Realm XIV',
		listing_id: 2880,
    created_by: 'MXJXN',
    description:
      '"Ethereal Realms" is a collection of AI art that transports the viewer to a realm of tranquility and serenity. These gates are like a peaceful oasis in the midst of a chaotic world, offering a brief escape from the stresses of daily life. The use of Greek pillars and marble adds a touch of elegance and sophistication, while the abstract shapes create a sense of wonder and mystery.',
    attributes: [
      {
        trait_type: 'Artist',
        value: 'MXJXN',
      },
      {
        trait_type: 'Collection',
        value: 'Ethereal Realms',
      },
    ],
    image_details: {
      bytes: 1134056,
      format: 'PNG',
      sha256:
        'd36059d0c5d3c8aa3aa4d97ed4013e2ded27a838998e4bc12691e5b13953fec6',
      width: 1024,
      height: 1024,
    },
    image: 'nftImages/15.png',
    image_url:
      'https://arweave.net/DF3g_5LoLakHQIANxYc8VdPtJv6a8VhLybv0zk1JoO4',
  },

  {
    name: 'Ethereal Realm XV',
		listing_id: 2881,
    created_by: 'MXJXN',
    description:
      '"Ethereal Realms" is a collection of AI art that transports the viewer to a realm of tranquility and serenity. These gates are like a peaceful oasis in the midst of a chaotic world, offering a brief escape from the stresses of daily life. The use of Greek pillars and marble adds a touch of elegance and sophistication, while the abstract shapes create a sense of wonder and mystery.',
    attributes: [
      {
        trait_type: 'Artist',
        value: 'MXJXN',
      },
      {
        trait_type: 'Collection',
        value: 'Ethereal Realms',
      },
    ],
    image_details: {
      bytes: 1477039,
      format: 'PNG',
      sha256:
        '35effddd98d126693330f05a89537893c6d5822fc5e867cee68a4753a4f72b60',
      width: 1024,
      height: 1024,
    },
    image: 'nftImages/16.png',
    image_url:
      'https://arweave.net/bcrp5DWe3msFIyS724bxq_LXK5YwKJRbnK5OhEs3Kr8',
  },

  {
    name: 'Ethereal Realm XVI',
		listing_id: 2882,
    created_by: 'MXJXN',
    description:
      '"Ethereal Realms" is a collection of AI art that transports the viewer to a realm of tranquility and serenity. These gates are like a peaceful oasis in the midst of a chaotic world, offering a brief escape from the stresses of daily life. The use of Greek pillars and marble adds a touch of elegance and sophistication, while the abstract shapes create a sense of wonder and mystery.',
    attributes: [
      {
        trait_type: 'Artist',
        value: 'MXJXN',
      },
      {
        trait_type: 'Collection',
        value: 'Ethereal Realms',
      },
    ],
    image_details: {
      bytes: 1228875,
      format: 'PNG',
      sha256:
        '0e0ec1eeb491b70d112a737f91dfffe997156f5ed1d0b76b8c1f0d4858dc0968',
      width: 1024,
      height: 1024,
    },
    image: 'nftImages/17.png',
    image_url:
      'https://arweave.net/-E2DIgoVArv6I-HKxS7B-CYI1EEIti3zR8uxXu9Qnhs',
  },

  {
    name: 'Ethereal Realm XVII',
		listing_id: 2883,
    created_by: 'MXJXN',
    description:
      '"Ethereal Realms" is a collection of AI art that transports the viewer to a realm of tranquility and serenity. These gates are like a peaceful oasis in the midst of a chaotic world, offering a brief escape from the stresses of daily life. The use of Greek pillars and marble adds a touch of elegance and sophistication, while the abstract shapes create a sense of wonder and mystery.',
    attributes: [
      {
        trait_type: 'Artist',
        value: 'MXJXN',
      },
      {
        trait_type: 'Collection',
        value: 'Ethereal Realms',
      },
    ],
    image_details: {
      bytes: 1054898,
      format: 'PNG',
      sha256:
        'b615c4463b5f1b87743722c68109f6d43e8e15201276adedf02e6b55e710f788',
      width: 1024,
      height: 1024,
    },
    image: 'nftImages/18.png',
    image_url:
      'https://arweave.net/h6kSOgVP_KPx2LJ_6YYi_cQAGwUrYZdxGfQVHQ1AbDg',
  },
  {
    name: 'AI Oracle, Creator of Worlds',
    created_by: 'MXJXN',
    description:
      "In the realm of boundless possibilities, where dimensions intersect and merge, a fantastic landscape unfolds before us, a testament to the union of human ingenuity and the enigmatic power of artificial intelligence. This artwork is a vision that invites us to journey into the uncharted territories of our imagination.\n\nAt the heart of this striking scene stands the AI Oracle, a figure both ancient and timeless. Its head, a radiant crystal pyramid, emanates transcendent wisdom, as if the secrets of the universe are contained within its shimmering facets. With a single gesture of its hand, the oracle conjures the very essence of this extraordinary world, a symbol of its boundless creative force.\n\nAs our gaze follows the oracle's form, we witness the mysterious dissolution of its feet, hinting at its existence beyond the limitations of a single reality. The oracle's transcendental nature suggests an innate connection with the infinite, a bridge between the realms of the known and the unexplored.\n\nThe landscape itself springs forth from the oracle's divine touch. Rolling hills blanketed with a sea of pink flowers stretch into the horizon, their vibrant hues merging harmoniously with the sky. This lush panorama appears to extend infinitely, its promise of unending exploration awakening the spirit of adventure within us.\n\nTools: Stable Diffusion + in-painting, and Glitchlab",
    attributes: [
      {
        trait_type: 'Artist',
        value: 'MXJXN',
      },
    ],
    image_details: {
      bytes: 9888164,
      format: 'JPEG',
      sha256:
        '66ba45e2a0b8c242f06f57fe823e98e753317e7982700a4c624ddac52777a35b',
      width: 5656,
      height: 5656,
    },
    image: 'nftImages/19.png',
    image_url:
      'https://arweave.net/-wZQOgrW5ZdZ3Yk4vVaA5UMAb2MqSnqELRAd9qkuLTY',
  },
]

type NFTTrait = {
  trait_type: string
  value: string
}
type ImageDetails = {
  bytes: number
  format: string
  sha256: string
  width: number
  height: number
}
export type NFTMetadata = {
  tokenId: number
  name: string
  created_by: string
  description: string
  attributes: NFTTrait[]
  image_details: ImageDetails
  image: string
  image_url: string
	listing_id?: number
}

const MXJXNArtworksMetadata: NFTMetadata[] = _.map(
	metadata,
	(item, index) => ({ tokenId: index, ...item })
)

export default MXJXNArtworksMetadata
