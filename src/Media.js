import { createMedia } from "@artsy/fresnel"

const { Media, MediaContextProvider } = createMedia({
    breakpoints: {
    default: 0,
    mobile: 541,
    tablet: 721,
    computer: 961,
    largeScreen: 1201,
    widescreen: 1601
    }
});

const MediaInfo = {
    Media: Media,
    MediaContextProvider: MediaContextProvider
}

export default MediaInfo
