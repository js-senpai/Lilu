export default {
  namespaced: true,
  name: 'furniture',

  state: () => ({
    soft: [
      { id: 'elephant', type: 'products.elephant.productName', img: 'Elephant' },
      { id: 'bizetLux', type: 'products.bizetLux.productName', img: 'Bizet-lux' },
      { id: 'brooklyn', type: 'products.brooklyn.productName', img: 'Brooklyn' },
      { id: 'brooklynSofa', type: 'products.brooklynSofa.productName', img: 'Brooklyn-sofa' },
      { id: 'floransSlimChair', type: 'products.floransSlimChair.productName', img: 'Florance Slim chair' },
      { id: 'floransSlim', type: 'products.floransSlim.productName', img: 'Florance Slim' },
      { id: 'floransSlimSofa', type: 'products.floransSlimSofa.productName', img: 'Florance Slim Sofa' },
      { id: 'fouette', type: 'products.fouette.productName', img: 'Fouette' },
      { id: 'fouetteSofa', type: 'products.fouetteSofa.productName', img: 'Fouette Sofa' },
      { id: 'lilibet', type: 'products.lilibet.productName', img: 'Lilibet' },
      { id: 'namurBedChair', type: 'products.namurBedChair.productName', img: 'Namur bed-chair' },
      { id: 'namurBed', type: 'products.namurBed.productName', img: 'Namur' },
      { id: 'namurLux', type: 'products.namurLux.productName', img: 'Namur-Lux' },
      { id: 'namurSofa', type: 'products.namurSofa.productName', img: 'Namur Sofa' },
      { id: 'parisBed', type: 'products.parisBed.productName', img: 'Paris bed' },
      { id: 'parisChair', type: 'products.parisChair.productName', img: 'Paris chair' },
      { id: 'parisPouf', type: 'products.parisPouf.productName', img: 'Paris pouf' },
      { id: 'pomPonChair', type: 'products.pomPonChair.productName', img: 'Pom-pon chair' },
      { id: 'pomPonDivan', type: 'products.pomPonDivan.productName', img: 'Pom-pon divan' },
      { id: 'pomPon', type: 'products.pomPon.productName', img: 'Pom-pon' },
      { id: 'savoyaSoft', type: 'products.savoyaSoft.productName', img: 'Savoya Soft' },
      { id: 'savoya', type: 'products.savoya.productName', img: 'Savoya' },
      { id: 'sidneySofa', type: 'products.sidneySofa.productName', img: 'Sidney sofa' },
      { id: 'sidney', type: 'products.sidney.productName', img: 'Sidney' },
      { id: 'sidneyChair', type: 'products.sidneyChair.productName', img: 'Sidney Chair' },
      { id: 'sidneyDivan', type: 'products.sidneyDivan.productName', img: 'Sidney Divan' },
      { id: 'laura', type: 'products.laura.productName', img: 'Laura' },
    ],
    body: [
      { id: 'komod', type: 'products.komod.productName', img: 'komod' },
      { id: 'komodCruls', type: 'products.komodCruls.productName', img: 'komod Cruls' },
      { id: 'komodSteps', type: 'products.komodSteps.productName', img: 'komod Steps' },
      { id: 'perlaKomod', type: 'products.perlaKomod.productName', img: 'Perlakomod' },
      { id: 'perla6Komod', type: 'products.perla6Komod.productName', img: 'Perla6komod' },
      { id: 'perla6', type: 'products.perla6.productName', img: 'Perla6' },
      { id: 'smartBlock', type: 'products.smartBlock.productName', img: 'Smart block' },
      { id: 'table', type: 'products.table.productName', img: 'Table' },
      { id: 'perlaTable', type: 'products.perlaTable.productName', img: 'Perla Table' },
      { id: 'tumba', type: 'products.tumba.productName', img: 'Tumba' },
      { id: 'tumbaCruls', type: 'products.tumbaCruls.productName', img: 'Tumba Cruls' },
      { id: 'perlaTumba', type: 'products.perlaTumba.productName', img: 'Perla tumba' },
      { id: 'wardrobeCruls', type: 'products.wardrobeCruls.productName', img: 'WardrobeCurls' },
      { id: 'wardrobeSteps', type: 'products.wardrobeSteps.productName', img: 'WardrobeSteps' },
      { id: 'wardrobeStrips', type: 'products.wardrobeStrips.productName', img: 'WardrobeStrips' },
      { id: 'wardrobeWaves', type: 'products.wardrobeWaves.productName', img: 'WardrobeWaves' },
      { id: 'perla030003', type: 'products.perla030003.productName', img: 'Perla0.3+0.0+0.3' },
      { id: 'perla030303', type: 'products.perla030303.productName', img: 'Perla0.3+0.3+0.3' },
      { id: 'perla0303', type: 'products.perla0303.productName', img: 'Perla0.3+0.3' },
      { id: 'perla100010', type: 'products.perla100010.productName', img: 'Perla1.0+0.0+1.0' },
      { id: 'perla1003', type: 'products.perla1003.productName', img: 'Perla1.0+0.3' },
      { id: 'perla100310', type: 'products.perla100310.productName', img: 'Perla1.0+0.3+1.0' },
      { id: 'perla1010', type: 'products.perla1010.productName', img: 'Perla1.0+1.0' },
      { id: 'perla101010', type: 'products.perla101010.productName', img: 'Perla1.0+1.0+1.0' },
      { id: 'perla1212', type: 'products.perla1212.productName', img: 'Perla1.2+1.2' },
      { id: 'perla121212', type: 'products.perla121212.productName', img: 'Perla1.2+1.2+1.2' },
    ],
    textile: [
      { id: 'deepCover', type: 'products.deepCover.productName', img: 'Deep cover' },
      { id: 'diamondCover', type: 'products.diamondCover.productName', img: 'Diamond cover' },
      { id: 'linenBedding', type: 'products.linenBedding.productName', img: 'linen bedding' },
      { id: 'milletCover', type: 'products.milletCover.productName', img: 'Millet cover' },
      { id: 'percaleBedLinens', type: 'products.percaleBedLinens.productName', img: 'percale bed linens' },
      { id: 'snowCover', type: 'products.snowCover.productName', img: 'Snow cover' },
      { id: 'zigZagCover', type: 'products.zigZagCover.productName', img: 'Zig-zag cover' },
    ],
  }),
  getters: {
    getFurniture: (state) => (furnitureName) => {
      return state[furnitureName];
    },
  },

  mutations: {
    // DO_SOME(state, payload) {
    //   state.some = payload;
    // },
  },

  actions: {
    // someAction({ commit }, payload) {
    //   const { ss, aa } = { ...payload };
    //   commit('DO_SOME', ss);
    // },
  },
};
