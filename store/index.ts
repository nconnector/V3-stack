import { defineStore, acceptHMRUpdate } from "pinia";

const delay = (t: number) => new Promise(resolve => setTimeout(resolve, t));

export const useMainStore = defineStore("main", {
  state: () => ({
    count: 0,
    countAuthed: 0
  }),

  getters: {
    double: state => state.count * 2
  },

  actions: {
    increment (amount = 1): void {
      this.count += amount;
    },
    incrementAuthed (amount = 1): void {
      this.countAuthed += amount;
    },
    async decrementToZero (interval = 300): Promise<void> {
      if (this.count <= 0) { return; }
      while (this.count > 0) {
        this.$patch((state) => {
          state.count--;
        });
        await delay(interval);
      }
    }
  }
});

if (import.meta.hot) {
  // @ts-expect-error useMainStore: Type '_ActionsTree' is missing the following properties from type
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}
