export const toast_info_search_b = (toast) => {
  toast({
    title: `Filtered as your request`,
    status: 'success',
    isClosable: true,
  });
};
export const toast_info_login = (toast) => {
  toast({
    title: `You logged, Welcome`,
    status: 'success',
    isClosable: true,
  });
};
export const toast_info_editHotel = (toast) => {
  toast({
    title: `It may take a while to update.`,
    status: 'success',
    isClosable: true,
  });
};
export const toast_info_register_success = (toast) => {
  toast({
    title: `Your account is created`,
    status: 'success',
    isClosable: true,
  });
};
export const toast_info_register_failed = (toast) => {
  toast({
    title: `An error occurred`,
    status: 'error',
    isClosable: true,
  });
};
export const toast_info_hotel_created = (toast) => {
  toast({
    title: `Hotel is created`,
    status: 'success',
    desription: 'It may take a while to display your hotel',
    isClosable: true,
  });
};
export const toast_info_hotel_not_created = (toast, error) => {
  toast({
    title: `Hotel is not created`,
    status: 'error',
    desription: `${error}`,
    isClosable: true,
  });
};
export const toast_info_clear = (toast) => {
  toast({
    title: `Filter is removed`,
    status: 'success',
    isClosable: true,
  });
};
export const toast_info_saved = (toast) => {
  toast({
    title: `Saved`,
    status: 'success',
    isClosable: true,
  });
}