import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    user: "Christian Shingiro",
  }),
  getters: {
    firstName() {
      return this.user.split(' ')[0]
    }
  }
});
