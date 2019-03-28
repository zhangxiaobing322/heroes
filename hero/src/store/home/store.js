const reducer = (state ={
    bannerList: [],
    heroList: []
},action) => {
    const {type, data} = action;
    switch (type) {
        case 'CHANGE_BANNERLIST':
            return {
                bannerList:data,
                heroList:state.heroSkinList
            }
        case 'CHANGE_HEROLIST':
        return {
            bannerList:state.bannerList,
            heroList:data
        }
        default:
           return state
    }
}

export default reducer