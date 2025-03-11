import { create } from "zustand"


const useLocationStore = create((set)=> ({
  location : null,
  setLocation : (newLocation) => set({location: newLocation})

}))

export default useLocationStore