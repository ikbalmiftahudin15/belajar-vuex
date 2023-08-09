import { createStore } from "vuex";
import donatur from "./modules/donatur";
import clients from "./modules/clients";
import transaksi from "./modules/transaksi";
import users from "./modules/users";
import wilayah from "./modules/wilayah";
import produk from "./modules/produk";
import kategori from "./modules/kategori"

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        donatur,
        clients,
        transaksi,
       users,
       wilayah,
     produk,
     kategori
    },
});

export default store;