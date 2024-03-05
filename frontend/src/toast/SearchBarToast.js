export const toast_info_search_b = (toast) => { // toast'u argüman olarak alıyoruz
  toast({
    title: `Filtered as your request`,
    status: 'success',
    isClosable: true,
  });
};
