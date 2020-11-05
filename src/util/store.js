import create from 'zustand';

const useModalStore = create((set) => ({
  modalImage: '',
  title: '',
  isModalOpen: false,
  setModalImage: (url) => {
    set((state) => ({ modalImage: url }));
  },
  setTitle: (title) => {
    set((state) => ({ title: title }));
  },
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));

export default useModalStore;
